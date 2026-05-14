// ─── NYCHA Development Data ───────────────────────────────────
// Source: NYCHA Real Talk (https://dev.nycharealtalk.org)
// Each object represents one NYCHA development with its name,
// borough, council district, latitude/longitude, PACT status,
// and a link to its NYCHA Real Talk page.
//
// Status values:
//   'Standard'  — remains under public NYCHA management
//   'Converted' — already converted to private management via PACT
//   'Planned'   — conversion proposed or currently in progress
//
// This file must be loaded before scripts.js in index.html
// so the nychaData variable is available when the map initializes.

const nychaData = [
    {
        "name": "1010 EAST 178TH STREET",
        "borough": "Bronx",
        "council_district": "15",
        "latitude": 40.840796104001434,
        "longitude": -73.88029697912724,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/2031300100/"
    },
    {
        "name": "104-14 TAPSCOTT STREET",
        "borough": "Brooklyn",
        "council_district": "41",
        "latitude": 40.66508688285105,
        "longitude": -73.92060005485601,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/3035320030/"
    },
    {
        "name": "1162-1176 WASHINGTON AVENUE",
        "borough": "Bronx",
        "council_district": "16",
        "latitude": 40.829969280984244,
        "longitude": -73.90725913449253,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/2023720001/"
    },
    {
        "name": "131 SAINT NICHOLAS AVENUE",
        "borough": "Manhattan",
        "council_district": "9",
        "latitude": 40.804113197641826,
        "longitude": -73.95324447553992,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1019220041/"
    },
    {
        "name": "1471 WATSON AVENUE",
        "borough": "Bronx",
        "council_district": "17",
        "latitude": 40.82613627660074,
        "longitude": -73.88107958880443,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/2037370001/"
    },
    {
        "name": "154 WEST 84TH STREET",
        "borough": "Manhattan",
        "council_district": "6",
        "latitude": 40.7858527418085,
        "longitude": -73.97534111602766,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/1012140055/"
    },
    {
        "name": "303 VERNON AVENUE",
        "borough": "Brooklyn",
        "council_district": "36",
        "latitude": 40.69611156128714,
        "longitude": -73.93952483851483,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/3015850001/"
    },
    {
        "name": "335 EAST 111TH STREET",
        "borough": "Manhattan",
        "council_district": "8",
        "latitude": 40.79322069331232,
        "longitude": -73.93814122608833,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1016830018/"
    },
    {
        "name": "344 EAST 28TH STREET",
        "borough": "Manhattan",
        "council_district": "2",
        "latitude": 40.73994815186401,
        "longitude": -73.97698738523158,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1009330025/"
    },
    {
        "name": "45 ALLEN STREET",
        "borough": "Manhattan",
        "council_district": "1",
        "latitude": 40.71671920549833,
        "longitude": -73.99226694128932,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1003070001/"
    },
    {
        "name": "572 WARREN STREET",
        "borough": "Brooklyn",
        "council_district": "39",
        "latitude": 40.6815417296819,
        "longitude": -73.98226256309157,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/3004010001/"
    },
    {
        "name": "830 AMSTERDAM AVENUE",
        "borough": "Manhattan",
        "council_district": "7",
        "latitude": 40.79705439305136,
        "longitude": -73.96872797978305,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1018720029/"
    },
    {
        "name": "ADAMS",
        "borough": "NYC",
        "council_district": "8",
        "latitude": 40.81661076703136,
        "longitude": -73.90564989849885,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5784/"
    },
    {
        "name": "ALBANY",
        "borough": "Brooklyn",
        "council_district": "36",
        "latitude": 40.673546895061406,
        "longitude": -73.9362770318985,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/3013520080/"
    },
    {
        "name": "ALBANY II",
        "borough": "Brooklyn",
        "council_district": "36",
        "latitude": 40.675381792236195,
        "longitude": -73.93744647502899,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/3013520001/"
    },
    {
        "name": "AMSTERDAM",
        "borough": "Manhattan",
        "council_district": "6",
        "latitude": 40.772664692369844,
        "longitude": -73.98622512817383,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1011540101/"
    },
    {
        "name": "AMSTERDAM ADDITION",
        "borough": "Manhattan",
        "council_district": "6",
        "latitude": 40.77466097534878,
        "longitude": -73.98700279062427,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/1011560020/"
    },
    {
        "name": "ARMSTRONG I",
        "borough": "NYC",
        "council_district": "36",
        "latitude": 40.68787077038865,
        "longitude": -73.94918382167815,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5793/"
    },
    {
        "name": "ARMSTRONG II",
        "borough": "NYC",
        "council_district": "36",
        "latitude": 40.688179914107614,
        "longitude": -73.94631385803223,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5797/"
    },
    {
        "name": "ASTORIA",
        "borough": "Queens",
        "council_district": "22",
        "latitude": 40.77472435289935,
        "longitude": -73.93404006958008,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/4004900101/"
    },
    {
        "name": "ATLANTIC TERMINAL SITE 4B",
        "borough": "Brooklyn",
        "council_district": "35",
        "latitude": 40.68245238712265,
        "longitude": -73.97018015384674,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/3020070001/"
    },
    {
        "name": "AUDUBON",
        "borough": "Manhattan",
        "council_district": "7",
        "latitude": 40.8310615382946,
        "longitude": -73.94285279666819,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1020680046/"
    },
    {
        "name": "BAILEY AVENUE-WEST 193RD STREET",
        "borough": "Bronx",
        "council_district": "14",
        "latitude": 40.86994345285105,
        "longitude": -73.90669706387679,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/2032390004/"
    },
    {
        "name": "BARUCH",
        "borough": "Manhattan",
        "council_district": "2",
        "latitude": 40.717434695009004,
        "longitude": -73.97781065956883,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1003230001/"
    },
    {
        "name": "BARUCH HOUSES ADDITION",
        "borough": "Manhattan",
        "council_district": "2",
        "latitude": 40.71706787924804,
        "longitude": -73.97918095856264,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/6000010103/"
    },
    {
        "name": "BAY VIEW",
        "borough": "Brooklyn",
        "council_district": "46",
        "latitude": 40.63446502713981,
        "longitude": -73.88413488864899,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/3083290225/"
    },
    {
        "name": "BEDFORD-STUYVESANT REHAB",
        "borough": "NYC",
        "council_district": "36",
        "latitude": 40.69477227547916,
        "longitude": -73.94182461492777,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5816/"
    },
    {
        "name": "BELMONT-SUTTER AREA",
        "borough": "Brooklyn",
        "council_district": "42",
        "latitude": 40.67129143318748,
        "longitude": -73.8866870885473,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/3040290001/"
    },
    {
        "name": "BERRY",
        "borough": "Staten Island",
        "council_district": "50",
        "latitude": 40.587176329719206,
        "longitude": -74.10198929061201,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5035320500/"
    },
    {
        "name": "BERRY STREET-SOUTH 9TH STREET",
        "borough": "NYC",
        "council_district": "34",
        "latitude": 40.70819949168332,
        "longitude": -73.96612871733993,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5822/"
    },
    {
        "name": "BETANCES",
        "borough": "NYC",
        "council_district": "8",
        "latitude": 40.81142494259041,
        "longitude": -73.9166953474533,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5843/"
    },
    {
        "name": "BETHUNE GARDENS",
        "borough": "Manhattan",
        "council_district": "10",
        "latitude": 40.83227556796368,
        "longitude": -73.94242733716965,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1021070059/"
    },
    {
        "name": "BORINQUEN PLAZA I",
        "borough": "NYC",
        "council_district": "34",
        "latitude": 40.704294641805014,
        "longitude": -73.94299491120088,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5849/"
    },
    {
        "name": "BORINQUEN PLAZA II",
        "borough": "Brooklyn",
        "council_district": "34",
        "latitude": 40.705248945743065,
        "longitude": -73.94026832925506,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/3030810070/"
    },
    {
        "name": "BOSTON ROAD PLAZA",
        "borough": "Bronx",
        "council_district": "13",
        "latitude": 40.86200090058486,
        "longitude": -73.86594669135724,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/2044310001/"
    },
    {
        "name": "BOULEVARD",
        "borough": "NYC",
        "council_district": "42",
        "latitude": 40.66048852284252,
        "longitude": -73.88130897359463,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5950/"
    },
    {
        "name": "BOYNTON AVENUE REHAB",
        "borough": "NYC",
        "council_district": "18",
        "latitude": 40.82573587441905,
        "longitude": -73.87770754376952,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5857/"
    },
    {
        "name": "BRACETTI PLAZA",
        "borough": "Manhattan",
        "council_district": "2",
        "latitude": 40.722225275960575,
        "longitude": -73.98102199463038,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1003860033/"
    },
    {
        "name": "BREUKELEN",
        "borough": "NYC",
        "council_district": "42",
        "latitude": 40.650957922143085,
        "longitude": -73.89441565929806,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5866/"
    },
    {
        "name": "BREVOORT",
        "borough": "Brooklyn",
        "council_district": "41",
        "latitude": 40.68036583082302,
        "longitude": -73.92385829244785,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/3016880001/"
    },
    {
        "name": "BRONXCHESTER",
        "borough": "Bronx",
        "council_district": "17",
        "latitude": 40.81899779573099,
        "longitude": -73.91145696448632,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/2023590210/"
    },
    {
        "name": "BRONX RIVER",
        "borough": "Bronx",
        "council_district": "17",
        "latitude": 40.83529529307033,
        "longitude": -73.87509047985077,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/2038860002/"
    },
    {
        "name": "BRONX RIVER ADDITION",
        "borough": "NYC",
        "council_district": "17",
        "latitude": 40.83352737033712,
        "longitude": -73.8764407820398,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5874/"
    },
    {
        "name": "BROWN",
        "borough": "Brooklyn",
        "council_district": "41",
        "latitude": 40.672802450520784,
        "longitude": -73.91314486918682,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/3014600001/"
    },
    {
        "name": "BROWNSVILLE",
        "borough": "NYC",
        "council_district": "41",
        "latitude": 40.665717112003954,
        "longitude": -73.90786898498598,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5883/"
    },
    {
        "name": "BRYANT AVENUE-EAST 174TH STREET",
        "borough": "Bronx",
        "council_district": "17",
        "latitude": 40.83593411713595,
        "longitude": -73.8857431562638,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/2029970030/"
    },
    {
        "name": "BUSHWICK",
        "borough": "Brooklyn",
        "council_district": "34",
        "latitude": 40.70275192665149,
        "longitude": -73.93911610892336,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/3031290001/"
    },
    {
        "name": "BUSHWICK II CDA (GROUP E)",
        "borough": "NYC",
        "council_district": "37",
        "latitude": 40.69646931213182,
        "longitude": -73.91636431217194,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5915/"
    },
    {
        "name": "BUSHWICK II (GROUPS A & C)",
        "borough": "NYC",
        "council_district": "37",
        "latitude": 40.696664535768484,
        "longitude": -73.92274260520935,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5904/"
    },
    {
        "name": "BUSHWICK II (GROUPS B & D)",
        "borough": "NYC",
        "council_district": "37",
        "latitude": 40.69343920525921,
        "longitude": -73.91701877117157,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5911/"
    },
    {
        "name": "BUTLER",
        "borough": "NYC",
        "council_district": "16",
        "latitude": 40.835990374793305,
        "longitude": -73.90667516193685,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5918/"
    },
    {
        "name": "CAMPOS PLAZA I",
        "borough": "NYC",
        "council_district": "2",
        "latitude": 40.72783602208899,
        "longitude": -73.97730005085839,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/14055/"
    },
    {
        "name": "CAMPOS PLAZA II",
        "borough": "Manhattan",
        "council_district": "2",
        "latitude": 40.728545011778195,
        "longitude": -73.97720670323126,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1003960010/"
    },
    {
        "name": "CAREY GARDENS",
        "borough": "NYC",
        "council_district": "47",
        "latitude": 40.575524403942886,
        "longitude": -73.99016172646219,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5929/"
    },
    {
        "name": "CARVER",
        "borough": "NYC",
        "council_district": "8",
        "latitude": 40.790594097626595,
        "longitude": -73.95072360003428,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5576/"
    },
    {
        "name": "CASSIDY-LAFAYETTE",
        "borough": "Staten Island",
        "council_district": "49",
        "latitude": 40.64243779132527,
        "longitude": -74.09651826896867,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5000710011/"
    },
    {
        "name": "CHELSEA",
        "borough": "Manhattan",
        "council_district": "3",
        "latitude": 40.748547491822784,
        "longitude": -74.00122839771237,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/1007230015/"
    },
    {
        "name": "CHELSEA ADDITION",
        "borough": "Manhattan",
        "council_district": "3",
        "latitude": 40.74964352319638,
        "longitude": -74.00146803708303,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/1007240010/"
    },
    {
        "name": "CLAREMONT PARKWAY-FRANKLIN AVENUE",
        "borough": "NYC",
        "council_district": "16",
        "latitude": 40.8358212163742,
        "longitude": -73.90123943377644,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5382/"
    },
    {
        "name": "CLAREMONT REHAB (GROUP 2)",
        "borough": "NYC",
        "council_district": "16",
        "latitude": 40.83244198112706,
        "longitude": -73.91058146953583,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5388/"
    },
    {
        "name": "CLAREMONT REHAB (GROUP 3)",
        "borough": "NYC",
        "council_district": "16",
        "latitude": 40.830006624872006,
        "longitude": -73.91291499137878,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5394/"
    },
    {
        "name": "CLAREMONT REHAB (GROUP 4)",
        "borough": "NYC",
        "council_district": "16",
        "latitude": 40.83072602507724,
        "longitude": -73.91255535386435,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5403/"
    },
    {
        "name": "CLAREMONT REHAB (GROUP 5)",
        "borough": "NYC",
        "council_district": "16",
        "latitude": 40.831634264549734,
        "longitude": -73.91345143318176,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5407/"
    },
    {
        "name": "CLASON POINT GARDENS",
        "borough": "NYC",
        "council_district": "18",
        "latitude": 40.82101770713993,
        "longitude": -73.86937010097245,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5410/"
    },
    {
        "name": "CLINTON",
        "borough": "NYC",
        "council_district": "8",
        "latitude": 40.793616901669964,
        "longitude": -73.94638897077714,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5415/"
    },
    {
        "name": "COLLEGE AVENUE-EAST 165TH STREET",
        "borough": "Bronx",
        "council_district": "16",
        "latitude": 40.829264570978225,
        "longitude": -73.91510769710756,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/2024330001/"
    },
    {
        "name": "CONEY ISLAND",
        "borough": "Brooklyn",
        "council_district": "47",
        "latitude": 40.572224575528935,
        "longitude": -73.9963550510844,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/3070670001/"
    },
    {
        "name": "CONEY ISLAND I (SITE 1B)",
        "borough": "Brooklyn",
        "council_district": "47",
        "latitude": 40.575429512194184,
        "longitude": -73.98726717717,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/3070590026/"
    },
    {
        "name": "CONEY ISLAND I (SITE 8)",
        "borough": "Brooklyn",
        "council_district": "47",
        "latitude": 40.57353592680922,
        "longitude": -74.00092411572506,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/3070460022/"
    },
    {
        "name": "CONEY ISLAND I (SITES 4 & 5)",
        "borough": "Brooklyn",
        "council_district": "47",
        "latitude": 40.57470592585938,
        "longitude": -73.9935490230237,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/3070530014/"
    },
    {
        "name": "COOPER PARK",
        "borough": "Brooklyn",
        "council_district": "34",
        "latitude": 40.71807434100993,
        "longitude": -73.93844921180035,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/3028670001/"
    },
    {
        "name": "CORSI HOUSES",
        "borough": "Manhattan",
        "council_district": "8",
        "latitude": 40.79710292212141,
        "longitude": -73.93690741123784,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1016880045/"
    },
    {
        "name": "CROWN HEIGHTS",
        "borough": "NYC",
        "council_district": "41",
        "latitude": 40.67203129529887,
        "longitude": -73.92367626820727,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5428/"
    },
    {
        "name": "CYPRESS HILLS",
        "borough": "Brooklyn",
        "council_district": "42",
        "latitude": 40.670443695809695,
        "longitude": -73.87168119233115,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/3042920161/"
    },
    {
        "name": "DAVIDSON",
        "borough": "Bronx",
        "council_district": "17",
        "latitude": 40.82737044832042,
        "longitude": -73.89921173347089,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/2026800019/"
    },
    {
        "name": "DE HOSTOS APARTMENTS",
        "borough": "Manhattan",
        "council_district": "7",
        "latitude": 40.79258013068382,
        "longitude": -73.97211071801628,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/1012410025/"
    },
    {
        "name": "DOUGLASS ADDITION",
        "borough": "Manhattan",
        "council_district": "7",
        "latitude": 40.79835076603138,
        "longitude": -73.96769734585065,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1018740029/"
    },
    {
        "name": "DOUGLASS I",
        "borough": "NYC",
        "council_district": "7",
        "latitude": 40.79692831581483,
        "longitude": -73.96508878562612,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5435/"
    },
    {
        "name": "DOUGLASS II",
        "borough": "Manhattan",
        "council_district": "7",
        "latitude": 40.79713800934022,
        "longitude": -73.96612734429652,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/6000010101/"
    },
    {
        "name": "DREW-HAMILTON",
        "borough": "NYC",
        "council_district": "9",
        "latitude": 40.820513351695084,
        "longitude": -73.94199153968192,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5442/"
    },
    {
        "name": "DYCKMAN",
        "borough": "Manhattan",
        "council_district": "10",
        "latitude": 40.86104260221401,
        "longitude": -73.92158925533295,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/1022160001/"
    },
    {
        "name": "EAGLE AVENUE-EAST 163RD STREET",
        "borough": "Bronx",
        "council_district": "17",
        "latitude": 40.82300793021525,
        "longitude": -73.90839515699146,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/2026200036/"
    },
    {
        "name": "EAST 120TH STREET REHAB",
        "borough": "Manhattan",
        "council_district": "8",
        "latitude": 40.7976921652305,
        "longitude": -73.93204748818997,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/1018070030/"
    },
    {
        "name": "EAST 152ND STREET-COURTLANDT AVENUE",
        "borough": "NYC",
        "council_district": "17",
        "latitude": 40.81853462111116,
        "longitude": -73.91774767072741,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5448/"
    },
    {
        "name": "EAST 165TH STREET-BRYANT AVENUE",
        "borough": "NYC",
        "council_district": "17",
        "latitude": 40.82493435515403,
        "longitude": -73.88886279040518,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5454/"
    },
    {
        "name": "EAST 173RD STREET-VYSE AVENUE",
        "borough": "NYC",
        "council_district": "17",
        "latitude": 40.8340691355651,
        "longitude": -73.88817078398456,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5466/"
    },
    {
        "name": "EAST 180TH STREET-MONTEREY AVENUE",
        "borough": "NYC",
        "council_district": "15",
        "latitude": 40.8505661368258,
        "longitude": -73.89258712022468,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5469/"
    },
    {
        "name": "EAST 4TH STREET REHAB",
        "borough": "NYC",
        "council_district": "2",
        "latitude": 40.72287355273683,
        "longitude": -73.98098835269853,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/14053/"
    },
    {
        "name": "EASTCHESTER GARDENS",
        "borough": "Bronx",
        "council_district": "12",
        "latitude": 40.87029914407438,
        "longitude": -73.85225202073786,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/2045810001/"
    },
    {
        "name": "EAST NEW YORK CITY LINE",
        "borough": "NYC",
        "council_district": "42",
        "latitude": 40.66849243989129,
        "longitude": -73.8737016218763,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5476/"
    },
    {
        "name": "EAST RIVER",
        "borough": "Manhattan",
        "council_district": "8",
        "latitude": 40.78752941860203,
        "longitude": -73.94005704736122,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1016960001/"
    },
    {
        "name": "ELLIOTT",
        "borough": "NYC",
        "council_district": "3",
        "latitude": 40.749289946749045,
        "longitude": -74.00185411557194,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5483/"
    },
    {
        "name": "FARRAGUT",
        "borough": "NYC",
        "council_district": "35",
        "latitude": 40.70005415526742,
        "longitude": -73.98221468524726,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5487/"
    },
    {
        "name": "FENIMORE-LEFFERTS",
        "borough": "NYC",
        "council_district": "40",
        "latitude": 40.660698166577006,
        "longitude": -73.94393778039218,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5490/"
    },
    {
        "name": "FIORENTINO PLAZA",
        "borough": "NYC",
        "council_district": "42",
        "latitude": 40.6728624174003,
        "longitude": -73.89161996285371,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5494/"
    },
    {
        "name": "FIRST HOUSES",
        "borough": "Manhattan",
        "council_district": "2",
        "latitude": 40.72373460306277,
        "longitude": -73.98618335046262,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1004300010/"
    },
    {
        "name": "FOREST",
        "borough": "NYC",
        "council_district": "17",
        "latitude": 40.82473258559714,
        "longitude": -73.90374023617632,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5498/"
    },
    {
        "name": "FOREST HILLS COOP (108TH STREET-62ND DRIVE)",
        "borough": "Queens",
        "council_district": "24",
        "latitude": 40.73684517379788,
        "longitude": -73.84991858105582,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/4021590002/"
    },
    {
        "name": "FORT INDEPENDENCE STREET-HEATH AVENUE",
        "borough": "Bronx",
        "council_district": "14",
        "latitude": 40.879543934730414,
        "longitude": -73.90018926884122,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/2032610102/"
    },
    {
        "name": "FORT WASHINGTON AVENUE REHAB",
        "borough": "Manhattan",
        "council_district": "10",
        "latitude": 40.83925807175211,
        "longitude": -73.94461372263004,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1021360235/"
    },
    {
        "name": "FRANKLIN AVENUE I CONVENTIONAL",
        "borough": "Bronx",
        "council_district": "17",
        "latitude": 40.83349727439161,
        "longitude": -73.90061974525452,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/2029310068/"
    },
    {
        "name": "FRANKLIN AVENUE II CONVENTIONAL",
        "borough": "NYC",
        "council_district": "17",
        "latitude": 40.8338950344172,
        "longitude": -73.90036761760712,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5505/"
    },
    {
        "name": "FRANKLIN AVENUE III CONVENTIONAL",
        "borough": "Bronx",
        "council_district": "17",
        "latitude": 40.83343639254447,
        "longitude": -73.90009403228758,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/2029350030/"
    },
    {
        "name": "FULTON",
        "borough": "NYC",
        "council_district": "3",
        "latitude": 40.743607398822014,
        "longitude": -74.00455252397373,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5511/"
    },
    {
        "name": "GARVEY (GROUP A)",
        "borough": "NYC",
        "council_district": "41",
        "latitude": 40.66991873481826,
        "longitude": -73.91522169890148,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5514/"
    },
    {
        "name": "GLEBE AVENUE-WESTCHESTER AVENUE",
        "borough": "Bronx",
        "council_district": "18",
        "latitude": 40.835124828380565,
        "longitude": -73.85036051273345,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/2039630043/"
    },
    {
        "name": "Glenmore",
        "borough": "NYC",
        "council_district": "37",
        "latitude": 40.67170912714994,
        "longitude": -73.90467762362098,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/14221/"
    },
    {
        "name": "GLENMORE PLAZA",
        "borough": "NYC",
        "council_district": "37",
        "latitude": 40.67109066693477,
        "longitude": -73.90626680147165,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5519/"
    },
    {
        "name": "GLENWOOD",
        "borough": "Brooklyn",
        "council_district": "45",
        "latitude": 40.6349478041205,
        "longitude": -73.92086275436826,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/3079780001/"
    },
    {
        "name": "GOMPERS",
        "borough": "Manhattan",
        "council_district": "2",
        "latitude": 40.71820203509896,
        "longitude": -73.98192764975745,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1003380001/"
    },
    {
        "name": "GOWANUS",
        "borough": "NYC",
        "council_district": "39",
        "latitude": 40.683447532204234,
        "longitude": -73.98855021610463,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5524/"
    },
    {
        "name": "GRAMPION",
        "borough": "Manhattan",
        "council_district": "9",
        "latitude": 40.80604321719704,
        "longitude": -73.9524244741509,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1019250015/"
    },
    {
        "name": "GRANT",
        "borough": "NYC",
        "council_district": "7",
        "latitude": 40.81273420896209,
        "longitude": -73.95694710786667,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5528/"
    },
    {
        "name": "GRAVESEND",
        "borough": "Brooklyn",
        "council_district": "47",
        "latitude": 40.57897717979509,
        "longitude": -73.99934186757105,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/3069640002/"
    },
    {
        "name": "GUN HILL",
        "borough": "Bronx",
        "council_district": "12",
        "latitude": 40.876960753933126,
        "longitude": -73.86536478996277,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/2046290050/"
    },
    {
        "name": "HABER",
        "borough": "Brooklyn",
        "council_district": "47",
        "latitude": 40.572656512575485,
        "longitude": -73.99104834495155,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/3070700001/"
    },
    {
        "name": "HARBORVIEW TERRACE",
        "borough": "NYC",
        "council_district": "6",
        "latitude": 40.76850973875743,
        "longitude": -73.99082412388366,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5535/"
    },
    {
        "name": "HARLEM RIVER & HARLEM RIVER II",
        "borough": "NYC",
        "council_district": "9",
        "latitude": 40.82615578014963,
        "longitude": -73.93643711435402,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5538/"
    },
    {
        "name": "HARRISON AVENUE REHAB (GROUP A)",
        "borough": "Bronx",
        "council_district": "14",
        "latitude": 40.853609575833396,
        "longitude": -73.91056537628174,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/2028690116/"
    },
    {
        "name": "HARRISON AVENUE REHAB (GROUP B)",
        "borough": "NYC",
        "council_district": "14",
        "latitude": 40.85388548909676,
        "longitude": -73.91039907932281,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5545/"
    },
    {
        "name": "HERNANDEZ",
        "borough": "Manhattan",
        "council_district": "1",
        "latitude": 40.72223165721452,
        "longitude": -73.9894890982462,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/1004170001/"
    },
    {
        "name": "HIGHBRIDGE GARDENS",
        "borough": "Bronx",
        "council_district": "16",
        "latitude": 40.83702908497863,
        "longitude": -73.92941981369962,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/2025270032/"
    },
    {
        "name": "HIGHBRIDGE REHABS (ANDERSON AVENUE)",
        "borough": "NYC",
        "council_district": "16",
        "latitude": 40.835465757321785,
        "longitude": -73.9273989200592,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5551/"
    },
    {
        "name": "HIGHBRIDGE REHABS (NELSON AVENUE)",
        "borough": "NYC",
        "council_district": "16",
        "latitude": 40.837068911574335,
        "longitude": -73.92577886581421,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5555/"
    },
    {
        "name": "HOE AVENUE-EAST 173RD STREET",
        "borough": "Bronx",
        "council_district": "17",
        "latitude": 40.83629200134114,
        "longitude": -73.88696393368095,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/2029900011/"
    },
    {
        "name": "HOLMES TOWERS",
        "borough": "Manhattan",
        "council_district": "8",
        "latitude": 40.78071176346487,
        "longitude": -73.94541431581723,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/1015730020/"
    },
    {
        "name": "Hope Gardens",
        "borough": "NYC",
        "council_district": "37",
        "latitude": 40.69614737534331,
        "longitude": -73.91905188560486,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/7282/"
    },
    {
        "name": "HOWARD",
        "borough": "Brooklyn",
        "council_district": "41",
        "latitude": 40.67248499136667,
        "longitude": -73.90982508659363,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/3034890001/"
    },
    {
        "name": "HOWARD AVENUE",
        "borough": "NYC",
        "council_district": "41",
        "latitude": 40.66744282044149,
        "longitude": -73.91970493185387,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5359/"
    },
    {
        "name": "HOWARD AVENUE-PARK PLACE",
        "borough": "NYC",
        "council_district": "41",
        "latitude": 40.67061046106503,
        "longitude": -73.92000132284554,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5363/"
    },
    {
        "name": "HUGHES APARTMENTS",
        "borough": "Brooklyn",
        "council_district": "41",
        "latitude": 40.667948623727334,
        "longitude": -73.90840213084802,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/3035260021/"
    },
    {
        "name": "HUNTS POINT AVENUE REHAB",
        "borough": "NYC",
        "council_district": "17",
        "latitude": 40.81857145830394,
        "longitude": -73.8888860969421,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5367/"
    },
    {
        "name": "HYLAN",
        "borough": "Brooklyn",
        "council_district": "34",
        "latitude": 40.70433377172804,
        "longitude": -73.94005663692991,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/3030980001/"
    },
    {
        "name": "INDEPENDENCE",
        "borough": "NYC",
        "council_district": "34",
        "latitude": 40.705319600352084,
        "longitude": -73.96400174080767,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5371/"
    },
    {
        "name": "INGERSOLL",
        "borough": "NYC",
        "council_district": "35",
        "latitude": 40.69509579990679,
        "longitude": -73.97987665042399,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5582/"
    },
    {
        "name": "ISAACS",
        "borough": "Manhattan",
        "council_district": "8",
        "latitude": 40.78161767163772,
        "longitude": -73.94501837810179,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1015730001/"
    },
    {
        "name": "JACKSON",
        "borough": "Bronx",
        "council_district": "17",
        "latitude": 40.822332609970964,
        "longitude": -73.91825604553452,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/2024160001/"
    },
    {
        "name": "JEFFERSON",
        "borough": "NYC",
        "council_district": "8",
        "latitude": 40.79538337152788,
        "longitude": -73.9388338584765,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5589/"
    },
    {
        "name": "JOHNSON",
        "borough": "NYC",
        "council_district": "8",
        "latitude": 40.79693360094392,
        "longitude": -73.94300420980431,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5592/"
    },
    {
        "name": "KINGSBOROUGH",
        "borough": "NYC",
        "council_district": "41",
        "latitude": 40.67552123922079,
        "longitude": -73.92467035774499,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5596/"
    },
    {
        "name": "KINGSBOROUGH EXTENSION",
        "borough": "Brooklyn",
        "council_district": "41",
        "latitude": 40.67508523874578,
        "longitude": -73.92431225126458,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/3013440175/"
    },
    {
        "name": "KING TOWERS",
        "borough": "Manhattan",
        "council_district": "9",
        "latitude": 40.80041396173265,
        "longitude": -73.94803047180176,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1015960001/"
    },
    {
        "name": "LAFAYETTE",
        "borough": "Brooklyn",
        "council_district": "36",
        "latitude": 40.68978885610089,
        "longitude": -73.95865569286092,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/3019380001/"
    },
    {
        "name": "LA GUARDIA",
        "borough": "NYC",
        "council_district": "1",
        "latitude": 40.712187303593176,
        "longitude": -73.98738475063185,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5601/"
    },
    {
        "name": "LA GUARDIA ADDITION",
        "borough": "Manhattan",
        "council_district": "1",
        "latitude": 40.71165538622268,
        "longitude": -73.98858637499029,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1002560014/"
    },
    {
        "name": "LAVANBURG HOMES",
        "borough": "Manhattan",
        "council_district": "2",
        "latitude": 40.71840903485158,
        "longitude": -73.97641728713614,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1003250001/"
    },
    {
        "name": "LEHMAN VILLAGE",
        "borough": "NYC",
        "council_district": "8",
        "latitude": 40.794754265555625,
        "longitude": -73.94768545997964,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5609/"
    },
    {
        "name": "LENOX ROAD-ROCKAWAY PARKWAY",
        "borough": "NYC",
        "council_district": "41",
        "latitude": 40.65941981121282,
        "longitude": -73.91818171604616,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5613/"
    },
    {
        "name": "LEXINGTON",
        "borough": "NYC",
        "council_district": "8",
        "latitude": 40.787476805428504,
        "longitude": -73.94974188638362,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5616/"
    },
    {
        "name": "LINCOLN",
        "borough": "NYC",
        "council_district": "9",
        "latitude": 40.81104263304268,
        "longitude": -73.93679173516558,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5619/"
    },
    {
        "name": "LINDEN",
        "borough": "NYC",
        "council_district": "42",
        "latitude": 40.657203426973446,
        "longitude": -73.88443545122293,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5624/"
    },
    {
        "name": "LONGFELLOW AVENUE REHAB",
        "borough": "NYC",
        "council_district": "17",
        "latitude": 40.826321325922386,
        "longitude": -73.88777331759754,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5631/"
    },
    {
        "name": "LONG ISLAND BAPTIST HOUSES",
        "borough": "NYC",
        "council_district": "42",
        "latitude": 40.66732347060976,
        "longitude": -73.89673572380929,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5628/"
    },
    {
        "name": "LOWER EAST SIDE II",
        "borough": "NYC",
        "council_district": "2",
        "latitude": 40.723192805522814,
        "longitude": -73.98058106706198,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5643/"
    },
    {
        "name": "LOWER EAST SIDE III",
        "borough": "Manhattan",
        "council_district": "2",
        "latitude": 40.72470165418051,
        "longitude": -73.97656917572021,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1003780017/"
    },
    {
        "name": "LOWER EAST SIDE I INFILL",
        "borough": "NYC",
        "council_district": "1",
        "latitude": 40.72131324547006,
        "longitude": -73.99043821423267,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5638/"
    },
    {
        "name": "LOWER EAST SIDE REHAB (GROUP 5)",
        "borough": "Manhattan",
        "council_district": "2",
        "latitude": 40.72382338344346,
        "longitude": -73.97946588510226,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1003890038/"
    },
    {
        "name": "LOW HOUSES",
        "borough": "NYC",
        "council_district": "41",
        "latitude": 40.6695317072782,
        "longitude": -73.90473413364329,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5634/"
    },
    {
        "name": "MANHATTANVILLE",
        "borough": "Manhattan",
        "council_district": "7",
        "latitude": 40.81680632317014,
        "longitude": -73.95540552290207,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1019840001/"
    },
    {
        "name": "MANHATTANVILLE REHAB (GROUP 2)",
        "borough": "NYC",
        "council_district": "7",
        "latitude": 40.818599849326255,
        "longitude": -73.95362555980682,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5650/"
    },
    {
        "name": "MANHATTANVILLE REHAB (GROUP 3)",
        "borough": "Manhattan",
        "council_district": "7",
        "latitude": 40.8187135208237,
        "longitude": -73.95391523838043,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1019870017/"
    },
    {
        "name": "MARBLE HILL",
        "borough": "NYC",
        "council_district": "10",
        "latitude": 40.875481388776464,
        "longitude": -73.90787577446167,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5654/"
    },
    {
        "name": "MARCY",
        "borough": "NYC",
        "council_district": "36",
        "latitude": 40.69760476667914,
        "longitude": -73.95132602661045,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5657/"
    },
    {
        "name": "MARCY AVENUE-GREENE AVENUE SITE A",
        "borough": "Brooklyn",
        "council_district": "36",
        "latitude": 40.688558206444064,
        "longitude": -73.94961297512054,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/3017980020/"
    },
    {
        "name": "MARCY AVENUE-GREENE AVENUE SITE B",
        "borough": "Brooklyn",
        "council_district": "36",
        "latitude": 40.687744671881006,
        "longitude": -73.95026743412018,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/3017980077/"
    },
    {
        "name": "MARLBORO",
        "borough": "NYC",
        "council_district": "47",
        "latitude": 40.591871862091004,
        "longitude": -73.98100349107892,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5665/"
    },
    {
        "name": "MARSHALL PLAZA",
        "borough": "Manhattan",
        "council_district": "10",
        "latitude": 40.83330291967681,
        "longitude": -73.94211019297148,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1021160033/"
    },
    {
        "name": "MCKINLEY",
        "borough": "NYC",
        "council_district": "17",
        "latitude": 40.82230115133394,
        "longitude": -73.90478756818358,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5669/"
    },
    {
        "name": "MELROSE",
        "borough": "Bronx",
        "council_district": "17",
        "latitude": 40.820762967606775,
        "longitude": -73.9195430314138,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/2024130001/"
    },
    {
        "name": "MELTZER TOWER",
        "borough": "Manhattan",
        "council_district": "2",
        "latitude": 40.72310569967337,
        "longitude": -73.98717437853108,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/1004290021/"
    },
    {
        "name": "METRO NORTH PLAZA",
        "borough": "Manhattan",
        "council_district": "8",
        "latitude": 40.78719220749127,
        "longitude": -73.94316058013902,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1016730006/"
    },
    {
        "name": "MILBANK-FRAWLEY",
        "borough": "Manhattan",
        "council_district": "9",
        "latitude": 40.80069459376906,
        "longitude": -73.94508309649132,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/1016220017/"
    },
    {
        "name": "MILL BROOK",
        "borough": "NYC",
        "council_district": "8",
        "latitude": 40.80560753784733,
        "longitude": -73.91831159591675,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5677/"
    },
    {
        "name": "MILL BROOK EXTENSION",
        "borough": "Bronx",
        "council_district": "8",
        "latitude": 40.80378435061711,
        "longitude": -73.91579568386078,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/2025480042/"
    },
    {
        "name": "MITCHEL",
        "borough": "NYC",
        "council_district": "8",
        "latitude": 40.80896954241912,
        "longitude": -73.92591834068297,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5681/"
    },
    {
        "name": "MONROE",
        "borough": "NYC",
        "council_district": "18",
        "latitude": 40.82261492811599,
        "longitude": -73.86504612846421,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5684/"
    },
    {
        "name": "MOORE",
        "borough": "Bronx",
        "council_district": "8",
        "latitude": 40.81286815766753,
        "longitude": -73.90999176547119,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/2025570083/"
    },
    {
        "name": "MORRISANIA",
        "borough": "Bronx",
        "council_district": "16",
        "latitude": 40.83320098220947,
        "longitude": -73.90646159648895,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/2023900024/"
    },
    {
        "name": "MORRISANIA AIR RIGHTS",
        "borough": "NYC",
        "council_district": "16",
        "latitude": 40.824893854292014,
        "longitude": -73.91626969250802,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5697/"
    },
    {
        "name": "MORRIS I",
        "borough": "NYC",
        "council_district": "16",
        "latitude": 40.834251829692846,
        "longitude": -73.9053591319778,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5688/"
    },
    {
        "name": "MORRIS II",
        "borough": "NYC",
        "council_district": "16",
        "latitude": 40.83663631213818,
        "longitude": -73.90374118688831,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5691/"
    },
    {
        "name": "MORRIS PARK SENIOR CITIZENS HOME",
        "borough": "Manhattan",
        "council_district": "9",
        "latitude": 40.80549763479624,
        "longitude": -73.94159158050167,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1017490010/"
    },
    {
        "name": "MOTT HAVEN",
        "borough": "NYC",
        "council_district": "8",
        "latitude": 40.812126975013314,
        "longitude": -73.92200092451311,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5701/"
    },
    {
        "name": "MURPHY",
        "borough": "Bronx",
        "council_district": "15",
        "latitude": 40.843016932551045,
        "longitude": -73.89431386515116,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/2029440001/"
    },
    {
        "name": "NEW LANE AREA",
        "borough": "Staten Island",
        "council_district": "49",
        "latitude": 40.613027903193526,
        "longitude": -74.061543656908,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5028320068/"
    },
    {
        "name": "NOSTRAND",
        "borough": "NYC",
        "council_district": "46",
        "latitude": 40.59652662898248,
        "longitude": -73.93680190445413,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5706/"
    },
    {
        "name": "OCEAN HILL APARTMENTS",
        "borough": "NYC",
        "council_district": "37",
        "latitude": 40.681027680562266,
        "longitude": -73.90836637403794,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5723/"
    },
    {
        "name": "OCEAN HILL-BROWNSVILLE",
        "borough": "NYC",
        "council_district": "41",
        "latitude": 40.67600420747197,
        "longitude": -73.91966543937787,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5720/"
    },
    {
        "name": "O'DWYER GARDENS",
        "borough": "NYC",
        "council_district": "47",
        "latitude": 40.57378974073849,
        "longitude": -73.99935895766025,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5709/"
    },
    {
        "name": "PALMETTO GARDENS",
        "borough": "Brooklyn",
        "council_district": "37",
        "latitude": 40.69140956667796,
        "longitude": -73.9189875125885,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/3033400020/"
    },
    {
        "name": "PARK AVENUE-EAST 122ND, 123RD STREETS",
        "borough": "Manhattan",
        "council_district": "9",
        "latitude": 40.803115504664724,
        "longitude": -73.93907059553167,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1017710059/"
    },
    {
        "name": "PARK ROCK REHAB",
        "borough": "NYC",
        "council_district": "36",
        "latitude": 40.67150949073839,
        "longitude": -73.92841582318489,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5728/"
    },
    {
        "name": "PARKSIDE",
        "borough": "NYC",
        "council_district": "12",
        "latitude": 40.868662942493984,
        "longitude": -73.86900283480608,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5731/"
    },
    {
        "name": "PATTERSON",
        "borough": "NYC",
        "council_district": "8",
        "latitude": 40.813900244870446,
        "longitude": -73.92377617945297,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5734/"
    },
    {
        "name": "PELHAM PARKWAY",
        "borough": "NYC",
        "council_district": "13",
        "latitude": 40.86056208180513,
        "longitude": -73.86094574805631,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5738/"
    },
    {
        "name": "PENNSYLVANIA AVENUE-WORTMAN AVENUE",
        "borough": "Brooklyn",
        "council_district": "42",
        "latitude": 40.65665614648075,
        "longitude": -73.8870370388031,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/3043690001/"
    },
    {
        "name": "PINK",
        "borough": "NYC",
        "council_district": "42",
        "latitude": 40.667409273299235,
        "longitude": -73.86510469623207,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5563/"
    },
    {
        "name": "POLO GROUNDS TOWERS",
        "borough": "Manhattan",
        "council_district": "9",
        "latitude": 40.830991214920935,
        "longitude": -73.93782272362697,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1021060003/"
    },
    {
        "name": "PROSPECT PLAZA",
        "borough": "NYC",
        "council_district": "41",
        "latitude": 40.672164143690445,
        "longitude": -73.91799003201145,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5572/"
    },
    {
        "name": "PSS GRANDPARENT FAMILY APARTMENTS",
        "borough": "Bronx",
        "council_district": "17",
        "latitude": 40.822546916643766,
        "longitude": -73.90098575623801,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/2026780068/"
    },
    {
        "name": "PUBLIC SCHOOL 139 (CONVERSION)",
        "borough": "Manhattan",
        "council_district": "9",
        "latitude": 40.81747410364336,
        "longitude": -73.93999300538391,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1020080013/"
    },
    {
        "name": "QUEENSBRIDGE NORTH",
        "borough": "NYC",
        "council_district": "26",
        "latitude": 40.756298887965244,
        "longitude": -73.9433205127716,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5200/"
    },
    {
        "name": "QUEENSBRIDGE SOUTH",
        "borough": "NYC",
        "council_district": "26",
        "latitude": 40.75515498021459,
        "longitude": -73.94670830809129,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5204/"
    },
    {
        "name": "RALPH AVENUE REHAB",
        "borough": "Brooklyn",
        "council_district": "41",
        "latitude": 40.66619267114188,
        "longitude": -73.92311269526358,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/3035080046/"
    },
    {
        "name": "RANDOLPH",
        "borough": "NYC",
        "council_district": "9",
        "latitude": 40.802555340945865,
        "longitude": -73.95493718500599,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5209/"
    },
    {
        "name": "RANGEL",
        "borough": "Manhattan",
        "council_district": "9",
        "latitude": 40.83321035129762,
        "longitude": -73.93647419766033,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/1021060320/"
    },
    {
        "name": "RAVENSWOOD",
        "borough": "NYC",
        "council_district": "26",
        "latitude": 40.76129145166532,
        "longitude": -73.9354701425152,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5215/"
    },
    {
        "name": "RED HOOK EAST",
        "borough": "Brooklyn",
        "council_district": "38",
        "latitude": 40.675817115196445,
        "longitude": -74.00431394577026,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/3005380001/"
    },
    {
        "name": "RED HOOK WEST",
        "borough": "NYC",
        "council_district": "38",
        "latitude": 40.676214804933906,
        "longitude": -74.00870738391026,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5219/"
    },
    {
        "name": "REHAB PROGRAM (DOUGLASS REHABS)",
        "borough": "NYC",
        "council_district": "7",
        "latitude": 40.79931012930818,
        "longitude": -73.9692692143632,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5224/"
    },
    {
        "name": "REHAB PROGRAM (TAFT REHABS)",
        "borough": "NYC",
        "council_district": "9",
        "latitude": 40.80323090836557,
        "longitude": -73.95214674471775,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5228/"
    },
    {
        "name": "REHAB PROGRAM (WISE REHAB)",
        "borough": "Manhattan",
        "council_district": "6",
        "latitude": 40.79104906735011,
        "longitude": -73.96733701229095,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/1012070050/"
    },
    {
        "name": "REID APARTMENTS",
        "borough": "Brooklyn",
        "council_district": "40",
        "latitude": 40.66198889400871,
        "longitude": -73.93836746413605,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/3047950016/"
    },
    {
        "name": "RICHMOND TERRACE",
        "borough": "NYC",
        "council_district": "49",
        "latitude": 40.6453560942544,
        "longitude": -74.08715377074412,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5234/"
    },
    {
        "name": "RIIS",
        "borough": "NYC",
        "council_district": "2",
        "latitude": 40.72489042748389,
        "longitude": -73.97400065399985,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5237/"
    },
    {
        "name": "RIIS II",
        "borough": "Manhattan",
        "council_district": "2",
        "latitude": 40.722740084997,
        "longitude": -73.97545598027631,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1003620001/"
    },
    {
        "name": "ROBBINS PLAZA",
        "borough": "Manhattan",
        "council_district": "5",
        "latitude": 40.76682740502815,
        "longitude": -73.95715993884828,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/1014450023/"
    },
    {
        "name": "ROBINSON",
        "borough": "Manhattan",
        "council_district": "9",
        "latitude": 40.80687089120125,
        "longitude": -73.93642385792165,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1017770005/"
    },
    {
        "name": "ROOSEVELT I",
        "borough": "NYC",
        "council_district": "36",
        "latitude": 40.69327025181489,
        "longitude": -73.93722471447444,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5244/"
    },
    {
        "name": "ROOSEVELT II",
        "borough": "NYC",
        "council_district": "36",
        "latitude": 40.69440156743086,
        "longitude": -73.93494783482778,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5247/"
    },
    {
        "name": "RUTGERS",
        "borough": "Manhattan",
        "council_district": "1",
        "latitude": 40.71186552463488,
        "longitude": -73.99108736257611,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/1002550001/"
    },
    {
        "name": "RUTLAND TOWERS",
        "borough": "Brooklyn",
        "council_district": "41",
        "latitude": 40.66186969447777,
        "longitude": -73.92816985911482,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/3045940064/"
    },
    {
        "name": "SACK WERN",
        "borough": "NYC",
        "council_district": "18",
        "latitude": 40.819779704767946,
        "longitude": -73.86638811304184,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5253/"
    },
    {
        "name": "SAINT MARY'S PARK",
        "borough": "NYC",
        "council_district": "8",
        "latitude": 40.816484215979166,
        "longitude": -73.90875718060745,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5256/"
    },
    {
        "name": "SAINT NICHOLAS",
        "borough": "Manhattan",
        "council_district": "9",
        "latitude": 40.812119443008015,
        "longitude": -73.9480023094806,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/1019330001/"
    },
    {
        "name": "SAMUEL (CITY)",
        "borough": "NYC",
        "council_district": "9",
        "latitude": 40.82003889367253,
        "longitude": -73.93840055333077,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5273/"
    },
    {
        "name": "SAMUEL (MHOP) I",
        "borough": "NYC",
        "council_district": "9",
        "latitude": 40.817914525856885,
        "longitude": -73.94100069585376,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5276/"
    },
    {
        "name": "SAMUEL (MHOP) II",
        "borough": "Manhattan",
        "council_district": "9",
        "latitude": 40.81684902788558,
        "longitude": -73.94006682443113,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1020070042/"
    },
    {
        "name": "SAMUEL (MHOP) III",
        "borough": "Manhattan",
        "council_district": "9",
        "latitude": 40.819558143779396,
        "longitude": -73.93950663218162,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1020110009/"
    },
    {
        "name": "Saratoga Square",
        "borough": "NYC",
        "council_district": "41",
        "latitude": 40.68523417592491,
        "longitude": -73.91657671362229,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/14051/"
    },
    {
        "name": "SARATOGA VILLAGE",
        "borough": "Brooklyn",
        "council_district": "41",
        "latitude": 40.685901604426356,
        "longitude": -73.91713053241904,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/3014920001/"
    },
    {
        "name": "SEDGWICK",
        "borough": "Bronx",
        "council_district": "14",
        "latitude": 40.84660304539053,
        "longitude": -73.92252616881011,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/2028770001/"
    },
    {
        "name": "SEWARD PARK EXTENSION",
        "borough": "NYC",
        "council_district": "1",
        "latitude": 40.71695647057616,
        "longitude": -73.98687495374546,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5283/"
    },
    {
        "name": "SHEEPSHEAD BAY",
        "borough": "NYC",
        "council_district": "46",
        "latitude": 40.596219609528276,
        "longitude": -73.93962535696176,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5286/"
    },
    {
        "name": "SMITH",
        "borough": "Manhattan",
        "council_district": "1",
        "latitude": 40.709670861575454,
        "longitude": -73.99635851383209,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1001110100/"
    },
    {
        "name": "SOTOMAYOR HOUSES",
        "borough": "NYC",
        "council_district": "18",
        "latitude": 40.825387320124236,
        "longitude": -73.86627674102783,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5879/"
    },
    {
        "name": "SOUNDVIEW",
        "borough": "NYC",
        "council_district": "18",
        "latitude": 40.81691322539219,
        "longitude": -73.86757564869752,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5291/"
    },
    {
        "name": "SOUTH BEACH",
        "borough": "Staten Island",
        "council_district": "50",
        "latitude": 40.59533627430592,
        "longitude": -74.07929764019993,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5032430100/"
    },
    {
        "name": "SOUTH BRONX AREA (SITE 402)",
        "borough": "Bronx",
        "council_district": "17",
        "latitude": 40.82140910211021,
        "longitude": -73.90873610973357,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/2026260001/"
    },
    {
        "name": "STANTON STREET",
        "borough": "Manhattan",
        "council_district": "1",
        "latitude": 40.71973952183031,
        "longitude": -73.98357541023246,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1003440010/"
    },
    {
        "name": "STAPLETON",
        "borough": "Staten Island",
        "council_district": "49",
        "latitude": 40.622433695136195,
        "longitude": -74.08127896519575,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5005450100/"
    },
    {
        "name": "STEBBINS AVENUE-HEWITT PLACE",
        "borough": "Bronx",
        "council_district": "17",
        "latitude": 40.81943614221658,
        "longitude": -73.89893531799316,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/2026960005/"
    },
    {
        "name": "STERLING PLACE REHABS (SAINT JOHNS-STERLING)",
        "borough": "NYC",
        "council_district": "36",
        "latitude": 40.6710136734273,
        "longitude": -73.92735707986158,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5309/"
    },
    {
        "name": "STERLING PLACE REHABS (STERLING-BUFFALO)",
        "borough": "NYC",
        "council_district": "36",
        "latitude": 40.6711961141582,
        "longitude": -73.92674278739793,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5313/"
    },
    {
        "name": "STRAUS",
        "borough": "NYC",
        "council_district": "2",
        "latitude": 40.74102575566737,
        "longitude": -73.97964340290585,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5316/"
    },
    {
        "name": "Stuyvesant Gardens I",
        "borough": "Brooklyn",
        "council_district": "36",
        "latitude": 40.688296601239,
        "longitude": -73.93298305321669,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/14196/"
    },
    {
        "name": "STUYVESANT GARDENS II",
        "borough": "Brooklyn",
        "council_district": "36",
        "latitude": 40.68812259109434,
        "longitude": -73.93073285208416,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/3016360024/"
    },
    {
        "name": "SUMNER",
        "borough": "NYC",
        "council_district": "36",
        "latitude": 40.696790617396466,
        "longitude": -73.9406543970108,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5323/"
    },
    {
        "name": "SURFSIDE GARDENS",
        "borough": "NYC",
        "council_district": "47",
        "latitude": 40.57504924898306,
        "longitude": -73.99854313364796,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5326/"
    },
    {
        "name": "SUTTER AVENUE-UNION STREET",
        "borough": "NYC",
        "council_district": "41",
        "latitude": 40.66600284178039,
        "longitude": -73.92139690382774,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5330/"
    },
    {
        "name": "TAFT",
        "borough": "NYC",
        "council_district": "8",
        "latitude": 40.79838334690044,
        "longitude": -73.9460522108563,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5333/"
    },
    {
        "name": "TAPSCOTT STREET REHAB",
        "borough": "NYC",
        "council_district": "41",
        "latitude": 40.66371863240112,
        "longitude": -73.91938469864766,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5338/"
    },
    {
        "name": "TAYLOR STREET-WYTHE AVENUE",
        "borough": "Brooklyn",
        "council_district": "34",
        "latitude": 40.70426911675132,
        "longitude": -73.96491926493532,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/3021750075/"
    },
    {
        "name": "TELLER AVENUE-EAST 166TH STREET",
        "borough": "Bronx",
        "council_district": "16",
        "latitude": 40.8300318704631,
        "longitude": -73.91261059305857,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/2024290001/"
    },
    {
        "name": "THOMAS APARTMENTS",
        "borough": "Manhattan",
        "council_district": "6",
        "latitude": 40.78970491406301,
        "longitude": -73.97043844482066,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/1012210038/"
    },
    {
        "name": "TILDEN",
        "borough": "Brooklyn",
        "council_district": "41",
        "latitude": 40.66358448726812,
        "longitude": -73.90729781564809,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/3035760001/"
    },
    {
        "name": "TODT HILL",
        "borough": "Staten Island",
        "council_district": "49",
        "latitude": 40.607432533373874,
        "longitude": -74.1193163394928,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5007060001/"
    },
    {
        "name": "TOMPKINS",
        "borough": "Brooklyn",
        "council_district": "36",
        "latitude": 40.69682315455205,
        "longitude": -73.94657671451569,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/3017400001/"
    },
    {
        "name": "TWIN PARKS EAST (SITE 9)",
        "borough": "Bronx",
        "council_district": "15",
        "latitude": 40.84699738058448,
        "longitude": -73.88765621508475,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/2030940014/"
    },
    {
        "name": "Twin Parks West parking lot",
        "borough": "NYC",
        "council_district": "15",
        "latitude": 40.85662825574734,
        "longitude": -73.89575915563674,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/14049/"
    },
    {
        "name": "TWIN PARKS WEST (SITES 1 & 2)",
        "borough": "Bronx",
        "council_district": "15",
        "latitude": 40.85614144267159,
        "longitude": -73.89632821083067,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/2031430155/"
    },
    {
        "name": "TWO BRIDGES URA (SITE 7)",
        "borough": "Manhattan",
        "council_district": "1",
        "latitude": 40.71088228660102,
        "longitude": -73.9862134451918,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1002450001/"
    },
    {
        "name": "UNION AVENUE-EAST 163RD STREET",
        "borough": "Bronx",
        "council_district": "17",
        "latitude": 40.82332517159441,
        "longitude": -73.90162825584412,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/2026780001/"
    },
    {
        "name": "UNION AVENUE-EAST 166TH STREET",
        "borough": "NYC",
        "council_district": "17",
        "latitude": 40.826556383724125,
        "longitude": -73.8996970653534,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5742/"
    },
    {
        "name": "UNITY PLAZA (SITES 17,24,25A)",
        "borough": "NYC",
        "council_district": "42",
        "latitude": 40.668240063856395,
        "longitude": -73.89677946465275,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5745/"
    },
    {
        "name": "UNITY PLAZA (SITES 4-27)",
        "borough": "NYC",
        "council_district": "42",
        "latitude": 40.666711239495505,
        "longitude": -73.89759535176012,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5749/"
    },
    {
        "name": "UNIVERSITY AVENUE REHAB",
        "borough": "NYC",
        "council_district": "14",
        "latitude": 40.85180799627992,
        "longitude": -73.91408443450928,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5752/"
    },
    {
        "name": "UPACA (SITE 5)",
        "borough": "Manhattan",
        "council_district": "9",
        "latitude": 40.8017586717286,
        "longitude": -73.94013306561004,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1017690005/"
    },
    {
        "name": "UPACA (SITE 6)",
        "borough": "Manhattan",
        "council_district": "9",
        "latitude": 40.801144693634186,
        "longitude": -73.94046963166488,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1017680012/"
    },
    {
        "name": "VANDALIA AVENUE",
        "borough": "Brooklyn",
        "council_district": "42",
        "latitude": 40.65013154922783,
        "longitude": -73.8870845300905,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/3044310100/"
    },
    {
        "name": "VAN DYKE I",
        "borough": "NYC",
        "council_district": "41",
        "latitude": 40.664888428468814,
        "longitude": -73.90405833721161,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5758/"
    },
    {
        "name": "VAN DYKE II",
        "borough": "Brooklyn",
        "council_district": "41",
        "latitude": 40.6645649154126,
        "longitude": -73.90320475996897,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/6000030021/"
    },
    {
        "name": "VLADECK",
        "borough": "NYC",
        "council_district": "1",
        "latitude": 40.71255930367679,
        "longitude": -73.98280726878842,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5763/"
    },
    {
        "name": "VLADECK II",
        "borough": "Manhattan",
        "council_district": "1",
        "latitude": 40.71293644613539,
        "longitude": -73.98025907860215,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1002630001/"
    },
    {
        "name": "WAGNER",
        "borough": "NYC",
        "council_district": "8",
        "latitude": 40.799659025298666,
        "longitude": -73.9320929260573,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5768/"
    },
    {
        "name": "WALD",
        "borough": "Manhattan",
        "council_district": "2",
        "latitude": 40.72069044043516,
        "longitude": -73.9763849558403,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/1003560001/"
    },
    {
        "name": "WASHINGTON",
        "borough": "NYC",
        "council_district": "8",
        "latitude": 40.788002914251734,
        "longitude": -73.9472633600235,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5773/"
    },
    {
        "name": "WASHINGTON HEIGHTS REHAB (GROUPS 1&2)",
        "borough": "NYC",
        "council_district": "10",
        "latitude": 40.84561145990302,
        "longitude": -73.93349151698759,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5936/"
    },
    {
        "name": "WASHINGTON HEIGHTS REHAB PHASE III (FORT WASHINGTON)",
        "borough": "NYC",
        "council_district": "10",
        "latitude": 40.83709912008821,
        "longitude": -73.93843383377587,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5941/"
    },
    {
        "name": "WASHINGTON HEIGHTS REHAB PHASE III (HARLEM RIVER)",
        "borough": "Manhattan",
        "council_district": "10",
        "latitude": 40.833233081670045,
        "longitude": -73.94426398445344,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1021150060/"
    },
    {
        "name": "WASHINGTON HEIGHTS REHAB PHASE IV (C)",
        "borough": "NYC",
        "council_district": "10",
        "latitude": 40.84527788903994,
        "longitude": -73.93376367032809,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5945/"
    },
    {
        "name": "WASHINGTON HEIGHTS REHAB PHASE IV (D)",
        "borough": "Manhattan",
        "council_district": "10",
        "latitude": 40.84512156103007,
        "longitude": -73.93433431968063,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1021320080/"
    },
    {
        "name": "WEBSTER",
        "borough": "Bronx",
        "council_district": "16",
        "latitude": 40.833180688175936,
        "longitude": -73.9091384410858,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/2023950001/"
    },
    {
        "name": "WEEKSVILLE GARDENS",
        "borough": "NYC",
        "council_district": "36",
        "latitude": 40.67673657304128,
        "longitude": -73.93365919589996,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/14175/"
    },
    {
        "name": "WEST BRIGHTON I",
        "borough": "Staten Island",
        "council_district": "49",
        "latitude": 40.63555746546036,
        "longitude": -74.11885608065768,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5001960001/"
    },
    {
        "name": "WEST BRIGHTON II",
        "borough": "Staten Island",
        "council_district": "49",
        "latitude": 40.63442024669676,
        "longitude": -74.11852240562439,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/6000050002/"
    },
    {
        "name": "WEST FARMS ROAD REHAB",
        "borough": "NYC",
        "council_district": "17",
        "latitude": 40.82866279884747,
        "longitude": -73.88809557167541,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5186/"
    },
    {
        "name": "WEST FARMS SQUARE CONVENTIONAL",
        "borough": "Bronx",
        "council_district": "17",
        "latitude": 40.82751435103311,
        "longitude": -73.88795971870422,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/2027540046/"
    },
    {
        "name": "WEST TREMONT AVENUE-SEDGWICK AVENUE AREA",
        "borough": "Bronx",
        "council_district": "14",
        "latitude": 40.852392165944174,
        "longitude": -73.91834338972852,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/2028770552/"
    },
    {
        "name": "WHITE",
        "borough": "Manhattan",
        "council_district": "8",
        "latitude": 40.78981057981101,
        "longitude": -73.94395079805778,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1016540011/"
    },
    {
        "name": "WHITMAN",
        "borough": "NYC",
        "council_district": "35",
        "latitude": 40.69452883724537,
        "longitude": -73.97505414544774,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5192/"
    },
    {
        "name": "WILLIAMSBURG",
        "borough": "NYC",
        "council_district": "34",
        "latitude": 40.70985921958301,
        "longitude": -73.94343053104211,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5460/"
    },
    {
        "name": "WILLIAMS PLAZA",
        "borough": "NYC",
        "council_district": "34",
        "latitude": 40.708000432658686,
        "longitude": -73.95962728728686,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/5195/"
    },
    {
        "name": "WILSON",
        "borough": "Manhattan",
        "council_district": "8",
        "latitude": 40.788764979127926,
        "longitude": -73.93913630073789,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/1016990001/"
    },
    {
        "name": "WISE TOWERS",
        "borough": "Manhattan",
        "council_district": "6",
        "latitude": 40.78996525581218,
        "longitude": -73.97148805436647,
        "status": "Converted",
        "url": "https://dev.nycharealtalk.org/lots/1012210007/"
    },
    {
        "name": "WOODSIDE",
        "borough": "NYC",
        "council_district": "26",
        "latitude": 40.7556254380622,
        "longitude": -73.90994188539085,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5811/"
    },
    {
        "name": "WOODSON",
        "borough": "NYC",
        "council_district": "42",
        "latitude": 40.66474048251783,
        "longitude": -73.90225522418079,
        "status": "Standard",
        "url": "https://dev.nycharealtalk.org/lots/5870/"
    },
    {
        "name": "WSUR (BROWNSTONES)",
        "borough": "NYC",
        "council_district": "6",
        "latitude": 40.78890868270936,
        "longitude": -73.96810948848724,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/5890/"
    },
    {
        "name": "WSUR (SITE A) 120 WEST 94TH STREET",
        "borough": "Manhattan",
        "council_district": "7",
        "latitude": 40.79206034463158,
        "longitude": -73.96965444087982,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/1012240042/"
    },
    {
        "name": "WSUR (SITE B) 74 WEST 92ND STREET",
        "borough": "Manhattan",
        "council_district": "6",
        "latitude": 40.78999309873063,
        "longitude": -73.96960616111755,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/1012050001/"
    },
    {
        "name": "WSUR (SITE C) 589 AMSTERDAM AVENUE",
        "borough": "Manhattan",
        "council_district": "6",
        "latitude": 40.78927015668417,
        "longitude": -73.97383868694304,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/1012190001/"
    },
    {
        "name": "WYCKOFF GARDENS",
        "borough": "Brooklyn",
        "council_district": "39",
        "latitude": 40.68200490334786,
        "longitude": -73.98419201374053,
        "status": "Planned",
        "url": "https://dev.nycharealtalk.org/lots/3003940001/"
    }
];