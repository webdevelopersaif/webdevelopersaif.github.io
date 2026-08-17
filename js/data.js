// Portfolio Data Source for React Components
const portfolioData = {
    personal: {
        name: "Saif Ansari",
        roleTitle: "Backend Technical Lead",
        positioningLine: "Senior Backend Engineer | Laravel | Python | AWS | Distributed Systems | AI & RAG Automation",
        description: "10+ years of backend engineering expertise building, scaling, and leading production microservices, RESTful APIs, multi-tenant SaaS architectures, and AI-powered automated workflows.",
        phone: "+91 9898222366",
        email: "webdevelopersaif@gmail.com",
        location: "Ahmedabad, India",
        github: "https://github.com/webdevelopersaif",
        linkedin: "https://www.linkedin.com/in/webdevelopersaif/",
        resumeUrl: "saif-ansari-resume.pdf",
        stats: [
            { num: "10+", label: "Years Experience" },
            { num: "50+", label: "Backend Projects" },
            { num: "100k+", label: "Mobile App Installs" }
        ],
        summaryParagraphs: [
            "I am a backend-focused software engineer and technical lead with 10+ years of hands-on experience architecting, scaling, and leading production web applications, RESTful microservices, and enterprise SaaS platforms using PHP/Laravel, Python/Django, and cloud-native backend technologies.",
            "My core engineering foundation spans high-availability backend architecture, database schema optimization (MySQL/PostgreSQL), Redis caching strategies, idempotent webhook processing, background event-driven job orchestration, cloud infrastructure on AWS, CI/CD automation pipelines, and Agile team leadership.",
            "I am actively driving backend modernization by integrating production AI capabilities—including LLM APIs (OpenAI & Anthropic Claude), Retrieval-Augmented Generation (RAG), vector embeddings (PGVector & Pinecone), function calling, and automated AI background pipelines to turn complex business workflows into intelligent software systems."
        ]
    },

    deepDives: [
        {
            id: 1,
            num: "01",
            colorClass: "bg-blue",
            glowClass: "bg-blue-glow",
            domain: "High-Concurrency SaaS Backend",
            title: "Database Scaling & Queue Isolation",
            challenge: "Sudden user traffic spikes during live class launches (LifeGurukul SaaS platform with 100,000+ app installs) caused database connection exhaustion, query lock bottlenecks, and API response latency degradation.",
            solution: "Redesigned backend around MySQL master-slave read replication (separating read traffic from write transactions), Redis session caching, and decoupled heavy email/push notification dispatches into asynchronous background queue workers.",
            techStack: ["Laravel", "MySQL Read Replicas", "Redis Queues", "REST APIs"],
            impact: "99.9% Uptime during peak launches with <150ms API latency"
        },
        {
            id: 2,
            num: "02",
            colorClass: "bg-cyan",
            glowClass: "bg-cyan-glow",
            domain: "Real-Time Geo Tracking Engine",
            title: "Sub-Second WebSocket Infrastructure",
            challenge: "High-frequency HTTP location polling from hundreds of active delivery drivers (Tazmin On-Demand Delivery platform) saturated web server worker processes and caused severe database write locks.",
            solution: "Migrated live location tracking from HTTP polling to a Node.js + Socket.io WebSocket service backed by Redis Pub/Sub, keeping driver spatial state in-memory until order completion, reducing disk I/O.",
            techStack: ["Laravel API", "Socket.io WebSockets", "Redis Pub/Sub", "Google Maps API"],
            impact: "65% Web Server CPU Load Reduction & sub-second tracking"
        },
        {
            id: 3,
            num: "03",
            colorClass: "bg-purple",
            glowClass: "bg-purple-glow",
            domain: "Multi-Payment & Financial Sync",
            title: "Idempotent Webhooks & Retry Queues",
            challenge: "Asynchronous webhook delivery from Stripe & Squareup and automated accounting reconciliation with QuickBooks (EMS Automobile Parts platform) created race conditions, duplicate invoices, and potential overselling.",
            solution: "Engineered idempotent webhook processors using event signature verification, atomic Redis locks, strict database transaction isolation, and asynchronous retry queues for automated QuickBooks billing sync.",
            techStack: ["Laravel", "Stripe / Squareup API", "QuickBooks API", "MySQL Transactions"],
            impact: "100% Automated Accounting Sync with zero duplicate billing"
        }
    ],

    skills: [
        {
            title: "Backend Engineering",
            iconBg: "bg-blue",
            icon: "server",
            chips: ["Laravel (PHP)", "Python & Django", "RESTful API Design", "MySQL / PostgreSQL", "Redis Caching", "Asynchronous Event Queues"]
        },
        {
            title: "Databases & Storage",
            iconBg: "bg-cyan",
            icon: "database",
            chips: ["MySQL Query Profiling", "PostgreSQL", "Index Optimization", "Schema Normalization", "Read-Replication", "In-Memory Caching (Redis)"]
        },
        {
            title: "Cloud & Infrastructure",
            iconBg: "bg-purple",
            icon: "cloud",
            chips: ["AWS (EC2, S3, RDS)", "Linux Server Admin", "Docker Containers", "Git CI/CD Automation", "Environment Security", "Nginx Configuration"]
        },
        {
            title: "Architecture & AI Integration",
            iconBg: "bg-green",
            icon: "cpu",
            chips: ["System Design", "Scalable Microservices", "SaaS Multi-Tenancy", "LLM APIs (OpenAI/Claude)", "RAG Pipelines", "Vector Embeddings"]
        },
        {
            title: "Technical Leadership",
            iconBg: "bg-indigo",
            icon: "users",
            chips: ["Engineering Governance", "Code Reviews", "Architecture Standards", "Sprint Task Planning", "Developer Mentoring", "Agile Delivery"]
        },
        {
            title: "Supporting Technologies",
            iconBg: "bg-gray",
            icon: "code",
            chips: ["WordPress (Custom Themes/Plugins)", "Yii2 / CakePHP", "JavaScript (ES6+)", "React.js", "Node.js & WebSockets"]
        }
    ],

    experience: [
        {
            period: "04/2021 - Present",
            role: "Team Leader",
            company: "MSP Concepts",
            location: "Ahmedabad",
            details: [
                "Architected and delivered scalable distributed backends, RESTful microservices, and multi-tenant SaaS platforms using Laravel, Python, and AWS for global enterprise clients.",
                "Lead engineering teams across sprint planning, technical task breakdowns, architectural code reviews, and automated testing governance.",
                "Engineered automated CI/CD deployment pipelines and containerized environments, standardizing release workflows and accelerating deployment frequency.",
                "Designed high-throughput RESTful API backends for mobile applications achieving over <strong>100,000+ app installs</strong> with sub-150ms latency.",
                "Managed AWS production environments (EC2, S3, RDS), configured Redis background queues, and optimized database schemas to eliminate lock bottlenecks.",
                "Spearheaded production AI integration initiatives—orchestrating LLM APIs (OpenAI/Claude), RAG retrieval workflows, and automated background data processing pipelines."
            ]
        },
        {
            period: "04/2020 - 02/2021",
            role: "Sr. PHP Developer",
            company: "Acquaint SoftTech",
            location: "Ahmedabad",
            details: [
                "Engineered multi-tenant Laravel SaaS architectures integrated with custom application modules.",
                "Performed database profiling and MySQL query indexing, eliminating performance bottlenecks on high-traffic web applications.",
                "Developed specialized backend plugins and custom application modules to extend core platform capabilities securely.",
                "Provided high-tier technical support and troubleshooting for critical production application infrastructure."
            ]
        },
        {
            period: "03/2018 - 03/2020",
            role: "Sr. PHP Developer",
            company: "Intuz Solutions",
            location: "Ahmedabad",
            details: [
                "Served as dedicated backend developer building complex enterprise web platforms using the Yii2 framework.",
                "Designed RESTful APIs and secure admin administration interfaces for native mobile clients.",
                "Implemented security controls, role-based access control (RBAC), input sanitization, and data validation standards.",
                "Engineered dynamic data processing pipelines interacting with SQL databases, external webhooks, and third-party APIs."
            ]
        },
        {
            period: "01/2017 - 02/2018",
            role: "PHP Developer",
            company: "Silver Touch Technologies",
            location: "Ahmedabad",
            details: [
                "Developed and maintained high-security public sector & government web platforms using CakePHP and PostgreSQL.",
                "Maintained strict adherence to coding guidelines, data encryption standards, and documentation requirements.",
                "Built API integration layers to securely communicate data between distributed public-sector systems."
            ]
        },
        {
            period: "11/2014 - 12/2016",
            role: "Jr. PHP Developer",
            company: "MSP Concepts",
            location: "Ahmedabad",
            details: [
                "Developed custom PHP web applications, database schemas, and tailored software solutions for commercial clients.",
                "Custom-engineered WordPress themes and backend plugins from scratch to meet specialized business workflows.",
                "Engineered custom CRM modules, automated client reporting features, and optimized database queries."
            ]
        }
    ],

    projects: [
        {
            id: "lifegurukul",
            category: "laravel saas",
            title: "LifeGurukul - EdTech & Learning SaaS",
            subtitle: "High-concurrency learning platform serving 100,000+ app installs.",
            description: "Architected scalable Laravel REST API backends, MySQL master-slave read replication, Redis caching, push notification queues, and Node.js WebSockets.",
            badges: ["Laravel", "MySQL Read Replicas", "Redis", "Node.js WebSockets"],
            links: [
                { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.lifegurukul" },
                { label: "App Store", url: "https://apps.apple.com/in/app/life-gurukul/id1611082590" }
            ]
        },
        {
            id: "tazmin",
            category: "laravel saas",
            title: "Tazmin - On-Demand Delivery & Logistics",
            subtitle: "Real-time driver tracking and dispatch management platform.",
            description: "Engineered sub-second Socket.io WebSockets backed by Redis Pub/Sub for driver location streaming, Google Maps distance matrix API integrations, and JWT mobile auth.",
            badges: ["Laravel API", "Socket.io", "Redis Pub/Sub", "Google Maps API"],
            links: [
                { label: "Driver Android App", url: "https://play.google.com/store/apps/details?id=com.tazmindriver.app" },
                { label: "Driver iOS App", url: "https://apps.apple.com/us/app/tazmin-driver/id1547447475" }
            ]
        },
        {
            id: "ems",
            category: "laravel saas",
            title: "EMS - Automobile Parts E-Commerce & ERP",
            subtitle: "Enterprise B2B automobile marketplace & accounting engine.",
            description: "Built multi-vendor inventory management, Stripe & Squareup payment gateway integrations, idempotent webhook handlers, and automated QuickBooks financial sync.",
            badges: ["Laravel", "Stripe API", "Squareup API", "QuickBooks API"],
            links: [
                { label: "Web Platform", url: "https://emsauto.com/" }
            ]
        },
        {
            id: "astrowave",
            category: "laravel",
            title: "AstroWave - Astrology & Consultation Portal",
            subtitle: "Consultation booking, payment dispatches, and real-time chat.",
            description: "Developed Laravel API microservices for astrologer scheduling, wallet recharge management, razorpay payment dispatches, and push notification dispatches.",
            badges: ["Laravel", "REST APIs", "Payment Gateways", "MySQL"],
            links: [
                { label: "Live Web Portal", url: "https://astrowave.in/" }
            ]
        },
        {
            id: "2unboss",
            category: "supporting",
            title: "2unboss - Business Networking Platform",
            subtitle: "Custom business directory & lead generation portal.",
            description: "Engineered custom backend search indexing, role-based access control, responsive design layouts, and admin analytics dashboards.",
            badges: ["PHP", "MySQL", "JavaScript", "Custom WP Backend"],
            links: [
                { label: "Live Platform", url: "https://2unboss.com/" }
            ]
        },
        {
            id: "ethos",
            category: "supporting",
            title: "Ethos - Corporate Brand Platform",
            subtitle: "High-performance enterprise showcase website.",
            description: "Custom backend architecture, security sanitization, optimized page loading speeds, and contact pipeline automation.",
            badges: ["PHP / WordPress", "Custom Plugins", "MySQL", "SEO"],
            links: [
                { label: "Live Platform", url: "https://ethos.com/" }
            ]
        }
    ],

    focus: [
        {
            num: "01",
            title: "Distributed System Design",
            desc: "Designing high-availability backend microservices, load balancing strategies, horizontal scaling patterns, database read-replication, and resilient API gateways."
        },
        {
            num: "02",
            title: "AWS & Cloud Infrastructure",
            desc: "Architecting production AWS environments across EC2 compute, S3 object storage, RDS database clusters, ECS container tasks, CloudFront CDN, and IAM security governance."
        },
        {
            num: "03",
            title: "Containerization & CI/CD Pipelines",
            desc: "Standardizing Docker containerized development environments and automating zero-downtime staging and production deployment pipelines via GitHub Actions."
        },
        {
            num: "04",
            title: "Python & FastAPI / Django Microservices",
            desc: "Building high-performance backend microservices, asynchronous data processing routines, and API endpoints using Python, FastAPI, and Django."
        },
        {
            num: "05",
            title: "LLMs & RAG Enterprise Architecture",
            desc: "Engineered Retrieval-Augmented Generation (RAG) pipelines, vector embeddings indexing with PGVector & Pinecone, semantic search, and OpenAI / Claude API orchestrations."
        },
        {
            num: "06",
            title: "AI Automation & Agentic Workflows",
            desc: "Orchestrating event-driven AI background queue workers, automated data extraction pipelines, function calling, and intelligent AI backend agent workflows."
        }
    ]
};
