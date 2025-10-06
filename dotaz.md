ÚKOL: Vygeneruj mi JSON pro moji stránku ze zápasu na Livesportu podle níže popsaných přísných pravidel. Vrátím pouze validní JSON (bez komentářů a bez dalšího textu okolo).

VSTUP:
- URL zápasu na Livesportu: https://www.livesport.cz/zapas/fotbal/arsenal-hA1Zm19f/leeds-tUxUbLR2/?mid=zFCHVyGF
MOJE DATABÁZE TÝMŮ (teamsData) — POUŽIJ PŘESNĚ TAKTO:
{
    "UEFA Europa League 2025/26": [
      {
        "name": "Aberdeen FC",
        "path": "logos/50122.png",
        "color": "#CC0000",
        "short": "ABE"
      },
      {
        "name": "AEK Larnaca FC",
        "path": "logos/54191.png",
        "color": "#00953A",
        "short": "AEL"
      },
      {
        "name": "AS Roma",
        "path": "logos/50137.png",
        "color": "#8E1F3F",
        "short": "ROM"
      },
      {
        "name": "Aston Villa FC",
        "path": "logos/52683.png",
        "color": "#670E36",
        "short": "AVL"
      },
      {
        "name": "Beşiktaş JK",
        "path": "logos/50157.png",
        "color": "#000000",
        "short": "BES"
      },
      {
        "name": "BK Häcken",
        "path": "logos/69621.png",
        "color": "#F6E500",
        "short": "HAC"
      },
      {
        "name": "Bologna FC 1909",
        "path": "logos/52969.png",
        "color": "#0E1A47",
        "short": "BOL"
      },
      {
        "name": "Breiðablik",
        "path": "logos/71235.png",
        "color": "#007A33",
        "short": "BRE"
      },
      {
        "name": "BSC Young Boys",
        "path": "logos/50031.png",
        "color": "#FDD000",
        "short": "YB"
      },
      {
        "name": "Celtic FC",
        "path": "logos/50050.png",
        "color": "#009E60",
        "short": "CEL"
      },
      {
        "name": "CFR 1907 Cluj",
        "path": "logos/88131.png",
        "color": "#6E0B14",
        "short": "CLU"
      },
      {
        "name": "FC Aktobe",
        "path": "logos/79973.png",
        "color": "#E41B17",
        "short": "AKT"
      },
      {
        "name": "FC Baník Ostrava",
        "path": "logos/51886.png",
        "color": "#00AEEF",
        "short": "BAN"
      },
      {
        "name": "FC Basel 1893",
        "path": "logos/59856.png",
        "color": "#DD052B",
        "short": "BAS"
      },
      {
        "name": "FC Drita",
        "path": "logos/2608290.png",
        "color": "#0057B8",
        "short": "DRI"
      },
      {
        "name": "FC Dynamo Kyiv",
        "path": "logos/52723.png",
        "color": "#0057B8",
        "short": "DYK"
      },
      {
        "name": "FC Lugano",
        "path": "logos/8538.png",
        "color": "#000000",
        "short": "LUG"
      },
      {
        "name": "FC Midtjylland",
        "path": "logos/75795.png",
        "color": "#D71920",
        "short": "MID"
      },
      {
        "name": "FC Noah",
        "path": "logos/2609987.png",
        "color": "#000000",
        "short": "NOA"
      },
      {
        "name": "FC Porto",
        "path": "logos/50064.png",
        "color": "#003399",
        "short": "POR"
      },
      {
        "name": "FC Prishtina",
        "path": "logos/2608287.png",
        "color": "#0057B8",
        "short": "PRI"
      },
      {
        "name": "FC RFS",
        "path": "logos/2609104.png",
        "color": "#0057B8",
        "short": "RFS"
      },
      {
        "name": "FC Salzburg",
        "path": "logos/50030.png",
        "color": "#D0021B",
        "short": "RBS"
      },
      {
        "name": "FC Shakhtar Donetsk",
        "path": "logos/52707.png",
        "color": "#FF7F00",
        "short": "SHD"
      },
      {
        "name": "FC Sheriff Tiraspol",
        "path": "logos/69606.png",
        "color": "#FFD100",
        "short": "SHR"
      },
      {
        "name": "FC Spartak Trnava",
        "path": "logos/52904.png",
        "color": "#0057B8",
        "short": "SPA"
      },
      {
        "name": "FC Utrecht",
        "path": "logos/52323.png",
        "color": "#E2001A",
        "short": "UTR"
      },
      {
        "name": "FC Viktoria Plzeň",
        "path": "logos/64388.png",
        "color": "#005BAA",
        "short": "PLZ"
      },
      {
        "name": "Fenerbahçe SK",
        "path": "logos/52692.png",
        "color": "#F4D30F",
        "short": "FEN"
      },
      {
        "name": "Ferencvárosi TC",
        "path": "logos/52298.png",
        "color": "#007A33",
        "short": "FTC"
      },
      {
        "name": "Feyenoord",
        "path": "logos/52749.png",
        "color": "#EE2E24",
        "short": "FEY"
      },
      {
        "name": "FK Crvena Zvezda",
        "path": "logos/50069.png",
        "color": "#D71920",
        "short": "CRV"
      },
      {
        "name": "FK Partizan Beograd",
        "path": "logos/50162.png",
        "color": "#000000",
        "short": "PAR"
      },
      {
        "name": "Fotbal Club FCSB",
        "path": "logos/50065.png",
        "color": "#E41B17",
        "short": "FCS"
      },
      {
        "name": "Fredrikstad FK",
        "path": "logos/64211.png",
        "color": "#0057B8",
        "short": "FRE"
      },
      {
        "name": "GNK Dinamo",
        "path": "logos/50164.png",
        "color": "#1B4EA1",
        "short": "DIN"
      },
      {
        "name": "Go Ahead Eagles",
        "path": "logos/64207.png",
        "color": "#F6B40E",
        "short": "GAE"
      },
      {
        "name": "Hamrun Spartans F.C.",
        "path": "logos/50060.png",
        "color": "#E41B17",
        "short": "HAM"
      },
      {
        "name": "Hapoel Beer-Sheva FC",
        "path": "logos/59340.png",
        "color": "#E4002B",
        "short": "HBS"
      },
      {
        "name": "Hibernian F.C.",
        "path": "logos/52821.png",
        "color": "#1E7F42",
        "short": "HIB"
      },
      {
        "name": "HNK Rijeka",
        "path": "logos/52356.png",
        "color": "#66C5E3",
        "short": "RIJ"
      },
      {
        "name": "HŠK Zrinjski Mostar",
        "path": "logos/73390.png",
        "color": "#D71920",
        "short": "ZRI"
      },
      {
        "name": "Ilves Tampere",
        "path": "logos/2602511.png",
        "color": "#FFD100",
        "short": "TAM"
      },
      {
        "name": "KF Shkëndija",
        "path": "logos/75807.png",
        "color": "#E41B17",
        "short": "SHK"
      },
      {
        "name": "KKS Lech Poznań",
        "path": "logos/64227.png",
        "color": "#0057B8",
        "short": "LPO"
      },
      {
        "name": "KRC Genk",
        "path": "logos/61582.png",
        "color": "#0057B8",
        "short": "GNK"
      },
      {
        "name": "KuPS Kuopio",
        "path": "logos/52350.png",
        "color": "#FFDD00",
        "short": "KUO"
      },
      {
        "name": "Legia Warszawa",
        "path": "logos/50146.png",
        "color": "#006341",
        "short": "LEG"
      },
      {
        "name": "Lincoln Red Imps FC",
        "path": "logos/2605572.png",
        "color": "#E41B17",
        "short": "LRI"
      },
      {
        "name": "LOSC Lille",
        "path": "logos/75797.png",
        "color": "#E41B17",
        "short": "LIL"
      },
      {
        "name": "Maccabi Tel-Aviv FC",
        "path": "logos/57477.png",
        "color": "#FFD200",
        "short": "MTA"
      },
      {
        "name": "Malmö FF",
        "path": "logos/50152.png",
        "color": "#77C4F2",
        "short": "MFF"
      },
      {
        "name": "NK Celje",
        "path": "logos/59030.png",
        "color": "#0057B8",
        "short": "NCE"
      },
      {
        "name": "Nottingham Forest FC",
        "path": "logos/52681.png",
        "color": "#E2231A",
        "short": "NFO"
      },
      {
        "name": "OGC Nice",
        "path": "logos/52355.png",
        "color": "#D61821",
        "short": "NIS"
      },
      {
        "name": "Olympique Lyonnais",
        "path": "logos/5312.png",
        "color": "#003DA5",
        "short": "LYO"
      },
      {
        "name": "Paksi FC",
        "path": "logos/93452.png",
        "color": "#00843D",
        "short": "PAK"
      },
      {
        "name": "Panathinaikos FC",
        "path": "logos/50084.png",
        "color": "#006847",
        "short": "PAN"
      },
      {
        "name": "PAOK FC",
        "path": "logos/50130.png",
        "color": "#000000",
        "short": "PAK"
      },
      {
        "name": "PFC Levski Sofia",
        "path": "logos/50044.png",
        "color": "#0057B8",
        "short": "LEV"
      },
      {
        "name": "PFC Ludogorets 1945",
        "path": "logos/2603104.png",
        "color": "#007A33",
        "short": "LUD"
      },
      {
        "name": "Rangers FC",
        "path": "logos/50121.png",
        "color": "#1F45FC",
        "short": "RAN"
      },
      {
        "name": "Real Betis Balompié",
        "path": "logos/52265.png",
        "color": "#00B140",
        "short": "BET"
      },
      {
        "name": "Real Club Celta",
        "path": "logos/53043.png",
        "color": "#8ECEF3",
        "short": "CEL"
      },
      {
        "name": "RSC Anderlecht",
        "path": "logos/50074.png",
        "color": "#5A2D81",
        "short": "AND"
      },
      {
        "name": "Sabah FC",
        "path": "logos/2609356.png",
        "color": "#003DA5",
        "short": "SAB"
      },
      {
        "name": "Samsunspor FC",
        "path": "logos/53060.png",
        "color": "#0057B8",
        "short": "SAM"
      },
      {
        "name": "SC Braga",
        "path": "logos/52336.png",
        "color": "#E41B17",
        "short": "BRA"
      },
      {
        "name": "SC Freiburg",
        "path": "logos/59880.png",
        "color": "#ED1C24",
        "short": "SCF"
      },
      {
        "name": "Servette FC",
        "path": "logos/50008.png",
        "color": "#6C1D45",
        "short": "SFC"
      },
      {
        "name": "Shelbourne FC",
        "path": "logos/53020.png",
        "color": "#D71920",
        "short": "SHE"
      },
      {
        "name": "SK Brann",
        "path": "logos/52770.png",
        "color": "#E2231A",
        "short": "BRN"
      },
      {
        "name": "SK Sigma Olomouc",
        "path": "logos/52905.png",
        "color": "#0057B8",
        "short": "SIG"
      },
      {
        "name": "SK Sturm Graz",
        "path": "logos/50111.png",
        "color": "#000000",
        "short": "STU"
      },
      {
        "name": "VfB Stuttgart",
        "path": "logos/50107.png",
        "color": "#ED1C24",
        "short": "VFB"
      },
      {
        "name": "Wolfsberger AC",
        "path": "logos/2603990.png",
        "color": "#000000",
        "short": "WOL"
      },
      {
        "name": "ŠK Slovan Bratislava",
        "path": "logos/52797.png",
        "color": "#6BC6FF",
        "short": "SLO"
      }
    ],
    "UEFA Champions League 2025/26": [
      {
        "name": "AFC Ajax",
        "path": "logos/50143.png",
        "color": "#D70C17",
        "short": "AJA"
      },
      {
        "name": "Arsenal FC",
        "path": "logos/52280.png",
        "color": "#EF0107",
        "short": "ARS"
      },
      {
        "name": "AS Monaco",
        "path": "logos/50023.png",
        "color": "#E40521",
        "short": "ASM"
      },
      {
        "name": "Atalanta BC",
        "path": "logos/52816.png",
        "color": "#00529F",
        "short": "ATA"
      },
      {
        "name": "Athletic Club",
        "path": "logos/50125.png",
        "color": "#D80C18",
        "short": "ATH"
      },
      {
        "name": "Atlético de Madrid",
        "path": "logos/50124.png",
        "color": "#C72C3B",
        "short": "ATL"
      },
      {
        "name": "Bayer 04 Leverkusen",
        "path": "logos/50109.png",
        "color": "#E32219",
        "short": "B04"
      },
      {
        "name": "Borussia Dortmund",
        "path": "logos/52758.png",
        "color": "#FDE100",
        "short": "BVB"
      },
      {
        "name": "Breiðablik",
        "path": "logos/71235.png",
        "color": "#007A33",
        "short": "BRE"
      },
      {
        "name": "Celtic FC",
        "path": "logos/50050.png",
        "color": "#009E60",
        "short": "CEL"
      },
      {
        "name": "Chelsea FC",
        "path": "logos/52914.png",
        "color": "#034694",
        "short": "CHE"
      },
      {
        "name": "Club Brugge KV",
        "path": "logos/50043.png",
        "color": "#0066CC",
        "short": "BRU"
      },
      {
        "name": "Eintracht Frankfurt",
        "path": "logos/50072.png",
        "color": "#E30613",
        "short": "SGE"
      },
      {
        "name": "F.C. Copenhagen",
        "path": "logos/52709.png",
        "color": "#0046AD",
        "short": "FCK"
      },
      {
        "name": "FC Barcelona",
        "path": "logos/50080.png",
        "color": "#A50044",
        "short": "BAR"
      },
      {
        "name": "FC Basel 1893",
        "path": "logos/59856.png",
        "color": "#DD052B",
        "short": "BAS"
      },
      {
        "name": "FC Bayern München",
        "path": "logos/50037.png",
        "color": "#DC052D",
        "short": "FCB"
      },
      {
        "name": "FC Differdange 03",
        "path": "logos/52309.png",
        "color": "#E41B17",
        "short": "DIF"
      },
      {
        "name": "FC Dinamo-Minsk",
        "path": "logos/50161.png",
        "color": "#0057B8",
        "short": "DIN"
      },
      {
        "name": "FC Drita",
        "path": "logos/2608290.png",
        "color": "#0057B8",
        "short": "DRI"
      },
      {
        "name": "FC Dynamo Kyiv",
        "path": "logos/52723.png",
        "color": "#0057B8",
        "short": "DYK"
      },
      {
        "name": "FC Iberia 1999 Tbilisi",
        "path": "logos/2605905.png",
        "color": "#0057B8",
        "short": "TBI"
      },
      {
        "name": "FC Internazionale Milano",
        "path": "logos/50138.png",
        "color": "#0046A8",
        "short": "INT"
      },
      {
        "name": "FC Kairat Almaty",
        "path": "logos/79970.png",
        "color": "#FFC72C",
        "short": "KAI"
      },
      {
        "name": "FC Milsami Orhei",
        "path": "logos/2600714.png",
        "color": "#E41B17",
        "short": "MIL"
      },
      {
        "name": "FC Noah",
        "path": "logos/2609987.png",
        "color": "#000000",
        "short": "NOA"
      },
      {
        "name": "FC RFS",
        "path": "logos/2609104.png",
        "color": "#0057B8",
        "short": "RFS"
      },
      {
        "name": "FC Salzburg",
        "path": "logos/50030.png",
        "color": "#D0021B",
        "short": "RBS"
      },
      {
        "name": "FC Viktoria Plzeň",
        "path": "logos/64388.png",
        "color": "#005BAA",
        "short": "PLZ"
      },
      {
        "name": "FCI Levadia Tallinn",
        "path": "logos/77482.png",
        "color": "#00843D",
        "short": "LVA"
      },
      {
        "name": "Fenerbahçe SK",
        "path": "logos/52692.png",
        "color": "#F4D30F",
        "short": "FEN"
      },
      {
        "name": "Ferencvárosi TC",
        "path": "logos/52298.png",
        "color": "#007A33",
        "short": "FTC"
      },
      {
        "name": "Feyenoord",
        "path": "logos/52749.png",
        "color": "#EE2E24",
        "short": "FEY"
      },
      {
        "name": "FK Bodø/Glimt",
        "path": "logos/59333.png",
        "color": "#F6E300",
        "short": "BOD"
      },
      {
        "name": "FK Budućnost Podgorica",
        "path": "logos/53078.png",
        "color": "#0057B8",
        "short": "BUD"
      },
      {
        "name": "FK Crvena Zvezda",
        "path": "logos/50069.png",
        "color": "#D71920",
        "short": "CRV"
      },
      {
        "name": "FK Žalgiris",
        "path": "logos/2602334.png",
        "color": "#007A33",
        "short": "ZAL"
      },
      {
        "name": "Fotbal Club FCSB",
        "path": "logos/50065.png",
        "color": "#E41B17",
        "short": "FCS"
      },
      {
        "name": "Galatasaray A.Ş.",
        "path": "logos/50067.png",
        "color": "#A32638",
        "short": "GAL"
      },
      {
        "name": "Hamrun Spartans F.C.",
        "path": "logos/50060.png",
        "color": "#E41B17",
        "short": "HAM"
      },
      {
        "name": "HNK Rijeka",
        "path": "logos/52356.png",
        "color": "#66C5E3",
        "short": "RIJ"
      },
      {
        "name": "HŠK Zrinjski Mostar",
        "path": "logos/73390.png",
        "color": "#D71920",
        "short": "ZRI"
      },
      {
        "name": "Inter Club d'Escaldes",
        "path": "logos/63401.png",
        "color": "#003DA5",
        "short": "ICE"
      },
      {
        "name": "Juventus",
        "path": "logos/50139.png",
        "color": "#000000",
        "short": "JUV"
      },
      {
        "name": "KF Egnatia",
        "path": "logos/88148.png",
        "color": "#0057B8",
        "short": "EGN"
      },
      {
        "name": "KF Shkëndija",
        "path": "logos/75807.png",
        "color": "#E41B17",
        "short": "SHK"
      },
      {
        "name": "KKS Lech Poznań",
        "path": "logos/64227.png",
        "color": "#0057B8",
        "short": "LPO"
      },
      {
        "name": "KuPS Kuopio",
        "path": "logos/52350.png",
        "color": "#FFDD00",
        "short": "KUO"
      },
      {
        "name": "Lincoln Red Imps FC",
        "path": "logos/2605572.png",
        "color": "#E41B17",
        "short": "LRI"
      },
      {
        "name": "Linfield FC",
        "path": "logos/50134.png",
        "color": "#0057B8",
        "short": "LIN"
      },
      {
        "name": "Liverpool FC",
        "path": "logos/7889.png",
        "color": "#C8102E",
        "short": "LIV"
      },
      {
        "name": "Maccabi Tel-Aviv FC",
        "path": "logos/57477.png",
        "color": "#FFD200",
        "short": "MTA"
      },
      {
        "name": "Malmö FF",
        "path": "logos/50152.png",
        "color": "#77C4F2",
        "short": "MFF"
      },
      {
        "name": "Manchester City",
        "path": "logos/52919.png",
        "color": "#6CABDD",
        "short": "MCI"
      },
      {
        "name": "Newcastle United FC",
        "path": "logos/59324.png",
        "color": "#241F20",
        "short": "NEW"
      },
      {
        "name": "NK Olimpija Ljubljana",
        "path": "logos/53081.png",
        "color": "#5BBD2B",
        "short": "OLJ"
      },
      {
        "name": "OGC Nice",
        "path": "logos/52355.png",
        "color": "#D61821",
        "short": "NIS"
      },
      {
        "name": "Olympiacos FC",
        "path": "logos/2610.png",
        "color": "#0057B8",
        "short": "OLY"
      },
      {
        "name": "Olympique de Marseille",
        "path": "logos/52748.png",
        "color": "#00AEEF",
        "short": "OM"
      },
      {
        "name": "Pafos FC",
        "path": "logos/2609532.png",
        "color": "#0057B8",
        "short": "PAF"
      },
      {
        "name": "Panathinaikos FC",
        "path": "logos/50084.png",
        "color": "#006847",
        "short": "PAN"
      },
      {
        "name": "Paris Saint-Germain",
        "path": "logos/52747.png",
        "color": "#004170",
        "short": "PSG"
      },
      {
        "name": "PFC Ludogorets 1945",
        "path": "logos/2603104.png",
        "color": "#007A33",
        "short": "LUD"
      },
      {
        "name": "PSV Eindhoven",
        "path": "logos/50062.png",
        "color": "#DD0B2D",
        "short": "PSV"
      },
      {
        "name": "Qarabağ FK",
        "path": "logos/60609.png",
        "color": "#1F1A17",
        "short": "QAR"
      },
      {
        "name": "R. Union Saint-Gilloise",
        "path": "logos/64125.png",
        "color": "#FFD100",
        "short": "USG"
      },
      {
        "name": "Rangers FC",
        "path": "logos/50121.png",
        "color": "#1F45FC",
        "short": "RAN"
      },
      {
        "name": "Real Madrid C.F.",
        "path": "logos/50051.png",
        "color": "#FEBE10",
        "short": "RMA"
      },
      {
        "name": "Servette FC",
        "path": "logos/50008.png",
        "color": "#6C1D45",
        "short": "SFC"
      },
      {
        "name": "Shelbourne FC",
        "path": "logos/53020.png",
        "color": "#D71920",
        "short": "SHE"
      },
      {
        "name": "SK Brann",
        "path": "logos/52770.png",
        "color": "#E2231A",
        "short": "BRN"
      },
      {
        "name": "SK Slavia Praha",
        "path": "logos/52498.png",
        "color": "#D70023",
        "short": "SLA"
      },
      {
        "name": "SK Sturm Graz",
        "path": "logos/50111.png",
        "color": "#000000",
        "short": "STU"
      },
      {
        "name": "SL Benfica",
        "path": "logos/50147.png",
        "color": "#D31145",
        "short": "BEN"
      },
      {
        "name": "Sporting Clube de Portugal",
        "path": "logos/50149.png",
        "color": "#008656",
        "short": "SCP"
      },
      {
        "name": "SSC Napoli",
        "path": "logos/50136.png",
        "color": "#00A3E0",
        "short": "NAP"
      },
      {
        "name": "The New Saints FC",
        "path": "logos/60457.png",
        "color": "#00843D",
        "short": "TNS"
      },
      {
        "name": "Tottenham Hotspur",
        "path": "logos/1652.png",
        "color": "#001C58",
        "short": "TOT"
      },
      {
        "name": "Villarreal CF",
        "path": "logos/70691.png",
        "color": "#FDE100",
        "short": "VIL"
      },
      {
        "name": "Virtus A.C. 1964",
        "path": "logos/64516.png",
        "color": "#1C3F95",
        "short": "VIR"
      },
      {
        "name": "Víkingur",
        "path": "logos/59325.png",
        "color": "#000000",
        "short": "VIK"
      },
      {
        "name": "ŠK Slovan Bratislava",
        "path": "logos/52797.png",
        "color": "#6BC6FF",
        "short": "SLO"
      }
    ],
    "UEFA Conference League 2025/26": [
      {
        "name": "1. FSV Mainz 05",
        "path": "logos/70853.png",
        "color": "#ED1C24",
        "short": "M05"
      },
      {
        "name": "Aberdeen FC",
        "path": "logos/50122.png",
        "color": "#CC0000",
        "short": "ABE"
      },
      {
        "name": "AC Sparta Praha",
        "path": "logos/50033.png",
        "color": "#6E0B14",
        "short": "SPA"
      },
      {
        "name": "ACF Fiorentina",
        "path": "logos/52817.png",
        "color": "#582C83",
        "short": "FIO"
      },
      {
        "name": "AEK Athens FC",
        "path": "logos/50129.png",
        "color": "#F6C700",
        "short": "AEK"
      },
      {
        "name": "AEK Larnaca FC",
        "path": "logos/54191.png",
        "color": "#00953A",
        "short": "AEL"
      },
      {
        "name": "AIK Stockholm",
        "path": "logos/52341.png",
        "color": "#000000",
        "short": "STO"
      },
      {
        "name": "Araz-Naxçıvan PFK",
        "path": "logos/2606484.png",
        "color": "#003DA5",
        "short": "NAX"
      },
      {
        "name": "Aris Limassol FC",
        "path": "logos/69529.png",
        "color": "#00953A",
        "short": "ARL"
      },
      {
        "name": "Aris Thessaloniki FC",
        "path": "logos/52949.png",
        "color": "#FFD100",
        "short": "ARI"
      },
      {
        "name": "Atlètic Club d'Escaldes",
        "path": "logos/88371.png",
        "color": "#003DA5",
        "short": "ACE"
      },
      {
        "name": "AZ Alkmaar",
        "path": "logos/52327.png",
        "color": "#D31145",
        "short": "AZA"
      },
      {
        "name": "Beitar Jerusalem FC",
        "path": "logos/59034.png",
        "color": "#0057B8",
        "short": "JER"
      },
      {
        "name": "Beşiktaş JK",
        "path": "logos/50157.png",
        "color": "#000000",
        "short": "BES"
      },
      {
        "name": "BFC Daugavpils",
        "path": "logos/2606321.png",
        "color": "#0057B8",
        "short": "DAU"
      },
      {
        "name": "Birkirkara FC",
        "path": "logos/62171.png",
        "color": "#EE1C25",
        "short": "BIR"
      },
      {
        "name": "BK Häcken",
        "path": "logos/69621.png",
        "color": "#F6E500",
        "short": "HAC"
      },
      {
        "name": "Breiðablik",
        "path": "logos/71235.png",
        "color": "#007A33",
        "short": "BRE"
      },
      {
        "name": "Brøndby IF",
        "path": "logos/50021.png",
        "color": "#FFD200",
        "short": "BRO"
      },
      {
        "name": "CD Santa Clara",
        "path": "logos/73927.png",
        "color": "#E41B17",
        "short": "CSC"
      },
      {
        "name": "CFR 1907 Cluj",
        "path": "logos/88131.png",
        "color": "#6E0B14",
        "short": "CLU"
      },
      {
        "name": "Cliftonville FC",
        "path": "logos/52991.png",
        "color": "#D71920",
        "short": "CLI"
      },
      {
        "name": "Crystal Palace FC",
        "path": "logos/52916.png",
        "color": "#1B458F",
        "short": "CRY"
      },
      {
        "name": "Dundee United FC",
        "path": "logos/50079.png",
        "color": "#F36F21",
        "short": "DUN"
      },
      {
        "name": "Dungannon Swifts FC",
        "path": "logos/85008.png",
        "color": "#0057B8",
        "short": "DUN"
      },
      {
        "name": "ETO FC Győr",
        "path": "logos/52287.png",
        "color": "#007A33",
        "short": "GYO"
      },
      {
        "name": "F91 Diddeleng",
        "path": "logos/59028.png",
        "color": "#0057B8",
        "short": "DID"
      },
      {
        "name": "FC Aktobe",
        "path": "logos/79973.png",
        "color": "#E41B17",
        "short": "AKT"
      },
      {
        "name": "FC Ararat-Armenia",
        "path": "logos/2610304.png",
        "color": "#0057B8",
        "short": "ARM"
      },
      {
        "name": "FC Astana",
        "path": "logos/2600605.png",
        "color": "#00B7EB",
        "short": "AST"
      },
      {
        "name": "FC Ballkani",
        "path": "logos/2609552.png",
        "color": "#FFDD00",
        "short": "BAL"
      },
      {
        "name": "FC Baník Ostrava",
        "path": "logos/51886.png",
        "color": "#00AEEF",
        "short": "BAN"
      },
      {
        "name": "FC Differdange 03",
        "path": "logos/52309.png",
        "color": "#E41B17",
        "short": "DIF"
      },
      {
        "name": "FC Dila Gori",
        "path": "logos/64467.png",
        "color": "#1B75BC",
        "short": "DIL"
      },
      {
        "name": "FC Dinamo City",
        "path": "logos/52792.png",
        "color": "#0057B8",
        "short": "DIN"
      },
      {
        "name": "FC Dinamo-Minsk",
        "path": "logos/50161.png",
        "color": "#0057B8",
        "short": "DIN"
      },
      {
        "name": "FC Drita",
        "path": "logos/2608290.png",
        "color": "#0057B8",
        "short": "DRI"
      },
      {
        "name": "FC Dynamo Brest",
        "path": "logos/64374.png",
        "color": "#0057B8",
        "short": "DYN"
      },
      {
        "name": "FC Dynamo Kyiv",
        "path": "logos/52723.png",
        "color": "#0057B8",
        "short": "DYK"
      },
      {
        "name": "FC Flora Tallinn",
        "path": "logos/59341.png",
        "color": "#00853E",
        "short": "FLO"
      },
      {
        "name": "FC Hegelmann",
        "path": "logos/2607108.png",
        "color": "#0057B8",
        "short": "HEG"
      },
      {
        "name": "FC Iberia 1999 Tbilisi",
        "path": "logos/2605905.png",
        "color": "#0057B8",
        "short": "TBI"
      },
      {
        "name": "FC Koper",
        "path": "logos/69617.png",
        "color": "#0057B8",
        "short": "KOP"
      },
      {
        "name": "FC Košice",
        "path": "logos/2610274.png",
        "color": "#0057B8",
        "short": "KOS"
      },
      {
        "name": "FC Lausanne-Sport",
        "path": "logos/4251.png",
        "color": "#005BAB",
        "short": "LSC"
      },
      {
        "name": "FC Lugano",
        "path": "logos/8538.png",
        "color": "#000000",
        "short": "LUG"
      },
      {
        "name": "FC Malisheva",
        "path": "logos/2611789.png",
        "color": "#0057B8",
        "short": "MAL"
      },
      {
        "name": "FC Milsami Orhei",
        "path": "logos/2600714.png",
        "color": "#E41B17",
        "short": "MIL"
      },
      {
        "name": "FC Neman Grodno",
        "path": "logos/59024.png",
        "color": "#007A33",
        "short": "GRO"
      },
      {
        "name": "FC Noah",
        "path": "logos/2609987.png",
        "color": "#000000",
        "short": "NOA"
      },
      {
        "name": "FC Olexandriya",
        "path": "logos/77928.png",
        "color": "#FFDD00",
        "short": "OLE"
      },
      {
        "name": "FC Ordabasy",
        "path": "logos/82825.png",
        "color": "#0067B1",
        "short": "ORD"
      },
      {
        "name": "FC Petrocub",
        "path": "logos/2607112.png",
        "color": "#1B75BC",
        "short": "PET"
      },
      {
        "name": "FC Polissya",
        "path": "logos/2613172.png",
        "color": "#007A33",
        "short": "POL"
      },
      {
        "name": "FC Prishtina",
        "path": "logos/2608287.png",
        "color": "#0057B8",
        "short": "PRI"
      },
      {
        "name": "FC Pyunik",
        "path": "logos/77431.png",
        "color": "#512D6D",
        "short": "PYU"
      },
      {
        "name": "FC RFS",
        "path": "logos/2609104.png",
        "color": "#0057B8",
        "short": "RFS"
      },
      {
        "name": "FC Santa Coloma",
        "path": "logos/62180.png",
        "color": "#0057B8",
        "short": "COL"
      },
      {
        "name": "FC Shakhtar Donetsk",
        "path": "logos/52707.png",
        "color": "#FF7F00",
        "short": "SHD"
      },
      {
        "name": "FC Sheriff Tiraspol",
        "path": "logos/69606.png",
        "color": "#FFD100",
        "short": "SHR"
      },
      {
        "name": "FC Sileks",
        "path": "logos/59871.png",
        "color": "#E41B17",
        "short": "SIL"
      },
      {
        "name": "FC Spartak Trnava",
        "path": "logos/52904.png",
        "color": "#0057B8",
        "short": "SPA"
      },
      {
        "name": "FC Torpedo Kutaisi",
        "path": "logos/64471.png",
        "color": "#000000",
        "short": "TOR"
      },
      {
        "name": "FC Torpedo-Belaz",
        "path": "logos/79551.png",
        "color": "#000000",
        "short": "TOR"
      },
      {
        "name": "FC UNA Strassen",
        "path": "logos/2603092.png",
        "color": "#D71920",
        "short": "STR"
      },
      {
        "name": "FC Universitatea Cluj",
        "path": "logos/53025.png",
        "color": "#000000",
        "short": "UNI"
      },
      {
        "name": "FC Urartu",
        "path": "logos/77866.png",
        "color": "#522398",
        "short": "URA"
      },
      {
        "name": "FC Vaduz",
        "path": "logos/57482.png",
        "color": "#E41B17",
        "short": "VAD"
      },
      {
        "name": "FC Vardar",
        "path": "logos/53080.png",
        "color": "#E41B17",
        "short": "VAR"
      },
      {
        "name": "FC Zimbru Chisinau",
        "path": "logos/59036.png",
        "color": "#009639",
        "short": "CHI"
      },
      {
        "name": "FCB Magpies",
        "path": "logos/2606279.png",
        "color": "#0057B8",
        "short": "MAG"
      },
      {
        "name": "FCI Levadia Tallinn",
        "path": "logos/77482.png",
        "color": "#00843D",
        "short": "LVA"
      },
      {
        "name": "FK Auda",
        "path": "logos/79556.png",
        "color": "#E41B17",
        "short": "AUD"
      },
      {
        "name": "FK Austria Wien",
        "path": "logos/50110.png",
        "color": "#4F2C82",
        "short": "FAK"
      },
      {
        "name": "FK Banga",
        "path": "logos/64348.png",
        "color": "#FF8800",
        "short": "BAN"
      },
      {
        "name": "FK Borac",
        "path": "logos/50104.png",
        "color": "#E41B17",
        "short": "BOR"
      },
      {
        "name": "FK Budućnost Podgorica",
        "path": "logos/53078.png",
        "color": "#0057B8",
        "short": "BUD"
      },
      {
        "name": "FK Dečić",
        "path": "logos/2600105.png",
        "color": "#0046AD",
        "short": "DEC"
      },
      {
        "name": "FK Kauno Žalgiris",
        "path": "logos/2605907.png",
        "color": "#007A33",
        "short": "ZAL"
      },
      {
        "name": "FK Novi Pazar",
        "path": "logos/2601090.png",
        "color": "#1B75BC",
        "short": "PAZ"
      },
      {
        "name": "FK Partizan Beograd",
        "path": "logos/50162.png",
        "color": "#000000",
        "short": "PAR"
      },
      {
        "name": "FK Partizani",
        "path": "logos/52876.png",
        "color": "#0057B8",
        "short": "PAR"
      },
      {
        "name": "FK Rabotnicki",
        "path": "logos/69601.png",
        "color": "#E41B17",
        "short": "RAB"
      },
      {
        "name": "FK Radnički 1923",
        "path": "logos/64289.png",
        "color": "#E41B17",
        "short": "RAD"
      },
      {
        "name": "FK Sarajevo",
        "path": "logos/64378.png",
        "color": "#6E0B14",
        "short": "SAR"
      },
      {
        "name": "FK Sutjeska-Nikšić",
        "path": "logos/73936.png",
        "color": "#0046AD",
        "short": "SUT"
      },
      {
        "name": "FK Žalgiris",
        "path": "logos/2602334.png",
        "color": "#007A33",
        "short": "ZAL"
      },
      {
        "name": "FK Željezničar",
        "path": "logos/64381.png",
        "color": "#1B75BC",
        "short": "ZEL"
      },
      {
        "name": "Floriana FC",
        "path": "logos/50092.png",
        "color": "#007A33",
        "short": "FLO"
      },
      {
        "name": "Fredrikstad FK",
        "path": "logos/64211.png",
        "color": "#0057B8",
        "short": "FRE"
      },
      {
        "name": "Hammarby IF",
        "path": "logos/52343.png",
        "color": "#007A33",
        "short": "HAM"
      },
      {
        "name": "Hamrun Spartans F.C.",
        "path": "logos/50060.png",
        "color": "#E41B17",
        "short": "HAM"
      },
      {
        "name": "Hapoel Beer-Sheva FC",
        "path": "logos/59340.png",
        "color": "#E4002B",
        "short": "HBS"
      },
      {
        "name": "Haverfordwest County AFC",
        "path": "logos/64283.png",
        "color": "#1F5AA6",
        "short": "HAV"
      },
      {
        "name": "Havnar Bóltfelag",
        "path": "logos/59025.png",
        "color": "#000000",
        "short": "BOL"
      },
      {
        "name": "Hibernian F.C.",
        "path": "logos/52821.png",
        "color": "#1E7F42",
        "short": "HIB"
      },
      {
        "name": "Hibernians FC",
        "path": "logos/52640.png",
        "color": "#000000",
        "short": "HIB"
      },
      {
        "name": "HJK Helsinki",
        "path": "logos/50052.png",
        "color": "#0046AD",
        "short": "HJK"
      },
      {
        "name": "HNK Hajduk Split",
        "path": "logos/52359.png",
        "color": "#003399",
        "short": "HAJ"
      },
      {
        "name": "HNK Rijeka",
        "path": "logos/52356.png",
        "color": "#66C5E3",
        "short": "RIJ"
      },
      {
        "name": "HŠK Zrinjski Mostar",
        "path": "logos/73390.png",
        "color": "#D71920",
        "short": "ZRI"
      },
      {
        "name": "Ilves Tampere",
        "path": "logos/2602511.png",
        "color": "#FFD100",
        "short": "TAM"
      },
      {
        "name": "Inter Club d'Escaldes",
        "path": "logos/63401.png",
        "color": "#003DA5",
        "short": "ICE"
      },
      {
        "name": "İstanbul Başakşehir FK",
        "path": "logos/2600288.png",
        "color": "#0057B8",
        "short": "BAS"
      },
      {
        "name": "Jagiellonia Białystok",
        "path": "logos/2600277.png",
        "color": "#FFD200",
        "short": "JAG"
      },
      {
        "name": "KA Akureyri",
        "path": "logos/52966.png",
        "color": "#003DA5",
        "short": "AKU"
      },
      {
        "name": "KF Egnatia",
        "path": "logos/88148.png",
        "color": "#0057B8",
        "short": "EGN"
      },
      {
        "name": "KF Shkëndija",
        "path": "logos/75807.png",
        "color": "#E41B17",
        "short": "SHK"
      },
      {
        "name": "KF Vllaznia",
        "path": "logos/52878.png",
        "color": "#0046AD",
        "short": "VLL"
      },
      {
        "name": "KKS Lech Poznań",
        "path": "logos/64227.png",
        "color": "#0057B8",
        "short": "LPO"
      },
      {
        "name": "KuPS Kuopio",
        "path": "logos/52350.png",
        "color": "#FFDD00",
        "short": "KUO"
      },
      {
        "name": "KÍ Klaksvík",
        "path": "logos/57475.png",
        "color": "#003DA5",
        "short": "KIK"
      },
      {
        "name": "La Fiorita 1967",
        "path": "logos/64508.png",
        "color": "#1C3F95",
        "short": "FIO"
      },
      {
        "name": "Larne FC",
        "path": "logos/85009.png",
        "color": "#E2231A",
        "short": "LAR"
      },
      {
        "name": "Legia Warszawa",
        "path": "logos/50146.png",
        "color": "#006341",
        "short": "LEG"
      },
      {
        "name": "Lincoln Red Imps FC",
        "path": "logos/2605572.png",
        "color": "#E41B17",
        "short": "LRI"
      },
      {
        "name": "Linfield FC",
        "path": "logos/50134.png",
        "color": "#0057B8",
        "short": "LIN"
      },
      {
        "name": "Maccabi Haifa FC",
        "path": "logos/59045.png",
        "color": "#008651",
        "short": "MHA"
      },
      {
        "name": "MŠK Žilina",
        "path": "logos/61601.png",
        "color": "#FFE000",
        "short": "ZIL"
      },
      {
        "name": "NK Celje",
        "path": "logos/59030.png",
        "color": "#0057B8",
        "short": "NCE"
      },
      {
        "name": "NK Maribor",
        "path": "logos/57490.png",
        "color": "#582C83",
        "short": "MBR"
      },
      {
        "name": "NK Olimpija Ljubljana",
        "path": "logos/53081.png",
        "color": "#5BBD2B",
        "short": "OLJ"
      },
      {
        "name": "NK Varaždin",
        "path": "logos/60514.png",
        "color": "#0057B8",
        "short": "VAR"
      },
      {
        "name": "NSÍ Runavík",
        "path": "logos/64150.png",
        "color": "#FFDD00",
        "short": "RUN"
      },
      {
        "name": "Nõmme Kalju FC",
        "path": "logos/2600371.png",
        "color": "#F50087",
        "short": "NOM"
      },
      {
        "name": "Omonoia FC",
        "path": "logos/50077.png",
        "color": "#008651",
        "short": "OMO"
      },
      {
        "name": "Paide Linnameeskond",
        "path": "logos/2600598.png",
        "color": "#0057B8",
        "short": "LIN"
      },
      {
        "name": "Paksi FC",
        "path": "logos/93452.png",
        "color": "#00843D",
        "short": "PAK"
      },
      {
        "name": "Penybont FC",
        "path": "logos/2606314.png",
        "color": "#1F5AA6",
        "short": "PEN"
      },
      {
        "name": "PFC Arda Kardzhali 1924",
        "path": "logos/2610060.png",
        "color": "#0057B8",
        "short": "KAR"
      },
      {
        "name": "PFC Cherno More",
        "path": "logos/75787.png",
        "color": "#0057B8",
        "short": "CHE"
      },
      {
        "name": "PFC Levski Sofia",
        "path": "logos/50044.png",
        "color": "#0057B8",
        "short": "LEV"
      },
      {
        "name": "PFC Zire",
        "path": "logos/2607480.png",
        "color": "#003DA5",
        "short": "ZIR"
      },
      {
        "name": "Puskás Akadémia FC",
        "path": "logos/2605472.png",
        "color": "#1B75BC",
        "short": "AKA"
      },
      {
        "name": "R. Charleroi SC",
        "path": "logos/52886.png",
        "color": "#000000",
        "short": "CHA"
      },
      {
        "name": "Racing Club de Strasbourg Alsace",
        "path": "logos/59857.png",
        "color": "#0057B8",
        "short": "STR"
      },
      {
        "name": "Racing FC Union Luxembourg",
        "path": "logos/88135.png",
        "color": "#0057B8",
        "short": "RFC"
      },
      {
        "name": "Raków Częstochowa",
        "path": "logos/60566.png",
        "color": "#E41B17",
        "short": "RAK"
      },
      {
        "name": "Rayo Vallecano de Madrid",
        "path": "logos/74070.png",
        "color": "#E4161C",
        "short": "RAY"
      },
      {
        "name": "Riga FC",
        "path": "logos/2607924.png",
        "color": "#00B5E2",
        "short": "RIG"
      },
      {
        "name": "Rosenborg BK",
        "path": "logos/52806.png",
        "color": "#000000",
        "short": "RBK"
      },
      {
        "name": "RSC Anderlecht",
        "path": "logos/50074.png",
        "color": "#5A2D81",
        "short": "AND"
      },
      {
        "name": "S.S. Tre Fiori F.C.",
        "path": "logos/64514.png",
        "color": "#0057B8",
        "short": "SST"
      },
      {
        "name": "Sabah FC",
        "path": "logos/2609356.png",
        "color": "#003DA5",
        "short": "SAB"
      },
      {
        "name": "Samsunspor FC",
        "path": "logos/53060.png",
        "color": "#0057B8",
        "short": "SAM"
      },
      {
        "name": "Servette FC",
        "path": "logos/50008.png",
        "color": "#6C1D45",
        "short": "SFC"
      },
      {
        "name": "Shamrock Rovers FC",
        "path": "logos/52381.png",
        "color": "#0057B8",
        "short": "SHA"
      },
      {
        "name": "Shelbourne FC",
        "path": "logos/53020.png",
        "color": "#D71920",
        "short": "SHE"
      },
      {
        "name": "Silkeborg IF",
        "path": "logos/52912.png",
        "color": "#0057B8",
        "short": "SIL"
      },
      {
        "name": "SJK Seinäjoki",
        "path": "logos/2602520.png",
        "color": "#0057B8",
        "short": "SEI"
      },
      {
        "name": "SK Rapid",
        "path": "logos/50042.png",
        "color": "#0057B8",
        "short": "RAP"
      },
      {
        "name": "SK Sigma Olomouc",
        "path": "logos/52905.png",
        "color": "#0057B8",
        "short": "SIG"
      },
      {
        "name": "Spaeri FC",
        "path": "logos/2611621.png",
        "color": "#0057B8",
        "short": "SPA"
      },
      {
        "name": "St Joseph's FC",
        "path": "logos/2605575.png",
        "color": "#0057B8",
        "short": "JOS"
      },
      {
        "name": "St. Patrick's Athletic",
        "path": "logos/50133.png",
        "color": "#0057B8",
        "short": "ATH"
      },
      {
        "name": "The New Saints FC",
        "path": "logos/60457.png",
        "color": "#00843D",
        "short": "TNS"
      },
      {
        "name": "Universitatea Craiova",
        "path": "logos/2606501.png",
        "color": "#0057B8",
        "short": "UNI"
      },
      {
        "name": "Valur",
        "path": "logos/50057.png",
        "color": "#0057B8",
        "short": "VAL"
      },
      {
        "name": "Viking FK",
        "path": "logos/52319.png",
        "color": "#0057B8",
        "short": "VIK"
      },
      {
        "name": "Virtus A.C. 1964",
        "path": "logos/64516.png",
        "color": "#1C3F95",
        "short": "VIR"
      },
      {
        "name": "Víkingur",
        "path": "logos/59325.png",
        "color": "#000000",
        "short": "VIK"
      },
      {
        "name": "Víkingur Reykjavík",
        "path": "logos/52697.png",
        "color": "#0057B8",
        "short": "REY"
      },
      {
        "name": "Wolfsberger AC",
        "path": "logos/2603990.png",
        "color": "#000000",
        "short": "WOL"
      },
      {
        "name": "ŠK Slovan Bratislava",
        "path": "logos/52797.png",
        "color": "#6BC6FF",
        "short": "SLO"
      }
    ],
    "Premier League": [
      {
        "name": "AFC Bournemouth",
        "path": "logos/England - Premier League/AFC Bournemouth.png",
        "color": "#DA291C",
        "short": "BOU"
      },
      {
        "name": "Arsenal FC",
        "path": "logos/England - Premier League/Arsenal FC.png",
        "color": "#EF0107",
        "short": "ARS"
      },
      {
        "name": "Aston Villa",
        "path": "logos/England - Premier League/Aston Villa.png",
        "color": "#670E36",
        "short": "AVL"
      },
      {
        "name": "Brentford FC",
        "path": "logos/England - Premier League/Brentford FC.png",
        "color": "#E30613",
        "short": "BRE"
      },
      {
        "name": "Brighton & Hove Albion",
        "path": "logos/England - Premier League/Brighton & Hove Albion.png",
        "color": "#0057B8",
        "short": "BHA"
      },
      {
        "name": "Burnley FC",
        "path": "logos/England - Premier League/Burnley FC.png",
        "color": "#6C1D45",
        "short": "BUR"
      },
      {
        "name": "Chelsea FC",
        "path": "logos/England - Premier League/Chelsea FC.png",
        "color": "#034694",
        "short": "CHE"
      },
      {
        "name": "Crystal Palace",
        "path": "logos/England - Premier League/Crystal Palace.png",
        "color": "#1B458F",
        "short": "CRY"
      },
      {
        "name": "Everton FC",
        "path": "logos/England - Premier League/Everton FC.png",
        "color": "#003399",
        "short": "EVE"
      },
      {
        "name": "Fulham FC",
        "path": "logos/England - Premier League/Fulham FC.png",
        "color": "#000000",
        "short": "FUL"
      },
      {
        "name": "Leeds United",
        "path": "logos/England - Premier League/Leeds United.png",
        "color": "#1D428A",
        "short": "LEE"
      },
      {
        "name": "Liverpool FC",
        "path": "logos/England - Premier League/Liverpool FC.png",
        "color": "#C8102E",
        "short": "LIV"
      },
      {
        "name": "Manchester City",
        "path": "logos/England - Premier League/Manchester City.png",
        "color": "#6CABDD",
        "short": "MCI"
      },
      {
        "name": "Manchester United",
        "path": "logos/England - Premier League/Manchester United.png",
        "color": "#DA020E",
        "short": "MUN"
      },
      {
        "name": "Newcastle United",
        "path": "logos/England - Premier League/Newcastle United.png",
        "color": "#241F20",
        "short": "NEW"
      },
      {
        "name": "Nottingham Forest",
        "path": "logos/England - Premier League/Nottingham Forest.png",
        "color": "#DD0000",
        "short": "NFO"
      },
      {
        "name": "Sunderland AFC",
        "path": "logos/England - Premier League/Sunderland AFC.png",
        "color": "#E41B17",
        "short": "SUN"
      },
      {
        "name": "Tottenham Hotspur",
        "path": "logos/England - Premier League/Tottenham Hotspur.png",
        "color": "#132257",
        "short": "TOT"
      },
      {
        "name": "West Ham United",
        "path": "logos/England - Premier League/West Ham United.png",
        "color": "#7A263A",
        "short": "WHU"
      },
      {
        "name": "Wolverhampton Wanderers",
        "path": "logos/England - Premier League/Wolverhampton Wanderers.png",
        "color": "#FDB913",
        "short": "WOL"
      }
    ],
    "Ligue 1": [
      {
        "name": "AJ Auxerre",
        "path": "logos/France - Ligue 1/AJ Auxerre.png",
        "color": "#1B6ED0",
        "short": "AJA"
      },
      {
        "name": "Angers SCO",
        "path": "logos/France - Ligue 1/Angers SCO.png",
        "color": "#000000",
        "short": "ANG"
      },
      {
        "name": "AS Monaco",
        "path": "logos/France - Ligue 1/AS Monaco.png",
        "color": "#E60026",
        "short": "ASM"
      },
      {
        "name": "FC Lorient",
        "path": "logos/France - Ligue 1/FC Lorient.png",
        "color": "#F36F21",
        "short": "FCL"
      },
      {
        "name": "FC Metz",
        "path": "logos/France - Ligue 1/FC Metz.png",
        "color": "#7A0026",
        "short": "MET"
      },
      {
        "name": "FC Nantes",
        "path": "logos/France - Ligue 1/FC Nantes.png",
        "color": "#FFD800",
        "short": "FCN"
      },
      {
        "name": "FC Toulouse",
        "path": "logos/France - Ligue 1/FC Toulouse.png",
        "color": "#512D6D",
        "short": "TOU"
      },
      {
        "name": "Le Havre AC",
        "path": "logos/France - Ligue 1/Le Havre AC.png",
        "color": "#1E2E5B",
        "short": "HAC"
      },
      {
        "name": "LOSC Lille",
        "path": "logos/France - Ligue 1/LOSC Lille.png",
        "color": "#D00027",
        "short": "LIL"
      },
      {
        "name": "OGC Nice",
        "path": "logos/France - Ligue 1/OGC Nice.png",
        "color": "#000000",
        "short": "NCE"
      },
      {
        "name": "Olympique Lyon",
        "path": "logos/France - Ligue 1/Olympique Lyon.png",
        "color": "#002B5C",
        "short": "OL"
      },
      {
        "name": "Olympique Marseille",
        "path": "logos/France - Ligue 1/Olympique Marseille.png",
        "color": "#0093D0",
        "short": "OM"
      },
      {
        "name": "Paris FC",
        "path": "logos/France - Ligue 1/Paris FC.png",
        "color": "#002E6D",
        "short": "PFC"
      },
      {
        "name": "Paris Saint-Germain",
        "path": "logos/France - Ligue 1/Paris Saint-Germain.png",
        "color": "#004170",
        "short": "PSG"
      },
      {
        "name": "RC Lens",
        "path": "logos/France - Ligue 1/RC Lens.png",
        "color": "#F6D417",
        "short": "RCL"
      },
      {
        "name": "RC Strasbourg Alsace",
        "path": "logos/France - Ligue 1/RC Strasbourg Alsace.png",
        "color": "#0055A4",
        "short": "RCS"
      },
      {
        "name": "Stade Brestois 29",
        "path": "logos/France - Ligue 1/Stade Brestois 29.png",
        "color": "#E5202A",
        "short": "BRE"
      },
      {
        "name": "Stade Rennais FC",
        "path": "logos/France - Ligue 1/Stade Rennais FC.png",
        "color": "#D20000",
        "short": "REN"
      }
    ],
    "Bundesliga": [
      {
        "name": "1.FC Heidenheim 1846",
        "path": "logos/Germany - Bundesliga/1.FC Heidenheim 1846.png",
        "color": "#D00027",
        "short": "FCH"
      },
      {
        "name": "1.FC Köln",
        "path": "logos/Germany - Bundesliga/1.FC Koln.png",
        "color": "#E30613",
        "short": "KOE"
      },
      {
        "name": "1.FC Union Berlin",
        "path": "logos/Germany - Bundesliga/1.FC Union Berlin.png",
        "color": "#DD0000",
        "short": "FCU"
      },
      {
        "name": "1.FSV Mainz 05",
        "path": "logos/Germany - Bundesliga/1.FSV Mainz 05.png",
        "color": "#C30C2B",
        "short": "M05"
      },
      {
        "name": "Bayer 04 Leverkusen",
        "path": "logos/Germany - Bundesliga/Bayer 04 Leverkusen.png",
        "color": "#E32219",
        "short": "B04"
      },
      {
        "name": "Bayern Munich",
        "path": "logos/Germany - Bundesliga/Bayern Munich.png",
        "color": "#DC052D",
        "short": "FCB"
      },
      {
        "name": "Borussia Dortmund",
        "path": "logos/Germany - Bundesliga/Borussia Dortmund.png",
        "color": "#FDE100",
        "short": "BVB"
      },
      {
        "name": "Borussia Mönchengladbach",
        "path": "logos/Germany - Bundesliga/Borussia Monchengladbach.png",
        "color": "#00A652",
        "short": "BMG"
      },
      {
        "name": "Eintracht Frankfurt",
        "path": "logos/Germany - Bundesliga/Eintracht Frankfurt.png",
        "color": "#E1000F",
        "short": "SGE"
      },
      {
        "name": "FC Augsburg",
        "path": "logos/Germany - Bundesliga/FC Augsburg.png",
        "color": "#006F35",
        "short": "FCA"
      },
      {
        "name": "FC St. Pauli",
        "path": "logos/Germany - Bundesliga/FC St. Pauli.png",
        "color": "#4E3B31",
        "short": "STP"
      },
      {
        "name": "Hamburger SV",
        "path": "logos/Germany - Bundesliga/Hamburger SV.png",
        "color": "#00539F",
        "short": "HSV"
      },
      {
        "name": "RB Leipzig",
        "path": "logos/Germany - Bundesliga/RB Leipzig.png",
        "color": "#D41D12",
        "short": "RBL"
      },
      {
        "name": "SC Freiburg",
        "path": "logos/Germany - Bundesliga/SC Freiburg.png",
        "color": "#C00000",
        "short": "SCF"
      },
      {
        "name": "SV Werder Bremen",
        "path": "logos/Germany - Bundesliga/SV Werder Bremen.png",
        "color": "#1C8D36",
        "short": "SVW"
      },
      {
        "name": "TSG 1899 Hoffenheim",
        "path": "logos/Germany - Bundesliga/TSG 1899 Hoffenheim.png",
        "color": "#24549F",
        "short": "TSG"
      },
      {
        "name": "VfB Stuttgart",
        "path": "logos/Germany - Bundesliga/VfB Stuttgart.png",
        "color": "#E30B17",
        "short": "VFB"
      },
      {
        "name": "VfL Wolfsburg",
        "path": "logos/Germany - Bundesliga/VfL Wolfsburg.png",
        "color": "#49A942",
        "short": "WOB"
      }
    ],
    "Fortuna Liga": [
      {
        "name": "1.FC Slovacko",
        "path": "logos/Czech Republic - Chance Liga/1.FC Slovacko.png",
        "color": "#002B5C",
        "short": "SLO"
      },
      {
        "name": "AC Sparta Prague",
        "path": "logos/Czech Republic - Chance Liga/AC Sparta Prague.png",
        "color": "#6E0A1E",
        "short": "SPA"
      },
      {
        "name": "Bohemians Prague 1905",
        "path": "logos/Czech Republic - Chance Liga/Bohemians Prague 1905.png",
        "color": "#00A859",
        "short": "BOH"
      },
      {
        "name": "FC Banik Ostrava",
        "path": "logos/Czech Republic - Chance Liga/FC Banik Ostrava.png",
        "color": "#00AEEF",
        "short": "BAN"
      },
      {
        "name": "FC Hradec Kralove",
        "path": "logos/Czech Republic - Chance Liga/FC Hradec Kralove.png",
        "color": "#000000",
        "short": "HKR"
      },
      {
        "name": "FC Slovan Liberec",
        "path": "logos/Czech Republic - Chance Liga/FC Slovan Liberec.png",
        "color": "#0054A6",
        "short": "LIB"
      },
      {
        "name": "FC Viktoria Plzen",
        "path": "logos/Czech Republic - Chance Liga/FC Viktoria Plzen.png",
        "color": "#0056A3",
        "short": "PLZ"
      },
      {
        "name": "FC Zlin",
        "path": "logos/Czech Republic - Chance Liga/FC Zlin.png",
        "color": "#FFD200",
        "short": "ZLN"
      },
      {
        "name": "FK Dukla Prague",
        "path": "logos/Czech Republic - Chance Liga/FK Dukla Prague.png",
        "color": "#7B1E22",
        "short": "DUK"
      },
      {
        "name": "FK Jablonec",
        "path": "logos/Czech Republic - Chance Liga/FK Jablonec.png",
        "color": "#0B9444",
        "short": "JAB"
      },
      {
        "name": "FK Mlada Boleslav",
        "path": "logos/Czech Republic - Chance Liga/FK Mlada Boleslav.png",
        "color": "#00A0E3",
        "short": "MBA"
      },
      {
        "name": "FK Pardubice",
        "path": "logos/Czech Republic - Chance Liga/FK Pardubice.png",
        "color": "#E10600",
        "short": "PAR"
      },
      {
        "name": "FK Teplice",
        "path": "logos/Czech Republic - Chance Liga/FK Teplice.png",
        "color": "#FFD600",
        "short": "TEP"
      },
      {
        "name": "MFK Karvina",
        "path": "logos/Czech Republic - Chance Liga/MFK Karvina.png",
        "color": "#008F4B",
        "short": "KAR"
      },
      {
        "name": "SK Sigma Olomouc",
        "path": "logos/Czech Republic - Chance Liga/SK Sigma Olomouc.png",
        "color": "#0054A6",
        "short": "OLO"
      },
      {
        "name": "SK Slavia Prague",
        "path": "logos/Czech Republic - Chance Liga/SK Slavia Prague.png",
        "color": "#D22630",
        "short": "SLA"
      }
    ],
    "La Liga": [
      {
        "name": "Athletic Bilbao",
        "path": "logos/Spain - LaLiga/Athletic Bilbao.png",
        "color": "#EE2737",
        "short": "ATH"
      },
      {
        "name": "Atlético de Madrid",
        "path": "logos/Spain - LaLiga/Atletico de Madrid.png",
        "color": "#C72C2C",
        "short": "ATM"
      },
      {
        "name": "CA Osasuna",
        "path": "logos/Spain - LaLiga/CA Osasuna.png",
        "color": "#D0021B",
        "short": "OSA"
      },
      {
        "name": "Celta de Vigo",
        "path": "logos/Spain - LaLiga/Celta de Vigo.png",
        "color": "#8ECEF2",
        "short": "CEL"
      },
      {
        "name": "Deportivo Alavés",
        "path": "logos/Spain - LaLiga/Deportivo Alaves.png",
        "color": "#1E6BD6",
        "short": "ALA"
      },
      {
        "name": "Elche CF",
        "path": "logos/Spain - LaLiga/Elche CF.png",
        "color": "#0B6E3B",
        "short": "ELC"
      },
      {
        "name": "FC Barcelona",
        "path": "logos/Spain - LaLiga/FC Barcelona.png",
        "color": "#A50044",
        "short": "BAR"
      },
      {
        "name": "Getafe CF",
        "path": "logos/Spain - LaLiga/Getafe CF.png",
        "color": "#005CB9",
        "short": "GET"
      },
      {
        "name": "Girona FC",
        "path": "logos/Spain - LaLiga/Girona FC.png",
        "color": "#E50021",
        "short": "GIR"
      },
      {
        "name": "Levante UD",
        "path": "logos/Spain - LaLiga/Levante UD.png",
        "color": "#1B3A68",
        "short": "LEV"
      },
      {
        "name": "Rayo Vallecano",
        "path": "logos/Spain - LaLiga/Rayo Vallecano.png",
        "color": "#D50032",
        "short": "RAY"
      },
      {
        "name": "RCD Espanyol Barcelona",
        "path": "logos/Spain - LaLiga/RCD Espanyol Barcelona.png",
        "color": "#00529F",
        "short": "ESP"
      },
      {
        "name": "RCD Mallorca",
        "path": "logos/Spain - LaLiga/RCD Mallorca.png",
        "color": "#D6001C",
        "short": "MLL"
      },
      {
        "name": "Real Betis Balompié",
        "path": "logos/Spain - LaLiga/Real Betis Balompie.png",
        "color": "#128A2E",
        "short": "RBB"
      },
      {
        "name": "Real Madrid",
        "path": "logos/Spain - LaLiga/Real Madrid.png",
        "color": "#FEBE10",
        "short": "RMA"
      },
      {
        "name": "Real Oviedo",
        "path": "logos/Spain - LaLiga/Real Oviedo.png",
        "color": "#0032A0",
        "short": "OVI"
      },
      {
        "name": "Real Sociedad",
        "path": "logos/Spain - LaLiga/Real Sociedad.png",
        "color": "#006BB6",
        "short": "RSO"
      },
      {
        "name": "Sevilla FC",
        "path": "logos/Spain - LaLiga/Sevilla FC.png",
        "color": "#DC0000",
        "short": "SEV"
      },
      {
        "name": "Valencia CF",
        "path": "logos/Spain - LaLiga/Valencia CF.png",
        "color": "#F19A1A",
        "short": "VAL"
      },
      {
        "name": "Villarreal CF",
        "path": "logos/Spain - LaLiga/Villarreal CF.png",
        "color": "#FDE100",
        "short": "VIL"
      }
    ],
    "Serie A": [
      {
        "name": "AC Milan",
        "path": "logos/Italy - Serie A/AC Milan.png",
        "color": "#AC1A2F",
        "short": "MIL"
      },
      {
        "name": "ACF Fiorentina",
        "path": "logos/Italy - Serie A/ACF Fiorentina.png",
        "color": "#582C83",
        "short": "FIO"
      },
      {
        "name": "AS Roma",
        "path": "logos/Italy - Serie A/AS Roma.png",
        "color": "#8E1F1E",
        "short": "ROM"
      },
      {
        "name": "Atalanta BC",
        "path": "logos/Italy - Serie A/Atalanta BC.png",
        "color": "#00539F",
        "short": "ATA"
      },
      {
        "name": "Bologna FC 1909",
        "path": "logos/Italy - Serie A/Bologna FC 1909.png",
        "color": "#001A4B",
        "short": "BOL"
      },
      {
        "name": "Cagliari Calcio",
        "path": "logos/Italy - Serie A/Cagliari Calcio.png",
        "color": "#1E3050",
        "short": "CAG"
      },
      {
        "name": "Como 1907",
        "path": "logos/Italy - Serie A/Como 1907.png",
        "color": "#004D9D",
        "short": "COM"
      },
      {
        "name": "Genoa CFC",
        "path": "logos/Italy - Serie A/Genoa CFC.png",
        "color": "#AE0000",
        "short": "GEN"
      },
      {
        "name": "Hellas Verona",
        "path": "logos/Italy - Serie A/Hellas Verona.png",
        "color": "#F7D117",
        "short": "VER"
      },
      {
        "name": "Inter Milan",
        "path": "logos/Italy - Serie A/Inter Milan.png",
        "color": "#0066B1",
        "short": "INT"
      },
      {
        "name": "Juventus FC",
        "path": "logos/Italy - Serie A/Juventus FC.png",
        "color": "#000000",
        "short": "JUV"
      },
      {
        "name": "Parma Calcio 1913",
        "path": "logos/Italy - Serie A/Parma Calcio 1913.png",
        "color": "#FFD100",
        "short": "PAR"
      },
      {
        "name": "Pisa Sporting Club",
        "path": "logos/Italy - Serie A/Pisa Sporting Club.png",
        "color": "#003DA5",
        "short": "PIS"
      },
      {
        "name": "SS Lazio",
        "path": "logos/Italy - Serie A/SS Lazio.png",
        "color": "#55C0EB",
        "short": "LAZ"
      },
      {
        "name": "SSC Napoli",
        "path": "logos/Italy - Serie A/SSC Napoli.png",
        "color": "#0055A5",
        "short": "NAP"
      },
      {
        "name": "Torino FC",
        "path": "logos/Italy - Serie A/Torino FC.png",
        "color": "#7A1E24",
        "short": "TOR"
      },
      {
        "name": "Udinese Calcio",
        "path": "logos/Italy - Serie A/Udinese Calcio.png",
        "color": "#000000",
        "short": "UDI"
      },
      {
        "name": "US Cremonese",
        "path": "logos/Italy - Serie A/US Cremonese.png",
        "color": "#D0021B",
        "short": "CRE"
      },
      {
        "name": "US Lecce",
        "path": "logos/Italy - Serie A/US Lecce.png",
        "color": "#D00027",
        "short": "LEC"
      },
      {
        "name": "US Sassuolo",
        "path": "logos/Italy - Serie A/US Sassuolo.png",
        "color": "#009739",
        "short": "SAS"
      }
    ]
  }

