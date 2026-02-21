export const dummyThingsApiResponse = {
  status: "Success",
  message: "Successfully fetched all things",
  data: {
    pages: 1,
    things: [
      // HYD — POLYGON DIVISION (VALID AREA)
      {
        thingName: "hyd_1",
        displayName: "Hyd 1",
        meta: { zone: "HYD", division: "Khairatabad" },
        properties: { latitude: 17.390, longitude: 78.440 }
      },
      {
        thingName: "hyd_2",
        displayName: "Hyd 2",
        meta: { zone: "HYD", division: "Khairatabad" },
        properties: { latitude: 17.405, longitude: 78.455 }
      },
      {
        thingName: "hyd_3",
        displayName: "Hyd 3",
        meta: { zone: "HYD", division: "Khairatabad" },
        properties: { latitude: 17.398, longitude: 78.430 }
      },
      {
        thingName: "hyd_4",
        displayName: "Hyd 4",
        meta: { zone: "HYD", division: "Khairatabad" },
        properties: { latitude: 17.410, longitude: 78.440 }
      },
      {
        thingName: "hyd_5",
        displayName: "Hyd 5",
        meta: { zone: "HYD", division: "Khairatabad" },
        properties: { latitude: 17.405, longitude: 78.470 }
      },
      {
        thingName: "hyd_6",
        displayName: "Hyd 6",
        meta: { zone: "HYD", division: "Khairatabad" },
        properties: { latitude: 17.398, longitude: 78.490 }
      },
      {
        thingName: "hyd_7",
        displayName: "Hyd 7",
        meta: { zone: "HYD", division: "Khairatabad" },
        properties: { latitude: 17.404, longitude: 78.440 }
      },
      {
        thingName: "hyd_8",
        displayName: "Hyd 8",
        meta: { zone: "HYD", division: "Mehdipatnam" },
        properties: { latitude: 17.409, longitude: 78.430 }
      },
      {
        thingName: "hyd_9",
        displayName: "Hyd 9",
        meta: { zone: "HYD", division: "Mehdipatnam" },
        properties: { latitude: 17.398, longitude: 78.444 }
      },
      {
        thingName: "hyd_10",
        displayName: "Hyd 10",
        meta: { zone: "HYD", division: "Mehdipatnam" },
        properties: { latitude: 17.398, longitude: 78.450 }
      },
      {
        thingName: "hyd_11",
        displayName: "Hyd 11",
        meta: { zone: "HYD", division: "Khairatabad" },
        properties: { latitude: 17.392, longitude: 78.460 }
      },
      {
        thingName: "hyd_12",
        displayName: "Hyd 12",
        meta: { zone: "HYD", division: "Khairatabad" },
        properties: { latitude: 17.415, longitude: 78.480 }
      },
      {
        thingName: "hyd_13",
        displayName: "Hyd 13",
        meta: { zone: "HYD", division: "Khairatabad" },
        properties: { latitude: 17.385, longitude: 78.475 }
      },
      {
        thingName: "hyd_14",
        displayName: "Hyd 14",
        meta: { zone: "HYD", division: "Khairatabad" },
        properties: { latitude: 17.412, longitude: 78.458 }
      },
      {
        thingName: "hyd_15",
        displayName: "Hyd 15",
        meta: { zone: "HYD", division: "Mehdipatnam" },
        properties: { latitude: 17.402, longitude: 78.438 }
      },
      {
        thingName: "hyd_16",
        displayName: "Hyd 16",
        meta: { zone: "HYD", division: "Mehdipatnam" },
        properties: { latitude: 17.395, longitude: 78.455 }
      },
      // SEC — LINEAR DIVISION (COLLINEAR POINTS)
      {
        thingName: "sec_line_1",
        displayName: "Sec Line 1",
        meta: { zone: "SEC", division: "Metro Corridor" },
        properties: { latitude: 17.500, longitude: 78.380 }
      },
      {
        thingName: "sec_line_2",
        displayName: "Sec Line 2",
        meta: { zone: "SEC", division: "Metro Corridor" },
        properties: { latitude: 17.510, longitude: 78.390 }
      },
      {
        thingName: "sec_line_3",
        displayName: "Sec Line 3",
        meta: { zone: "SEC", division: "Metro Corridor" },
        properties: { latitude: 17.520, longitude: 78.400 }
      },
      // SEC — SINGLE POINT DIVISION (MARKER)
      {
        thingName: "sec_single",
        displayName: "Begumpet Pump",
        meta: { zone: "SEC", division: "Begumpet" },
        properties: { latitude: 17.440, longitude: 78.490 }
      },
      // EST — POLYGON DIVISION
      {
        thingName: "est_1",
        displayName: "EST 1",
        meta: { zone: "EST", division: "LB Nagar" },
        properties: { latitude: 17.340, longitude: 78.550 }
      },
      {
        thingName: "est_2",
        displayName: "EST 2",
        meta: { zone: "EST", division: "LB Nagar" },
        properties: { latitude: 17.355, longitude: 78.560 }
      },
      {
        thingName: "est_3",
        displayName: "EST 3",
        meta: { zone: "EST", division: "LB Nagar" },
        properties: { latitude: 17.360, longitude: 78.540 }
      },
      {
        thingName: "est_4",
        displayName: "EST 4",
        meta: { zone: "EST", division: "Nagole" },
        properties: { latitude: 17.370, longitude: 78.550 }
      },
      {
        thingName: "est_5",
        displayName: "EST 5",
        meta: { zone: "EST", division: "Nagole" },
        properties: { latitude: 17.380, longitude: 78.560 }
      },
      {
        thingName: "est_6",
        displayName: "EST 6",
        meta: { zone: "EST", division: "Nagole" },
        properties: { latitude: 17.390, longitude: 78.540 }
      },
      // WST — TWO POINT DIVISION (LINE)
      {
        thingName: "wst_1",
        displayName: "WST Line 1",
        meta: { zone: "WST", division: "Canal Line" },
        properties: { latitude: 17.300, longitude: 78.300 }
      },
      {
        thingName: "wst_2",
        displayName: "WST Line 2",
        meta: { zone: "WST", division: "Canal Line" },
        properties: { latitude: 17.310, longitude: 78.310 }
      },
      // NTH — POLYGON DIVISIONS
      {
        thingName: "nth_1",
        displayName: "North Single",
        meta: { zone: "NTH", division: "Isolated" },
        properties: { latitude: 17.600, longitude: 78.600 }
      },
      {
        thingName: "nth_2",
        displayName: "NTH 2",
        meta: { zone: "NTH", division: "Kukatpally" },
        properties: { latitude: 17.510, longitude: 78.390 }
      },
      {
        thingName: "nth_3",
        displayName: "NTH 3",
        meta: { zone: "NTH", division: "Kukatpally" },
        properties: { latitude: 17.520, longitude: 78.410 }
      },
      {
        thingName: "nth_4",
        displayName: "NTH 4",
        meta: { zone: "NTH", division: "Kukatpally" },
        properties: { latitude: 17.530, longitude: 78.395 }
      },
      {
        thingName: "nth_5",
        displayName: "NTH 5",
        meta: { zone: "NTH", division: "Kukatpally" },
        properties: { latitude: 17.515, longitude: 78.405 }
      },
      // CEN — CENTRAL ZONE (MULTIPLE DIVISIONS)
      {
        thingName: "cen_1",
        displayName: "CEN 1",
        meta: { zone: "CEN", division: "Abids" },
        properties: { latitude: 17.395, longitude: 78.475 }
      },
      {
        thingName: "cen_2",
        displayName: "CEN 2",
        meta: { zone: "CEN", division: "Abids" },
        properties: { latitude: 17.400, longitude: 78.485 }
      },
      {
        thingName: "cen_3",
        displayName: "CEN 3",
        meta: { zone: "CEN", division: "Abids" },
        properties: { latitude: 17.390, longitude: 78.480 }
      },
      {
        thingName: "cen_4",
        displayName: "CEN 4",
        meta: { zone: "CEN", division: "Abids" },
        properties: { latitude: 17.398, longitude: 78.478 }
      },
      {
        thingName: "cen_5",
        displayName: "CEN 5",
        meta: { zone: "CEN", division: "Nampally" },
        properties: { latitude: 17.385, longitude: 78.470 }
      },
      {
        thingName: "cen_6",
        displayName: "CEN 6",
        meta: { zone: "CEN", division: "Nampally" },
        properties: { latitude: 17.380, longitude: 78.475 }
      },
      {
        thingName: "cen_7",
        displayName: "CEN 7",
        meta: { zone: "CEN", division: "Nampally" },
        properties: { latitude: 17.388, longitude: 78.480 }
      },
      {
        thingName: "cen_8",
        displayName: "CEN 8",
        meta: { zone: "CEN", division: "Nampally" },
        properties: { latitude: 17.382, longitude: 78.478 }
      },
      {
        thingName: "cen_9",
        displayName: "CEN 9",
        meta: { zone: "CEN", division: "Basheerbagh" },
        properties: { latitude: 17.405, longitude: 78.470 }
      },
      {
        thingName: "cen_10",
        displayName: "CEN 10",
        meta: { zone: "CEN", division: "Basheerbagh" },
        properties: { latitude: 17.410, longitude: 78.475 }
      },
      {
        thingName: "cen_11",
        displayName: "CEN 11",
        meta: { zone: "CEN", division: "Basheerbagh" },
        properties: { latitude: 17.408, longitude: 78.480 }
      },
      {
        thingName: "cen_12",
        displayName: "CEN 12",
        meta: { zone: "CEN", division: "Basheerbagh" },
        properties: { latitude: 17.402, longitude: 78.478 }
      },
      {
        thingName: "cen_13",
        displayName: "CEN 13",
        meta: { zone: "CEN", division: "Abids" },
        properties: { latitude: 17.393, longitude: 78.472 }
      },
      {
        thingName: "cen_14",
        displayName: "CEN 14",
        meta: { zone: "CEN", division: "Abids" },
        properties: { latitude: 17.397, longitude: 78.482 }
      },
      {
        thingName: "cen_15",
        displayName: "CEN 15",
        meta: { zone: "CEN", division: "Abids" },
        properties: { latitude: 17.402, longitude: 78.468 }
      },
      {
        thingName: "cen_16",
        displayName: "CEN 16",
        meta: { zone: "CEN", division: "Nampally" },
        properties: { latitude: 17.386, longitude: 78.468 }
      },
      {
        thingName: "cen_17",
        displayName: "CEN 17",
        meta: { zone: "CEN", division: "Nampally" },
        properties: { latitude: 17.384, longitude: 78.482 }
      },
      {
        thingName: "cen_18",
        displayName: "CEN 18",
        meta: { zone: "CEN", division: "Basheerbagh" },
        properties: { latitude: 17.406, longitude: 78.465 }
      },
      {
        thingName: "cen_19",
        displayName: "CEN 19",
        meta: { zone: "CEN", division: "Basheerbagh" },
        properties: { latitude: 17.412, longitude: 78.482 }
      },
      // SOU — SOUTH ZONE
      {
        thingName: "sou_1",
        displayName: "SOU 1",
        meta: { zone: "SOU", division: "Charminar" },
        properties: { latitude: 17.360, longitude: 78.470 }
      },
      {
        thingName: "sou_2",
        displayName: "SOU 2",
        meta: { zone: "SOU", division: "Charminar" },
        properties: { latitude: 17.365, longitude: 78.475 }
      },
      {
        thingName: "sou_3",
        displayName: "SOU 3",
        meta: { zone: "SOU", division: "Charminar" },
        properties: { latitude: 17.358, longitude: 78.480 }
      },
      {
        thingName: "sou_4",
        displayName: "SOU 4",
        meta: { zone: "SOU", division: "Charminar" },
        properties: { latitude: 17.362, longitude: 78.478 }
      },
      {
        thingName: "sou_5",
        displayName: "SOU 5",
        meta: { zone: "SOU", division: "Charminar" },
        properties: { latitude: 17.368, longitude: 78.472 }
      },
      {
        thingName: "sou_6",
        displayName: "SOU 6",
        meta: { zone: "SOU", division: "Charminar" },
        properties: { latitude: 17.363, longitude: 78.465 }
      },
      {
        thingName: "sou_7",
        displayName: "SOU 7",
        meta: { zone: "SOU", division: "Charminar" },
        properties: { latitude: 17.366, longitude: 78.485 }
      },
      {
        thingName: "sou_8",
        displayName: "SOU 8",
        meta: { zone: "SOU", division: "Charminar" },
        properties: { latitude: 17.370, longitude: 78.468 }
      },
      {
        thingName: "sou_9",
        displayName: "SOU 9",
        meta: { zone: "SOU", division: "Falaknuma" },
        properties: { latitude: 17.340, longitude: 78.460 }
      },
      {
        thingName: "sou_10",
        displayName: "SOU 10",
        meta: { zone: "SOU", division: "Falaknuma" },
        properties: { latitude: 17.345, longitude: 78.465 }
      },
      {
        thingName: "sou_11",
        displayName: "SOU 11",
        meta: { zone: "SOU", division: "Falaknuma" },
        properties: { latitude: 17.350, longitude: 78.455 }
      },
      {
        thingName: "sou_12",
        displayName: "SOU 12",
        meta: { zone: "SOU", division: "Falaknuma" },
        properties: { latitude: 17.342, longitude: 78.468 }
      },
      {
        thingName: "sou_13",
        displayName: "SOU 13",
        meta: { zone: "SOU", division: "Falaknuma" },
        properties: { latitude: 17.348, longitude: 78.462 }
      },
      {
        thingName: "sou_14",
        displayName: "SOU 14",
        meta: { zone: "SOU", division: "Falaknuma" },
        properties: { latitude: 17.352, longitude: 78.458 }
      },
      {
        thingName: "sou_15",
        displayName: "SOU 15",
        meta: { zone: "SOU", division: "Rajendranagar" },
        properties: { latitude: 17.320, longitude: 78.430 }
      },
      {
        thingName: "sou_16",
        displayName: "SOU 16",
        meta: { zone: "SOU", division: "Rajendranagar" },
        properties: { latitude: 17.325, longitude: 78.435 }
      },
      {
        thingName: "sou_17",
        displayName: "SOU 17",
        meta: { zone: "SOU", division: "Rajendranagar" },
        properties: { latitude: 17.322, longitude: 78.440 }
      },
      {
        thingName: "sou_18",
        displayName: "SOU 18",
        meta: { zone: "SOU", division: "Charminar" },
        properties: { latitude: 17.361, longitude: 78.476 }
      },
      {
        thingName: "sou_19",
        displayName: "SOU 19",
        meta: { zone: "SOU", division: "Charminar" },
        properties: { latitude: 17.369, longitude: 78.470 }
      },
      // SOU — LINEAR DIVISION (PIPELINE)
      {
        thingName: "sou_line_1",
        displayName: "Pipeline 1",
        meta: { zone: "SOU", division: "Pipeline Route" },
        properties: { latitude: 17.350, longitude: 78.440 }
      },
      {
        thingName: "sou_line_2",
        displayName: "Pipeline 2",
        meta: { zone: "SOU", division: "Pipeline Route" },
        properties: { latitude: 17.355, longitude: 78.445 }
      },
      {
        thingName: "sou_line_3",
        displayName: "Pipeline 3",
        meta: { zone: "SOU", division: "Pipeline Route" },
        properties: { latitude: 17.360, longitude: 78.450 }
      },
      {
        thingName: "sou_line_4",
        displayName: "Pipeline 4",
        meta: { zone: "SOU", division: "Pipeline Route" },
        properties: { latitude: 17.365, longitude: 78.455 }
      },
      {
        thingName: "sou_line_5",
        displayName: "Pipeline 5",
        meta: { zone: "SOU", division: "Pipeline Route" },
        properties: { latitude: 17.370, longitude: 78.460 }
      },
      // WES — WEST ZONE
      {
        thingName: "wes_1",
        displayName: "WES 1",
        meta: { zone: "WES", division: "Serilingampally" },
        properties: { latitude: 17.430, longitude: 78.350 }
      },
      {
        thingName: "wes_2",
        displayName: "WES 2",
        meta: { zone: "WES", division: "Serilingampally" },
        properties: { latitude: 17.435, longitude: 78.355 }
      },
      {
        thingName: "wes_3",
        displayName: "WES 3",
        meta: { zone: "WES", division: "Serilingampally" },
        properties: { latitude: 17.440, longitude: 78.345 }
      },
      {
        thingName: "wes_4",
        displayName: "WES 4",
        meta: { zone: "WES", division: "Serilingampally" },
        properties: { latitude: 17.438, longitude: 78.358 }
      },
      {
        thingName: "wes_5",
        displayName: "WES 5",
        meta: { zone: "WES", division: "Serilingampally" },
        properties: { latitude: 17.432, longitude: 78.348 }
      },
      {
        thingName: "wes_6",
        displayName: "WES 6",
        meta: { zone: "WES", division: "Gachibowli" },
        properties: { latitude: 17.420, longitude: 78.340 }
      },
      {
        thingName: "wes_7",
        displayName: "WES 7",
        meta: { zone: "WES", division: "Gachibowli" },
        properties: { latitude: 17.425, longitude: 78.345 }
      },
      {
        thingName: "wes_8",
        displayName: "WES 8",
        meta: { zone: "WES", division: "Gachibowli" },
        properties: { latitude: 17.430, longitude: 78.338 }
      },
      {
        thingName: "wes_9",
        displayName: "WES 9",
        meta: { zone: "WES", division: "Gachibowli" },
        properties: { latitude: 17.422, longitude: 78.342 }
      },
      {
        thingName: "wes_10",
        displayName: "WES 10",
        meta: { zone: "WES", division: "Madhapur" },
        properties: { latitude: 17.440, longitude: 78.380 }
      },
      {
        thingName: "wes_11",
        displayName: "WES 11",
        meta: { zone: "WES", division: "Madhapur" },
        properties: { latitude: 17.445, longitude: 78.385 }
      },
      {
        thingName: "wes_12",
        displayName: "WES 12",
        meta: { zone: "WES", division: "Madhapur" },
        properties: { latitude: 17.450, longitude: 78.378 }
      },
      {
        thingName: "wes_13",
        displayName: "WES 13",
        meta: { zone: "WES", division: "Madhapur" },
        properties: { latitude: 17.442, longitude: 78.382 }
      },
      {
        thingName: "wes_14",
        displayName: "WES 14",
        meta: { zone: "WES", division: "Madhapur" },
        properties: { latitude: 17.448, longitude: 78.388 }
      },
      // EAS — EAST ZONE
      {
        thingName: "eas_1",
        displayName: "EAS 1",
        meta: { zone: "EAS", division: "Tarnaka" },
        properties: { latitude: 17.430, longitude: 78.550 }
      },
      {
        thingName: "eas_2",
        displayName: "EAS 2",
        meta: { zone: "EAS", division: "Tarnaka" },
        properties: { latitude: 17.435, longitude: 78.555 }
      },
      {
        thingName: "eas_3",
        displayName: "EAS 3",
        meta: { zone: "EAS", division: "Tarnaka" },
        properties: { latitude: 17.440, longitude: 78.545 }
      },
      {
        thingName: "eas_4",
        displayName: "EAS 4",
        meta: { zone: "EAS", division: "Tarnaka" },
        properties: { latitude: 17.438, longitude: 78.558 }
      },
      {
        thingName: "eas_5",
        displayName: "EAS 5",
        meta: { zone: "EAS", division: "Habsiguda" },
        properties: { latitude: 17.420, longitude: 78.540 }
      },
      {
        thingName: "eas_6",
        displayName: "EAS 6",
        meta: { zone: "EAS", division: "Habsiguda" },
        properties: { latitude: 17.425, longitude: 78.545 }
      },
      {
        thingName: "eas_7",
        displayName: "EAS 7",
        meta: { zone: "EAS", division: "Habsiguda" },
        properties: { latitude: 17.430, longitude: 78.538 }
      },
      {
        thingName: "eas_8",
        displayName: "EAS 8",
        meta: { zone: "EAS", division: "Habsiguda" },
        properties: { latitude: 17.422, longitude: 78.542 }
      },
      {
        thingName: "eas_9",
        displayName: "EAS 9",
        meta: { zone: "EAS", division: "Uppal" },
        properties: { latitude: 17.410, longitude: 78.560 }
      },
      {
        thingName: "eas_10",
        displayName: "EAS 10",
        meta: { zone: "EAS", division: "Uppal" },
        properties: { latitude: 17.415, longitude: 78.565 }
      },
      {
        thingName: "eas_11",
        displayName: "EAS 11",
        meta: { zone: "EAS", division: "Uppal" },
        properties: { latitude: 17.420, longitude: 78.558 }
      },
      {
        thingName: "eas_12",
        displayName: "EAS 12",
        meta: { zone: "EAS", division: "Uppal" },
        properties: { latitude: 17.412, longitude: 78.562 }
      },
      // NOR — NORTH ZONE
      {
        thingName: "nor_1",
        displayName: "NOR 1",
        meta: { zone: "NOR", division: "Bowenpally" },
        properties: { latitude: 17.480, longitude: 78.450 }
      },
      {
        thingName: "nor_2",
        displayName: "NOR 2",
        meta: { zone: "NOR", division: "Bowenpally" },
        properties: { latitude: 17.485, longitude: 78.455 }
      },
      {
        thingName: "nor_3",
        displayName: "NOR 3",
        meta: { zone: "NOR", division: "Bowenpally" },
        properties: { latitude: 17.490, longitude: 78.445 }
      },
      {
        thingName: "nor_4",
        displayName: "NOR 4",
        meta: { zone: "NOR", division: "Bowenpally" },
        properties: { latitude: 17.488, longitude: 78.458 }
      },
      {
        thingName: "nor_5",
        displayName: "NOR 5",
        meta: { zone: "NOR", division: "Secunderabad" },
        properties: { latitude: 17.460, longitude: 78.490 }
      },
      {
        thingName: "nor_6",
        displayName: "NOR 6",
        meta: { zone: "NOR", division: "Secunderabad" },
        properties: { latitude: 17.465, longitude: 78.495 }
      },
      {
        thingName: "nor_7",
        displayName: "NOR 7",
        meta: { zone: "NOR", division: "Secunderabad" },
        properties: { latitude: 17.470, longitude: 78.488 }
      },
      {
        thingName: "nor_8",
        displayName: "NOR 8",
        meta: { zone: "NOR", division: "Secunderabad" },
        properties: { latitude: 17.462, longitude: 78.492 }
      },
      {
        thingName: "nor_9",
        displayName: "NOR 9",
        meta: { zone: "NOR", division: "Malkajgiri" },
        properties: { latitude: 17.490, longitude: 78.520 }
      },
      {
        thingName: "nor_10",
        displayName: "NOR 10",
        meta: { zone: "NOR", division: "Malkajgiri" },
        properties: { latitude: 17.495, longitude: 78.525 }
      },
      {
        thingName: "nor_11",
        displayName: "NOR 11",
        meta: { zone: "NOR", division: "Malkajgiri" },
        properties: { latitude: 17.500, longitude: 78.518 }
      },
      {
        thingName: "nor_12",
        displayName: "NOR 12",
        meta: { zone: "NOR", division: "Malkajgiri" },
        properties: { latitude: 17.492, longitude: 78.522 }
      },
      // NOR — SINGLE STATION (MARKER)
      {
        thingName: "nor_single_1",
        displayName: "Trimulgherry",
        meta: { zone: "NOR", division: "Trimulgherry" },
        properties: { latitude: 17.520, longitude: 78.470 }
      }
    ]
  }
};
