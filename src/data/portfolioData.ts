export interface Project {
    id: string;
    title: string;
    description: string;
    tools: string[];
    category: string;
    image: string;
    gallery: string[];
    demoUrl?: string;
    githubUrl: string;
    detailsUrl: string;
    fullDescription: string;
}

export interface Experience {
    id: string;
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    image: string;
    description: string;
}

export interface Education {
    id: string;
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    description?: string;
}

export const projects: Project[] = [
    {
        id: 'ecommerce-app',
        title: 'Simple E-commerce App',
        description: 'Clean and intuitive e-commerce UI with modern design patterns',
        tools: ['Flutter', 'GetX'],
        category: 'Mobile Apps',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
        gallery: [
            'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
        ],
        githubUrl: 'https://github.com/sifyacine/E-commenrce-app',
        detailsUrl: 'https://mostaql.com/portfolio/2229071-e-commerce-app',
        fullDescription: 'A beautifully designed e-commerce mobile application focusing on user experience and modern UI patterns. Built with Flutter and state management using GetX for optimal performance.'
    },
    {
        id: 'jumia-clone',
        title: 'Jumia Clone',
        description: 'Full-featured e-commerce app with real-time data synchronization',
        tools: ['Flutter', 'GetX', 'Firebase'],
        category: 'Mobile Apps',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1000',
        gallery: [
            'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1000',
        ],
        githubUrl: 'https://github.com/sifyacine/jumia_clone.git',
        detailsUrl: 'https://mostaql.com/portfolio/2392607-multivendor-app',
        fullDescription: 'Complete e-commerce solution inspired by Jumia, featuring user authentication, product catalog, shopping cart, and real-time order tracking with Firebase backend integration.'
    },
    {
        id: 'medilink-app',
        title: 'Medilink Mobile',
        description: 'Healthcare app connecting patients with medical professionals',
        tools: ['Flutter', 'GetX', 'Mapbox', 'Django'],
        category: 'Mobile Apps',
        image: 'https://images.unsplash.com/photo-1576091160550-2173bd999c1d?auto=format&fit=crop&q=80&w=1000',
        gallery: [
            'https://images.unsplash.com/photo-1576091160550-2173bd999c1d?auto=format&fit=crop&q=80&w=1000',
        ],
        githubUrl: 'http://github.com/sifyacine/medilink',
        detailsUrl: 'https://mostaql.com/portfolio/2978385-medilink',
        fullDescription: 'Comprehensive healthcare mobile application enabling patients to find nearby medical facilities, book appointments, and manage their health records with integrated mapping and backend services.'
    },
    {
        id: 'school-security',
        title: 'School Security System',
        description: 'Comprehensive security system with biometric authentication and real-time monitoring',
        tools: ['Django', 'React', 'OpenCV', 'dlib', 'RFID', 'Arduino', 'PostgreSQL'],
        category: 'Backend',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
        gallery: [
            'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
        ],
        githubUrl: 'https://github.com/sifyacine/school-security-system',
        detailsUrl: 'https://mostaql.com/portfolio/1513873-school-security-system',
        fullDescription: 'Designed and implemented an end-to-end biometric security solution combining facial recognition and RFID technology to automate student attendance and campus access control. Features a robust RESTful API backend using Django/DRF and an intuitive React.js dashboard for real-time monitoring and analytics.'
    },
    {
        id: 'gesture-recognition',
        title: 'Hand Gesture Recognition',
        description: 'Transformer-based model for accurate hand gesture classification using EMG signals',
        tools: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Signal Processing'],
        category: 'AI/ML',
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000',
        gallery: [
            'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000',
        ],
        githubUrl: 'https://github.com/sifyacine',
        detailsUrl: 'https://github.com/sifyacine/gesture-recognition',
        fullDescription: 'Architected a state-of-the-art deep learning model leveraging Transformer architecture to classify hand gestures from electromyography (EMG) biosignals. Outperformed conventional CNN and LSTM models through attention mechanisms and positional encoding, achieving superior generalization on unseen test data.'
    },
];

export const experiences: Experience[] = [
    {
        id: 'kricar',
        company: 'Kricar',
        role: 'Software Engineer Intern',
        startDate: 'Jun 2025',
        endDate: 'Aug 2025',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=400',
        description: 'Developed full-stack applications involving Odoo, Python, and PostgreSQL. Focused on system architecture, REST API development, and frontend integration with React/Redux.'
    },
    {
        id: 'kloufi',
        company: 'Kloufi',
        role: 'Big Data Engineer Intern',
        startDate: 'Mar 2025',
        endDate: 'May 2025',
        image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=400',
        description: 'Worked on big data pipeline optimization using Python, Scrapy, and BeautifulSoup. Implemented data extraction and storage solutions with Elastic Search and Redis.'
    }
];

export const resumePath = '/Sif_Yacine_Resume__english.pdf';

export const education: Education[] = [
    {
        id: 'igee-master',
        institution: 'IGEE (formerly INELEC)',
        degree: 'Master of Computer Engineering',
        field: 'Computer Engineering',
        startDate: 'Sep 2023',
        endDate: 'Jun 2025',
        description: 'Focused on AI and advanced deep learning. Master\'s Thesis: Transformer-Based Hand Gesture Recognition System Using EMG Signals. Key Coursework: Deep Learning, Computer Vision, NLP, Big Data Analytics.'
    },
    {
        id: 'igee-bachelor',
        institution: 'IGEE (formerly INELEC)',
        degree: 'Bachelor of Electrical Engineering',
        field: 'Electrical Engineering & Electronics',
        startDate: 'Dec 2020',
        endDate: 'Jun 2023',
        description: 'Specialization in Electronics. Capstone Project: Intelligent school security system with facial recognition and RFID. Key Coursework: Digital Signal Processing, Microcontrollers, Arduino, Face Recognition.'
    }
];

export const skills = {
    "Programming": ["Python", "JavaScript/TypeScript", "Dart", "C++", "C", "Java", "SQL", "Assembly"],
    "Frameworks": ["Django", "Flutter", "React", "Node.js", "TensorFlow", "Keras", "OpenCV", "NumPy", "Pandas"],
    "Databases & Cloud": ["PostgreSQL", "Elastic Search", "SQL Server", "Firebase", "Redis", "SQLite"],
    "DevOps & Tools": ["Git", "Docker", "Proxmox", "Linux", "Odoo ERP", "Postman", "Jupyter Notebook"],
    "Specialized": ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Signal Processing", "Arduino", "RFID"]
};