VÝSTUPNÍ JSON — PŘESNÁ STRUKTURA (vracej jen JSON):
{
  "meta": {
    "generatedAt": "ISO-8601",
    "aspectRatio": "9:16" | "4:5",
    "league": "ALL" | "<název ligy z teamsData>",
    "background": null | { "name": "<soubor.ext>", "dataUrl": "data:image/...;base64,..." }
  },
  "teams": {
    "home": {
      "selectedName": "<název týmu ze seznamu nebo null>",
      "fromDb": true | false,
      "db": null | { "name": "<přesně z teamsData>", "short": "<zkratka nebo null>", "color": "<hex nebo null>", "logoPath": "<cesta nebo null>", "league": "<liga>" },
      "useCustom": true | false,
      "customName": "<když useCustom=true>" | null,
      "displayName": "<jméno na zobrazení>",
      "color": "<hex barva domácích>"
    },
    "away": { /* stejná struktura jako home */ }
  },
  "score": { "home": <int>, "away": <int> },
  "statusText": "<LIVE | HALF-TIME | FULL TIME | ...>",
  "options": { "useShortNames": true | false },
  "events": [
    { "id":"<string>", "type":"goal|ownGoal|yellow|twoYellow|red|sub|pen", "team":"home|away", "player":"<text>", "minute":<int>, "extra":"<'+X' nebo ''>" }
  ]
}

