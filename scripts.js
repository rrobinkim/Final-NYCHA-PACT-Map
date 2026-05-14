// ─── Map Initialization ───────────────────────────────────────
// Access token authenticates requests to the Mapbox API
mapboxgl.accessToken = 'pk.eyJ1IjoicnJvYmlua2ltIiwiYSI6ImNtbzFmMWo2cjA4N3Qyd3BzMWxkZGQwa3QifQ.rKvrEIbQrCxksVqxOXihtg';

// Color values for each PACT status — used in the circle layer
// and in the popup, panel dots, and banner legend
const statusColors = {
    'Standard': '#26a69a',   // Teal — public NYCHA
    'Converted': '#ef6c00',  // Amber — PACT converted
    'Planned': '#5c6bc0'     // Indigo — PACT planned
};

// Initialize the map with zoom and geographic bounds locked to NYC
// minZoom/maxZoom prevent the user from zooming too far in or out
// maxBounds prevents panning outside the five boroughs
const map = new mapboxgl.Map({
    container: 'map-container',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-73.97891, 40.73],
    zoom: 11,
    minZoom: 9,
    maxZoom: 14,
    maxBounds: [[-74.5, 40.4], [-73.4, 41.1]]
});

// Add zoom and rotation controls to the top-right corner
map.addControl(new mapboxgl.NavigationControl());

// ─── GeoJSON Conversion ───────────────────────────────────────
// Transform the flat nychaData array (from nycha-data.js) into a
// GeoJSON FeatureCollection, which is the format Mapbox sources require.
// Each development becomes a Feature with a Point geometry and
// its attributes stored as properties.
const geojsonData = {
    type: 'FeatureCollection',
    features: nychaData.map(d => ({
        type: 'Feature',
        properties: {
            name: d.name,
            borough: d.borough,
            council_district: d.council_district,
            status: d.status,
            url: d.url
        },
        geometry: {
            type: 'Point',
            coordinates: [d.longitude, d.latitude]
        }
    }))
};

// ─── Pre-calculated Totals ────────────────────────────────────
// Count each status category once upfront so the stats panel
// doesn't need to recount on every filter toggle
const totalPublic = nychaData.filter(d => d.status === 'Standard').length;
const totalConverted = nychaData.filter(d => d.status === 'Converted').length;
const totalPlanned = nychaData.filter(d => d.status === 'Planned').length;

