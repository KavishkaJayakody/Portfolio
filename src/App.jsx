import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Code,
  Award,
  MapPin,
  Phone,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import './App.css'

const BASE_URL = import.meta.env.BASE_URL

// Mock data for the portfolio
const mockData = {
  personal: {
    name: "Kavishka Jayakody",
    title: "Electronics & Telecommunication Engineering Student",
    subtitle: "Hardware Engineer & Electronics Enthusiast",
    location: "University of Moratuwa, Sri Lanka",
    email: "jayakodykavishka@gmail.com",
    github: "https://github.com/KavishkaJayakody",
    linkedin: "https://linkedin.com/in/kavishka-jayakody",
    phone: "+94 705227915",
    bio: "Electronics and Telecommunication undergraduate with a strong interest in analog and digital circuits, circuit design, and simulation. Passionate about embedded systems, robotics, FPGA development, hardware prototyping, and VLSI. Proven hands-on experience through competitive robotics and academic projects, with a strong drive to apply technical expertise in solving real-world challenges and delivering impactful engineering solutions.",
    image: `${BASE_URL}Kavishka_J_nobg.png`
  },
  skills: [
    { name: "Python", category: "Programming" },
    { name: "MATLAB", category: "Programming" },
    { name: "C/C++", category: "Programming" },
    { name: "Arduino", category: "Programming" },
    { name: "SystemVerilog", category: "Digital Electronics" },
    { name: "FPGA Implementation", category: "Digital Electronics" },
    { name: "Quartus Prime", category: "Digital Electronics" },
    { name: "Vivado", category: "Digital Electronics" },
    { name: "Altium Designer", category: "PCB Design" },
    { name: "LTSpice", category: "Circuit Simulation" },
    { name: "Xschem", category: "Circuit Simulation" },
    { name: "Synopsys Tools", category: "IC Design" },
    { name: "SolidWorks", category: "CAD Modeling" },
    { name: "OpenCV", category: "Computer Vision" },
    { name: "Git", category: "Version Control" }
  ],
  projects: [
    {
      id: 1,
      title: "Reconfigurable Robot Arm End Effector",
      description: "Designed and fabricated a pneumatic end effector capable of handling cardboard boxes of varying sizes, aimed at warehouse automation applications. Focused on mechanical design, pneumatic control, and system integration.",
      technologies: ["SolidWorks", "Pneumatic Systems", "Mechanical Design", "Automation"],
      image: `${BASE_URL}Robot_arm_end_effector.jpg`,
      github: "https://github.com/KavishkaJayakody/End_Effector",
      demo: null,
      featured: true
    },
    {
      id: 2,
      title: "Micromouse for Solving Complex Mazes",
      description: "Developed an autonomous robot to explore and solve unknown mazes using efficient pathfinding algorithms, optimized for speed and accuracy in competition environments.",
      technologies: ["Arduino", "C++", "Pathfinding Algorithms", "Robotics"],
      image: `${BASE_URL}Micromouse.JPG`,
      github: "https://github.com/KavishkaJayakody/micromouse",
      demo: null,
      featured: true
    },
    {
      id: 3,
      title: "SynTrack - IoT Smart Bus Monitoring System",
      description: "Developed SynTrack, a real-time bus monitoring system for Sri Lanka's public transport sector, featuring GPS tracking, passenger counts and passenger and authority alerting system.",
      technologies: ["ESP32", "IoT", "GPS Tracking", "Real-time Monitoring"],
      image: `${BASE_URL}Syntrack.jpg`,
      github: "https://github.com/KavishkaJayakody/SLIoT_Syntec",
      demo: null,
      featured: true
    },
    {
      id: 4,
      title: "UART Protocol Implementation using FPGA",
      description: "Implemented a UART transceiver on FPGA to transmit 4-bit switch inputs and receive 8-bit serial data, with real-time output on a multiplexed 3-digit 7-segment display. Verified through simulation and FPGA deployment.",
      technologies: ["SystemVerilog", "FPGA", "UART Protocol", "Quartus Prime"],
      image: `${BASE_URL}UART.jpg`,
      github: "https://github.com/KavishkaJayakody/UART_in_FPGA",
      demo: null,
      featured: false
    },
    {
      id: 5,
      title: "Analog 5-Band Equalizer",
      description: "Built and tuned a fully functional analog equalizer with five adjustable frequency bands, enabling precise audio control using a single-supply design with carefully calibrated active filters. The design was implemented in PCB with signal integrity in mind.",
      technologies: ["Analog Circuit Design", "PCB Design", "Audio Processing", "LTSpice"],
      image: `${BASE_URL}5 Band_Equalizer.JPG`,
      github: "https://github.com/KavishkaJayakody/5-Band-Equalizer",
      demo: null,
      featured: false
    },
    {
      id: 6,
      title: "Class D Audio Amplifier",
      description: "Designed and implemented a high-efficiency Class D amplifier from scratch using discrete analog components, covering pre-amplifier, modulation, driver, and output filter stages.",
      technologies: ["Analog Design", "Power Electronics", "Audio Amplification", "Circuit Analysis"],
      image: `${BASE_URL}Class_D.jpg`,
      github: "https://github.com/KavishkaJayakody/class-d-amplifier",
      demo: null,
      featured: false
    }
  ],
  experience: [
    {
      id: 1,
      title: "B.Sc. Eng. (Honours) in Electronic and Telecommunication Engineering",
      company: "University of Moratuwa",
      location: "Moratuwa, Sri Lanka",
      period: "2023 - Present",
      description: "CGPA: 3.97/4.00. Relevant Coursework: Circuits and Signals, Communication Systems and Networks, Robotics, Computer Organization and Design, Electronic Circuit Design, Electronic Control Systems, Communication Systems Engineering.",
      type: "education"
    },
    {
      id: 2,
      title: "Diploma in English Language and Literature",
      company: "Aquinas College of Higher Education",
      location: "Colombo, Sri Lanka",
      period: "2022 - 2023",
      description: "Completed diploma program in English Language and Literature to enhance communication skills and academic writing abilities.",
      type: "education"
    },
    {
      id: 3,
      title: "G.C.E. Advanced Level",
      company: "Royal College, Colombo",
      location: "Colombo, Sri Lanka",
      period: "2013 - 2022",
      description: "3A's, Island Rank: 19, Z-score: 2.7388. G.C.E. Ordinary Level: 9A's. Achieved outstanding academic performance in both O/L and A/L examinations.",
      type: "education"
    }
  ],
  blogs: [
    {
      id: 1,
      title: "Understanding FPGA Design Flow",
      description: "A comprehensive guide to FPGA development from design to implementation, covering SystemVerilog basics and Quartus Prime workflow.",
      url: "https://medium.com/@kavishka/fpga-design-flow",
      date: "2024-01-15",
      category: "Hardware Design"
    },
    {
      id: 2,
      title: "Robotics Competition Strategies",
      description: "Lessons learned from participating in multiple robotics competitions including Micromouse and Robofest challenges.",
      url: "https://medium.com/@jayakodykavishka/robotics-competition-strategies",
      date: "2024-02-20",
      category: "Robotics"
    },
    {
      id: 3,
      title: "Analog Circuit Design Principles",
      description: "Deep dive into analog circuit design techniques, focusing on active filters and audio processing circuits.",
      url: "https://medium.com/@jayakodykavishka/analog-circuit-design-principals-3d992ef2c35d",
      date: "2024-03-10",
      category: "Circuit Design"
    },
    {
      id: 4,
      title: "IoT Implementation in Public Transport",
      description: "Case study on developing SynTrack - an IoT-based bus monitoring system for Sri Lankan public transport.",
      url: "https://medium.com/@jayakodykavishka/iot-implementation-in-public-transport-syntrack",
      date: "2024-04-05",
      category: "IoT"
    }
  ],
  achievements: [
    {
      title: "President's Scout Award",
      description: "Highest achievement in Scouting, recognizing leadership and service",
      year: "2022"
    },
    {
      title: "Robofest Micromouse Competition 2024",
      description: "Runners Up - Autonomous maze-solving robot competition",
      year: "2024"
    },
    {
      title: "DVCon India 2025 Design Contest",
      description: "Stage 3A Contestants - Design and Verification Contest",
      year: "2025"
    },
    {
      title: "Micromaze Micromouse Competition 2024",
      description: "Runners Up - Complex maze navigation challenge",
      year: "2024"
    },
    {
      title: "Blitz Micromouse Competition 2025",
      description: "Runners Up - High-speed maze solving competition",
      year: "2025"
    },
    {
      title: "Robofest Robotics Competition 2025",
      description: "Second Runners Up - Multi-category robotics challenge",
      year: "2025"
    },
    {
      title: "Sri Lanka IoT Challenge 2025",
      description: "Finalist - Internet of Things innovation competition",
      year: "2025"
    },
    {
      title: "IESL Sri Lanka Robotics Challenge 2025",
      description: "Finalist - Engineering society robotics competition",
      year: "2025"
    },
    {
      title: "SPARK Challenge 2025",
      description: "Finalist (4th Place) - Innovation and entrepreneurship challenge",
      year: "2025"
    }
  ]
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'blog', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-menu') && !event.target.closest('.nav-toggle')) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const nextProject = () => {
    setCurrentProjectIndex((prev) => {
      const isMobile = window.innerWidth <= 768
      const itemsPerView = isMobile ? 1 : 3
      const maxIndex = Math.max(0, mockData.projects.length - itemsPerView)
      return Math.min(prev + itemsPerView, maxIndex)
    })
  }

  const prevProject = () => {
    setCurrentProjectIndex((prev) => {
      const isMobile = window.innerWidth <= 768
      const itemsPerView = isMobile ? 1 : 3
      return Math.max(prev - itemsPerView, 0)
    })
  }

  const nextBlog = () => {
    setCurrentBlogIndex((prev) => {
      const isMobile = window.innerWidth <= 768
      const itemsPerView = isMobile ? 1 : 3
      const maxIndex = Math.max(0, mockData.blogs.length - itemsPerView)
      return Math.min(prev + itemsPerView, maxIndex)
    })
  }

  const prevBlog = () => {
    setCurrentBlogIndex((prev) => {
      const isMobile = window.innerWidth <= 768
      const itemsPerView = isMobile ? 1 : 3
      return Math.max(prev - itemsPerView, 0)
    })
  }

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <motion.div
            className="nav-brand"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Code className="nav-icon" />
            <span>Kavishka</span>
            <img src={`${BASE_URL}Upgrade.png`} alt="Upgrade" className="nav-upgrade-icon" />
          </motion.div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {['home', 'about', 'projects', 'experience', 'blog', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item)
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
          
          <button 
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="hero-bg-image"></div>
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {mockData.personal.name}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {mockData.personal.title}
              </motion.h2>
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {mockData.personal.subtitle}
              </motion.p>
              <motion.div 
                className="hero-location"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <MapPin size={16} />
                <span>{mockData.personal.location}</span>
              </motion.div>
              <motion.div 
                className="hero-actions"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <a href="#projects" className="btn btn-primary">
                  View My Work
                  <ExternalLink size={16} />
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Get In Touch
                </a>
              </motion.div>
              <motion.div 
                className="hero-social"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <a href={mockData.personal.github} target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </a>
                <a href={mockData.personal.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                </a>
                <a href={`mailto:${mockData.personal.email}`}>
                  <Mail size={24} />
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hero-image-container"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.img 
                src={mockData.personal.image}
                alt={mockData.personal.name}
                className="hero-image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.div>
          </div>
        </div>
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>About Me</h2>
            <p>Get to know me better</p>
          </motion.div>
          
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Hello, I'm Kavishka!</h3>
              <p>{mockData.personal.bio}</p>
              <p>When I'm not soldering, you can find me exploring new technologies, sleeping, scrolling, or working on personal side projects that challenge me to grow as an innovator.</p>
            </motion.div>
            
            <motion.div 
              className="skills-section"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>Skills & Technologies</h3>
              <div className="skills-grid">
                {mockData.skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-category">{skill.category}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>My Projects</h2>
            <p>Some of my recent work and side projects</p>
          </motion.div>
          
          <div className="projects-carousel">
            <button className="carousel-btn prev" onClick={prevProject}>
              <ChevronLeft size={24} />
            </button>
            
            <div className="carousel-container">
              <motion.div 
                className="carousel-track"
                animate={{ 
                  x: window.innerWidth <= 768 
                    ? -currentProjectIndex * 100 + '%' 
                    : -currentProjectIndex * 33.33 + '%' 
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {mockData.projects.map((project, index) => (
                  <div key={project.id} className="carousel-slide">
                    <motion.div 
                      className={`project-card ${project.featured ? 'featured' : ''}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      <div className="project-image">
                        <img src={project.image} alt={project.title} />
                        <div className="project-overlay">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={20} />
                          </a>
                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="project-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-tech">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            <button className="carousel-btn next" onClick={nextProject}>
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="carousel-indicators">
            {Array.from({ 
              length: window.innerWidth <= 768 
                ? mockData.projects.length 
                : Math.ceil(mockData.projects.length / 3) 
            }).map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  window.innerWidth <= 768 
                    ? index === currentProjectIndex 
                    : index === Math.floor(currentProjectIndex / 3)
                    ? 'active' : ''
                }`}
                onClick={() => setCurrentProjectIndex(
                  window.innerWidth <= 768 ? index : index * 3
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Experience & Education</h2>
            <p>My journey so far</p>
          </motion.div>
          
          <div className="timeline">
            {mockData.experience.map((item, index) => (
              <motion.div 
                key={item.id}
                className={`timeline-item ${item.type}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{item.title}</h3>
                    <span className="timeline-period">{item.period}</span>
                  </div>
                  <h4>{item.company}</h4>
                  <div className="timeline-location">
                    <MapPin size={14} />
                    <span>{item.location}</span>
                  </div>
                  <div className="timeline-description">
                    <p className="timeline-summary">
                      {item.type === 'education' 
                        ? `${item.title.includes('B.Sc') ? 'Pursuing Bachelor\'s degree' : item.title.includes('Diploma') ? 'Completed Diploma' : 'Completed'} at ${item.company}`
                        : `Worked as ${item.title} at ${item.company}`
                      }
                    </p>
                    <div className="timeline-details">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="achievements"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Achievements & Awards</h3>
            <div className="achievements-grid">
              {mockData.achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="achievement-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Award className="achievement-icon" />
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                  <span className="achievement-year">{achievement.year}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="blog">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Blog & Articles</h2>
            <p>Technical insights and project documentation</p>
          </motion.div>
          
          <div className="blog-carousel">
            <button className="carousel-btn prev" onClick={prevBlog}>
              <ChevronLeft size={24} />
            </button>
            
            <div className="carousel-container">
              <motion.div 
                className="carousel-track"
                animate={{ 
                  x: window.innerWidth <= 768 
                    ? -currentBlogIndex * 100 + '%' 
                    : -currentBlogIndex * 33.33 + '%' 
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {mockData.blogs.map((blog, index) => (
                  <div key={blog.id} className="carousel-slide">
                    <motion.article 
                      className="blog-card"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      <div className="blog-content">
                        <div className="blog-meta">
                          <span className="blog-category">{blog.category}</span>
                          <span className="blog-date">{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                        <a 
                          href={blog.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="blog-link"
                        >
                          Read More
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </motion.article>
                  </div>
                ))}
              </motion.div>
            </div>
            
            <button className="carousel-btn next" onClick={nextBlog}>
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="carousel-indicators">
            {Array.from({ 
              length: window.innerWidth <= 768 
                ? mockData.blogs.length 
                : Math.ceil(mockData.blogs.length / 3) 
            }).map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  window.innerWidth <= 768 
                    ? index === currentBlogIndex 
                    : index === Math.floor(currentBlogIndex / 3)
                    ? 'active' : ''
                }`}
                onClick={() => setCurrentBlogIndex(
                  window.innerWidth <= 768 ? index : index * 3
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Get In Touch</h2>
            <p>Let's work together on something amazing</p>
          </motion.div>
          
          <div className="contact-content">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Let's Connect</h3>
              <p>I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <Mail size={20} />
                  <div>
                    <h4>Email</h4>
                    <a href={`mailto:${mockData.personal.email}`}>{mockData.personal.email}</a>
                  </div>
                </div>
                <div className="contact-item">
                  <MapPin size={20} />
                  <div>
                    <h4>Location</h4>
                    <span>{mockData.personal.location}</span>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone size={20} />
      <div>
                    <h4>Phone</h4>
                    <a href={`tel:${mockData.personal.phone}`}>{mockData.personal.phone}</a>
                  </div>
                </div>
              </div>
              
              <div className="contact-social">
                <a href={mockData.personal.github} target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </a>
                <a href={mockData.personal.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                </a>
                <a href={`mailto:${mockData.personal.email}`}>
                  <Mail size={24} />
        </a>
      </div>
            </motion.div>
            
            <motion.div 
              className="contact-form"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                  <Mail size={16} />
        </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Code className="footer-icon" />
              <span>Kavishka Jayakody</span>
            </div>
            <p>&copy; 2024 Kavishka Jayakody. All rights reserved.</p>
            <div className="footer-social">
              <a href={mockData.personal.github} target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href={mockData.personal.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${mockData.personal.email}`}>
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      </div>
  )
}

export default App
