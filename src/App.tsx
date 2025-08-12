import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
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
  PaletteIcon,
  SmartphoneIcon,
  MonitorIcon,
  DatabaseIcon,
  CloudIcon
} from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import profilePic from './assets/profilepic.jpeg'
import appIcon1 from './assets/appicon1.png'
import appIcon2 from './assets/appicon2.png'
import appIcon3 from './assets/appicon3.png'
import appIcon4 from './assets/appicon4.png'
import appIcon5 from './assets/appicon5.png'
import appIcon6 from './assets/appicon6.png'
import appIcon7 from './assets/appicon7.png'

// Glow component
const glowVariants = cva("absolute w-full", {
  variants: {
    variant: {
      top: "top-0",
      above: "-top-[128px]",
      bottom: "bottom-0",
      below: "-bottom-[128px]",
      center: "top-[50%]",
    },
  },
  defaultVariants: {
    variant: "top",
  },
})

const Glow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof glowVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(glowVariants({ variant }), className)}
    {...props}
  >
    <div
      className={cn(
        "absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/.5)_10%,_hsl(var(--primary)/0)_60%)] sm:h-[512px]",
        variant === "center" && "-translate-y-1/2",
      )}
    />
    <div
      className={cn(
        "absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/.3)_10%,_hsl(var(--primary)/0)_60%)] sm:h-[256px]",
        variant === "center" && "-translate-y-1/2",
      )}
    />
  </div>
))
Glow.displayName = "Glow"


// Sample data
const portfolioData = {
  hero: {
    name: "Alex Johnson",
    title: "iOS Developer & UI Designer",
    description: "Crafting beautiful, user-centered mobile experiences with Swift and modern design principles. Passionate about creating apps that make a difference.",
    image: profilePic,
    resumeUrl: "#"
  },
  apps: [
    {
      id: 1,
      name: "Budget Tracker",
      description: "Smart budgeting made simple",
      icon: appIcon1,
      appStoreUrl: "#"
    },
    {
      id: 2,
      name: "Fitness Coach",
      description: "Your personal workout companion",
      icon: appIcon2,
      appStoreUrl: "#"
    },
    {
      id: 3,
      name: "Recipe Finder",
      description: "Discover delicious recipes",
      icon: appIcon3,
      appStoreUrl: "#"
    },
    {
      id: 4,
      name: "Task Manager",
      description: "Organize your daily tasks",
      icon: appIcon4,
      appStoreUrl: "#"
    },
    {
      id: 5,
      name: "Weather Plus",
      description: "Beautiful weather forecasts",
      icon: appIcon5,
      appStoreUrl: "#"
    },
    {
      id: 6,
      name: "Music Player",
      description: "Enjoy your favorite tunes",
      icon: appIcon6,
      appStoreUrl: "#"
    },
    {
      id: 7,
      name: "Photo Editor",
      description: "Edit photos like a pro",
      icon: appIcon7,
      appStoreUrl: "#"
    }
  ],
  techStack: [
    { name: "Swift", icon: CodeIcon, category: "Language" },
    { name: "SwiftUI", icon: SmartphoneIcon, category: "Framework" },
    { name: "UIKit", icon: PaletteIcon, category: "Framework" },
    { name: "Xcode", icon: MonitorIcon, category: "Tool" },
    { name: "Core Data", icon: DatabaseIcon, category: "Database" },
    { name: "CloudKit", icon: CloudIcon, category: "Backend" },
    { name: "Figma", icon: PaletteIcon, category: "Design" },
    { name: "Git", icon: CodeIcon, category: "Version Control" }
  ],
  about: {
    bio: "With over 5 years of experience in iOS development, I specialize in creating intuitive and performant mobile applications. My journey began with a passion for design and evolved into a love for bringing digital experiences to life through code.",
    experience: "5+ Years",
    projects: "25+ Apps",
    clients: "Happy Users Worldwide"
  },
  contact: {
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "https://linkedin.com/in/alexjohnson",
    github: "https://github.com/alexjohnson"
  }
}

// Hero Section Component
function HeroSection() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <div className="relative w-32 h-32 mx-auto mb-6">
              <img
                src={portfolioData.hero.image}
                alt={portfolioData.hero.name}
                className="w-full h-full rounded-full object-cover border-4 border-primary/20"
              />
            </div>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {portfolioData.hero.name}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold mb-6">
              {portfolioData.hero.title}
            </h2>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {portfolioData.hero.description}
            </p>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-lg px-8 py-3 h-auto">
              <DownloadIcon className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 h-auto">
              <MailIcon className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Glow variant="center" className="opacity-30" />
      </div>
    </section>
  )
}

// App Showcase Section
function AppShowcaseSection() {
  return (
    <section id="apps" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            My iOS Apps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of iOS applications I've developed, each designed with user experience and functionality in mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {portfolioData.apps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:border-foreground/20 transition-all duration-300 group cursor-pointer">
                <div className="mb-4">
                  <img
                    src={app.icon}
                    alt={app.name}
                    className="w-16 h-16 mx-auto rounded-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold mb-2 text-sm">{app.name}</h3>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{app.description}</p>
                <Button size="sm" variant="ghost" className="text-xs h-8">
                  <ExternalLinkIcon className="mr-1 h-3 w-3" />
                  App Store
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Tech Stack Section
function TechStackSection() {
  return (
    <section id="tech" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Tech Stack & Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {portfolioData.techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:border-foreground/20 transition-all duration-300">
                <tech.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.category}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {portfolioData.about.bio}
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {portfolioData.about.experience}
                </div>
                <div className="text-sm text-muted-foreground">Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {portfolioData.about.projects}
                </div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">1M+</div>
                <div className="text-sm text-muted-foreground">{portfolioData.about.clients}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&h=400&fit=crop"
                alt="Workspace"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your iOS app idea to life? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
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
                <Button size="sm" variant="outline" className="flex-1">
                  <LinkedinIcon className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
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
                      className="w-full px-3 py-2 border border-border rounded-md bg-background"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-border rounded-md bg-background"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background resize-none"
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
      isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl">
            {portfolioData.hero.name.split(' ')[0]}
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Apps', 'Tech', 'About', 'Contact'].map((item) => (
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
    </nav>
  )
}

// Main Portfolio Component
function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AppShowcaseSection />
      <TechStackSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}

export default App
