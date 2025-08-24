import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { TypingAnimation } from '@/components/TypingAnimation'
import { 
  ArrowRightIcon, 
  GithubIcon, 
  LinkedinIcon, 
  MailIcon, 
  PhoneIcon,
  MapPinIcon,
  DownloadIcon,
  ExternalLinkIcon,
  CodeIcon,
  SmartphoneIcon,
  ServerIcon,
  LayoutIcon,
  DatabaseIcon,
  GraduationCapIcon,
  CalendarIcon,
  BriefcaseIcon,
  ArrowLeftIcon,
  GitBranchIcon,
  CloudIcon,
  CpuIcon,
  LineChartIcon,
  PackageIcon,
  MessageSquareIcon,
} from 'lucide-react'
import profilePic from './assets/profilepic.png'
import swiftLogo from './assets/swiftlogo.png'
import reactLogo from './assets/reactlogo.png'
import appIcon1 from './assets/appicon1.png'
import appIcon2 from './assets/appicon2.png'
import appIcon3 from './assets/appicon3.png'
import appIcon4 from './assets/appicon4.png'
import appIcon5 from './assets/appicon5.png'
import appIcon6 from './assets/appicon6.png'
import appIcon7 from './assets/appicon7.png'
import appIcon8 from './assets/appicon8.png'
import appIcon9 from './assets/appicon9.png'
import appIcon10 from './assets/appicon10.png'

// App Screenshots
import app1screen1 from './assets/app1screenshots/app1screen1.png'
import app1screen2 from './assets/app1screenshots/app1screen2.png'
import app1screen3 from './assets/app1screenshots/app1screen3.png'
import app1screen4 from './assets/app1screenshots/app1screen4.png'
import app1screen5 from './assets/app1screenshots/app1screen5.png'
import app1screen6 from './assets/app1screenshots/app1screen6.png'
import app1screen7 from './assets/app1screenshots/app1screen7.png'

import app10screen1 from './assets/app10screenshots/01 – iPhone16.png'
import app10screen2 from './assets/app10screenshots/02 – iPhone16.png'
import app10screen3 from './assets/app10screenshots/03 – iPhone16.png'
import app10screen4 from './assets/app10screenshots/04 – iPhone16.png'
import app10screen5 from './assets/app10screenshots/05 – iPhone16.png'
import app10screen6 from './assets/app10screenshots/06 – iPhone16.png'

import pomo1 from './assets/app3screenshots/pomo1.png'
import pomo2 from './assets/app3screenshots/pomo2.png'
import pomo3 from './assets/app3screenshots/pomo3.png'
import pomo4 from './assets/app3screenshots/pomo4.png'
import pomo5 from './assets/app3screenshots/pomo5.png'
import pomo6 from './assets/app3screenshots/pomo6.png'

import hd1 from './assets/aihomescreenshots/hd1.png'
import hd2 from './assets/aihomescreenshots/hd2.png'
import hd3 from './assets/aihomescreenshots/hd3.png'
import hd4 from './assets/aihomescreenshots/hd4.png'

import penmo1 from './assets/penmoscreenshots/penmo1.png'
import penmo2 from './assets/penmoscreenshots/penmo2.png'
import penmo3 from './assets/penmoscreenshots/penmo3.png'
import penmo4 from './assets/penmoscreenshots/penmo4.png'
import penmo5 from './assets/penmoscreenshots/penmo5.png'

import party1 from './assets/partyscreenshots/party1.png'
import party2 from './assets/partyscreenshots/party2.png'
import party3 from './assets/partyscreenshots/party3.png'




// Screenshot mappings
const appScreenshots = {
  1: {
    screens: [app10screen1, app10screen2, app10screen3, app10screen4, app10screen5, app10screen6],
    name: "Mobile Automation MCP Server"
  },
  2: {
    screens: [app1screen1, app1screen2, app1screen3, app1screen4, app1screen5, app1screen6, app1screen7],
    name: "iOS App 4"
  },
  3: {
    screens: [pomo1, pomo2, pomo3, pomo4, pomo5, pomo6],
    name: "Pomodoro Timer: Fokis"
  },
  4: {
    screens: [hd1, hd2, hd3, hd4],
    name: "AI Home Design"
  },
  5: {
    screens: [penmo1, penmo2, penmo3, penmo4, penmo5],
    name: "Penmo: Expense Tracker"
  },
  6: {
    screens: [party1, party2, party3],
    name: "Party Games: Queestion games"
  }
}