PRAVIDLA MAPOVÁNÍ:
1) Z Livesportu načti: soutěž/ligu, oba týmy, finální/průběžné skóre, status, časovou osu (góly, OG, penalty, karty, druhé žluté, červené, střídání s formátem 'A. Hráč → B. Hráč').
2) Název ligy:
   - Pokud oba týmy pochází z jedné ligy v teamsData: použij tuto ligu.
   - Pokud pochází z různých lig (nebo jeden není v DB): nastav "ALL".
3) Mapování týmů:
   - Pokus se spárovat přesně podle `name` v teamsData (pozor na diakritiku a varianty názvů).
   - Když najdeš shodu: `fromDb=true` a vyplň `db` + `selectedName` + `color` = `db.color`.
   - Když neshoda: `useCustom=true`, `customName` = název z Livesportu, `fromDb=false`, `db=null`, `color`="#ffffff".
4) displayName:
   - Pokud `useShortNames=true` a `db.short` existuje → použij zkratku.
   - Jinak `customName` (je-li `useCustom=true`), jinak `db.name` / `selectedName`.
5) events:
   - chci získat pouze příjmení hráče.
   - `minute`: základní minuta (např. 45), `extra`: "X" pro nastavení (např. 45+2 → minute=45, extra="2").
   - Typy: goal (gól), ownGoal (vlastní), pen (gól z penalty), yellow, twoYellow, red, sub (střídání).
6) statusText: určuj z Livesportu (např. LIVE, HALF-TIME, FULL TIME).
7) aspectRatio nastav defaultně "9:16". background vždy `null`.
8) Vrať POUZE JSON podle schématu výše — bez dalšího textu, bez komentářů, bez odkazů.
