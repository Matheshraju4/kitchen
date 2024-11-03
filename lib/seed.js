// seed.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const data = [
    {
      categories: "Hot Equipment",
      image:
        "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Hot-Equipments%2FRound%20Tandoor.jpg?alt=media&token=c0df1dba-3bed-4ed2-8b79-0f720cd3e1a7",
      products: [
        {
          productName: "Round Tandoor",
          productDescription:
            "A round tandoor with clay pot lining for traditional cooking, available in gas or charcoal models.",
          productSpecification: [
            {
              leftalign: "Inner Lining",
              rightalign: "Conventional earthen pot",
            },
            {
              leftalign: "Outer Material",
              rightalign:
                "304 Grade 20 SWG SS sheet with glass wool insulation",
            },
            {
              leftalign: "Accessories",
              rightalign: "Temperature Indicator, Wheels, Kabab Stick & Stand",
            },
            {
              leftalign: "Type",
              rightalign: "Available in both gas and charcoal models",
            },
          ],
          availableSize: [
            '30" x 30" (Charcoal)',
            '36" x 36" (Charcoal)',
            '36" x 36" (Gas)',
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Hot-Equipments%2FRound%20Tandoor.jpg?alt=media&token=c0df1dba-3bed-4ed2-8b79-0f720cd3e1a7",
        },
        {
          productName: "Shawarma Machine",
          productDescription:
            "Versatile shawarma machine available in single and double burner units, built with high-quality stainless steel.",
          productSpecification: [
            { leftalign: "Material", rightalign: "304 Grade stainless steel" },
            {
              leftalign: "Burner Units",
              rightalign: "Single or double burner options",
            },
            {
              leftalign: "Additional Features",
              rightalign: "Side shelves and table stands optional",
            },
          ],
          availableSize: [
            'Basic Model: 23.5" x 18" x 34"',
            'Cylinder Type: 23.5" x 18" x 68"',
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Hot-Equipments%2FShawarma%20machine.jpg?alt=media&token=cee7ab90-1efe-449f-b62b-7e8cc77b9cdd",
        },
        {
          productName: "Square Tandoor",
          productDescription:
            "A traditional square tandoor with options for gas or charcoal fuel, ideal for tandoori cooking.",
          productSpecification: [
            {
              leftalign: "Inner Lining",
              rightalign: "Conventional earthen pot",
            },
            {
              leftalign: "Outer Material",
              rightalign:
                "304 Grade 20 SWG SS sheet, with glass wool insulation",
            },
            {
              leftalign: "Accessories",
              rightalign: "Temperature Indicator, Wheels, Kabab Stick & Stand",
            },
            {
              leftalign: "Type",
              rightalign: "Charcoal or gas options available",
            },
          ],
          availableSize: [
            '30" x 30" x 30" (Charcoal)',
            '36" x 36" x 36" (Charcoal)',
            '30" x 30" x 30" (Gas)',
            '36" x 36" x 36" (Gas)',
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Hot-Equipments%2FSquare%20Tandoor.jpg?alt=media&token=22492589-ee10-4f82-9663-9c58aacaa269",
        },
        {
          productName: "Tilting Brat Pan",
          productDescription:
            "A tilting brat pan with stainless steel top and splash back, designed for large-scale commercial cooking.",
          productSpecification: [
            {
              leftalign: "Top",
              rightalign: "304 Grade full spread 16SWG SS sheet",
            },
            {
              leftalign: "Splash Back",
              rightalign: 'SS 18SWG sheet 14" height with water drain chamber',
            },
            {
              leftalign: "Burners",
              rightalign:
                "02 Nos T-35 burners with pilot and industrial control system",
            },
          ],
          availableSize: ['48" x 24" x 34" + 14" Ht (Custom sizes available)'],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Hot-Equipments%2FTilting%20Brat%20Pan.jpg?alt=media&token=41239d23-64e2-40ba-a854-02c53f91fd99",
        },
        {
          productName: "Tilting Type Bulk Cooker",
          productDescription:
            "High-capacity tilting bulk cooker with double jacket heating, ideal for large-scale food preparation.",
          productSpecification: [
            { leftalign: "Fuel", rightalign: "LPG / Steam" },
            { leftalign: "Heating Type", rightalign: "Double jacket" },
            {
              leftalign: "Vessel",
              rightalign: "Full stainless steel heavy-duty vessel",
            },
            { leftalign: "Tray", rightalign: "Removable perforated tray" },
          ],
          availableSize: ["100 Ltrs", "180 Ltrs", "250 Ltrs"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Hot-Equipments%2FTilting%20Type%20Bulk%20cooker.jpg?alt=media&token=92e21524-a366-47ad-b0c4-6cc4baf4dfc9",
        },
        {
          productName: "Chinese Range Burner",
          productDescription:
            "Specialized burner designed for Chinese-style cooking, featuring water drain and splash back.",
          productSpecification: [
            {
              leftalign: "Top",
              rightalign: "Stainless 304Grade full spreaded 16SWG sheet top",
            },
            {
              leftalign: "Splash Back",
              rightalign:
                'SS 18SWG Sheet 14" height with 4" width water drain chamber',
            },
            {
              leftalign: "Inner Frame",
              rightalign: "MS 35x35x5mm thick 'L' angle frame",
            },
            {
              leftalign: "Burners",
              rightalign:
                "02 Nos T-35 burners with pilot and industrial control system",
            },
            {
              leftalign: "Drip Trays",
              rightalign: "02 Nos SS 20 SWG drip trays",
            },
          ],
          availableSize: ['48" x 24" x 34" + 14" Ht'],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Hot-Equipments%2Fchinese%20range%20burner.jpg?alt=media&token=caac7497-4096-464d-b20e-d8d10e7de0d4",
        },
        {
          productName: "Two Range Burner",
          productDescription:
            "A double burner for commercial kitchen use, allowing for cooking with two ranges.",
          productSpecification: [
            { leftalign: "Gas Consumption", rightalign: "AXZX" },
            { leftalign: "-=E", rightalign: "0.8mm – 3.15mm" },
            { leftalign: "Burner head", rightalign: "T35 G11, G9 M10" },
            { leftalign: "Frame", rightalign: '11/4"x11/4" MS Angle Frame' },
            {
              leftalign: "Legs",
              rightalign:
                'Made out of 11/2" OD 16SWG SS pipe legs with adjustable bullet legs',
            },
            {
              leftalign: "Top",
              rightalign:
                "Made out of 304 Grade 16 SWG SS sheet, 18SWG SS side paneling on 04 sides",
            },
            { leftalign: "Pan support", rightalign: "Cast iron pan support" },
            { leftalign: "Burners", rightalign: "Varies as per range" },
            { leftalign: "NC Valve", rightalign: "Varies as per range" },
            { leftalign: "Pigtail", rightalign: "Varies as per range" },
          ],
          availableSize: [
            '48" x 24" x 18"',
            '52" x 24" x 18"',
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Hot-Equipments%2F2%20range%20burner.jpg?alt=media&token=8d8ae208-4e69-4990-a521-3a9a31cecfa2",
        },
        {
          productName: "Four Range Burner",
          productDescription:
            "A gas burner with four ranges for high-capacity commercial cooking.",
          productSpecification: [
            {
              leftalign: "Gas Consumption",
              rightalign: "0.5 Kg / Hrs – 1.5 Kg / Hrs",
            },
            { leftalign: "Material thickness", rightalign: "0.8mm – 3.15mm" },
            { leftalign: "Burner head", rightalign: "T35 G11, G9 M10" },
            { leftalign: "Frame", rightalign: '11/4"x11/4" MS Angle Frame' },
            {
              leftalign: "Legs",
              rightalign:
                'Made out of 11/2" OD 16SWG SS pipe legs with adjustable bullet legs',
            },
            {
              leftalign: "Top",
              rightalign:
                "Made out of 304 Grade 16 SWG SS sheet, 18SWG SS side paneling on 04 sides",
            },
            { leftalign: "Pan support", rightalign: "Cast iron pan support" },
            { leftalign: "Burners", rightalign: "Varies as per range" },
            { leftalign: "NC Valve", rightalign: "Varies as per range" },
            { leftalign: "Pigtail", rightalign: "Varies as per range" },
          ],
          availableSize: [
            '36" x 36" x 34"',
            '40" x 40" x 34"',
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Hot-Equipments%2F4%20range.jpg?alt=media&token=e70d21b4-2a43-4cd4-9a30-1e67979d9da5",
        },
        {
          productName: "Barbeque Griller",
          productDescription:
            "A robust stainless steel barbeque griller designed for commercial grilling, with adjustable feet and splash back.",
          productSpecification: [
            {
              leftalign: "Gas Consumption",
              rightalign: "0.5 Kg/Hrs - 1.5 Kg/Hrs",
            },
            { leftalign: "Material Thickness", rightalign: "0.8mm - 3.15mm" },
            {
              leftalign: "Body Material",
              rightalign: "Full AISI Stainless Steel 304 Food Grade",
            },
            {
              leftalign: "Legs",
              rightalign: "Galvanized legs with adjustable plastic bullet foot",
            },
            {
              leftalign: "Additional Features",
              rightalign: "Includes splash back and basket drain",
            },
          ],
          availableSize: ['67" L x 32" W x 36" H (Custom sizes available)'],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Hot-Equipments%2FBarbeque%20Griller.jpg?alt=media&token=033f1d28-22d5-4de6-ba3f-b6e3db373c86",
        },
        {
          productName: "Chicken Griller",
          productDescription:
            "Commercial chicken griller with high capacity, ideal for grilling large quantities of chicken.",
          productSpecification: [
            { leftalign: "Material", rightalign: "304 Grade 18SWG SS sheet" },
            {
              leftalign: "Gas Consumption",
              rightalign: "0.5 Kg/Hrs - 1.5 Kg/Hrs",
            },
            { leftalign: "Legs", rightalign: "Adjustable bullet legs" },
          ],
          availableSize: ["09 Birds", "15 Birds", "24 Birds"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Hot-Equipments%2FChicken%20Griller.jpg?alt=media&token=ad075e5c-adb5-46e9-a81c-017b559a75c1",
        },
        {
          productName: "Deep Fat Fryer",
          productDescription:
            "A heavy-duty deep fat fryer with thermostatically controlled heating elements, perfect for commercial use.",
          productSpecification: [
            { leftalign: "Material", rightalign: "304 Grade stainless steel" },
            {
              leftalign: "Heating Elements",
              rightalign: "Front control panel with indicating lamps",
            },
            {
              leftalign: "Basket",
              rightalign: "SS frying basket with oil chamber",
            },
          ],
          availableSize: [
            "425 x 900 x 850",
            "350 x 750 x 850",
            "1159 x 1255 x 1142",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Hot-Equipments%2FDeep%20Fat%20Fryer.jpg?alt=media&token=f8eabb63-1739-4b89-a22a-1f75101d5544",
        },
        {
          productName: "Dosa Plate With Buffer",
          productDescription:
            "A heavy-duty Dosa plate with a buffer system, ideal for professional dosa preparation.",
          productSpecification: [
            {
              leftalign: "Top",
              rightalign: "16mm Thk MS Plate top mounted on MS Angle Structure",
            },
            { leftalign: "Frame", rightalign: "1 ¼ x 1 ¼ MS Angle" },
            {
              leftalign: "Panelling",
              rightalign:
                '304 Grade 18SWG SS paneling, 6" splash on 3 sides with drainage system',
            },
          ],
          availableSize: [
            '48" x 24" x 34"',
            '60" x 24" x 34"',
            '72" x 24" x 34" (Custom sizes available)',
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Hot-Equipments%2FDosa%20plate.jpg?alt=media&token=591fc466-cd4f-439b-90af-368e8b97d62f",
        },
        {
          productName: "Idly Steamer",
          productDescription:
            "A heavy-duty idly steamer designed for large-scale idly production, with customizable tray modules.",
          productSpecification: [
            { leftalign: "Fuel", rightalign: "LPG / Electrical / Steam" },
            { leftalign: "Types of Tray", rightalign: "Normal / Ghee idly" },
            {
              leftalign: "Operation",
              rightalign: "Auto Steam cut-off (optional), Extra Plates, Stand",
            },
            {
              leftalign: "Modules",
              rightalign: "Available in 1, 2, 3, 4, 6 Modules",
            },
          ],
          availableSize: [
            "100 Nos",
            "180 Nos",
            "240 Nos",
            "Custom sizes available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Hot-Equipments%2FIdly%20Steamer%202.jpg?alt=media&token=87773c58-5ce5-42a3-9c61-63c3a2c8c429",
        },
        {
          productName: "Plate Warmer",
          productDescription:
            "Industrial plate warmer with adjustable thermostats, perfect for commercial plate warming needs.",
          productSpecification: [
            {
              leftalign: "Material",
              rightalign: "Polycarbonate, suitable for dishwashers",
            },
            {
              leftalign: "Thermostat",
              rightalign: "Adjustable from 100°F to 160°F",
            },
            {
              leftalign: "Power Cord",
              rightalign: "5-foot, 3-wire power cord with NEMA 5-15 plug",
            },
          ],
          availableSize: ["530 x 1055 x 900"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Hot-Equipments%2FPlate%20Warmer.jpg?alt=media&token=1d2cedd6-7bbf-426c-92d7-a6dff1ad874f",
        },
        {
          productName: "Rice Steamer",
          productDescription:
            "A high-capacity rice steamer with double jacket heating, designed for industrial kitchens.",
          productSpecification: [
            { leftalign: "Fuel", rightalign: "LPG / Steam" },
            { leftalign: "Heating Type", rightalign: "Double jacket" },
            {
              leftalign: "Vessel",
              rightalign: "Full stainless steel with direct steam injection",
            },
            {
              leftalign: "Tray",
              rightalign: "Removable perforated tray for easy cleaning",
            },
          ],
          availableSize: ["10 to 35 kg (Custom sizes available)"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Hot-Equipments%2FRice%20Steamer.jpg?alt=media&token=301a693b-a28d-470a-8df0-c7f2d52f1937",
        },
      ],
    },
    {
      categories: "Cold Equipment",
      image:
        "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Cold-Equipments%2FTwo%20Door%20Refrigerator.jpg?alt=media&token=11a85c58-59ce-4aa5-9c61-f0f7eef51ae8",
      products: [
        {
          productName: "Two Door Refrigerator",
          productDescription:
            "A high-capacity two-door refrigerator ideal for industrial kitchens, offering optimal cooling and storage.",
          productSpecification: [
            { leftalign: "Capacity", rightalign: "600 Ltrs" },
            { leftalign: "Power Consumption", rightalign: "680 Watts" },
            { leftalign: "Compressors", rightalign: "Kirloskar / Tecumseh" },
            { leftalign: "Temperature Range", rightalign: "0ºC to 10ºC" },
          ],
          availableSize: ['30" x 30" x 84"'],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Cold-Equipments%2FTwo%20Door%20Refrigerator.jpg?alt=media&token=11a85c58-59ce-4aa5-9c61-f0f7eef51ae8",
        },
        {
          productName: "Four Door Refrigerator",
          productDescription:
            "A large four-door refrigerator suitable for commercial kitchens with high storage needs.",
          productSpecification: [
            { leftalign: "Capacity", rightalign: "1100 Ltrs" },
            { leftalign: "Power Consumption", rightalign: "725 Watts" },
            { leftalign: "Compressors", rightalign: "Kirloskar / Tecumseh" },
            { leftalign: "Temperature Range", rightalign: "0ºC to 10ºC" },
          ],
          availableSize: ['48" x 30" x 84"'],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Cold-Equipments%2FFour%20Door%20Refrigerator.jpg?alt=media&token=490d3d03-1ec7-4110-a601-a773031ee069",
        },
        {
          productName: "Under Counter Chiller & Freezer",
          productDescription:
            "Compact under-counter chiller and freezer designed for efficient space usage in commercial kitchens.",
          productSpecification: [
            { leftalign: "Capacity", rightalign: "300 Ltrs" },
            { leftalign: "Power Consumption", rightalign: "570 Watts" },
            { leftalign: "Compressors", rightalign: "Kirloskar / Tecumseh" },
            { leftalign: "Temperature Range", rightalign: "0ºC to 10ºC" },
          ],
          availableSize: ['60" x 27" x 34" +12" +18"'],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Cold-Equipments%2FUnder%20counter%20Chillier%20%26%20Freezer.jpg?alt=media&token=67a22bda-d4aa-4ebe-89ea-401985215436",
        },
        {
          productName: "Water Cooler",
          productDescription:
            "Stainless steel water cooler ideal for canteens, food courts, hospitals, and restaurants with a heavy-duty build.",
          productSpecification: [
            { leftalign: "Compressor", rightalign: "Kirloskar / Tecumseh" },
            {
              leftalign: "Cooling Technology",
              rightalign: "Static cooling with thermostat",
            },
            {
              leftalign: "Insulation",
              rightalign: '2.25" Puffed Zero ODP urethane insulation',
            },
            {
              leftalign: "Adjustable Feet",
              rightalign: "Height adjustable stainless steel bullet feet",
            },
          ],
          availableSize: [
            '26" x 26" x 65"',
            '28" x 28" x 65"',
            '32" x 32" x 65"',
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Cold-Equipments%2FWater%20Cooler.jpg?alt=media&token=a4203348-30db-4c74-a612-e0d42c69afc3",
        },
        {
          productName: "Ice Cream Storage",
          productDescription:
            "Durable ice cream storage unit with granite top, insulated to maintain cold temperatures for longer periods.",
          productSpecification: [
            {
              leftalign: "Material",
              rightalign: "Body made of 22 GA Stainless Steel Sheet",
            },
            { leftalign: "Compressor", rightalign: "Copeland" },
            { leftalign: "Insulation", rightalign: "PUF Insulated" },
            {
              leftalign: "Additional Features",
              rightalign:
                "Granite top, sliding doors, digital thermostat, SS adjustable bullet feet",
            },
          ],
          availableSize: ["600 x 580 x 585 mm"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Cold-Equipments%2FIce%20cream%20Storage.jpg?alt=media&token=38e27c30-a6b9-4996-8d60-d78c8e0c8edc",
        },
        {
          productName: "Ice Cube Maker",
          productDescription:
            "A compact ice cube maker with user-friendly electronic controls, ideal for commercial kitchens requiring regular ice production.",
          productSpecification: [
            { leftalign: "Max Daily Production", rightalign: "75 Kg" },
            { leftalign: "Storage Bin Capacity", rightalign: "40 Kg" },
            { leftalign: "Power Supply", rightalign: "220 V/50 Hz" },
            { leftalign: "Rated Power", rightalign: "0.6 KW" },
            { leftalign: "Refrigerant", rightalign: "R134A" },
            {
              leftalign: "Additional Features",
              rightalign:
                "Fully automatic control, overload protection, energy-efficient",
            },
          ],
          availableSize: [
            '30" x 20" x 24"',
            '30" x 27" x 30"',
            "500 x 577 x 852 mm",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Cold-Equipments%2FIce%20Cube%20Maker.jpg?alt=media&token=6354c709-c093-48c9-895e-e513402a1d14",
        },
        {
          productName: "Cold Bain Marie Salad Counter",
          productDescription:
            "A cold bain marie counter designed for salad preparation and storage with excellent finishing and abrasion resistance.",
          productSpecification: [
            {
              leftalign: "Material",
              rightalign: "Abrasion-resistant stainless steel",
            },
            {
              leftalign: "Additional Features",
              rightalign: "Excellent texture and finishing",
            },
          ],
          availableSize: [
            "1650 x 675 x 850 mm",
            "1500 x 675 x 850 mm (Custom sizes available)",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Cold-Equipments%2FCold%20Bain%20Marie%20Salad%20Counter.jpg?alt=media&token=136a341e-d4b4-4aa6-941e-574ab4cc400b",
        },
        {
          productName: "Cold Room",
          productDescription:
            "Walk-in cold room and cooler designed for large storage with durable insulation and high cooling capacity.",
          productSpecification: [
            { leftalign: "Chiller Temperature", rightalign: "+2ºC to 10ºC" },
            { leftalign: "Cooler Temperature", rightalign: "-18ºC to -20ºC" },
            {
              leftalign: "Insulation",
              rightalign:
                "Puff insulation, 60 mm for chiller, 100 mm for cooler",
            },
            {
              leftalign: "Compressor",
              rightalign: "Copeland-Kirloskar / Tecumseh",
            },
          ],
          availableSize: ["3000 x 2400 x 2500 mm"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Cold-Equipments%2FCold%20Room.jpg?alt=media&token=e69f2f9b-03eb-43b0-830b-e920af909d41",
        },
        {
          productName: "Glass Door Visi Cooler",
          productDescription:
            "A glass-door visi cooler with eco-friendly refrigerant, designed for high product visibility and energy efficiency.",
          productSpecification: [
            {
              leftalign: "Material",
              rightalign:
                "UV protected galvanized sheets for interior and exterior",
            },
            {
              leftalign: "Cooling Technology",
              rightalign:
                "Energy-efficient cooling with forced air circulation",
            },
            { leftalign: "Refrigerant", rightalign: "Eco-friendly (R134a)" },
            {
              leftalign: "Additional Features",
              rightalign: "Dual glass doors, adjustable wire mesh shelves",
            },
          ],
          availableSize: ["220 to 1500 Ltr capacity"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Cold-Equipments%2FGlass%20Door%20Visi%20Cooler%20Griller.jpg?alt=media&token=d98c9ac7-fd10-454f-b52c-ec8dc026d508",
        },
        {
          productName: "Pantry Fridge",
          productDescription:
            "Pantry fridge designed for fast food, hotels, and restaurants with integrated SS GN pans for storing mizzas.",
          productSpecification: [
            { leftalign: "Capacity", rightalign: "475 Ltrs" },
            { leftalign: "Power Consumption", rightalign: "675 Watts" },
            {
              leftalign: "Compressor",
              rightalign: "Copeland-Kirloskar / Tecumseh",
            },
            { leftalign: "Temperature Range", rightalign: "0ºC to 10ºC" },
            {
              leftalign: "Additional Features",
              rightalign:
                "GN pans with lids, digital temperature controller, puff-insulated doors",
            },
          ],
          availableSize: ["475 Ltrs (Custom sizes available)"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Cold-Equipments%2FPicture28.jpg?alt=media&token=07d140eb-521f-4c57-9c4d-d317258473c5",
        },
      ],
    },
    {
      categories: "Pre Preparation Equipment",
      image:
        "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Pre-production-equipments%2FChopping%20board.jpg?alt=media&token=6af40260-c4e9-4ced-af56-ad3ca91fd179",
      products: [
        {
          productName: "Chopping Board",
          productDescription:
            "A durable stainless steel chopping board with a robust structure for industrial kitchen use.",
          productSpecification: [
            {
              leftalign: "Material",
              rightalign: "Stainless steel, No. 4 finish",
            },
            { leftalign: "Size", rightalign: "Custom sizes available" },
          ],
          availableSize: ['36" x 24" x 34"', '48" x 24" x 34"'],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Pre-production-equipments%2FChopping%20board.jpg?alt=media&token=6af40260-c4e9-4ced-af56-ad3ca91fd179",
        },
        {
          productName: "Preparation Table",
          productDescription:
            "A stainless steel preparation table with adjustable bullet feet, designed for heavy-duty use in kitchens.",
          productSpecification: [
            {
              leftalign: "Top",
              rightalign: "Fabricated out of SS 304 Grade 16swg thick",
            },
            { leftalign: "Shelf", rightalign: "U/S made of 18 swg thick SS" },
            {
              leftalign: "Legs",
              rightalign: "Made out of 16 swg thick 1 ½'' square pipe",
            },
            { leftalign: "Bush", rightalign: "Adjustable nylon bullet bush" },
          ],
          availableSize: ['48" x 24" x 34" +6"'],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Pre-production-equipments%2FPreparation%20table.jpg?alt=media&token=4b59c5fe-0212-42f3-bd2f-da5af0355de9",
        },
        {
          productName: "Potato Onion Bin",
          productDescription:
            "A robust and durable stainless steel bin with wheels for easy transportation, suitable for storing potatoes and onions.",
          productSpecification: [
            {
              leftalign: "Material",
              rightalign: "Stainless steel, robust construction",
            },
            {
              leftalign: "Additional Features",
              rightalign:
                "Good dimensional accuracy, provided with wheels for easy movement",
            },
          ],
          availableSize: ["Custom sizes available"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Pre-production-equipments%2FPotato%20onion%20bin.jpg?alt=media&token=f916d403-95ff-4a8a-9b3d-1eed1effa87c",
        },
        {
          productName: "Dough Kneader",
          productDescription:
            "A high-capacity dough kneader with continuous operation and a durable electric motor for commercial use.",
          productSpecification: [
            { leftalign: "Capacity", rightalign: "10 to 25 Kg" },
            {
              leftalign: "Motor",
              rightalign: "0.5 HP to 3 HP, based on capacity",
            },
            { leftalign: "Voltage", rightalign: "220V / 440V" },
            { leftalign: "Kneading Time", rightalign: "12-20 minutes" },
          ],
          availableSize: [
            "1050x465x865 mm",
            "1250x575x950 mm",
            "1300x625x1000 mm",
            "1350x675x1050 mm",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Pre-production-equipments%2FDough%20Kneader.jpg?alt=media&token=c1004203-c74f-4543-a2c7-7268861a897b",
        },
        {
          productName: "Conventional Wet Grinder",
          productDescription:
            "A powerful wet grinder for commercial kitchens, perfect for continuous grinding of rice and lentils.",
          productSpecification: [
            { leftalign: "Capacity", rightalign: "5 to 30 Ltrs" },
            { leftalign: "Power", rightalign: "Varies based on size" },
          ],
          availableSize: ["Custom sizes available"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Pre-production-equipments%2FConventional%20wet%20grinder.jpg?alt=media&token=9a3f9d52-c83b-4601-b2af-ec9ca10abbff",
        },
        {
          productName: "Potato Peeler",
          productDescription:
            "An electric potato peeler capable of handling 10 to 60 kg per hour, suitable for industrial kitchens.",
          productSpecification: [
            { leftalign: "Capacity", rightalign: "10 to 60 kg/hr" },
            { leftalign: "Motor", rightalign: "0.5 HP to 2 HP, based on size" },
            { leftalign: "Voltage", rightalign: "220V / 440V" },
            { leftalign: "Peeling Time", rightalign: "50 to 90 seconds" },
          ],
          availableSize: ["10 Kg / Hr", "60 Kg / Hr"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Pre-production-equipments%2FPotato%20Peeler.jpg?alt=media&token=aa198298-3acb-4d38-963a-1acf776acf16",
        },
        {
          productName: "Veg Cutting Machine",
          productDescription:
            "A compact, high-speed vegetable cutting machine with stainless steel blades, designed for efficient cutting in bulk.",
          productSpecification: [
            { leftalign: "Capacity", rightalign: "100 to 150 Kg/hr" },
            { leftalign: "Power", rightalign: "0.5 HP" },
            { leftalign: "Voltage", rightalign: "220 V" },
            { leftalign: "Amps", rightalign: "04:00 AM" },
          ],
          availableSize: ["Custom sizes available"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Pre-production-equipments%2FVeg%20Cutting%20Machine.jpg?alt=media&token=a2209ca9-13c8-4721-90a3-c72b1603ff5e",
        },
        {
          productName: "Bone Saw Machine",
          productDescription:
            "A durable stainless steel bone saw machine with high-speed output, designed for cutting through bones in industrial kitchens.",
          productSpecification: [
            { leftalign: "Motor Capacity", rightalign: "3 HP" },
            { leftalign: "Blade Diameter", rightalign: "210 mm" },
            { leftalign: "Cutting Thickness", rightalign: "4-180 mm" },
          ],
          availableSize: ["530 x 500 x 950 mm"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Pre-production-equipments%2FBone%20Saw%20Machine.jpg?alt=media&token=91e37189-a32e-461a-a10a-cfcd1794defc",
        },
        {
          productName: "Coconut Scrapper",
          productDescription:
            "A coconut scrapper with high-capacity output, suitable for scrapping up to 60 coconuts per hour in commercial kitchens.",
          productSpecification: [
            { leftalign: "Capacity", rightalign: "50 to 60 Nos/hr" },
            { leftalign: "Power", rightalign: "0.5 HP" },
            { leftalign: "Voltage", rightalign: "220 V" },
          ],
          availableSize: ["Custom sizes available"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Pre-production-equipments%2FCoconut%20Scrapper.jpg?alt=media&token=77251aed-d28c-4b79-bb5b-04bc22771dd7",
        },
        {
          productName: "Instant Wet Grinder",
          productDescription:
            "A high-capacity instant wet grinder for grinding wet rice continuously, suitable for large-scale kitchens.",
          productSpecification: [
            { leftalign: "Capacity", rightalign: "40 to 100 kg/hr" },
            { leftalign: "Motor", rightalign: "1.5 to 3 HP" },
            { leftalign: "Voltage", rightalign: "220 V / 415 V" },
          ],
          availableSize: ["Various capacities available based on size"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Pre-production-equipments%2FInstant%20Wet%20Grinder.jpg?alt=media&token=6b04c3b8-616a-418d-9ee0-7290eae5875f",
        },
        {
          productName: "Masala Pulveriser",
          productDescription:
            "A powerful masala pulveriser designed for grinding spices in bulk, with adjustable grinding sizes.",
          productSpecification: [
            { leftalign: "Capacity", rightalign: "5 to 30 Kg/h" },
            { leftalign: "Revolution of Spindle", rightalign: "3800 r/min" },
            { leftalign: "Working Noise", rightalign: "≤ 85 db" },
            { leftalign: "Grinding Size", rightalign: "20-120 mesh" },
            {
              leftalign: "Power of Motor",
              rightalign: "1.5 KW to 7.5 KW, based on size",
            },
          ],
          availableSize: [
            "580 x 380 x 800 mm",
            "580 x 380 x 920 mm",
            "630 x 490 x 1160 mm",
            "810 x 500 x 1230 mm",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Pre-production-equipments%2FMasala%20Pulveriser.jpg?alt=media&token=78d08d4b-ddf9-481c-96b5-e052204df9be",
        },
        {
          productName: "Meat Mincer",
          productDescription:
            "A high-capacity meat mincer with ISO-certified motor, designed to process up to 500 Kg of meat per hour.",
          productSpecification: [
            { leftalign: "Meat Output", rightalign: "500 Kg/hr" },
            {
              leftalign: "Motor",
              rightalign: "ISO, CE, GS, TUV UL approved, 1.5 KW",
            },
            { leftalign: "Input Power", rightalign: "1.5 KW" },
            { leftalign: "Voltage", rightalign: "220V/380V, 1420 R/MIN" },
          ],
          availableSize: ["53 x 27 x 50 cm"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Pre-production-equipments%2FMeat%20Mincer.jpg?alt=media&token=2dad0332-8562-4983-81c9-56bdf0120081",
        },
        {
          productName: "Vegetable Rack Trolley",
          productDescription:
            "A durable stainless steel vegetable rack trolley with ventilated plastic crates, designed for easy transportation and storage of vegetables.",
          productSpecification: [
            {
              leftalign: "Material",
              rightalign:
                "Full stainless steel with food-grade ventilated plastic crate",
            },
            {
              leftalign: "Features",
              rightalign:
                "Swiveling castor with brake, vertical lever lock for easy mobility",
            },
            {
              leftalign: "Additional Features",
              rightalign:
                "Special design for easy placement and removal of crate",
            },
          ],
          availableSize: ['36" x 20" x 66"'],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Pre-production-equipments%2FVegetable%20Rack%20Trolley.jpg?alt=media&token=4050500e-02a0-4546-957a-5cb07c99cd32",
        },
        {
          productName: "Work Table Counter With Door",
          productDescription:
            "A stainless steel work table counter with a splash back, designed for commercial kitchens to store and prepare food efficiently.",
          productSpecification: [
            {
              leftalign: "Material",
              rightalign:
                "Thick gauge stainless steel top with sound-muffling application",
            },
            {
              leftalign: "Features",
              rightalign:
                "Splash back prevents water splash, stainless steel legs with adjustable bullet feet",
            },
            {
              leftalign: "Storage",
              rightalign:
                "Two under shelves and stainless steel inner frame for support",
            },
          ],
          availableSize: ['48" x 24" x 34" (Custom sizes available)'],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Pre-production-equipments%2FWork%20Table%20Counter%20With%20Door.jpg?alt=media&token=3f920239-1a56-42bf-99b7-ee7904bc100d",
        },
      ],
    },
    {
      categories: "Fast Food Equipment",
      image:
        "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Fast-Food%2FBain%20Marie.jpg?alt=media&token=71c52be8-7867-4725-ad11-0d6dcecfc6db",
      products: [
        {
          productName: "Spoon Sterilizer",
          productDescription:
            "A commercial spoon sterilizer suitable for hotels, restaurants, banquets, and catering services. Equipped with high-performance water heating elements for quick response time.",
          productSpecification: [
            {
              leftalign: "Construction",
              rightalign: "Heavy-duty stainless steel",
            },
            {
              leftalign: "Thermostat Control",
              rightalign: "Equipped with rotary switch",
            },
            {
              leftalign: "Model Type",
              rightalign: "Freestanding/mobile variants",
            },
          ],
          availableSize: [
            "Equipment can be fabricated in any custom size to suit as per requirement",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Fast-Food%2FBain%20Marie.jpg?alt=media&token=71c52be8-7867-4725-ad11-0d6dcecfc6db",
        },
        {
          productName: "Sandwich Griller",
          productDescription:
            "A high-capacity sandwich griller suitable for commercial kitchens, with imported thermostat and auto cut-off features.",
          productSpecification: [
            { leftalign: "Capacity", rightalign: "Double Jumbo Sandwich" },
            { leftalign: "Working Area", rightalign: "14 x 10 inch" },
            {
              leftalign: "Dimensions",
              rightalign: "17 x 16 x 10 inch (W x D x H)",
            },
            { leftalign: "Electrical Load", rightalign: "3000 Watts" },
            { leftalign: "Outer Body", rightalign: "Stainless Steel" },
            {
              leftalign: "Working Area",
              rightalign: "Cast iron plate with Non-Stick coating",
            },
            { leftalign: "Temperature", rightalign: "Up to 300°C" },
            {
              leftalign: "Oil Collector",
              rightalign: "Detachable steel oil collector",
            },
            {
              leftalign: "Insulation",
              rightalign: "High insulation fiber glass wiring",
            },
          ],
          availableSize: ["Custom size available upon request"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Fast-Food%2FDouble%20Deck%20Oven.jpg?alt=media&token=b8119117-9524-4a13-8ff6-dd27686e7590",
        },
        {
          productName: "Pizza Oven",
          productDescription:
            "A commercial pizza oven with independent control of top and bottom heat, suitable for high-capacity baking.",
          productSpecification: [
            {
              leftalign: "Power Consumption",
              rightalign: "PX-14 @ 1500 watts, PX-16 @ 1800 watts",
            },
            {
              leftalign: "Temperature Range",
              rightalign: "284°-680°F (140°-360°C)",
            },
            { leftalign: "Deck Height", rightalign: '3" (76mm)' },
            {
              leftalign: "Baking Rack",
              rightalign: "Nickel-chrome plated wire baking rack with handle",
            },
            { leftalign: "Exterior", rightalign: "Stainless steel" },
            {
              leftalign: "Interior",
              rightalign: "Aluminized steel, fully insulated",
            },
          ],
          availableSize: ["Custom size available upon request"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Fast-Food%2FPizza%20oven.jpg?alt=media&token=a34af7e0-ed02-45ce-a782-009e6301e7e1",
        },
        {
          productName: "Popcorn Machine",
          productDescription:
            "A commercial popcorn machine designed for catering, departmental stores, shopping malls, and restaurants. Comes with electric heater and thermostat control.",
          productSpecification: [
            {
              leftalign: "Operating Method",
              rightalign:
                "2000V Electric Heater & Automatic Thermo Couple Control",
            },
            { leftalign: "Material", rightalign: "Stainless steel & Aluminum" },
            { leftalign: "Power Requirement", rightalign: "Standard 110 volt" },
            { leftalign: "Weight", rightalign: "49 lbs" },
          ],
          availableSize: [
            '17"L x 14"D x 24.0"H',
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Fast-Food%2FPopcorn%20Machine.jpg?alt=media&token=6634349a-a0ef-42a9-92a6-2d107915755b",
        },
      ],
    },
    {
      categories: "Display Counters",
      image:
        "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Display-Counter%2FCurved%20Glass%20Display%20Counter.jpg?alt=media&token=62a8a06c-fcff-4567-a67d-e16ce4c5c5a7",
      products: [
        {
          productName: "Curved Glass Display Counter",
          productDescription:
            "A display counter with a curved glass front, suitable for displaying food items in bakeries and cafes.",
          productSpecification: [
            {
              leftalign: "Technology",
              rightalign:
                "Forced Draft Technology - Cooling Coil with fans for air circulation",
            },
            {
              leftalign: "Technology",
              rightalign:
                "Static Cooling Technology - Copper pipe based cooling",
            },
            {
              leftalign: "Drain",
              rightalign:
                "Drain with garden hose connector for ease of cleaning",
            },
            {
              leftalign: "Insulation",
              rightalign:
                '2.25" Puffed in place "Zero ODP" Polyol / Isolynate insulation',
            },
            {
              leftalign: "Compressor",
              rightalign: "Copeland Kirloskar / Tecumseh",
            },
            {
              leftalign: "Temperature Control",
              rightalign: "Digital temperature controller provided in the unit",
            },
          ],
          availableSize: [
            '60" x 27" x 50"',
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Display-Counter%2FCurved%20Glass%20Display%20Counter.jpg?alt=media&token=62a8a06c-fcff-4567-a67d-e16ce4c5c5a7",
        },
        {
          productName: "SS Parcel Counter",
          productDescription:
            "A stainless steel parcel counter with a hot case, suitable for bakeries, fast food centers, and sweet shops.",
          productSpecification: [
            { leftalign: "Material", rightalign: "High-grade stainless steel" },
            {
              leftalign: "Construction",
              rightalign:
                "One-piece material with glass display in the front and sliding steel sheet behind",
            },
            {
              leftalign: "Durability",
              rightalign: "Highly durable with longer service life",
            },
            {
              leftalign: "Glass Design",
              rightalign:
                "Various types of glass designs and shapes are available",
            },
          ],
          availableSize: [
            "4' x 2' x 34\"",
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Display-Counter%2FSS%20Parcel%20Counter.jpg?alt=media&token=999f44d8-7b57-4cff-ab65-fcf5dd8259b2",
        },
        {
          productName: "Pav Bhaji Counter",
          productDescription:
            "A counter for preparing and serving Pav Bhaji, made from high-quality stainless steel.",
          productSpecification: [
            {
              leftalign: "Gas Consumption",
              rightalign: "0.5 Kg / Hrs – 1.5 Kg / Hrs",
            },
            { leftalign: "Material Thickness", rightalign: "0.8mm – 3.15mm" },
            { leftalign: "Burner Head", rightalign: "T35 G11, G9 M10" },
            {
              leftalign: "Legs",
              rightalign:
                'Made out of 11/2" OD 16SWG SS pipe legs with adjustable bullet legs',
            },
            { leftalign: "Frame", rightalign: '11/4"x11/4" MS Angle Frame' },
            {
              leftalign: "Top",
              rightalign:
                "Made out of 304 Grade 16 SWG SS sheet, 18SWG SS side paneling on all sides",
            },
            { leftalign: "Pan Support", rightalign: "Cast iron pan support" },
            { leftalign: "Burners", rightalign: "Varies as per range" },
            { leftalign: "NC Valve", rightalign: "Varies as per range" },
            { leftalign: "Pigtail", rightalign: "Varies as per range" },
          ],
          availableSize: ["Custom size available upon request"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Display-Counter%2FPav%20Bhaji%20-%20Counter.jpg?alt=media&token=109986a7-f341-46b8-9fd6-b04129ca513d",
        },
        {
          productName: "SS Chat Counter",
          productDescription:
            "A stainless steel chat counter with large storage capacity and GN pans, suitable for serving various chat items.",
          productSpecification: [
            { leftalign: "Storage Capacity", rightalign: "200 Ltrs." },
            {
              leftalign: "GN Pans",
              rightalign: '1/3 x 4" - 12 Pcs. (Polycarbonate)',
            },
            { leftalign: "Power Consumption", rightalign: "675 Watts" },
            { leftalign: "Temperature", rightalign: "+10° C to 0° C" },
          ],
          availableSize: [
            '60" x 30" x 34" + 18" + 36"',
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Display-Counter%2FSS%20Chat%20Counter.jpg?alt=media&token=7c961dbf-044f-4c41-b412-f2138504b85f",
        },
        {
          productName: "Sweet Corn Counter",
          productDescription:
            "A counter designed for preparing and serving sweet corn, equipped with GN pans.",
          productSpecification: [
            { leftalign: "Capacity", rightalign: "1.5 kg/Batch" },
            { leftalign: "Power Consumption", rightalign: "1.5 Kw" },
            {
              leftalign: "GN Pans",
              rightalign: '1/6 x 4" = 2Pcs. / 1/9 x 4" = 2Pcs.',
            },
          ],
          availableSize: [
            '36" X 24" X 36" + 48"',
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Display-Counter%2Fsweet%20corn%20counter.jpg?alt=media&token=eee57b74-662b-470c-b1bf-7293fa4c3a01",
        },
        {
          productName: "Tea Coffee Counter",
          productDescription:
            "A counter designed for preparing and serving tea and coffee, suitable for commercial environments.",
          productSpecification: [],
          availableSize: ["Custom size available upon request"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Display-Counter%2FTea%20Coffee%20Counter.jpg?alt=media&token=094a9ec6-62d2-4857-835d-25cb673c3868",
        },
      ],
    },
    {
      categories: "Special Products",
      image:
        "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Special-Products%2FChapatti%20Ball%20Cutting%20Machine.jpg?alt=media&token=b56aaeb9-bfad-4890-a87c-2345aafe8a68",
      products: [
        {
          productName: "Electric Dosa Tawa",
          productDescription:
            "An electric dosa tawa designed for fast startup and efficient cooking, suitable for commercial kitchens.",
          productSpecification: [
            {
              leftalign: "Temperature",
              rightalign:
                "Reaches 350 degrees in 11 minutes, 450 degrees maximum",
            },
            { leftalign: "Voltage", rightalign: "230/50/1/Hz/1Ph" },
            {
              leftalign: "Adjustable Legs",
              rightalign: '4" (10 cm) adjustable legs',
            },
            {
              leftalign: "Griddle Plate",
              rightalign: '3/4" flat polished steel',
            },
            {
              leftalign: "Grease Collection",
              rightalign:
                '4" x 1" grease chute, 4 gallon grease collection drawer',
            },
            {
              leftalign: "Control Knobs",
              rightalign: "Easy-to-read control knobs",
            },
          ],
          availableSize: [
            "2 x 2 1/2, 3 x 2 & 4x2",
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Special-Products%2FDosa%20Making%20Machine.jpg?alt=media&token=3acb519e-7684-47b9-9e7c-97ca09f720f6",
        },
        {
          productName: "Commercial Idly Maker",
          productDescription:
            "A commercial idly maker with electrical operation, suitable for making a large number of idlies in a short time.",
          productSpecification: [
            { leftalign: "Capacity", rightalign: "120 Idlies" },
            { leftalign: "Types of Tray", rightalign: "Normal / Ghee idly" },
            { leftalign: "Operation", rightalign: "Electrical" },
            { leftalign: "Number of Trays", rightalign: "6 Nos" },
            { leftalign: "Idlies per Tray", rightalign: "20 Nos" },
          ],
          availableSize: ["Custom size available upon request"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Special-Products%2FCommercial%20idly.jpg?alt=media&token=4656974d-e20f-4f31-b246-def44e66d849",
        },
        {
          productName: "Semi Automatic Chapatti Making Machine",
          productDescription:
            "A semi-automatic machine designed for high-volume chapatti and puri production, suitable for commercial kitchens.",
          productSpecification: [
            {
              leftalign: "Capacity",
              rightalign: "2000 Chapathies / 4000 Puris per hour",
            },
            {
              leftalign: "Power",
              rightalign:
                "1 HP Motor, 1 Phase, 230V with DC Drive for variable speed",
            },
            { leftalign: "Main Roller", rightalign: "Polymer" },
            { leftalign: "Side Cover", rightalign: "Made of Stainless Steel" },
            { leftalign: "Chapatti Size", rightalign: '8" dia' },
            { leftalign: "Puri Size", rightalign: '5" dia' },
          ],
          availableSize: [
            "9 x 2.6 x 3 ft. (LBH)",
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Special-Products%2FSemi%20Automatic%20Chapatti%20Making%20machine.jpg?alt=media&token=25261b28-74bb-41f0-b3d6-36807a416a2b",
        },
        {
          productName: "Rotary Chapatti Making Machine",
          productDescription:
            "A rotary machine designed for making chapattis at high volumes, suitable for large-scale commercial kitchens.",
          productSpecification: [
            {
              leftalign: "Production Capacity",
              rightalign: "500 to 8000 Chapatis per hour",
            },
            { leftalign: "Machine Weight", rightalign: "650 to 3500 Kg" },
            { leftalign: "Chapatti Thickness", rightalign: "1.5-3 mm" },
            {
              leftalign: "Machine Area",
              rightalign: "Varies from 5'x'3'x6' to 13'x4.5'x7'",
            },
            { leftalign: "Power Required", rightalign: "0.4 K.W to 3 K.W" },
            {
              leftalign: "LPG Consumption",
              rightalign: "2.5 Kg/hr to 25 Kg/hr",
            },
          ],
          availableSize: ["Custom size available upon request"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Special-Products%2FRotary%20chapatti%20making%20machine.jpg?alt=media&token=5ef1bedf-1cf8-4cc4-b98c-3b8952ad86a8",
        },
        {
          productName: "Chapatti Ball Cutting Machine",
          productDescription:
            "A machine designed to cut chapatti balls with identical size and weight, ideal for making chapatti, paratha, poori, and bakery items.",
          productSpecification: [
            {
              leftalign: "Ball Size Adjustment",
              rightalign:
                "Adjustable as per requirement with 1 to 2 grams variation",
            },
            { leftalign: "Production", rightalign: "2000 balls per hour" },
            { leftalign: "Operation", rightalign: "Pneumatic system" },
            { leftalign: "Running Cost", rightalign: "Low" },
          ],
          availableSize: [
            '26" x 22" x 65"',
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Special-Products%2FChapatti%20Ball%20Cutting%20Machine.jpg?alt=media&token=b56aaeb9-bfad-4890-a87c-2345aafe8a68",
        },
        {
          productName: "Dosa Making Machine",
          productDescription:
            "A commercial dosa making machine with heat reduction technology, suitable for hotels, canteens, and institutions.",
          productSpecification: [
            { leftalign: "Gas Consumption", rightalign: "0.9 Kg per hour" },
            {
              leftalign: "Production",
              rightalign:
                "350 to 400 dosa per hour, 325 to 350 oothappam per hour",
            },
            { leftalign: "Flour Capacity", rightalign: "7 Litres" },
            {
              leftalign: "Motor",
              rightalign: "1 H.P. single phase or three phase",
            },
            {
              leftalign: "Heat Reduction",
              rightalign: "Provided with heat reduction technology",
            },
            { leftalign: "Oil Capacity", rightalign: "1 litre" },
          ],
          availableSize: [
            '50" x 50" x 62"',
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Special-Products%2FDosa%20Making%20Machine.jpg?alt=media&token=3acb519e-7684-47b9-9e7c-97ca09f720f6",
        },
        {
          productName: "Electrical Kadai",
          productDescription:
            "An electrical kadai suitable for deep frying, designed with adjustable legs for easy handling.",
          productSpecification: [
            { leftalign: "Capacity", rightalign: "10 Ltrs." },
            { leftalign: "Power Ratings", rightalign: "9 Kw" },
            { leftalign: "Voltage", rightalign: "440 V" },
            { leftalign: "Adjustable Legs", rightalign: '4" (10 cm)' },
          ],
          availableSize: ['20" x 8"', "Custom size available upon request"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Special-Products%2FElectrical%20Kadai.jpg?alt=media&token=4a4266b8-3805-49e9-9e52-d799407b655c",
        },
        {
          productName: "Idiyappam Making Machine",
          productDescription:
            "A pneumatic system-based machine for making idiyappam, suitable for hotels and commercial kitchens.",
          productSpecification: [
            { leftalign: "Production", rightalign: "1200 idiyappam per hour" },
            { leftalign: "Operation", rightalign: "Pneumatic system" },
            { leftalign: "Running Cost", rightalign: "Low" },
            {
              leftalign: "Weight Adjustment",
              rightalign:
                "Weight of idiyappam can be varied as per requirement",
            },
          ],
          availableSize: ["Custom size available upon request"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Special-Products%2FIdiyappam%20Making%20Machine.jpg?alt=media&token=8229fd11-a3ec-437a-acfb-1828f4736212",
        },
      ],
    },
    {
      categories: "Trolleys",
      image:
        "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Trolley%2FPlot%20Form%20Trolley.jpg?alt=media&token=3c4d5f53-ffa5-4587-b637-e0e7c33e6750",
      products: [
        {
          productName: "Platform Trolley",
          productDescription:
            "A versatile platform trolley, designed for industrial use with a sturdy stainless steel frame.",
          productSpecification: [
            { leftalign: "Frame", rightalign: '1 1/4"X1 1/4" MS Angle frame' },
            { leftalign: "Material Thickness", rightalign: "0.8mm - 3.15mm" },
            {
              leftalign: "Top",
              rightalign:
                "Made out of 304 grade 16 SWG SS Sheet, 18SWG SS side paneling on 04 sides",
            },
            {
              leftalign: "Legs",
              rightalign:
                'Made out of 11/2" OD 16SWG SS pipe legs with adjustable bullet legs',
            },
          ],
          availableSize: [
            '36" x 24" x 8" + 30"',
            '48" x 24" x 8" + 30"',
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Trolley%2FPlot%20Form%20Trolley.jpg?alt=media&token=3c4d5f53-ffa5-4587-b637-e0e7c33e6750",
        },
        {
          productName: "Masala Trolley",
          productDescription:
            "A mobile masala trolley for commercial use, ideal for Indian and Chinese kitchens with provision for multiple spice containers.",
          productSpecification: [
            {
              leftalign: "Usage",
              rightalign: "Suitable for Indian & Chinese range",
            },
            {
              leftalign: "Shelves",
              rightalign: "Available with/without under shelf",
            },
            {
              leftalign: "Spice Containers",
              rightalign: "Provision for 09 stainless steel spice containers",
            },
            {
              leftalign: "Legs",
              rightalign: "Made in 38mm round/square stainless steel pipes",
            },
            {
              leftalign: "Castors",
              rightalign: '4" dia heavy duty castors with brakes',
            },
          ],
          availableSize: ["Custom size available upon request"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Trolley%2FMasala%20Trolley.jpg?alt=media&token=64270fc2-7301-4127-95b5-031862108984",
        },
        {
          productName: "Waste Collection Trolley",
          productDescription:
            "A stainless steel waste collection trolley designed for commercial kitchens, featuring durable construction.",
          productSpecification: [
            { leftalign: "Material Thickness", rightalign: "0.8mm - 3.15mm" },
            { leftalign: "Frame", rightalign: '1 1/4"X1 1/4" MS Angle Frame' },
            {
              leftalign: "Top",
              rightalign:
                "Made out of 304 grade 16 SWG SS Sheet, 18SWG SS side paneling on 04 sides",
            },
            {
              leftalign: "Legs",
              rightalign:
                'Made out of 11/2" OD 16SWG SS pipe legs with adjustable bullet legs',
            },
          ],
          availableSize: ["Custom size available upon request"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Trolley%2FWaste%20Collection%20Trolley.jpg?alt=media&token=05f9b804-208f-405d-a869-eda7a64667bc",
        },
        {
          productName: "Hot Food Trolley",
          productDescription:
            "A trolley designed for holding and transporting hot food, equipped with GN pans for convenience.",
          productSpecification: [
            {
              leftalign: "GN PANS (KM-MST-168)",
              rightalign: '1/6 X 4" = 9 pcs.',
            },
            {
              leftalign: "GN PANS (KM-MST-169)",
              rightalign: '1/6 X 4" = 6 pcs',
            },
          ],
          availableSize: [
            '24" x 24" x 30"',
            '18" x 18" x 30"',
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Trolley%2FHot%20Food%20Trolley.jpg?alt=media&token=11bed319-2870-43b0-be75-d526aabd49e9",
        },
        {
          productName: "Housekeeping Trolley",
          productDescription:
            "A robust housekeeping trolley with stainless steel construction, ideal for industrial use.",
          productSpecification: [
            { leftalign: "Material Thickness", rightalign: "0.8mm - 3.15mm" },
            { leftalign: "Frame", rightalign: '11/4" X 11/4" MS Angle Frame' },
            {
              leftalign: "Top",
              rightalign:
                "Made out of 304 Grade 16 SWG SS Sheet, 18SWG SS Side paneling on 04 sides",
            },
            {
              leftalign: "Legs",
              rightalign:
                'Made out of 11/2" OD 16SWG SS Pipe legs with adjustable bullet legs',
            },
          ],
          availableSize: [
            '48" x 22" x 44"',
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Trolley%2FHouse%20keeping%20Trolley.jpg?alt=media&token=371ead05-32ef-4348-a990-04de76a008d8",
        },
        {
          productName: "Luggage Trolley",
          productDescription:
            "A luggage trolley with a heavy-duty frame, ideal for industrial and commercial settings.",
          productSpecification: [
            { leftalign: "Frame", rightalign: '11/4" x 11/4" MS Angle Frame' },
            { leftalign: "Material Thickness", rightalign: "0.8mm - 3.15mm" },
            {
              leftalign: "Top",
              rightalign:
                "Made out of 304 Grade 16SWG SS Sheet, 18SWG SS side paneling on 04 sides",
            },
            {
              leftalign: "Legs",
              rightalign:
                'Made out of 11/2" OD 16SWG SS pipe legs with adjustable bullet legs',
            },
          ],
          availableSize: [
            '42" x 30" x 6" + 66"',
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Trolley%2FLuggage%20Trolley.jpg?alt=media&token=3791dcdb-8428-435b-911b-08291b4c2601",
        },
        {
          productName: "Romali Roti Trolley",
          productDescription:
            "A stainless steel trolley designed for making and transporting Romali Roti, suitable for commercial kitchens.",
          productSpecification: [
            { leftalign: "Material Thickness", rightalign: "0.8mm - 3.15mm" },
            { leftalign: "Frame", rightalign: '1 1/4"X1 1/4" MS Angle Frame' },
            {
              leftalign: "Top",
              rightalign:
                "Made out of 304 grade 16 SWG SS Sheet, 18SWG SS side paneling on 04 sides",
            },
            {
              leftalign: "Leg",
              rightalign:
                'Made out of 11/2" OD 16SWG SS pipe legs with adjustable bullet legs',
            },
          ],
          availableSize: ["Custom size available upon request"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Trolley%2FRomali%20Roti%20Trolley.jpg?alt=media&token=4b843578-18ed-415a-b83a-b4db6c8a82d8",
        },
        {
          productName: "Tea Snacks Trolley",
          productDescription:
            "A tea snacks trolley made from high-grade stainless steel, perfect for serving beverages and snacks.",
          productSpecification: [
            { leftalign: "Material Thickness", rightalign: "0.8mm - 3.15mm" },
            { leftalign: "Frame", rightalign: '1 1/4"X1 1/4" MS Angle Frame' },
            {
              leftalign: "Top",
              rightalign:
                "Made out of 304 grade 16 SWG SS Sheet, 18SWG SS side paneling on 04 sides",
            },
            {
              leftalign: "Leg",
              rightalign:
                'Made out of 11/2" OD 16SWG SS pipe legs with adjustable bullet legs',
            },
          ],
          availableSize: [
            '36" x 20" x 34" + 6"',
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Trolley%2FTea%20Snacks%20Trolley.jpg?alt=media&token=2c6fe227-6054-487b-b1a8-b089d5922078",
        },
      ],
    },

    {
      categories: "Washing Equipments",
      image:
        "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Washing-Equipments%2FSingle%20Sink.jpg?alt=media&token=dc1ec3a9-b294-46aa-9970-f8cc3de0510e",
      products: [
        {
          productName: "Single Sink",
          productDescription:
            "A single sink made with AISI Stainless Steel 304 Food Grade Quality, suitable for commercial kitchens.",
          productSpecification: [
            {
              leftalign: "Material",
              rightalign: "Full AISI Stainless Steel 304 Food Grade Quality",
            },
            {
              leftalign: "Legs",
              rightalign: "Galvanized legs with adjustable plastic bullet feet",
            },
            {
              leftalign: "Additional Features",
              rightalign:
                "Splash back and fall support, includes 1 basket drain",
            },
            {
              leftalign: "Structure",
              rightalign:
                "SS inner pipe frame and legs structure with Nylon adjustable bullet feet",
            },
          ],
          availableSize: ["Custom size available upon request"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Washing-Equipments%2FSingle%20Sink.jpg?alt=media&token=dc1ec3a9-b294-46aa-9970-f8cc3de0510e",
        },
        {
          productName: "Three Sink",
          productDescription:
            "A three-compartment sink made with AISI Stainless Steel 304, ideal for pot washing in commercial kitchens.",
          productSpecification: [
            {
              leftalign: "Material",
              rightalign: "Full AISI Stainless Steel 304 Food Grade Quality",
            },
            {
              leftalign: "Sink",
              rightalign: "SS 304 3 nos pot wash sink of 16 Swg thickness",
            },
            {
              leftalign: "Splash Back",
              rightalign:
                '50 mm subk inn Top with 6" splash back and fall support',
            },
            {
              leftalign: "Legs",
              rightalign: "Galvanized legs with adjustable plastic bullet foot",
            },
            {
              leftalign: "Additional Features",
              rightalign: "Includes 3 basket drains",
            },
          ],
          availableSize: [
            '66" x 24" x 34"',
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Washing-Equipments%2FThree%20Sink.jpg?alt=media&token=b0d317ff-b50e-4929-932e-d122e7cf4d1d",
        },
        {
          productName: "Chute Table",
          productDescription:
            "A chute table with stainless steel construction, designed for easy garbage disposal and drainage.",
          productSpecification: [
            { leftalign: "Top", rightalign: "16 SWG SS 304" },
            {
              leftalign: "Garbage Chute",
              rightalign: "18 SWG SS 304 with raised/plain border",
            },
            {
              leftalign: "Drain",
              rightalign: "SS sinking top on all sides, drain outlet",
            },
            {
              leftalign: "Legs",
              rightalign: "SS pipeline with adjustable bullet feet",
            },
          ],
          availableSize: ["Custom size available upon request"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Washing-Equipments%2FChute%20Table.jpg?alt=media&token=8bd6a935-cbcf-4d1e-a5f8-cc484e9a9934",
        },
        {
          productName: "Hand Wash Sink",
          productDescription:
            "A stainless steel hand wash sink, equipped with double knee-operated valves for hands-free operation.",
          productSpecification: [
            {
              leftalign: "Operation",
              rightalign:
                "Double knee operated valves with connecting hose and fittings",
            },
            {
              leftalign: "Spouts",
              rightalign: "Gooseneck spouts with aerator",
            },
            {
              leftalign: "Material",
              rightalign:
                "Heavy-duty 16 gauge, #304 stainless steel construction",
            },
            {
              leftalign: "Additional Features",
              rightalign:
                'Strainer with basket, wall mounting brackets, 10" high backsplash',
            },
          ],
          availableSize: ["Custom size available upon request"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Washing-Equipments%2FHand%20Wash%20Sink.jpg?alt=media&token=939c5224-f6ad-439b-9e24-6709f41009c4",
        },
        {
          productName: "Clean Dish Rack",
          productDescription:
            "A stainless steel dish rack, suitable for storing utensils and dishes in commercial kitchens.",
          productSpecification: [
            {
              leftalign: "Material",
              rightalign:
                "Made of S.S. heavy gauge sheet with Uprights S.S. sq. pipes",
            },
            {
              leftalign: "Sizes",
              rightalign: "Available in various standard sizes",
            },
            {
              leftalign: "Legs",
              rightalign: "Height adjustable bullet feet provided",
            },
          ],
          availableSize: [
            '36" x 20" x 66"',
            '44" x 20" x 66"',
            '48" x 20" x 66"',
            '60" x 20" x 66"',
            '72" x 20" x 66"',
            '84" x 20" x 66"',
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Washing-Equipments%2FClean%20Dish%20Rack.jpg?alt=media&token=d6161e7e-0692-424f-b9fb-4115840df6ca",
        },
        {
          productName: "Pot Rack",
          productDescription:
            "A stainless steel pot rack designed for drying and storage, equipped with multiple shelves and hooks.",
          productSpecification: [
            {
              leftalign: "Support",
              rightalign: "SS pipe cross support, Aero drying hooks",
            },
            {
              leftalign: "Shelves",
              rightalign: "05 nos. of stainless steel shelves are provided",
            },
            {
              leftalign: "Legs",
              rightalign: "Made in 38mm round/square stainless steel pipes",
            },
          ],
          availableSize: [
            '36" x 20" x 60"',
            '48" x 20" x 60"',
            '60" x 20" x 60"',
            '72" x 20" x 60"',
            '84" x 20" x 60"',
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Washing-Equipments%2FPot%20Rack.jpg?alt=media&token=a0af15f4-a00e-4562-bc52-bf8a02603119",
        },
        {
          productName: "Clean Plate Stocking Rack",
          productDescription:
            "A stainless steel plate rack for multipurpose storage, ideal for keeping plates organized.",
          productSpecification: [
            {
              leftalign: "Material",
              rightalign:
                "Fully constructed in heavy-duty 16 gauge of 304 grade stainless steel sheet",
            },
            {
              leftalign: "Shelves",
              rightalign: "Manufactured in stainless steel pipes",
            },
            {
              leftalign: "Legs",
              rightalign:
                "Made in 38mm round/square stainless steel pipes, height adjustable bullet feet",
            },
          ],
          availableSize: ["Custom size available upon request"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Washing-Equipments%2FClean%20Plate%20Stocking%20Rack.jpg?alt=media&token=e48004e9-9965-45e9-af80-84a02813d04b",
        },
        {
          productName: "Hood Type Dish Washer",
          productDescription:
            "A hood-type dishwasher designed for commercial kitchens with high capacity and efficient washing cycles.",
          productSpecification: [
            { leftalign: "Max Capacity", rightalign: "60 racks/hr" },
            { leftalign: "Water Consumption", rightalign: "3 Ltrs" },
            { leftalign: "Wash Tank Capacity", rightalign: "32 Ltrs" },
            { leftalign: "Booster Capacity", rightalign: "14 Ltrs" },
            { leftalign: "Wash Temperature", rightalign: "60 – 65 deg C" },
            { leftalign: "Rinse Temperature", rightalign: "82 – 90 deg C" },
            { leftalign: "Wash Cycles", rightalign: "120/90/60" },
          ],
          availableSize: [
            "696 x 712 x 1440",
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Washing-Equipments%2FHood%20Type%20Dish%20Washer.jpg?alt=media&token=111d1fb6-5465-4fb4-bb7f-305395229afa",
        },
        {
          productName: "Rice Washer",
          productDescription:
            "A stainless steel rice washer with continuous running capability, suitable for commercial kitchens.",
          productSpecification: [
            { leftalign: "Capacity", rightalign: "15kg - 100kg" },
            { leftalign: "Water Pressure", rightalign: "1Kg/cm2 or more" },
            { leftalign: "Time Consumption", rightalign: "3 to 5 mins" },
            { leftalign: "Body Type", rightalign: "Stainless steel body" },
          ],
          availableSize: ["460 x 800", "Custom size available upon request"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Washing-Equipments%2FRice%20Washer.jpg?alt=media&token=8ce73bf6-2e3e-4ead-a0a1-07c07a79318c",
        },
        {
          productName: "SS Tray Rack",
          productDescription:
            "A stainless steel tray rack designed for multipurpose storage, offering a sturdy and durable construction.",
          productSpecification: [
            {
              leftalign: "Material",
              rightalign:
                "Constructed in heavy-duty 16 gauge of 304 grade stainless steel sheet",
            },
            {
              leftalign: "Shelves",
              rightalign:
                "Stainless steel shelves are provided for tray storage",
            },
            {
              leftalign: "Legs",
              rightalign:
                "Made in 38mm round/square stainless steel pipes, height adjustable bullet feet",
            },
          ],
          availableSize: [
            '36" x 20" x 66"',
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Washing-Equipments%2FSS%20Tray%20Rack.jpg?alt=media&token=a97eb423-469e-4fdc-aa20-019f1958ea3b",
        },
        {
          productName: "Under Counter Dish Washer",
          productDescription:
            "An under-counter dishwasher with a triple working cycle and features for maximum convenience in commercial kitchens.",
          productSpecification: [
            {
              leftalign: "Construction",
              rightalign: "All double-skinned inox construction",
            },
            {
              leftalign: "Working Cycles",
              rightalign: "Triple working cycles: 2, 1.5, 3 minutes",
            },
            {
              leftalign: "Rinse-Now Feature",
              rightalign: '"Rinse-Now" feature for efficiency',
            },
            {
              leftalign: "Controls",
              rightalign: "Side controls for maximum ease of use",
            },
            {
              leftalign: "Built-in Features",
              rightalign:
                "Built-in rinse-aid dispenser, safety cycle-stop on door opening",
            },
          ],
          availableSize: ["Custom size available upon request"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Washing-Equipments%2FUnder%20Counter%20Dish%20Washer.jpg?alt=media&token=1a400416-ff9c-4ccd-9b89-5039e931fae2",
        },
      ],
    },

    {
      categories: "Kitchen Exhaust & Fresh Air",
      image:
        "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Kitchen-Exhaust%26Fresh-Air%2FExhaust%20Hood%20With%20Filters.jpg?alt=media&token=928c5290-68fd-40a0-aa57-70e9c575b656",
      products: [
        {
          productName: "Exhaust Hood With Filters",
          productDescription:
            "The DSC short cycle kitchen extraction canopy is designed to introduce filtered untempered outside air directly into the hood, reducing the amount of air extracted from the kitchen.",
          productSpecification: [
            {
              leftalign: "Material",
              rightalign:
                "Manufactured from stainless steel with welded construction",
            },
            {
              leftalign: "Filter Type",
              rightalign:
                "Debaff baffle filters for grease and pollutant separation",
            },
            {
              leftalign: "Drain System",
              rightalign: "Integrated drain collecting channel with drain cock",
            },
            {
              leftalign: "Light Fixtures",
              rightalign:
                "Splash and water proof IP 54 rated, heat resistance up to 110°C",
            },
            {
              leftalign: "Fire Suppression",
              rightalign: "System can be easily integrated into the canopy",
            },
            {
              leftalign: "Models",
              rightalign: "Available in wall-mounted and island type",
            },
          ],
          availableSize: [
            "900mm x 600mm",
            "1000mm x 600mm",
            "1100mm x 600mm",
            "1200mm x 600mm",
            "1300mm x 600mm",
            "1400mm x 600mm",
            "1500mm x 600mm",
            "1600mm x 600mm",
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Kitchen-Exhaust%26Fresh-Air%2FExhaust%20Hood%20With%20Filters.jpg?alt=media&token=928c5290-68fd-40a0-aa57-70e9c575b656",
        },
        {
          productName: "Centrifugal Blower",
          productDescription:
            "A centrifugal blower designed for kitchen exhaust systems, offering high efficiency and durability.",
          productSpecification: [
            { leftalign: "Capacity", rightalign: "25hp to 150hp" },
            { leftalign: "Impeller Size", rightalign: "450mm – 1600mm" },
            { leftalign: "Motor Rating", rightalign: "250 kW" },
            { leftalign: "Fan Speed", rightalign: "400 – 2880 RPM" },
            { leftalign: "Operating Temperature", rightalign: "40°C" },
            { leftalign: "Efficiency", rightalign: "85%" },
          ],
          availableSize: [
            "450mm x 450mm x 600mm",
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Kitchen-Exhaust%26Fresh-Air%2FCentrifugal%20Blower.jpg?alt=media&token=b39c1ae0-721e-4873-ac2d-895847d1c2b0",
        },
        {
          productName: "Axial Flow Fan",
          productDescription:
            "An axial flow fan for effective ventilation, suitable for commercial kitchens and exhaust systems.",
          productSpecification: [
            { leftalign: "Capacity", rightalign: "1hp – 25hp" },
            { leftalign: "Impeller Size", rightalign: "450mm – 1600mm" },
            { leftalign: "Motor Rating", rightalign: "50 kW" },
            { leftalign: "Fan Speed", rightalign: "400 – 2880 RPM" },
            { leftalign: "Operating Temperature", rightalign: "60°C" },
            { leftalign: "Efficiency", rightalign: "82%" },
          ],
          availableSize: [
            "300mm x 1600mm",
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Kitchen-Exhaust%26Fresh-Air%2FAxial%20Flow%20Fan.jpg?alt=media&token=ecf64b04-9047-42cf-b90e-703ae26a2d37",
        },
        {
          productName: "Baffle Type Filter",
          productDescription:
            "A baffle type filter suitable for kitchen canopies, designed for easy cleaning and long service life.",
          productSpecification: [
            {
              leftalign: "Features",
              rightalign: "Easy clean-ability with an attractive appearance",
            },
            {
              leftalign: "Compatibility",
              rightalign: "Suitable for kitchen canopies with drip trays",
            },
            {
              leftalign: "Material",
              rightalign:
                "Filters edges made from rolled channel frames with safety edges",
            },
            {
              leftalign: "Fire Suppression",
              rightalign: "System can be easily integrated into the canopy",
            },
            {
              leftalign: "Models",
              rightalign: "Available in wall-mounted and island type",
            },
          ],
          availableSize: [
            "600mm x 550mm x 50mm",
            "600mm x 400mm x 50mm",
            "400mm x 550mm x 50mm",
            "400mm x 400mm x 50mm",
            "200mm x 550mm x 50mm",
            "200mm x 400mm x 50mm",
            "200mm x 330mm x 50mm",
            "Custom size available upon request",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Kitchen-Exhaust%26Fresh-Air%2FBaffle%20Type%20Filter.jpg?alt=media&token=6da178c9-c6ae-4789-a819-0dbfbe11246c",
        },
        {
          productName: "High Efficiency Exhaust Hood",
          productDescription:
            "The high efficiency DAC_UV hood incorporates patented canopy air confinement technology with side nozzles and ultraviolet rays for effective grease extraction.",
          productSpecification: [
            {
              leftalign: "Technology",
              rightalign:
                "Patented canopy air confinement with side nozzles and ultraviolet rays",
            },
            {
              leftalign: "VOC Reduction",
              rightalign:
                "Ultraviolet light reacts with VOCs and generates ozone (UVC) to break down compounds",
            },
            {
              leftalign: "Efficiency",
              rightalign:
                "Requires 25-45% less exhaust air volume compared to traditional canopies",
            },
            {
              leftalign: "Material",
              rightalign:
                "Manufactured from stainless steel with welded construction",
            },
            {
              leftalign: "Fire Suppression",
              rightalign: "System can be easily integrated into the canopy",
            },
            {
              leftalign: "Models",
              rightalign: "Available in wall-mounted and island type",
            },
          ],
          availableSize: ["Custom size available upon request"],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Kitchen-Exhaust%26Fresh-Air%2FHigh%20Efficiency%20Exhaust%20Hood.jpg?alt=media&token=b11cbafe-05b0-490e-acd7-4cb15e2ca1cc",
        },
        {
          productName: "Gas Bank",
          productDescription:
            "A gas bank system designed for commercial kitchens to manage and store LPG or natural gas efficiently.",
          productSpecification: [
            {
              leftalign: "Material",
              rightalign:
                "Manufactured from high-quality materials to ensure safety and durability",
            },
            {
              leftalign: "Usage",
              rightalign:
                "Suitable for managing gas supply in commercial kitchen environments",
            },
            {
              leftalign: "Safety Features",
              rightalign:
                "Equipped with safety valves and regulators for controlled gas flow",
            },
            {
              leftalign: "Capacity",
              rightalign:
                "Customizable to suit the requirements of small to large kitchen setups",
            },
          ],
          availableSize: [
            "Equipment can be fabricated in any custom size to suit as per requirement",
          ],
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Gas-Bank%26Gas-Line%2FGas%20Bank.jpg?alt=media&token=a804d4cf-f29c-4349-afce-4853c7ee16ee",
        },
      ],
    },

    {
      categories: "Imported Kitchen Equipments",
      image:
        "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Imported-Equipments%2FBar%20Blender.jpg?alt=media&token=5346d51e-d144-4f32-b76f-9341f39ba7f2",
      products: [
        {
          productName: "Bar Blender",
          productDescription:
            "A high-quality bar blender designed for commercial kitchens, suitable for blending a variety of beverages.",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Imported-Equipments%2FBar%20Blender.jpg?alt=media&token=5346d51e-d144-4f32-b76f-9341f39ba7f2",
          productSpecification: [
            { leftalign: "Model", rightalign: "KMI009" },
            { leftalign: "Capacity", rightalign: "1.25 Ltrs. Jar" },
            { leftalign: "Voltage", rightalign: "220V/50Hz./1 Phase - 600 W" },
            {
              leftalign: "Dimension",
              rightalign: "180 x 180 x 420 mm (W x D x H)",
            },
            {
              leftalign: "Other Models",
              rightalign: "Other capacity models are also available",
            },
          ],
          availableSize: ["Custom size available upon request"],
        },
        {
          productName: "Coffee Grinder",
          productDescription:
            "A robust coffee grinder capable of grinding up to 1000 grams of coffee, suitable for commercial use.",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Imported-Equipments%2FCoffee%20Grinders.jpg?alt=media&token=eaade8ac-f710-47db-8f72-fc769e72bb25",
          productSpecification: [
            { leftalign: "Model", rightalign: "KMI011" },
            {
              leftalign: "Capacity",
              rightalign: "Up to 1000 grm. of coffee bins",
            },
            { leftalign: "Diameter of Knives", rightalign: "63.5mm" },
            {
              leftalign: "Dimension",
              rightalign: "600 x 600 x 850 mm (W x D x H)",
            },
            {
              leftalign: "Other Models",
              rightalign: "Other capacity models are also available",
            },
          ],
          availableSize: ["Custom size available upon request"],
        },
        {
          productName: "Fully Automatic Coffee Machine",
          productDescription:
            "A fully automatic coffee machine, perfect for commercial settings, capable of making up to 180 cups per group.",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Imported-Equipments%2FCoffee-Machine.jpg?alt=media&token=37280f7a-2415-4775-99a3-266492d408c1",
          productSpecification: [
            { leftalign: "Model", rightalign: "KMI012" },
            { leftalign: "Capacity", rightalign: "Up to 180 cups per group" },
            {
              leftalign: "Dimension",
              rightalign: "358 x 580 x 720 mm (W x D x H)",
            },
            {
              leftalign: "Other Models",
              rightalign: "Other capacity models are also available",
            },
          ],
          availableSize: ["Custom size available upon request"],
        },
        {
          productName: "Combi Steamer/Oven (GN 1/1)",
          productDescription:
            "A combi steamer oven suitable for commercial kitchens, capable of handling 10 GN 1/1 Gas Combi Steamer.",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Imported-Equipments%2FCombi%20Oven.jpg?alt=media&token=e3f5d193-cb6b-4fd5-8a5b-695dbaced57b",
          productSpecification: [
            { leftalign: "Model", rightalign: "KMI031" },
            { leftalign: "Code", rightalign: "20231" },
            {
              leftalign: "Capacity",
              rightalign: "10 GN 1/1 Gas Combi Steamer",
            },
            {
              leftalign: "Dimension",
              rightalign: "890 x 900 x 970 mm (W x D x H)",
            },
            {
              leftalign: "Other Models",
              rightalign:
                "Higher capacity models & electric versions also available",
            },
          ],
          availableSize: ["Custom size available upon request"],
        },
        {
          productName: "4 Burner Gas Range on Oven",
          productDescription:
            "A gas range with 4 burners and an oven, suitable for cooking in high-demand commercial kitchens.",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/gettoe-d7595.appspot.com/o/Imported-Equipments%2FGas%20ranges.jpg?alt=media&token=475bad5c-a98e-41ea-b70e-42ec7bbcc86a",
          productSpecification: [
            { leftalign: "Model", rightalign: "KMI034" },
            { leftalign: "Code", rightalign: "20234" },
            { leftalign: "Capacity", rightalign: "4 Burner Gas Range on Oven" },
            {
              leftalign: "Dimension",
              rightalign: "700 x 700 x 850 mm (W x D x H)",
            },
            {
              leftalign: "Other Models",
              rightalign:
                "Higher capacity models & gas versions also available",
            },
          ],
          availableSize: ["Custom size available upon request"],
        },
      ],
    },
  ];

  for (const category of data) {
    const createdCategory = await prisma.category.create({
      data: {
        name: category.categories,
        image: category.image,
        products: {
          create: category.products.map((product) => ({
            productName: product.productName,
            productDescription: product.productDescription,
            productSpecification: {
              create: product.productSpecification.map((spec) => ({
                leftalign: spec.leftalign,
                rightalign: spec.rightalign,
              })),
            },
            availableSize: {
              create: product.availableSize.map((size) => ({
                size: size,
              })),
            },
            imageUrl: product.imageUrl,
          })),
        },
      },
    });

    console.log(`Created category: ${createdCategory.name}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
