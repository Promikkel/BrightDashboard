// Mock data for Bright Dashboard prototype

// Accommodations data
const accommodationsData = [
    {
        id: 12,
        name: "Unit 12",
        health: 9.8,
        lock: {
            status: "Gesloten",
            statusClass: "text-success",
            icon: "bi-door-closed",
            battery: 92,
            batteryClass: "text-success"
        },
        temperature: {
            current: 21.5,
            set: 21.0,
            statusClass: "text-success",
            icon: "bi-thermometer-half"
        },
        wifi: {
            status: "Online",
            statusClass: "text-success",
            signal: 4
        },
        occupancy: {
            status: "Gast aanwezig",
            statusClass: "text-success",
            icon: "bi-person-check"
        }
    },
    {
        id: 23,
        name: "Unit 23",
        health: 7.2,
        lock: {
            status: "Open",
            statusClass: "text-warning",
            icon: "bi-door-open",
            battery: 45,
            batteryClass: "text-warning"
        },
        temperature: {
            current: 24.8,
            set: 21.0,
            statusClass: "text-danger",
            icon: "bi-thermometer-high"
        },
        wifi: {
            status: "Online",
            statusClass: "text-success",
            signal: 3
        },
        occupancy: {
            status: "Gast aanwezig",
            statusClass: "text-success",
            icon: "bi-person-check"
        }
    },
    {
        id: 34,
        name: "Unit 34",
        health: 5.1,
        lock: {
            status: "Gesloten",
            statusClass: "text-success",
            icon: "bi-door-closed",
            battery: 88,
            batteryClass: "text-success"
        },
        temperature: {
            current: 20.5,
            set: 20.0,
            statusClass: "text-success",
            icon: "bi-thermometer-half"
        },
        wifi: {
            status: "Offline",
            statusClass: "text-danger",
            signal: 0
        },
        occupancy: {
            status: "Leeg",
            statusClass: "text-secondary",
            icon: "bi-person-x"
        }
    },
    {
        id: 42,
        name: "Unit 42",
        health: 4.3,
        lock: {
            status: "Defect",
            statusClass: "text-danger",
            icon: "bi-door-closed",
            battery: 95,
            batteryClass: "text-success"
        },
        temperature: {
            current: 21.0,
            set: 21.0,
            statusClass: "text-success",
            icon: "bi-thermometer-half"
        },
        wifi: {
            status: "Online",
            statusClass: "text-success",
            signal: 4
        },
        occupancy: {
            status: "Gast aanwezig",
            statusClass: "text-success",
            icon: "bi-person-check"
        }
    }
];

// Notifications data
const notificationsData = [
    {
        id: 1,
        type: "Urgent",
        typeClass: "bg-danger",
        title: "Slim slot defect - Unit 42",
        description: "Gast kan accommodatie niet in, slot reageert niet op app of sleutelkaart.",
        time: "3 uur geleden"
    },
    {
        id: 2,
        type: "Medium",
        typeClass: "bg-warning",
        title: "Wifi-storing - Zone C",
        description: "Meerdere gasten melden trage internetverbinding in Zone C.",
        time: "5 uur geleden"
    },
    {
        id: 3,
        type: "Info",
        typeClass: "bg-info",
        title: "Predictief onderhoud - Robot 3",
        description: "Borstels van schoonmaakrobot 3 zijn aan vervanging toe binnen 5 dagen.",
        time: "1 dag geleden"
    }
];

// Energy consumption data
const energyData = {
    current: {
        electricity: 2450, // kWh
        gas: 320, // m³
        water: 45000 // liters
    },
    previous: {
        electricity: 2780, // kWh
        gas: 380, // m³
        water: 48000 // liters
    },
    units: {
        electricity: "kWh",
        gas: "m³",
        water: "L"
    },
    anomalies: [
        {
            unit: 34,
            type: "water",
            message: "Mogelijke lekkage in unit 34 - 150% hoger verbruik dan gemiddeld"
        },
        {
            unit: 17,
            type: "electricity",
            message: "Ongewoon hoog stroomverbruik in unit 17 - mogelijk apparaat defect"
        }
    ]
};

