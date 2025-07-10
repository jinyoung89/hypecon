import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import './App.css'

// Import images
import heroImage from './assets/images/waterbomb-hero.jpg'
import blueCrowd from './assets/images/blue-crowd.jpg'
import waterCannons from './assets/images/water-cannons.png'
import neonStage from './assets/images/neon-green-stage.jpg'

// Import video (여기에 영상 파일명을 넣으세요)
import heroVideo from './assets/videos/hypecon.mp4'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 로딩 애니메이션
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // 스크롤 애니메이션
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const fadeElements = document.querySelectorAll('.fade-in')
    fadeElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [isLoading])

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (isLoading) {
    return (
      <div className="waterbomb-loading">
        <div className="waterbomb-loading-text">HYPECON</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-blue-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-400">HYPECON</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'schedule', 'tickets', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Tickets
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 text-center fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            HYPECON 2024
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            The ultimate water festival experience. Join thousands of music lovers for an unforgettable weekend of beats, water, and pure energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4">
              Get Your Tickets
            </Button>
            <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg px-8 py-4">
              Watch Trailer
            </Button>
          </div>
        </div>
      </section>

      {/* Info Boxes */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-black/50 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 fade-in">
              <CardHeader>
                <CardTitle className="text-blue-400">🎫 Early Bird Tickets</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Limited time offer! Get your tickets now before prices go up.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 fade-in">
              <CardHeader>
                <CardTitle className="text-blue-400">🔔 Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Get notified about lineup announcements and special offers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 fade-in">
              <CardHeader>
                <CardTitle className="text-blue-400">🎵 Join the Waitlist</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Be the first to know when registration opens for HYPECON 2024.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 fade-in">
              <CardHeader>
                <CardTitle className="text-blue-400">📧 Newsletter</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Subscribe for exclusive content, behind-the-scenes, and more.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">About HYPECON</h2>
              <p className="text-lg text-gray-300 mb-6">
                HYPECON is more than just a music festival - it's a celebration of life, energy, and pure joy. 
                Experience the perfect blend of electronic music, water activities, and unforgettable moments.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Join thousands of festival-goers for three days of non-stop entertainment, 
                featuring world-class DJs, immersive art installations, and the most epic water battles you've ever seen.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Learn More
              </Button>
            </div>
            <div className="fade-in">
              <img 
                src={blueCrowd} 
                alt="Festival crowd" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-400 fade-in">
            Festival Schedule
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-blue-500/20 fade-in">
              <CardHeader>
                <CardTitle className="text-blue-400">Day 1 - Opening</CardTitle>
                <CardDescription className="text-gray-300">Friday, July 15th</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Kick off the festival with explosive opening ceremonies, 
                  featuring special guest performances and the grand water cannon salute.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-blue-500/20 fade-in">
              <CardHeader>
                <CardTitle className="text-blue-400">Day 2 - Peak</CardTitle>
                <CardDescription className="text-gray-300">Saturday, July 16th</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  The main event featuring headlining acts, massive water battles, 
                  and the most intense energy of the entire festival.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-blue-500/20 fade-in">
              <CardHeader>
                <CardTitle className="text-blue-400">Day 3 - Closing</CardTitle>
                <CardDescription className="text-gray-300">Sunday, July 17th</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Epic closing ceremonies with special collaborations, 
                  final water battles, and unforgettable farewell moments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section id="tickets" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-400 fade-in">
            Get Your Tickets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-black/50 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 fade-in">
              <CardHeader>
                <CardTitle className="text-blue-400">Single Day</CardTitle>
                <CardDescription className="text-gray-300">Perfect for a taste of HYPECON</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-4">$89</div>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>✓ Access to all stages</li>
                  <li>✓ Water activities</li>
                  <li>✓ Food & drinks</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Buy Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 fade-in relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-blue-400">Weekend Pass</CardTitle>
                <CardDescription className="text-gray-300">Full festival experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-4">$199</div>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>✓ All 3 days access</li>
                  <li>✓ VIP water zones</li>
                  <li>✓ Exclusive merch</li>
                  <li>✓ Priority entry</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Buy Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 fade-in">
              <CardHeader>
                <CardTitle className="text-blue-400">VIP Experience</CardTitle>
                <CardDescription className="text-gray-300">Ultimate festival luxury</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-4">$399</div>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>✓ Premium viewing areas</li>
                  <li>✓ Exclusive lounges</li>
                  <li>✓ Meet & greet passes</li>
                  <li>✓ Luxury amenities</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">Stay Connected</h2>
            <p className="text-lg text-gray-300 mb-8">
              Follow us on social media for the latest updates, behind-the-scenes content, 
              and exclusive announcements about HYPECON 2024.
            </p>
            <div className="flex justify-center space-x-6">
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                Instagram
              </Button>
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                Twitter
              </Button>
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-blue-500/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 HYPECON. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

