# Database table schemas
TABLES = {
    'growers': {
        'id': 'INTEGER',
        'name': 'STRING',
        'location': 'INTEGER',
    },
    'harvests': {
        'id': 'INTEGER',
        'name': 'STRING',
    },
    'available_harvests': {
        'grower_id': 'INTEGER',
        'harvest_id': 'INTEGER',
        'quantity': 'INTEGER',
    },
}

SEED = {
    'growers': [
        (1, "Evergreen Growers", 11237),
        (2, "Forever Farms", 11216),
        (3, "Red River Acres", 11301),
    ],
    'harvests': [
        (1, "Meyer Lemon"),
        (2, "Arugula"),
        (3, "Green Cabbage"),
    ],
    'available_harvests': [
        (1, 2, 100),
        (2, 1, 50),
        (3, 3, 75),
    ],
}