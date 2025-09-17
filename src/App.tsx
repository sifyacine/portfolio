import { useState } from 'react';
import { Github, ExternalLink, Mail, Linkedin, MapPin, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
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

interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  // App Development Projects
  {
    id: 'ecommerce-app',
    title: 'Simple E-commerce App',
    description: 'Clean and intuitive e-commerce UI with modern design patterns',
    tools: ['Flutter', 'GetX'],
    category: 'Mobile Apps',
    image: '/assets/ecommerce-app/main.png',
    gallery: [
      '/assets/ecommerce-app/main.png',
      '/assets/ecommerce-app/main.png'
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
    image: '/assets/jumia-clone/image.png',
    gallery: [
      '/assets/jumia-clone/main.png',
      '/assets/jumia-clone/main.png'
    ],
    githubUrl: 'https://github.com/sifyacine/jumia_clone.git',
    detailsUrl: 'https://mostaql.com/portfolio/2392607-multivendor-app',
    fullDescription: 'Complete e-commerce solution inspired by Jumia, featuring user authentication, product catalog, shopping cart, and real-time order tracking with Firebase backend integration.'
  },
  {
    id: 'allounouno',
    title: 'Allounouno',
    description: 'Location-based service app with interactive mapping features',
    tools: ['Flutter', 'GetX', 'Mapbox', 'Firebase'],
    category: 'Mobile Apps',
    image: '/assets/main.png',
    gallery: [
      '/assets/main.png',
      '/assets/main.png'
    ],
    githubUrl: 'https://github.com/sifyacine/Allonounou',
    detailsUrl: 'https://drive.google.com/file/d/1w6F0PLgt2y_CQKiCGj2OBc7Y12zfwU6Q/view?usp=drive_link',
    fullDescription: 'Innovative location-based mobile application that connects users with local services. Features advanced mapping with Mapbox, real-time location tracking, and seamless user experience.'
  },
  {
    id: 'medilink-app',
    title: 'Medilink Mobile',
    description: 'Healthcare app connecting patients with medical professionals',
    tools: ['Flutter', 'GetX', 'Mapbox', 'Django'],
    category: 'Mobile Apps',
    image: '/assets/medilink/image.png',
    gallery: [
      '/assets/medilink/image.png',
      '/assets/medilink/image.png'
    ],
    githubUrl: 'http://github.com/sifyacine/medilink',
    detailsUrl: 'https://mostaql.com/portfolio/2978385-medilink',
    fullDescription: 'Comprehensive healthcare mobile application enabling patients to find nearby medical facilities, book appointments, and manage their health records with integrated mapping and backend services.'
  },
  // Backend Projects
  {
    id: 'school-security',
    title: 'School Security System',
    description: 'Comprehensive security system with biometric authentication',
    tools: ['Django', 'React', 'Face Recognition', 'RFID', 'Arduino'],
    category: 'Backend',
    image: '/assets/school-security-system/image.png',
    gallery: [
      '/assets/school-security-system/image.png',
      '/assets/school-security-system/image.png'
    ],
    githubUrl: 'https://github.com/sifyacine/school-security-system',
    detailsUrl: 'https://mostaql.com/portfolio/1513873-school-security-system',
    fullDescription: 'Advanced school security management system combining face recognition technology with RFID cards for secure access control. Features real-time monitoring and comprehensive reporting.'
  },
  {
    id: 'pedaconnect-backend',
    title: 'PedaConnect API',
    description: 'Real-time communication platform for educational institutions',
    tools: ['React JS', 'Django Channels', 'RESTful API'],
    category: 'Backend',
    image: '/assets/peda/image.png',
    gallery: [
      '/assets/peda/image.png',
      '/assets/peda/image.png'
    ],
    githubUrl: 'https://github.com/ILYAS-tbs/pedaconnectproject_backend',
    detailsUrl: 'https://pedaconnect.com',
    fullDescription: 'Robust backend API powering educational communication platform with real-time messaging, file sharing, and comprehensive user management for schools, teachers, and parents.'
  },
  // AI/ML Projects
  {
    id: 'gesture-recognition',
    title: 'Hand Gesture Recognition',
    description: 'Transformer-based model for accurate hand gesture classification',
    tools: ['Keras', 'Python', 'NumPy', 'Pandas', 'Ninapro'],
    category: 'AI/ML',
    image: '/assets/main.png',
    gallery: [
      '/assets/main.png',
      '/assets/main.png'
    ],
    githubUrl: 'https://github.com/sifyacine',
    detailsUrl: 'https://github.com/sifyacine/gesture-recognition',
    fullDescription: 'Advanced machine learning model using transformer architecture for real-time hand gesture recognition. Trained on Ninapro dataset achieving high accuracy in gesture classification for assistive technology applications.'
  },
  // Landing Pages
  {
    id: 'pedaconnect-landing',
    title: 'PedaConnect Dashboard',
    description: 'Educational platform connecting schools, teachers, and parents',
    tools: ['React JS', 'TypeScript'],
    category: 'Web',
    image: '/assets/peda/image.png',
    gallery: [
      '/assets/peda/image.png',
      '/assets/peda/image.png'
    ],
    demoUrl: 'https://pedaconnect.com',
    githubUrl: 'https://github.com/sifyacine',
    detailsUrl: 'https://pedaconnect.com',
    fullDescription: 'Modern landing page and dashboard interface for educational management platform. Features responsive design, interactive components, and seamless user experience built with React and TypeScript.'
  },
  {
    id: 'medilink-landing',
    title: 'Medilink Landing Page',
    description: 'Healthcare platform landing page with modern design',
    tools: ['React JS', 'TypeScript'],
    category: 'Web',
    image: '/assets/medilink/image.png',
    gallery: [
      '/assets/medilink/image.png',
      '/assets/medilink/image.png'
    ],
    demoUrl: 'https://medilink.com',
    githubUrl: 'https://github.com/sifyacine/medilink_Landing_page',
    detailsUrl: 'https://medilink-three.vercel.app',
    fullDescription: 'Professional healthcare platform landing page featuring modern design principles, conversion-optimized layout, and comprehensive information architecture built with React and TypeScript.'
  }
];

const experiences: Experience[] = [
  {
    id: 'kloufi',
    company: 'Kloufi',
    role: 'Data Engineer Intern',
    startDate: '1 March 2025',
    endDate: '31 March 2025',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Worked on data pipeline optimization and analytics infrastructure development.'
  },
  {
    id: 'kricar',
    company: 'Kricar',
    role: 'Software Engineer',
    startDate: '1 June 2025',
    endDate: '31 August 2025',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Developed full-stack applications and contributed to system architecture design.'
  }
];

const skills = [
  'Flutter', 'Django', 'PostgreSQL', 'MongoDB', 'Odoo', 
  'C/C++', 'Python', 'Java', 'React', 'TypeScript', 
  'Firebase', 'Mapbox', 'GetX', 'Keras', 'Arduino'
];

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Mobile Apps', 'Backend', 'AI/ML', 'Web'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Sif Yacine</h1>
              <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                Software Engineer
              </span>
            </div>
            <div className="flex space-x-4">
              <a href="mailto:sif.yacine@email.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/sifyacine" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/sifyacine" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold">SY</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sif Yacine
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Passionate Software Engineer specializing in Mobile Development, Backend Systems, and AI/ML Solutions
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Algeria</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies & Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced with modern technologies and frameworks across different domains
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-gray-50 px-4 py-3 rounded-lg text-center hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 cursor-default"
              >
                <span className="font-medium text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              A collection of projects showcasing my expertise in various technologies
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => openProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {project.demoUrl && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.demoUrl, '_blank');
                          }}
                          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                        className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.detailsUrl, '_blank');
                        }}
                        className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="text-sm text-gray-500">Click for details</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My journey in software development and engineering roles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={experience.image}
                    alt={experience.company}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {experience.company}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {experience.role}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{experience.startDate} - {experience.endDate}</span>
                    </div>
                    <p className="text-gray-600">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's connect and discuss how we can create something amazing together.
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="mailto:sif.yacine@email.com"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Get In Touch</span>
              </a>
              <a 
                href="https://github.com/sifyacine"
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>View GitHub</span>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Sif Yacine. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedProject.title}
              </h2>
              <button
                onClick={closeProject}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              {/* Image Gallery */}
              <div className="relative mb-6">
                <img
                  src={selectedProject.gallery[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
                {selectedProject.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {selectedProject.gallery.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-600 mb-4">{selectedProject.fullDescription}</p>
                  
                  <div className="flex space-x-3">
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>Source Code</span>
                    </a>
                    <a
                      href={selectedProject.detailsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Details</span>
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Category</h3>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;