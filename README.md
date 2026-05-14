# NYCHA & PACT Development Map

An interactive web map visualizing the tension between public housing and private-sector conversion across New York City. Every NYCHA development is plotted across the five boroughs, with markers indicating whether a property remains under public management, has already been converted through the PACT program, or is currently planned for conversion.

## Background

Over 400,000 New Yorkers live in NYCHA housing — the largest public housing system in the United States. Decades of federal disinvestment have left the authority with an estimated $80 billion capital repair backlog. Through a program called PACT (Permanent Affordability Commitment Together), private developers finance and renovate NYCHA buildings using federal Section 8 vouchers. Residents stay in place and rent remains capped at 30% of income — but day-to-day management transfers from a public agency to a private operator.

This map traces that tension development by development across the five boroughs.

## Features

- 302 NYCHA developments plotted citywide using Mapbox GL JS sources and layers
- Data-driven circle color styling by PACT status
- Toggle filters to show or hide each category with live development counts
- Click any circle to open a popup with the development name, borough, council district, status, and a link to NYCHA Real Talk
- Introductory story banner providing who, what, and why context on arrival
- Side panel with filters, stats, learn more links, and a back-to-background button
- NYC borough boundary lines rendered as a separate GeoJSON layer
- Zoom and geographic bounds locked to New York City

## Status Categories

| Color | Category | Description |
|-------|----------|-------------|
| Teal `#26a69a` | Public NYCHA | Remains under public management |
| Amber `#ef6c00` | PACT Converted | Already transferred to private operator |
| Indigo `#5c6bc0` | PACT Planned | Conversion currently proposed or in progress |

## Data

Development locations and PACT status sourced from [NYCHA Real Talk](https://dev.nycharealtalk.org)

## Dependencies

- [Mapbox GL JS v3.20.0](https://docs.mapbox.com/mapbox-gl-js/)

## How to Run

Clone the repository and open `index.html` in a browser, or serve locally:

```bash
npx serve .
```

A Mapbox access token is required. Replace the token in `scripts.js` with your own from [mapbox.com](https://www.mapbox.com).

## File Structure

```
├── index.html        # Map layout and page structure
├── scripts.js        # Map initialization, GeoJSON source, layers, filters, UI
├── styles.css        # All styling for the map, panel, banner, and popup
├── nycha-data.js     # NYCHA development data array (302 entries)
└── README.md
```

## Author

Built by Robin Kim as part of coursework in urban planning at NYU Wagner.
