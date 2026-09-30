const products = [
    {
        name: "Classic Oxford Button-Down Shirt",
        description:
            "A classic cotton Oxford shirt designed for a polished yet comfortable look. Perfect for office wear, business casual outfits, and everyday styling.",
        price: 39.99,
        discountPrice: 34.99,
        countInStock: 20,
        category: "Top Wear",
        brand: "Urban Threads",
        size: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Blue", "Light Blue"],
        productCollection: "Business Casual",
        material: "100% Cotton",
        gender: "Men",
        images: [
            {
                url: "https://picsum.photos/500/500?random=101",
                altText: "Classic Oxford Button-Down Shirt Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=102",
                altText: "Classic Oxford Button-Down Shirt Back View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["shirt", "oxford", "formal", "casual", "cotton"],
        dimensions: {
            length: 30,
            width: 22,
            height: 2,
        },
        weight: 0.35,
        sku: "OX-SH-001",
        metaTitle: "Classic Oxford Button-Down Shirt for Men",
        metaDescription:
            "Shop a premium classic Oxford cotton shirt for men. Perfect for office, business casual, and everyday wear.",
        metaKeywords: [
            "oxford shirt",
            "mens shirt",
            "cotton shirt",
            "formal shirt",
        ],
    },

    {
        name: "Slim-Fit Stretch Shirt",
        description:
            "A modern slim-fit stretch shirt made for comfort and everyday professional styling. Features a clean design and flexible fabric.",
        price: 29.99,
        discountPrice: 24.99,
        countInStock: 35,
        category: "Top Wear",
        brand: "Modern Fit",
        size: ["S", "M", "L", "XL"],
        colors: ["Black", "Navy Blue", "White"],
        productCollection: "Formal Wear",
        material: "Cotton Blend",
        gender: "Men",
        images: [
            {
                url: "https://picsum.photos/500/500?random=103",
                altText: "Slim-Fit Stretch Shirt Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=104",
                altText: "Slim-Fit Stretch Shirt Back View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["shirt", "slim fit", "formal", "stretch"],
        dimensions: {
            length: 30,
            width: 21,
            height: 2,
        },
        weight: 0.3,
        sku: "SLIM-SH-002",
        metaTitle: "Slim-Fit Stretch Shirt for Men",
        metaDescription:
            "Buy a comfortable slim-fit stretch shirt for men, perfect for business and evening occasions.",
        metaKeywords: [
            "slim fit shirt",
            "stretch shirt",
            "mens formal shirt",
        ],
    },

    {
        name: "Casual Denim Shirt",
        description:
            "A lightweight denim shirt with a relaxed fit and classic styling. A versatile choice for casual outfits and layering.",
        price: 49.99,
        discountPrice: 44.99,
        countInStock: 15,
        category: "Top Wear",
        brand: "Street Style",
        size: ["S", "M", "L", "XL", "XXL"],
        colors: ["Light Blue", "Dark Blue"],
        productCollection: "Casual Wear",
        material: "Denim",
        gender: "Men",
        images: [
            {
                url: "https://picsum.photos/500/500?random=105",
                altText: "Casual Denim Shirt Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=106",
                altText: "Casual Denim Shirt Back View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["denim", "shirt", "casual", "mens fashion"],
        dimensions: {
            length: 31,
            width: 23,
            height: 3,
        },
        weight: 0.45,
        sku: "CAS-DEN-003",
        metaTitle: "Casual Denim Shirt for Men",
        metaDescription:
            "Shop a stylish lightweight denim shirt for men with a comfortable regular fit.",
        metaKeywords: ["denim shirt", "mens denim", "casual shirt"],
    },

    {
        name: "Printed Resort Shirt",
        description:
            "A relaxed printed resort shirt designed for vacations, beach trips, and summer weekends. Lightweight fabric keeps you comfortable.",
        price: 29.99,
        discountPrice: 22.99,
        countInStock: 25,
        category: "Top Wear",
        brand: "Beach Breeze",
        size: ["S", "M", "L", "XL"],
        colors: ["Tropical Print", "Navy Palms"],
        productCollection: "Vacation Wear",
        material: "Viscose",
        gender: "Men",
        images: [
            {
                url: "https://picsum.photos/500/500?random=107",
                altText: "Printed Resort Shirt Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=108",
                altText: "Printed Resort Shirt Back View",
            },
        ],
        isFeatured: false,
        isPublished: true,
        tags: ["resort", "vacation", "printed shirt", "summer"],
        dimensions: {
            length: 30,
            width: 23,
            height: 2,
        },
        weight: 0.25,
        sku: "PRNT-RES-004",
        metaTitle: "Printed Resort Shirt for Men",
        metaDescription:
            "Shop stylish printed resort shirts for men, perfect for vacations and summer outings.",
        metaKeywords: ["resort shirt", "printed shirt", "vacation wear"],
    },

    {
        name: "Slim-Fit Easy-Iron Shirt",
        description:
            "A practical slim-fit cotton shirt designed to resist wrinkles and maintain a polished appearance throughout the day.",
        price: 34.99,
        discountPrice: 29.99,
        countInStock: 30,
        category: "Top Wear",
        brand: "Urban Chic",
        size: ["S", "M", "L", "XL"],
        colors: ["White", "Gray", "Blue"],
        productCollection: "Business Wear",
        material: "Cotton",
        gender: "Men",
        images: [
            {
                url: "https://picsum.photos/500/500?random=109",
                altText: "Slim-Fit Easy-Iron Shirt Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=110",
                altText: "Slim-Fit Easy-Iron Shirt Back View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["easy iron", "shirt", "business", "office wear"],
        dimensions: {
            length: 30,
            width: 22,
            height: 2,
        },
        weight: 0.32,
        sku: "SLIM-EIR-005",
        metaTitle: "Slim-Fit Easy-Iron Shirt",
        metaDescription:
            "Shop a comfortable slim-fit easy-iron shirt designed for office and business wear.",
        metaKeywords: ["easy iron shirt", "office shirt", "slim fit shirt"],
    },

    {
        name: "Polo T-Shirt with Ribbed Collar",
        description:
            "A classic cotton polo t-shirt featuring a ribbed collar and cuffs. Comfortable enough for everyday casual wear.",
        price: 24.99,
        discountPrice: 19.99,
        countInStock: 50,
        category: "Top Wear",
        brand: "Polo Classics",
        size: ["S", "M", "L", "XL"],
        colors: ["White", "Navy", "Red", "Black"],
        productCollection: "Casual Wear",
        material: "100% Cotton",
        gender: "Men",
        images: [
            {
                url: "https://picsum.photos/500/500?random=111",
                altText: "Polo T-Shirt Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=112",
                altText: "Polo T-Shirt Back View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["polo", "tshirt", "cotton", "casual"],
        dimensions: {
            length: 28,
            width: 21,
            height: 2,
        },
        weight: 0.28,
        sku: "POLO-TSH-006",
        metaTitle: "Classic Cotton Polo T-Shirt",
        metaDescription:
            "Shop comfortable cotton polo t-shirts for men in multiple colors and sizes.",
        metaKeywords: ["polo tshirt", "mens polo", "cotton polo"],
    },

    {
        name: "Oversized Graphic T-Shirt",
        description:
            "A comfortable oversized graphic t-shirt with a relaxed silhouette and modern streetwear-inspired design.",
        price: 19.99,
        discountPrice: 15.99,
        countInStock: 40,
        category: "Top Wear",
        brand: "Street Vibes",
        size: ["S", "M", "L", "XL"],
        colors: ["Black", "Gray", "White"],
        productCollection: "Streetwear",
        material: "Cotton",
        gender: "Men",
        images: [
            {
                url: "https://picsum.photos/500/500?random=113",
                altText: "Oversized Graphic T-Shirt Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=114",
                altText: "Oversized Graphic T-Shirt Side View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["oversized", "graphic tee", "streetwear", "tshirt"],
        dimensions: {
            length: 29,
            width: 24,
            height: 2,
        },
        weight: 0.3,
        sku: "OVS-GRF-007",
        metaTitle: "Oversized Graphic T-Shirt",
        metaDescription:
            "Shop modern oversized graphic t-shirts designed for casual streetwear outfits.",
        metaKeywords: ["oversized tshirt", "graphic tee", "streetwear"],
    },

    {
        name: "Regular-Fit Henley Shirt",
        description:
            "A soft cotton-blend Henley shirt featuring a button placket and regular fit. Perfect for relaxed everyday outfits.",
        price: 22.99,
        discountPrice: 18.99,
        countInStock: 35,
        category: "Top Wear",
        brand: "Heritage Wear",
        size: ["S", "M", "L", "XL"],
        colors: ["Heather Gray", "Olive", "Black"],
        productCollection: "Casual Wear",
        material: "Cotton Blend",
        gender: "Men",
        images: [
            {
                url: "https://picsum.photos/500/500?random=115",
                altText: "Regular-Fit Henley Shirt Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=116",
                altText: "Regular-Fit Henley Shirt Back View",
            },
        ],
        isFeatured: false,
        isPublished: true,
        tags: ["henley", "casual", "cotton blend", "mens wear"],
        dimensions: {
            length: 29,
            width: 22,
            height: 2,
        },
        weight: 0.3,
        sku: "REG-HEN-008",
        metaTitle: "Regular-Fit Henley Shirt for Men",
        metaDescription:
            "Shop comfortable regular-fit Henley shirts made with a soft cotton blend.",
        metaKeywords: ["henley shirt", "mens henley", "casual shirt"],
    },

    {
        name: "Long-Sleeve Thermal Tee",
        description:
            "A warm and comfortable long-sleeve thermal tee featuring a waffle-knit texture, ideal for layering during cooler weather.",
        price: 27.99,
        discountPrice: 22.99,
        countInStock: 20,
        category: "Top Wear",
        brand: "Winter Basics",
        size: ["S", "M", "L", "XL", "XXL"],
        colors: ["Charcoal", "Dark Green", "Navy"],
        productCollection: "Winter Essentials",
        material: "Cotton",
        gender: "Men",
        images: [
            {
                url: "https://picsum.photos/500/500?random=117",
                altText: "Long-Sleeve Thermal Tee Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=118",
                altText: "Long-Sleeve Thermal Tee Back View",
            },
        ],
        isFeatured: false,
        isPublished: true,
        tags: ["thermal", "winter", "long sleeve", "cotton"],
        dimensions: {
            length: 30,
            width: 22,
            height: 3,
        },
        weight: 0.38,
        sku: "LST-THR-009",
        metaTitle: "Long-Sleeve Thermal Tee for Men",
        metaDescription:
            "Shop warm cotton thermal tees for men, perfect for winter layering.",
        metaKeywords: ["thermal tee", "winter tshirt", "long sleeve tee"],
    },

    {
        name: "V-Neck Classic T-Shirt",
        description:
            "A lightweight cotton V-neck t-shirt designed for everyday comfort. Simple, versatile, and easy to style.",
        price: 14.99,
        discountPrice: 11.99,
        countInStock: 60,
        category: "Top Wear",
        brand: "Everyday Comfort",
        size: ["S", "M", "L", "XL"],
        colors: ["White", "Black", "Navy"],
        productCollection: "Basics",
        material: "Cotton",
        gender: "Men",
        images: [
            {
                url: "https://picsum.photos/500/500?random=119",
                altText: "V-Neck Classic T-Shirt Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=120",
                altText: "V-Neck Classic T-Shirt Back View",
            },
        ],
        isFeatured: false,
        isPublished: true,
        tags: ["v-neck", "tshirt", "basic", "cotton"],
        dimensions: {
            length: 28,
            width: 21,
            height: 2,
        },
        weight: 0.22,
        sku: "VNECK-CLS-010",
        metaTitle: "Classic V-Neck Cotton T-Shirt",
        metaDescription:
            "Shop affordable classic V-neck cotton t-shirts for everyday wear.",
        metaKeywords: ["v neck tshirt", "cotton tshirt", "mens tshirt"],
    },

    {
        name: "Slim Fit Joggers",
        description:
            "Slim-fit joggers with an elasticated drawstring waist, ribbed hems, and side pockets. Suitable for casual wear and workouts.",
        price: 40,
        discountPrice: 35,
        countInStock: 20,
        category: "Bottom Wear",
        brand: "ActiveWear",
        size: ["S", "M", "L", "XL"],
        colors: ["Black", "Gray", "Navy"],
        productCollection: "Casual Collection",
        material: "Cotton Blend",
        gender: "Men",
        images: [
            {
                url: "https://picsum.photos/500/500?random=121",
                altText: "Slim Fit Joggers Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=122",
                altText: "Slim Fit Joggers Side View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["joggers", "activewear", "casual", "pants"],
        dimensions: {
            length: 38,
            width: 28,
            height: 4,
        },
        weight: 0.55,
        sku: "BW-001",
        metaTitle: "Slim Fit Joggers for Men",
        metaDescription:
            "Shop comfortable slim-fit joggers for workouts, travel, and casual wear.",
        metaKeywords: ["slim joggers", "mens joggers", "activewear pants"],
    },

    {
        name: "Cargo Joggers",
        description:
            "Relaxed-fit cargo joggers featuring multiple utility pockets, drawstring waist, and cuffed hems for a modern casual look.",
        price: 45,
        discountPrice: 40,
        countInStock: 15,
        category: "Bottom Wear",
        brand: "UrbanStyle",
        size: ["S", "M", "L", "XL"],
        colors: ["Olive", "Black", "Beige"],
        productCollection: "Urban Collection",
        material: "Cotton",
        gender: "Men",
        images: [
            {
                url: "https://picsum.photos/500/500?random=123",
                altText: "Cargo Joggers Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=124",
                altText: "Cargo Joggers Side View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["cargo", "joggers", "urban", "casual"],
        dimensions: {
            length: 39,
            width: 29,
            height: 5,
        },
        weight: 0.6,
        sku: "BW-002",
        metaTitle: "Cargo Joggers for Men",
        metaDescription:
            "Shop stylish cargo joggers with multiple pockets for everyday urban wear.",
        metaKeywords: ["cargo joggers", "mens cargo", "urban pants"],
    },

    {
        name: "Tapered Sweatpants",
        description:
            "Comfortable tapered sweatpants with an elastic waistband and adjustable drawstring, ideal for lounging and athletic activities.",
        price: 35,
        discountPrice: 30,
        countInStock: 25,
        category: "Bottom Wear",
        brand: "ChillZone",
        size: ["S", "M", "L", "XL"],
        colors: ["Gray", "Charcoal", "Blue"],
        productCollection: "Lounge Collection",
        material: "Fleece",
        gender: "Men",
        images: [
            {
                url: "https://picsum.photos/500/500?random=125",
                altText: "Tapered Sweatpants Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=126",
                altText: "Tapered Sweatpants Back View",
            },
        ],
        isFeatured: false,
        isPublished: true,
        tags: ["sweatpants", "lounge", "fleece", "casual"],
        dimensions: {
            length: 40,
            width: 30,
            height: 5,
        },
        weight: 0.65,
        sku: "BW-003",
        metaTitle: "Tapered Sweatpants for Men",
        metaDescription:
            "Shop soft fleece tapered sweatpants for lounging and everyday casual wear.",
        metaKeywords: ["sweatpants", "tapered pants", "fleece pants"],
    },

    {
        name: "Denim Jeans",
        description:
            "Classic slim-fit denim jeans with slight stretch for comfort. Features traditional five-pocket styling and a zip fly.",
        price: 60,
        discountPrice: 50,
        countInStock: 30,
        category: "Bottom Wear",
        brand: "DenimCo",
        size: ["S", "M", "L", "XL"],
        colors: ["Dark Blue", "Light Blue", "Black"],
        productCollection: "Denim Collection",
        material: "Denim",
        gender: "Men",
        images: [
            {
                url: "https://picsum.photos/500/500?random=127",
                altText: "Denim Jeans Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=128",
                altText: "Denim Jeans Back View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["jeans", "denim", "slim fit", "mens jeans"],
        dimensions: {
            length: 42,
            width: 30,
            height: 5,
        },
        weight: 0.75,
        sku: "BW-004",
        metaTitle: "Classic Slim-Fit Denim Jeans",
        metaDescription:
            "Shop classic slim-fit denim jeans with stretch comfort for men.",
        metaKeywords: ["mens jeans", "denim jeans", "slim fit jeans"],
    },

    {
        name: "Chino Pants",
        description:
            "Slim-fit chino pants made from stretch cotton twill. Perfect for smart-casual outfits, office wear, and weekend styling.",
        price: 55,
        discountPrice: 48,
        countInStock: 40,
        category: "Bottom Wear",
        brand: "CasualLook",
        size: ["S", "M", "L", "XL"],
        colors: ["Beige", "Navy", "Black"],
        productCollection: "Smart Casual Collection",
        material: "Cotton",
        gender: "Men",
        images: [
            {
                url: "https://picsum.photos/500/500?random=129",
                altText: "Chino Pants Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=130",
                altText: "Chino Pants Back View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["chinos", "pants", "smart casual", "cotton"],
        dimensions: {
            length: 41,
            width: 30,
            height: 5,
        },
        weight: 0.65,
        sku: "BW-005",
        metaTitle: "Slim-Fit Chino Pants for Men",
        metaDescription:
            "Shop comfortable slim-fit chino pants for office and smart-casual outfits.",
        metaKeywords: ["chino pants", "mens chinos", "smart casual pants"],
    },

    {
        name: "Track Pants",
        description:
            "Comfortable athletic track pants featuring an elastic waistband, tapered legs, and sporty side stripes.",
        price: 40,
        discountPrice: 35,
        countInStock: 20,
        category: "Bottom Wear",
        brand: "SportX",
        size: ["S", "M", "L", "XL"],
        colors: ["Black", "Red", "Blue"],
        productCollection: "Activewear Collection",
        material: "Polyester",
        gender: "Men",
        images: [
            {
                url: "https://picsum.photos/500/500?random=131",
                altText: "Track Pants Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=132",
                altText: "Track Pants Side View",
            },
        ],
        isFeatured: false,
        isPublished: true,
        tags: ["track pants", "sports", "activewear", "athletic"],
        dimensions: {
            length: 40,
            width: 29,
            height: 4,
        },
        weight: 0.5,
        sku: "BW-006",
        metaTitle: "Athletic Track Pants for Men",
        metaDescription:
            "Shop comfortable athletic track pants for workouts, running, and casual wear.",
        metaKeywords: ["track pants", "sports pants", "mens activewear"],
    },

    {
        name: "Slim Fit Trousers",
        description:
            "Tailored slim-fit trousers with a clean silhouette, belt loops, and hook-and-eye closure. Ideal for office and formal occasions.",
        price: 65,
        discountPrice: 55,
        countInStock: 15,
        category: "Bottom Wear",
        brand: "ExecutiveStyle",
        size: ["M", "L", "XL"],
        colors: ["Gray", "Black", "Navy"],
        productCollection: "Office Wear",
        material: "Polyester",
        gender: "Men",
        images: [
            {
                url: "https://picsum.photos/500/500?random=133",
                altText: "Slim Fit Trousers Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=134",
                altText: "Slim Fit Trousers Back View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["trousers", "formal", "office", "slim fit"],
        dimensions: {
            length: 42,
            width: 31,
            height: 5,
        },
        weight: 0.6,
        sku: "BW-007",
        metaTitle: "Slim Fit Formal Trousers",
        metaDescription:
            "Shop tailored slim-fit trousers for office and formal occasions.",
        metaKeywords: ["formal trousers", "slim trousers", "office pants"],
    },

    {
        name: "Cargo Pants",
        description:
            "Loose-fit cargo pants with multiple utility pockets, adjustable ankle cuffs, and a drawstring waist.",
        price: 50,
        discountPrice: 45,
        countInStock: 25,
        category: "Bottom Wear",
        brand: "StreetWear",
        size: ["S", "M", "L", "XL"],
        colors: ["Olive", "Brown", "Black"],
        productCollection: "Street Style Collection",
        material: "Cotton",
        gender: "Men",
        images: [
            {
                url: "https://picsum.photos/500/500?random=135",
                altText: "Cargo Pants Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=136",
                altText: "Cargo Pants Side View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["cargo pants", "streetwear", "utility", "casual"],
        dimensions: {
            length: 43,
            width: 31,
            height: 5,
        },
        weight: 0.7,
        sku: "BW-008",
        metaTitle: "Utility Cargo Pants for Men",
        metaDescription:
            "Shop durable cotton cargo pants with multiple utility pockets.",
        metaKeywords: ["cargo pants", "mens cargo pants", "utility pants"],
    },

    {
        name: "Relaxed Fit Sweatpants",
        description:
            "Soft fleece sweatpants featuring a relaxed fit, elastic waist, and adjustable drawstring for everyday comfort.",
        price: 35,
        discountPrice: 30,
        countInStock: 35,
        category: "Bottom Wear",
        brand: "LoungeWear",
        size: ["S", "M", "L", "XL"],
        colors: ["Gray", "Black", "Navy"],
        productCollection: "Lounge Collection",
        material: "Fleece",
        gender: "Men",
        images: [
            {
                url: "https://picsum.photos/500/500?random=137",
                altText: "Relaxed Fit Sweatpants Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=138",
                altText: "Relaxed Fit Sweatpants Back View",
            },
        ],
        isFeatured: false,
        isPublished: true,
        tags: ["sweatpants", "loungewear", "fleece", "comfort"],
        dimensions: {
            length: 41,
            width: 31,
            height: 5,
        },
        weight: 0.7,
        sku: "BW-009",
        metaTitle: "Relaxed Fit Fleece Sweatpants",
        metaDescription:
            "Shop soft relaxed-fit fleece sweatpants for lounging and casual wear.",
        metaKeywords: ["fleece sweatpants", "lounge pants", "mens sweatpants"],
    },

    {
        name: "Formal Dress Pants",
        description:
            "Classic slim-fit formal dress pants made from lightweight wrinkle-resistant fabric for office and formal events.",
        price: 70,
        discountPrice: 60,
        countInStock: 20,
        category: "Bottom Wear",
        brand: "ElegantStyle",
        size: ["M", "L", "XL"],
        colors: ["Black", "Navy", "Charcoal"],
        productCollection: "Formal Collection",
        material: "Polyester",
        gender: "Men",
        images: [
            {
                url: "https://picsum.photos/500/500?random=139",
                altText: "Formal Dress Pants Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=140",
                altText: "Formal Dress Pants Back View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["formal pants", "dress pants", "office", "formal"],
        dimensions: {
            length: 42,
            width: 31,
            height: 5,
        },
        weight: 0.62,
        sku: "BW-010",
        metaTitle: "Formal Dress Pants for Men",
        metaDescription:
            "Shop slim-fit formal dress pants for office and special occasions.",
        metaKeywords: ["formal pants", "dress pants", "mens formal wear"],
    },

    {
        name: "High-Waist Skinny Jeans",
        description:
            "High-waist skinny jeans made from stretch denim with a flattering silhouette and comfortable flexible fit.",
        price: 50,
        discountPrice: 45,
        countInStock: 30,
        category: "Bottom Wear",
        brand: "DenimStyle",
        size: ["XS", "S", "M", "L", "XL"],
        colors: ["Dark Blue", "Black", "Light Blue"],
        productCollection: "Denim Collection",
        material: "Denim",
        gender: "Women",
        images: [
            {
                url: "https://picsum.photos/500/500?random=141",
                altText: "High-Waist Skinny Jeans Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=142",
                altText: "High-Waist Skinny Jeans Back View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["skinny jeans", "high waist", "denim", "womens jeans"],
        dimensions: {
            length: 40,
            width: 29,
            height: 5,
        },
        weight: 0.65,
        sku: "BW-W-001",
        metaTitle: "High-Waist Skinny Jeans for Women",
        metaDescription:
            "Shop comfortable high-waist skinny stretch jeans for women.",
        metaKeywords: ["womens jeans", "skinny jeans", "high waist jeans"],
    },

    {
        name: "Wide-Leg Trousers",
        description:
            "Elegant wide-leg trousers with a high waist and side pockets. Designed for a comfortable and polished silhouette.",
        price: 60,
        discountPrice: 55,
        countInStock: 25,
        category: "Bottom Wear",
        brand: "ElegantWear",
        size: ["S", "M", "L", "XL"],
        colors: ["Beige", "Black", "White"],
        productCollection: "Formal Collection",
        material: "Polyester",
        gender: "Women",
        images: [
            {
                url: "https://picsum.photos/500/500?random=143",
                altText: "Wide-Leg Trousers Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=144",
                altText: "Wide-Leg Trousers Side View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["wide leg", "trousers", "formal", "womens wear"],
        dimensions: {
            length: 43,
            width: 32,
            height: 5,
        },
        weight: 0.6,
        sku: "BW-W-002",
        metaTitle: "Elegant Wide-Leg Trousers for Women",
        metaDescription:
            "Shop elegant high-waist wide-leg trousers for women.",
        metaKeywords: ["wide leg trousers", "womens pants", "formal trousers"],
    },

    {
        name: "Stretch Leggings",
        description:
            "Soft high-rise stretch leggings designed for workouts, lounging, and casual everyday wear.",
        price: 25,
        discountPrice: 20,
        countInStock: 40,
        category: "Bottom Wear",
        brand: "ComfyFit",
        size: ["S", "M", "L", "XL"],
        colors: ["Black", "Gray", "Navy"],
        productCollection: "Activewear Collection",
        material: "Cotton Blend",
        gender: "Women",
        images: [
            {
                url: "https://picsum.photos/500/500?random=145",
                altText: "Stretch Leggings Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=146",
                altText: "Stretch Leggings Side View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["leggings", "activewear", "stretch", "womens wear"],
        dimensions: {
            length: 38,
            width: 25,
            height: 3,
        },
        weight: 0.35,
        sku: "BW-W-003",
        metaTitle: "High-Rise Stretch Leggings for Women",
        metaDescription:
            "Shop soft high-rise stretch leggings for workouts and casual wear.",
        metaKeywords: ["leggings", "womens leggings", "activewear leggings"],
    },

    {
        name: "Pleated Midi Skirt",
        description:
            "An elegant pleated midi skirt featuring a comfortable high waistband and soft fabric suitable for formal and casual occasions.",
        price: 55,
        discountPrice: 50,
        countInStock: 20,
        category: "Bottom Wear",
        brand: "ChicStyle",
        size: ["S", "M", "L"],
        colors: ["Pink", "Navy", "Black"],
        productCollection: "Spring Collection",
        material: "Polyester",
        gender: "Women",
        images: [
            {
                url: "https://picsum.photos/500/500?random=147",
                altText: "Pleated Midi Skirt Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=148",
                altText: "Pleated Midi Skirt Back View",
            },
        ],
        isFeatured: false,
        isPublished: true,
        tags: ["midi skirt", "pleated", "womens fashion", "skirt"],
        dimensions: {
            length: 35,
            width: 30,
            height: 4,
        },
        weight: 0.45,
        sku: "BW-W-004",
        metaTitle: "Elegant Pleated Midi Skirt",
        metaDescription:
            "Shop elegant pleated midi skirts for casual and formal occasions.",
        metaKeywords: ["midi skirt", "pleated skirt", "womens skirt"],
    },

    {
        name: "Flared Palazzo Pants",
        description:
            "High-waist palazzo pants with a loose flowing silhouette. Lightweight and comfortable for casual outings and summer days.",
        price: 45,
        discountPrice: 40,
        countInStock: 35,
        category: "Bottom Wear",
        brand: "BreezyVibes",
        size: ["S", "M", "L", "XL"],
        colors: ["White", "Beige", "Light Blue"],
        productCollection: "Summer Collection",
        material: "Linen Blend",
        gender: "Women",
        images: [
            {
                url: "https://picsum.photos/500/500?random=149",
                altText: "Flared Palazzo Pants Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=150",
                altText: "Flared Palazzo Pants Side View",
            },
        ],
        isFeatured: false,
        isPublished: true,
        tags: ["palazzo", "wide leg", "summer", "womens pants"],
        dimensions: {
            length: 44,
            width: 32,
            height: 4,
        },
        weight: 0.5,
        sku: "BW-W-005",
        metaTitle: "Flared Palazzo Pants for Women",
        metaDescription:
            "Shop comfortable high-waist palazzo pants for summer and casual outings.",
        metaKeywords: ["palazzo pants", "womens pants", "summer pants"],
    },

    {
        name: "High-Rise Joggers",
        description:
            "Comfortable high-rise joggers featuring an elastic waistband and drawstring, perfect for workouts and relaxed days.",
        price: 40,
        discountPrice: 35,
        countInStock: 30,
        category: "Bottom Wear",
        brand: "ActiveWear",
        size: ["XS", "S", "M", "L"],
        colors: ["Black", "Gray", "Pink"],
        productCollection: "Loungewear Collection",
        material: "Cotton Blend",
        gender: "Women",
        images: [
            {
                url: "https://picsum.photos/500/500?random=151",
                altText: "High-Rise Joggers Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=152",
                altText: "High-Rise Joggers Side View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["joggers", "high rise", "activewear", "loungewear"],
        dimensions: {
            length: 39,
            width: 28,
            height: 4,
        },
        weight: 0.5,
        sku: "BW-W-006",
        metaTitle: "High-Rise Joggers for Women",
        metaDescription:
            "Shop comfortable high-rise joggers for workouts and everyday lounging.",
        metaKeywords: ["womens joggers", "high rise joggers", "activewear"],
    },

    {
        name: "Paperbag Waist Shorts",
        description:
            "Stylish paperbag waist shorts featuring a belted waist and relaxed wide-leg design, ideal for summer outings.",
        price: 35,
        discountPrice: 30,
        countInStock: 20,
        category: "Bottom Wear",
        brand: "SunnyStyle",
        size: ["S", "M", "L"],
        colors: ["White", "Khaki", "Blue"],
        productCollection: "Summer Collection",
        material: "Cotton",
        gender: "Women",
        images: [
            {
                url: "https://picsum.photos/500/500?random=153",
                altText: "Paperbag Waist Shorts Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=154",
                altText: "Paperbag Waist Shorts Back View",
            },
        ],
        isFeatured: false,
        isPublished: true,
        tags: ["shorts", "paperbag", "summer", "womens fashion"],
        dimensions: {
            length: 18,
            width: 28,
            height: 3,
        },
        weight: 0.3,
        sku: "BW-W-007",
        metaTitle: "Paperbag Waist Shorts for Women",
        metaDescription:
            "Shop stylish paperbag waist cotton shorts for summer outfits.",
        metaKeywords: ["paperbag shorts", "womens shorts", "summer shorts"],
    },

    {
        name: "Stretch Denim Shorts",
        description:
            "Comfortable high-waisted stretch denim shorts with a raw hem. A versatile summer essential for casual outfits.",
        price: 40,
        discountPrice: 35,
        countInStock: 25,
        category: "Bottom Wear",
        brand: "DenimStyle",
        size: ["S", "M", "L", "XL"],
        colors: ["Blue", "Black", "White"],
        productCollection: "Denim Collection",
        material: "Denim",
        gender: "Women",
        images: [
            {
                url: "https://picsum.photos/500/500?random=155",
                altText: "Stretch Denim Shorts Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=156",
                altText: "Stretch Denim Shorts Back View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["denim shorts", "shorts", "summer", "stretch denim"],
        dimensions: {
            length: 18,
            width: 29,
            height: 3,
        },
        weight: 0.35,
        sku: "BW-W-008",
        metaTitle: "High-Waisted Stretch Denim Shorts",
        metaDescription:
            "Shop comfortable high-waisted stretch denim shorts for women.",
        metaKeywords: ["denim shorts", "womens denim", "summer shorts"],
    },

    {
        name: "Culottes",
        description:
            "Wide-leg culottes with a flattering high waist and cropped length. Designed for comfortable everyday styling.",
        price: 50,
        discountPrice: 45,
        countInStock: 30,
        category: "Bottom Wear",
        brand: "ChicStyle",
        size: ["S", "M", "L", "XL"],
        colors: ["Black", "White", "Olive"],
        productCollection: "Casual Collection",
        material: "Polyester",
        gender: "Women",
        images: [
            {
                url: "https://picsum.photos/500/500?random=157",
                altText: "Culottes Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=158",
                altText: "Culottes Side View",
            },
        ],
        isFeatured: false,
        isPublished: true,
        tags: ["culottes", "wide leg", "casual", "womens pants"],
        dimensions: {
            length: 34,
            width: 31,
            height: 4,
        },
        weight: 0.5,
        sku: "BW-W-009",
        metaTitle: "Wide-Leg Culottes for Women",
        metaDescription:
            "Shop stylish high-waist wide-leg culottes for casual everyday outfits.",
        metaKeywords: ["culottes", "wide leg pants", "womens fashion"],
    },

    {
        name: "Classic Pleated Trousers",
        description:
            "Timeless pleated trousers with a tailored fit. A versatile wardrobe essential for workwear and formal occasions.",
        price: 70,
        discountPrice: 65,
        countInStock: 25,
        category: "Bottom Wear",
        brand: "ElegantWear",
        size: ["S", "M", "L", "XL"],
        colors: ["Navy", "Black", "Gray"],
        productCollection: "Formal Collection",
        material: "Wool Blend",
        gender: "Women",
        images: [
            {
                url: "https://picsum.photos/500/500?random=159",
                altText: "Classic Pleated Trousers Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=160",
                altText: "Classic Pleated Trousers Back View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["pleated trousers", "formal", "office", "womens wear"],
        dimensions: {
            length: 42,
            width: 31,
            height: 5,
        },
        weight: 0.65,
        sku: "BW-W-010",
        metaTitle: "Classic Pleated Trousers for Women",
        metaDescription:
            "Shop tailored pleated trousers for professional and formal outfits.",
        metaKeywords: ["pleated trousers", "womens formal pants", "office trousers"],
    },

    {
        name: "Knitted Cropped Top",
        description:
            "A stylish knitted cropped top with a fitted silhouette, perfect for pairing with high-waisted jeans, trousers, or skirts.",
        price: 40,
        discountPrice: 35,
        countInStock: 25,
        category: "Top Wear",
        brand: "ChicKnit",
        size: ["S", "M", "L"],
        colors: ["Beige", "White", "Black"],
        productCollection: "Knits Collection",
        material: "Cotton Blend",
        gender: "Women",
        images: [
            {
                url: "https://picsum.photos/500/500?random=161",
                altText: "Knitted Cropped Top Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=162",
                altText: "Knitted Cropped Top Side View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["cropped top", "knit", "womens top", "casual"],
        dimensions: {
            length: 20,
            width: 20,
            height: 3,
        },
        weight: 0.25,
        sku: "TW-W-001",
        metaTitle: "Knitted Cropped Top for Women",
        metaDescription:
            "Shop stylish knitted cropped tops for casual everyday outfits.",
        metaKeywords: ["cropped top", "knitted top", "womens top"],
    },

    {
        name: "Boho Floral Blouse",
        description:
            "A flowy floral blouse featuring a relaxed fit and balloon sleeves. Perfect for casual summer days and weekend outfits.",
        price: 50,
        discountPrice: 45,
        countInStock: 30,
        category: "Top Wear",
        brand: "BohoVibes",
        size: ["S", "M", "L", "XL"],
        colors: ["White", "Pink", "Floral"],
        productCollection: "Summer Collection",
        material: "Viscose",
        gender: "Women",
        images: [
            {
                url: "https://picsum.photos/500/500?random=163",
                altText: "Boho Floral Blouse Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=164",
                altText: "Boho Floral Blouse Back View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["blouse", "floral", "boho", "summer"],
        dimensions: {
            length: 27,
            width: 22,
            height: 3,
        },
        weight: 0.3,
        sku: "TW-W-002",
        metaTitle: "Boho Floral Blouse for Women",
        metaDescription:
            "Shop lightweight floral boho blouses for women, perfect for summer outfits.",
        metaKeywords: ["floral blouse", "boho blouse", "womens blouse"],
    },

    {
        name: "Casual T-Shirt",
        description:
            "A soft and breathable cotton casual t-shirt with a classic fit, round neckline, and short sleeves for everyday comfort.",
        price: 25,
        discountPrice: 20,
        countInStock: 50,
        category: "Top Wear",
        brand: "ComfyTees",
        size: ["S", "M", "L", "XL"],
        colors: ["Black", "White", "Gray"],
        productCollection: "Essentials",
        material: "Cotton",
        gender: "Women",
        images: [
            {
                url: "https://picsum.photos/500/500?random=165",
                altText: "Casual T-Shirt Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=166",
                altText: "Casual T-Shirt Back View",
            },
        ],
        isFeatured: false,
        isPublished: true,
        tags: ["tshirt", "casual", "cotton", "essentials"],
        dimensions: {
            length: 27,
            width: 21,
            height: 2,
        },
        weight: 0.25,
        sku: "TW-W-003",
        metaTitle: "Classic Cotton Casual T-Shirt",
        metaDescription:
            "Shop soft cotton casual t-shirts for women in multiple colors.",
        metaKeywords: ["womens tshirt", "cotton tshirt", "casual tshirt"],
    },

    {
        name: "Off-Shoulder Top",
        description:
            "An elegant off-shoulder top with ruffled sleeves and a flattering silhouette, designed for stylish casual and evening outfits.",
        price: 45,
        discountPrice: 40,
        countInStock: 35,
        category: "Top Wear",
        brand: "Elegance",
        size: ["S", "M", "L"],
        colors: ["Red", "White", "Blue"],
        productCollection: "Evening Collection",
        material: "Polyester",
        gender: "Women",
        images: [
            {
                url: "https://picsum.photos/500/500?random=167",
                altText: "Off-Shoulder Top Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=168",
                altText: "Off-Shoulder Top Back View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["off shoulder", "top", "evening", "womens fashion"],
        dimensions: {
            length: 24,
            width: 22,
            height: 3,
        },
        weight: 0.3,
        sku: "TW-W-004",
        metaTitle: "Elegant Off-Shoulder Top for Women",
        metaDescription:
            "Shop elegant off-shoulder tops with ruffled sleeves for women.",
        metaKeywords: ["off shoulder top", "womens top", "evening top"],
    },

    {
        name: "Lace-Trimmed Cami Top",
        description:
            "A delicate cami top with lace trim and adjustable straps. Lightweight and versatile for layering or wearing alone.",
        price: 35,
        discountPrice: 30,
        countInStock: 40,
        category: "Top Wear",
        brand: "DelicateWear",
        size: ["S", "M", "L"],
        colors: ["Black", "White", "Beige"],
        productCollection: "Lingerie-Inspired",
        material: "Silk Blend",
        gender: "Women",
        images: [
            {
                url: "https://picsum.photos/500/500?random=169",
                altText: "Lace-Trimmed Cami Top Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=170",
                altText: "Lace-Trimmed Cami Top Back View",
            },
        ],
        isFeatured: false,
        isPublished: true,
        tags: ["cami", "lace", "top", "womens fashion"],
        dimensions: {
            length: 22,
            width: 20,
            height: 2,
        },
        weight: 0.2,
        sku: "TW-W-005",
        metaTitle: "Lace-Trimmed Cami Top for Women",
        metaDescription:
            "Shop lightweight lace-trimmed cami tops with adjustable straps.",
        metaKeywords: ["cami top", "lace top", "womens cami"],
    },

    {
        name: "Graphic Print Tee",
        description:
            "A trendy graphic print tee with a relaxed fit. Easy to pair with jeans, trousers, shorts, or skirts for a casual look.",
        price: 30,
        discountPrice: 25,
        countInStock: 45,
        category: "Top Wear",
        brand: "StreetStyle",
        size: ["S", "M", "L", "XL"],
        colors: ["White", "Black", "Gray"],
        productCollection: "Urban Collection",
        material: "Cotton",
        gender: "Women",
        images: [
            {
                url: "https://picsum.photos/500/500?random=171",
                altText: "Graphic Print Tee Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=172",
                altText: "Graphic Print Tee Back View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["graphic tee", "tshirt", "streetwear", "urban"],
        dimensions: {
            length: 27,
            width: 22,
            height: 2,
        },
        weight: 0.28,
        sku: "TW-W-006",
        metaTitle: "Graphic Print Tee for Women",
        metaDescription:
            "Shop trendy cotton graphic print tees for casual streetwear outfits.",
        metaKeywords: ["graphic tee", "womens tshirt", "streetwear tshirt"],
    },

    {
        name: "Ribbed Long-Sleeve Top",
        description:
            "A cozy ribbed long-sleeve top designed for comfort and layering during cooler weather.",
        price: 55,
        discountPrice: 50,
        countInStock: 30,
        category: "Top Wear",
        brand: "ComfortFit",
        size: ["S", "M", "L", "XL"],
        colors: ["Gray", "Pink", "Brown"],
        productCollection: "Fall Collection",
        material: "Cotton Blend",
        gender: "Women",
        images: [
            {
                url: "https://picsum.photos/500/500?random=173",
                altText: "Ribbed Long-Sleeve Top Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=174",
                altText: "Ribbed Long-Sleeve Top Back View",
            },
        ],
        isFeatured: false,
        isPublished: true,
        tags: ["ribbed", "long sleeve", "fall", "womens top"],
        dimensions: {
            length: 27,
            width: 21,
            height: 3,
        },
        weight: 0.32,
        sku: "TW-W-007",
        metaTitle: "Ribbed Long-Sleeve Top for Women",
        metaDescription:
            "Shop comfortable ribbed long-sleeve tops for women, ideal for layering.",
        metaKeywords: ["ribbed top", "long sleeve top", "womens clothing"],
    },

    {
        name: "Ruffle-Sleeve Blouse",
        description:
            "A lightweight blouse featuring elegant ruffle sleeves and a flattering fit, perfect for casual and semi-formal outfits.",
        price: 45,
        discountPrice: 40,
        countInStock: 20,
        category: "Top Wear",
        brand: "FeminineWear",
        size: ["S", "M", "L"],
        colors: ["White", "Navy", "Lavender"],
        productCollection: "Summer Collection",
        material: "Viscose",
        gender: "Women",
        images: [
            {
                url: "https://picsum.photos/500/500?random=175",
                altText: "Ruffle-Sleeve Blouse Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=176",
                altText: "Ruffle-Sleeve Blouse Back View",
            },
        ],
        isFeatured: false,
        isPublished: true,
        tags: ["ruffle", "blouse", "summer", "womens top"],
        dimensions: {
            length: 26,
            width: 22,
            height: 3,
        },
        weight: 0.28,
        sku: "TW-W-008",
        metaTitle: "Ruffle-Sleeve Blouse for Women",
        metaDescription:
            "Shop lightweight ruffle-sleeve blouses for stylish everyday outfits.",
        metaKeywords: ["ruffle blouse", "womens blouse", "summer blouse"],
    },

    {
        name: "Classic Button-Up Shirt",
        description:
            "A versatile women's button-up shirt made from soft cotton with a tailored fit. Suitable for office, casual, and formal occasions.",
        price: 60,
        discountPrice: 55,
        countInStock: 25,
        category: "Top Wear",
        brand: "ClassicStyle",
        size: ["S", "M", "L", "XL"],
        colors: ["White", "Light Blue", "Black"],
        productCollection: "Office Collection",
        material: "Cotton",
        gender: "Women",
        images: [
            {
                url: "https://picsum.photos/500/500?random=177",
                altText: "Classic Button-Up Shirt Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=178",
                altText: "Classic Button-Up Shirt Back View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["button up", "shirt", "office", "cotton"],
        dimensions: {
            length: 28,
            width: 22,
            height: 3,
        },
        weight: 0.35,
        sku: "TW-W-009",
        metaTitle: "Classic Button-Up Shirt for Women",
        metaDescription:
            "Shop versatile cotton button-up shirts for office and casual outfits.",
        metaKeywords: ["womens shirt", "button up shirt", "office shirt"],
    },

    {
        name: "V-Neck Wrap Top",
        description:
            "A chic V-neck wrap top with a tie waist and elegant silhouette, suitable for casual and semi-formal occasions.",
        price: 50,
        discountPrice: 45,
        countInStock: 30,
        category: "Top Wear",
        brand: "ChicWrap",
        size: ["S", "M", "L"],
        colors: ["Red", "Black", "White"],
        productCollection: "Evening Collection",
        material: "Polyester",
        gender: "Women",
        images: [
            {
                url: "https://picsum.photos/500/500?random=179",
                altText: "V-Neck Wrap Top Front View",
            },
            {
                url: "https://picsum.photos/500/500?random=180",
                altText: "V-Neck Wrap Top Back View",
            },
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["wrap top", "v neck", "evening", "womens fashion"],
        dimensions: {
            length: 25,
            width: 22,
            height: 3,
        },
        weight: 0.3,
        sku: "TW-W-010",
        metaTitle: "V-Neck Wrap Top for Women",
        metaDescription:
            "Shop elegant V-neck wrap tops with tie waist for women.",
        metaKeywords: ["wrap top", "v neck top", "womens evening top"],
    },
];

export default products;