// Robot data
const robotsData = [
    {
        id: 1,
        name: "CleanBot 1",
        type: "Schoonmaak",
        status: "Actief",
        statusClass: "text-success",
        battery: 78,
        location: "Zone A",
        readiness: 95,
        maintenance: [
            {
                part: "Borstels",
                status: "Goed",
                statusClass: "text-success"
            },
            {
                part: "Filters",
                status: "Goed",
                statusClass: "text-success"
            },
            {
                part: "Wielen",
                status: "Goed",
                statusClass: "text-success"
            }
        ],
        stats: {
            areaCleaned: 450, // m²
            workTime: 3.5 // hours
        }
    },
    {
        id: 2,
        name: "CleanBot 2",
        type: "Schoonmaak",
        status: "Opladen",
        statusClass: "text-warning",
        battery: 15,
        location: "Oplaadstation 1",
        readiness: 88,
        maintenance: [
            {
                part: "Borstels",
                status: "Goed",
                statusClass: "text-success"
            },
            {
                part: "Filters",
                status: "Vervangen",
                statusClass: "text-danger"
            },
            {
                part: "Wielen",
                status: "Goed",
                statusClass: "text-success"
            }
        ],
        stats: {
            areaCleaned: 380, // m²
            workTime: 2.8 // hours
        }
    },
    {
        id: 3,
        name: "CleanBot 3",
        type: "Schoonmaak",
        status: "Onderhoud",
        statusClass: "text-danger",
        battery: 100,
        location: "Werkplaats",
        readiness: 45,
        maintenance: [
            {
                part: "Borstels",
                status: "Vervangen",
                statusClass: "text-danger"
            },
            {
                part: "Filters",
                status: "Goed",
                statusClass: "text-success"
            },
            {
                part: "Wielen",
                status: "Controleren",
                statusClass: "text-warning"
            }
        ],
        stats: {
            areaCleaned: 0, // m²
            workTime: 0 // hours
        }
    },
    {
        id: 4,
        name: "GrassBot 1",
        type: "Grasmaaier",
        status: "Actief",
        statusClass: "text-success",
        battery: 65,
        location: "Zone D - Grasveld",
        readiness: 92,
        maintenance: [
            {
                part: "Messen",
                status: "Goed",
                statusClass: "text-success"
            },
            {
                part: "Sensoren",
                status: "Goed",
                statusClass: "text-success"
            },
            {
                part: "Wielen",
                status: "Goed",
                statusClass: "text-success"
            }
        ],
        stats: {
            areaCleaned: 850, // m²
            workTime: 2.2 // hours
        }
    }
];

// Guest feedback data
const feedbackData = [
    {
        unit: 12,
        rating: 4.8,
        comments: [
            {
                category: "Algemeen",
                text: "Zeer tevreden met ons verblijf, alles werkte perfect!",
                date: "10-04-2025"
            }
        ]
    },
    {
        unit: 23,
        rating: 3.5,
        comments: [
            {
                category: "Wifi",
                text: "Internet was traag tijdens ons verblijf.",
                date: "09-04-2025"
            },
            {
                category: "Klimaat",
                text: "De accommodatie was te warm, thermostaat leek niet goed te werken.",
                date: "09-04-2025"
            }
        ]
    },
    {
        unit: 34,
        rating: 2.0,
        comments: [
            {
                category: "Wifi",
                text: "Geen internetverbinding gedurende ons hele verblijf.",
                date: "08-04-2025"
            },
            {
                category: "Techniek",
                text: "Meerdere apparaten werkten niet naar behoren.",
                date: "08-04-2025"
            }
        ]
    },
    {
        unit: 42,
        rating: 1.5,
        comments: [
            {
                category: "Toegang",
                text: "Konden niet in de accommodatie komen, moesten wachten op hulp.",
                date: "11-04-2025"
            },
            {
                category: "Service",
                text: "Slechte ervaring bij aankomst door problemen met het slot.",
                date: "11-04-2025"
            }
        ]
    }
];

// System integrations data
const integrationsData = [
    {
        id: 1,
        name: "Planningssysteem",
        status: "Verbonden",
        statusClass: "text-success",
        lastSync: "14-04-2025 16:30",
        url: "#planning"
    },
    {
        id: 2,
        name: "Energiebeheer",
        status: "Verbonden",
        statusClass: "text-success",
        lastSync: "14-04-2025 16:45",
        url: "#energie"
    },
    {
        id: 3,
        name: "Robot Dashboard",
        status: "Verbonden",
        statusClass: "text-success",
        lastSync: "14-04-2025 17:00",
        url: "#robots"
    },
    {
        id: 4,
        name: "CRM Systeem",
        status: "Verbindingsfout",
        statusClass: "text-danger",
        lastSync: "13-04-2025 09:15",
        url: "#crm"
    }
];