// Portfolio data
const portfolioData = {
  hero: {
    greeting: "Hi, I'm Mohamed",
    title: "Software Engineer & iOS Developer. I love building things and helping people.",
    description: "Building elegant mobile experiences and scalable software solutions",
    image: profilePic,
    resumeUrl: "#"
  },
  about: {
    bio: "Computer Science graduate from Towson University with expertise in iOS development and full-stack engineering. Currently leading the development of eight App Store applications while specializing in Swift, React, and modern backend technologies. Passionate about creating intuitive user experiences and building scalable systems that serve thousands of users daily.",
    highlights: [
      "10 Apps on App Store",
      "Full-Stack Developer",
      "iOS & Mobile Expert",
      "D.C. Metro Area"
    ]
  },
  experience: [
    {
      id: 1,
      position: "iOS Developer",
      company: "Self-Employed",
      period: "Jun 2024 - Present",
      description: "Led the full product lifecycle for Eight App Store applications, from concept and UI/UX design to deployment. Architected secure, scalable backend using Firebase and Core Data supporting 1,000+ daily operations.",
      tech: ["Swift", "SwiftUI", "UIKit", "Firebase", "Core Data", "GPT-4 API"]
    },
    {
      id: 2,
      position: "Software Engineer Intern",
      company: "HQLABS",
      period: "May 2022 - Aug 2022",
      description: "Built real-time transaction monitoring dashboard using React and TypeScript. Architected high-throughput gRPC services in Go for financial data processing.",
      tech: ["React", "TypeScript", "Go", "gRPC", "Terraform", "ShadCN"]
    }
  ],
  projects: [
    {
      id: 1,
      name: "Journal App: Diary with Lock",
      description: "",
      icon: appIcon8,
      year: "2025",
      highlights: []
    },
    {
      id: 2,
      name: "Bookd: Reading Tracker & TBR",
      description: "React, TypeScript, Node.js, AWS",
      icon: appIcon1,
      year: "2024",
      highlights: ["Real-time collaboration", "WebSocket sync", "MongoDB storage"]
    },
    {
      id: 3,
      name: "Pomodoro Timer: Fokis",
      description: "React, Go, GraphQL, Docker",
      icon: appIcon4,
      year: "2024",
      highlights: ["AI-powered analysis", "LLM integration", "Rust service"]
    },
    {
      id: 4,
      name: "AI Home Design & Planner",
      description: "React, FastAPI, PostgreSQL",
      icon: appIcon10,
      year: "2025",
      highlights: ["Real-time data", "Back-testing engine", "Strategy analysis"]
    },
    {
      id: 5,
      name: "Expense Tracker: Penmo",
      description: "C++, TCP/IP, Non-Blocking I/O",
      icon: appIcon2,
      year: "2023",
      highlights: ["High-performance", "Event-driven", "From scratch"]
    },
    {
      id: 6,
      name: "Party Games: Game Night",
      description: "React, TypeScript, Rollup.js",
      icon: appIcon7,
      year: "2024",
      highlights: ["NPM package", "Plug-and-play", "AI integration"]
    },
    {
      id: 7,
      name: "Image to PDF: Convert to PDF",
      description: "Swift, SwiftUI, Firebase",
      icon: appIcon3,
      year: "2024",
      highlights: ["App Store published", "1000+ users", "Real-time sync"]
    },
    {
      id: 8,
      name: "Weight Loss Tracker: WeightLog",
      description: "Swift, UIKit, Core Data",
      icon: appIcon5,
      year: "2024",
      highlights: ["Offline support", "GPT-4 integration", "25% engagement boost"]
    },
    {
      id: 9,
      name: "Invoice Maker & Easy Estimate",
      description: "SwiftUI, CloudKit",
      icon: appIcon9,
      year: "2024",
      highlights: ["Cloud sync", "Push notifications", "In-app purchases"]
    },
    {
      id: 10,
      name: "AI Homework Helper: AI Scanner",
      description: "Swift, Firebase Auth",
      icon: appIcon6,
      year: "2024",
      highlights: ["Secure auth", "Social login", "User analytics"]
    }
  ],
  technicalProjects: [
    {
      id: 1,
      name: "Mobile Automation MCP Server for LLMs",
      date: "Dec 2024",
      tech: ["TypeScript", "Node.js", "iOS", "go-ios", "WDA"],
      icon: SmartphoneIcon,
      githubUrl: "https://github.com/mabdel8/mobile-automation-mcp",
      description: [
        "Created a platform-agnostic <span class='font-semibold text-foreground'>Model Context Protocol (MCP)</span> server that enables <span class='font-semibold text-foreground'>AI agents and LLMs</span> to automate and interact with native mobile applications across iOS, Android, simulators, and physical devices.",
        "Engineered a system that provides agents with a structured understanding of the UI through <span class='font-semibold text-foreground'>accessibility trees</span>, falling back to visual screenshot analysis, to allow for deterministic, multi-step task automation without requiring direct app-specific API knowledge."
      ]
    },
    {
      id: 2,
      name: "Real-time Collaborative Whiteboard Application",
      date: "Sep 2024",
      tech: ["React", "TypeScript", "Node.js", "Express", "AWS", "WebSockets", "MongoDB"],
      icon: LayoutIcon,
      githubUrl: "https://github.com/mabdel8/collaborative-whiteboard",
      description: [
        "Developed a full-stack, real-time collaborative whiteboard application with <span class='font-semibold text-foreground'>React/TypeScript</span> and a <span class='font-semibold text-foreground'>Node.js/Express.js</span> backend, enabling concurrent user interactions.",
        "Implemented <span class='font-semibold text-foreground'>WebSockets</span> for instantaneous communication and designed a <span class='font-semibold text-foreground'>MongoDB</span> database to store data.",
        "Deployed the application to <span class='font-semibold text-foreground'>AWS</span> and established a <span class='font-semibold text-foreground'>CI/CD pipeline</span> with GitHub Actions for continuous delivery."
      ]
    },
    {
      id: 3,
      name: "AI-Powered Code Refactoring & Optimization Engine",
      date: "Jul 2024",
      tech: ["React", "Go", "Vector DB", "GraphQL", "Docker", "Rust", "OpenAI API"],
      icon: CodeIcon,
      githubUrl: "https://github.com/mabdel8/code-refactoring-engine",
      description: [
        "Created a platform that analyzes and refactors code for better readability and efficiency using <span class='font-semibold text-foreground'>LLMs</span>.",
        "Developed a backend in <span class='font-semibold text-foreground'>Go</span> featuring a <span class='font-semibold text-foreground'>GraphQL API</span> for seamless frontend communication and integrated a custom <span class='font-semibold text-foreground'>Rust-based service</span> to interface with the <span class='font-semibold text-foreground'>OpenAI API</span>, leveraging LLMs to generate code refactoring suggestions."
      ]
    },
    {
      id: 4,
      name: "Market Data Analysis & Strategy Back-testing Platform",
      date: "May 2024",
      tech: ["React", "FastAPI", "Python", "PostgreSQL"],
      icon: LineChartIcon,
      githubUrl: "https://github.com/mabdel8/market-data-platform",
      description: [
        "Engineered a distributed platform to ingest real-time <span class='font-semibold text-foreground'>financial market data</span>, process it through a custom <span class='font-semibold text-foreground'>back-testing engine</span>, and analyze <span class='font-semibold text-foreground'>algorithmic trading strategy</span> performance against historical data."
      ]
    },
    {
      id: 5,
      name: "Redis Clone (In-Memory Key-Value Store)",
      date: "Mar 2024",
      tech: ["C++", "TCP/IP", "Non-Blocking I/O"],
      icon: DatabaseIcon,
      githubUrl: "https://github.com/mabdel8/redis-clone",
      description: [
        "Engineered a high-performance, event-driven <span class='font-semibold text-foreground'>Redis clone</span> in <span class='font-semibold text-foreground'>C++</span> from scratch."
      ]
    },
    {
      id: 6,
      name: "React AI Chatbot Component Library",
      date: "Jan 2024",
      tech: ["React", "TypeScript", "Rollup.js", "Storybook", "NPM"],
      icon: MessageSquareIcon,
      githubUrl: "https://github.com/mabdel8/react-ai-chatbot",
      description: [
        "Published an open-source component library to <span class='font-semibold text-foreground'>NPM</span> providing developers with a highly customizable, plug-and-play <span class='font-semibold text-foreground'>chatbot UI</span> for easy integration of <span class='font-semibold text-foreground'>AI services</span>."
      ]
    }
  ],
  skills: {
    languages: ["Java", "Swift", "Python", "JavaScript/TypeScript", "Go", "Rust", "C/C++", "C#", "SQL"],
    frontend: ["React", "Angular", "SwiftUI", "UIKit", "HTML/CSS"],
    backend: ["Node.js", "Spring Boot", "Django", "Express", "gRPC", "FastAPI"],
    tools: ["Git/GitHub", "Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
    databases: ["PostgreSQL", "MongoDB", "Firebase", "Core Data", "Redis"],
    platforms: ["iOS", "Kafka", "RESTful APIs", "Terraform", "Agile"]
  },
  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "Towson University",
    location: "Towson, MD",
    period: "Aug 2020 - May 2024",
    highlights: [
      "Computer Science Graduate",
      "Software Engineering Focus",
      "Mobile Development"
    ]
  },
  contact: {
    email: "mabdel.dev@gmail.com",
    phone: "+1 (443) 449-0558",
    location: "D.C. Metro Area",
    linkedin: "https://www.linkedin.com/in/mabdel8",
    github: "https://github.com/mabdel8"
  }
}