// ─── Map Load ─────────────────────────────────────────────────
// All sources, layers, and UI elements are added inside map.on('load')
// to ensure the base map style is fully loaded before we add to it
map.on('load', () => {

    // NYC borough boundary lines — added before the circle layer
    // so they render underneath the development dots
    map.addSource('nyc-boundary', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/dwillis/nyc-maps/master/boroughs.geojson'
    });

    map.addLayer({
        id: 'nyc-boundary-line',
        type: 'line',
        source: 'nyc-boundary',
        paint: {
            'line-color': '#555',
            'line-width': 2,
            'line-opacity': 0.7
        }
    });

    // NYCHA developments GeoJSON source
    map.addSource('nycha', {
        type: 'geojson',
        data: geojsonData
    });

    // Circle layer with data-driven color styling
    // The 'match' expression reads each feature's 'status' property
    // and assigns the corresponding color — this is the core
    // data-driven styling requirement for the assignment
    map.addLayer({
        id: 'nycha-circles',
        type: 'circle',
        source: 'nycha',
        paint: {
            'circle-color': [
                'match', ['get', 'status'],
                'Converted', statusColors.Converted,
                'Planned', statusColors.Planned,
                statusColors.Standard  // default fallback for 'Standard'
            ],
            'circle-radius': 6,
            'circle-stroke-width': 1,
            'circle-stroke-color': '#fff'
        }
    });

    // ─── Popup on Click ───────────────────────────────────────
    // When a circle is clicked, show a popup with the development's
    // name, borough, council district, status, and an outbound link
    map.on('click', 'nycha-circles', (e) => {
        const props = e.features[0].properties;
        const color = statusColors[props.status] || statusColors.Standard;
        const label = props.status === 'Converted' ? 'PACT Converted' :
            props.status === 'Planned' ? 'PACT Planned' : 'Public NYCHA';

        new mapboxgl.Popup({ offset: 10 })
            .setLngLat(e.features[0].geometry.coordinates)
            .setHTML(`
                <div style="font-size:15px;font-weight:bold;color:#e6edf3;margin-bottom:6px">${props.name}</div>
                <div style="color:#768390">${props.borough} · Council District ${props.council_district}</div>
                <div style="color:${color};font-weight:bold;margin:6px 0">${label}</div>
                <a href="${props.url}" target="_blank" style="color:#58a6ff;font-size:11px">View on NYCHA Real Talk ↗</a>
            `)
            .addTo(map);
    });

    // Change cursor to pointer when hovering over a circle
    // so it's clear the circles are clickable
    map.on('mouseenter', 'nycha-circles', () => {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'nycha-circles', () => {
        map.getCanvas().style.cursor = '';
    });

    // ─── Filter Logic ─────────────────────────────────────────
    // Reads the active state of each toggle pill, builds an array
    // of visible statuses, and passes it to map.setFilter() to
    // show/hide the corresponding circles on the map.
    // Also updates the stat counts to reflect what's visible.
    function updateFilter() {
        const showPublic = document.getElementById('toggle-public').classList.contains('active');
        const showConverted = document.getElementById('toggle-converted').classList.contains('active');
        const showPlanned = document.getElementById('toggle-planned').classList.contains('active');

        const statuses = [];
        if (showPublic) statuses.push('Standard');
        if (showConverted) statuses.push('Converted');
        if (showPlanned) statuses.push('Planned');

        // setFilter uses a Mapbox expression to match the 'status'
        // property of each feature against the active statuses array
        map.setFilter('nycha-circles', ['in', ['get', 'status'], ['literal', statuses]]);

        // Update stat counts to reflect the current filter state
        const visiblePublic = showPublic ? totalPublic : 0;
        const visibleConverted = showConverted ? totalConverted : 0;
        const visiblePlanned = showPlanned ? totalPlanned : 0;

        document.getElementById('stat-total').textContent = (visiblePublic + visibleConverted + visiblePlanned) + ' developments';
        document.getElementById('stat-public').textContent = visiblePublic;
        document.getElementById('stat-converted').textContent = visibleConverted;
        document.getElementById('stat-planned').textContent = visiblePlanned;
    }

    // ─── Side Panel ───────────────────────────────────────────
    // Single UI panel containing the map title, call-to-action,
    // filter pills, live stats, learn more links, and the
    // back-to-background button. Hidden until banner is dismissed.
    const panel = document.createElement('div');
    panel.className = 'side-panel';
    panel.style.display = 'none';
    panel.innerHTML = `
        <div class="panel-title">NYCHA & PACT Map</div>
        <div class="panel-subtitle">Mapping privatization pressure across NYC's public housing</div>
        <div class="panel-cta">Click any circle to explore a development</div>

        <div class="panel-section-title">Filter by Status</div>
        <div class="panel-filters">
            <button class="filter-pill active" id="toggle-public">
                <span class="dot" style="background:${statusColors.Standard}"></span> Public NYCHA
            </button>
            <button class="filter-pill active" id="toggle-converted">
                <span class="dot" style="background:${statusColors.Converted}"></span> PACT Converted
            </button>
            <button class="filter-pill active" id="toggle-planned">
                <span class="dot" style="background:${statusColors.Planned}"></span> PACT Planned
            </button>
        </div>

        <div class="panel-stats">
            <div class="stats-total" id="stat-total">${nychaData.length} developments</div>
            <div class="stats-row">
                <span class="stats-dot" style="background:${statusColors.Standard}"></span>
                <span class="stats-label">Public NYCHA</span>
                <span class="stats-count" id="stat-public">${totalPublic}</span>
            </div>
            <div class="stats-row">
                <span class="stats-dot" style="background:${statusColors.Converted}"></span>
                <span class="stats-label">PACT Converted</span>
                <span class="stats-count" id="stat-converted">${totalConverted}</span>
            </div>
            <div class="stats-row">
                <span class="stats-dot" style="background:${statusColors.Planned}"></span>
                <span class="stats-label">PACT Planned</span>
                <span class="stats-count" id="stat-planned">${totalPlanned}</span>
            </div>
        </div>

        <div class="panel-divider"></div>

        <div class="panel-section-title">Learn More</div>
        <a class="info-link" href="https://www.nyc.gov/site/nycha/about/pact.page" target="_blank">NYCHA Official PACT Page ↗</a>
        <a class="info-link" href="https://www.thecity.nyc/2025/12/10/nycha-rad-pact-boulevard-linden-violations/" target="_blank">PACT Controversy ↗</a>
        <a class="info-link" href="https://www.thecity.nyc/topic/nycha/" target="_blank">THE CITY — NYCHA Coverage ↗</a>

        <div class="panel-divider"></div>
        <button class="panel-background-btn" id="reopen-btn">← Back to Background</button>
    `;
    document.body.appendChild(panel);

    // Wire up the three filter pill buttons to the updateFilter function
    document.getElementById('toggle-public').addEventListener('click', function () {
        this.classList.toggle('active');
        updateFilter();
    });
    document.getElementById('toggle-converted').addEventListener('click', function () {
        this.classList.toggle('active');
        updateFilter();
    });
    document.getElementById('toggle-planned').addEventListener('click', function () {
        this.classList.toggle('active');
        updateFilter();
    });

    // ─── Story Banner ─────────────────────────────────────────
    // Full-screen intro overlay shown on page load.
    // Explains the NYCHA/PACT context using a who/what/why structure.
    // Dismissed via the Explore button; reopenable via the panel.
    const banner = document.createElement('div');
    banner.className = 'story-banner';
    banner.innerHTML = `
        <div class="story-banner-inner">
            <div class="story-banner-tag">BACKGROUND</div>
            <h2 class="story-banner-title">Public Housing at a Crossroads</h2>
            <p class="story-banner-body">
                <strong>Who:</strong> Over 400,000 New Yorkers live in NYCHA housing —
                the largest public housing system in the country.
            </p>
            <p class="story-banner-body">
                <strong>What:</strong> An $80 billion repair backlog has forced the city to bring
                in private developers through PACT (Permanent Affordability Commitment Together).
                Developers renovate buildings using federal Section 8 vouchers. Residents stay.
                Rent stays capped. But management goes private.
            </p>
            <p class="story-banner-body">
                <strong>Why it matters:</strong> Privatization has a track record — harder evictions,
                slower repairs, and a slow drift away from public ownership. For many residents,
                it feels like a choice between a deteriorating home and losing their community entirely.
            </p>
            <p class="story-banner-body">
                This map traces that tension across the five boroughs, locating every NYCHA development
                and marking where PACT conversion has already happened, and where it is being proposed.
            </p>
            <div class="story-banner-legend">
                <span class="story-dot" style="background:${statusColors.Standard}"></span> Public NYCHA &nbsp;&nbsp;
                <span class="story-dot" style="background:${statusColors.Converted}"></span> PACT Converted &nbsp;&nbsp;
                <span class="story-dot" style="background:${statusColors.Planned}"></span> PACT Planned
            </div>
            <button class="story-banner-btn">Explore the Map →</button>
        </div>
    `;
    document.body.appendChild(banner);

    // Fade out the banner and reveal the side panel when Explore is clicked
    document.querySelector('.story-banner-btn').addEventListener('click', () => {
        banner.style.opacity = '0';
        setTimeout(() => {
            banner.style.display = 'none';
            panel.style.display = 'block';
        }, 400);
    });

    // Hide the panel and reopen the banner when Back to Background is clicked
    document.getElementById('reopen-btn').addEventListener('click', () => {
        panel.style.display = 'none';
        banner.style.display = 'flex';
        setTimeout(() => banner.style.opacity = '1', 10);
    });

});