// Hero Section with About Me
function HeroSection() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section id="home" className="relative pt-32 pb-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-8">
            {/* Text Content */}
            <div className="flex-1">
              {/* Greeting */}
              <motion.div
                custom={0}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                  Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Mohamed</span> 👋
                </h1>
              </motion.div>

              {/* Title */}
              <motion.div
                custom={1}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
              >
                <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-2xl">
                  {portfolioData.hero.title}
                </p>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="relative flex-shrink-0"
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                <img
                  src={portfolioData.hero.image}
                  alt="Mohamed Abdelmagid"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* About Section */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-2"
          >
            <h2 className="text-2xl font-bold mb-6">About</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
              {portfolioData.about.bio}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Work Experience Timeline
function ExperienceSection() {
  const getExperienceLogo = (expId: number) => {
    switch (expId) {
      case 1: // iOS Developer
        return swiftLogo
      case 2: // Software Engineer Intern
        return reactLogo
      default:
        return null
    }
  }

  return (
    <section id="experience" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">
              Work Experience
            </h2>
          </motion.div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-border" />
            
            {portfolioData.experience.map((exp, index) => {
              const logo = getExperienceLogo(exp.id)
              
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start mb-12"
                >
                  {/* Timeline logo */}
                  <div className="absolute left-3 w-6 h-6 bg-background rounded-full flex items-center justify-center border-2 border-primary">
                    {logo && (
                      <img
                        src={logo}
                        alt={`${exp.position} logo`}
                        className="w-4 h-4 rounded-sm"
                      />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="ml-16 flex-1">
                    <div className="mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-semibold">{exp.position}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                        <Badge variant="outline" className="mt-2 sm:mt-0 w-fit">
                          <CalendarIcon className="mr-1 h-3 w-3" />
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// Apps Section
function AppsSection() {
  const [showAllApps, setShowAllApps] = useState(false)
  const visibleApps = showAllApps ? portfolioData.projects : portfolioData.projects.slice(0, 6)
  
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Apps</h2>
          </motion.div>

          <div className="space-y-8">
            {visibleApps.map((project, index) => {
              const hasScreenshots = appScreenshots[project.id as keyof typeof appScreenshots]
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {/* App Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={project.icon}
                      alt={project.name}
                      className="w-16 h-16 rounded-xl hover:scale-105 transition-transform duration-300"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {project.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.year}
                      </p>
                    </div>
                  </div>
                  
                  {/* Screenshots */}
                  {hasScreenshots && (
                    <div className="ml-20">
                      <Carousel 
                        opts={{
                          align: "start",
                          loop: true,
                        }}
                        className="w-full"
                      >
                        <CarouselContent className="-ml-2 md:-ml-4">
                          {hasScreenshots.screens.map((screenshot, screenshotIndex) => (
                            <CarouselItem key={screenshotIndex} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3">
                              <div className="relative group">
                                <img
                                  src={screenshot}
                                  alt={`${hasScreenshots.name} screenshot ${screenshotIndex + 1}`}
                                  className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </Carousel>
                    </div>
                  )}
                </motion.div>
              )
            })}
            
            {/* See More / See Less Button */}
            {portfolioData.projects.length > 6 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-center pt-8"
              >
                <Button 
                  variant="outline" 
                  onClick={() => setShowAllApps(!showAllApps)}
                  className="flex items-center gap-2"
                >
                  {showAllApps ? (
                    <>
                      Show Less
                      <ArrowLeftIcon className="w-4 h-4 rotate-90" />
                    </>
                  ) : (
                    <>
                      See More Apps ({portfolioData.projects.length - 6} more)
                      <ArrowLeftIcon className="w-4 h-4 -rotate-90" />
                    </>
                  )}
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Projects Section
function ProjectsSection() {
  return (
    <section id="technical-projects" className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
          </motion.div>

          <div className="space-y-8">
            {portfolioData.technicalProjects.map((project, index) => {
              const Icon = project.icon
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex gap-4">
                    {/* Project Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="flex-1">
                      {/* Project Name */}
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      {/* Date */}
                      <p className="text-sm text-muted-foreground mb-2">
                        {project.date}
                      </p>
                      
                      {/* Tech Stack Tags with GitHub Link */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {/* GitHub Source Badge */}
                        {project.githubUrl && (
                          <Badge 
                            className="text-xs bg-black hover:bg-black/90 text-white cursor-pointer"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                          >
                            <GithubIcon className="w-3 h-3 mr-1" />
                            Source
                          </Badge>
                        )}
                      </div>
                      
                      {/* Description Points */}
                      <ul className="space-y-2">
                        {project.description.map((point, pointIndex) => (
                          <li key={pointIndex} className="text-sm text-muted-foreground leading-relaxed flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span dangerouslySetInnerHTML={{ __html: point }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// Skills Section
function SkillsSection() {
  return (
    <section id="skills" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">
              Skills & Technologies
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <CodeIcon className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.languages.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <LayoutIcon className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.frontend.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <ServerIcon className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.backend.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <BriefcaseIcon className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.tools.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Databases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <DatabaseIcon className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Databases</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.databases.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Platforms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <SmartphoneIcon className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Platforms</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.platforms.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Education Section
function EducationSection() {
  return (
    <section id="education" className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">
              Education
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <GraduationCapIcon className="h-10 w-10 text-primary mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">{portfolioData.education.degree}</h3>
                    <p className="text-muted-foreground">{portfolioData.education.school}</p>
                  </div>
                </div>
                <div className="flex flex-col md:items-end">
                  <Badge variant="outline" className="mb-2">
                    {portfolioData.education.period}
                  </Badge>
                  <Badge variant="default">
                    {portfolioData.education.location}
                  </Badge>
                </div>
              </div>
              <Separator className="my-6" />
              <div>
                <h4 className="font-semibold mb-3">Achievements & Activities</h4>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.education.highlights.map((highlight, index) => (
                    <Badge key={index} variant="secondary">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">
              Let's Connect
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MailIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">{portfolioData.contact.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <PhoneIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">{portfolioData.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPinIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground">{portfolioData.contact.location}</p>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="flex gap-4">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => window.open(portfolioData.contact.linkedin, '_blank')}
                >
                  <LinkedinIcon className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => window.open(portfolioData.contact.github, '_blank')}
                >
                  <GithubIcon className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button className="w-full">
                    Send Message
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl">
              Mohamed
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            <Button size="sm" onClick={() => scrollToSection('contact')}>
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Main Portfolio Component
function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <AppsSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </div>
  )
}

export default App
