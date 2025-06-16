"use client"

import { useEffect, useState } from "react"
import { Heart, Sparkles, Calendar, ChevronDown } from "lucide-react"

export default function AnniversaryPage() {
  const [showLanding, setShowLanding] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false)
      setTimeout(() => setIsVisible(true), 300)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  if (showLanding) {
    return <LandingAnimation />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100">
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <Sparkles className="w-3 h-3 text-pink-300" />
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div
          className={`text-center transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Anniversary Date */}
          <div className="flex items-center justify-center gap-2 mb-8 group">
            <Calendar className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-pink-600 font-light tracking-wider text-sm uppercase">Our Anniversary • 2024</span>
          </div>

          {/* Couple Names */}
          <h1 className="font-serif text-6xl md:text-8xl font-light text-gray-800 mb-12 tracking-tight">
            <span className="inline-block hover:scale-105 transition-transform duration-300">Alim</span>
            <span className="text-pink-400 mx-4 animate-pulse">&</span>
            <span className="inline-block hover:scale-105 transition-transform duration-300">Oyin</span>
          </h1>

          {/* Ring-styled Image Placeholders */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-16">
            {/* Alim's Ring */}
            <div className="relative group cursor-pointer">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-pink-200 to-rose-300 p-1 shadow-2xl ring-4 ring-pink-100 group-hover:ring-8 group-hover:ring-pink-200 transition-all duration-500 group-hover:scale-105">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden relative">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Alim"
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-100/20 to-transparent rounded-full"></div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
              <p className="mt-4 font-serif text-xl text-gray-700 group-hover:text-pink-600 transition-colors duration-300">
                Alim
              </p>
            </div>

            {/* Heart Connector */}
            <div className="flex items-center justify-center group cursor-pointer">
              <Heart
                className="w-8 h-8 text-pink-400 animate-pulse group-hover:scale-125 transition-transform duration-300"
                fill="currentColor"
              />
            </div>

            {/* Oyin's Ring */}
            <div className="relative group cursor-pointer">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-rose-200 to-pink-300 p-1 shadow-2xl ring-4 ring-rose-100 group-hover:ring-8 group-hover:ring-rose-200 transition-all duration-500 group-hover:scale-105">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden relative">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Oyin"
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-100/20 to-transparent rounded-full"></div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
              <p className="mt-4 font-serif text-xl text-gray-700 group-hover:text-rose-600 transition-colors duration-300">
                Oyin
              </p>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg font-light max-w-md mx-auto leading-relaxed hover:text-gray-800 transition-colors duration-300">
            Celebrating another year of love, laughter, and beautiful moments together
          </p>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-pink-400" />
          </div>
        </div>
      </section>

      {/* Memory Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-gray-800 mb-16 hover:text-pink-600 transition-colors duration-500">
            Our Journey
          </h2>

          <div className="space-y-16">
            {/* Timeline Item 1 */}
            <TimelineItem
              title="First Meeting"
              description="The moment our paths crossed and everything changed. A beautiful beginning to our story."
              imageSrc="/placeholder.svg?height=300&width=400"
              imageAlt="First Meeting"
              isLeft={true}
            />

            {/* Timeline Item 2 */}
            <TimelineItem
              title="Special Moments"
              description="All the little moments that made us who we are today. Each memory a treasure."
              imageSrc="/placeholder.svg?height=300&width=400"
              imageAlt="Special Moments"
              isLeft={false}
            />

            {/* Timeline Item 3 */}
            <TimelineItem
              title="Today & Beyond"
              description="Celebrating where we are now and looking forward to all the adventures yet to come."
              imageSrc="/placeholder.svg?height=300&width=400"
              imageAlt="Today & Beyond"
              isLeft={true}
            />
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 px-4 bg-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-gray-800 mb-16 hover:text-rose-600 transition-colors duration-500">
            Captured Moments
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer"
              >
                <div className="relative w-full h-full">
                  <img
                    src={`/placeholder.svg?height=250&width=250`}
                    alt={`Memory ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Heart className="w-8 h-8 text-white" fill="currentColor" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-4 group">
          <Heart
            className="w-4 h-4 text-pink-400 group-hover:scale-125 transition-transform duration-300"
            fill="currentColor"
          />
          <span className="text-gray-600 font-light group-hover:text-pink-600 transition-colors duration-300">
            Made with love
          </span>
          <Heart
            className="w-4 h-4 text-pink-400 group-hover:scale-125 transition-transform duration-300"
            fill="currentColor"
          />
        </div>
        <p className="text-gray-500 text-sm hover:text-gray-700 transition-colors duration-300">
          Happy Anniversary, Alim & Oyin
        </p>
      </footer>
    </div>
  )
}

// Simplified Landing Animation Component
function LandingAnimation() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 500)
    const timer2 = setTimeout(() => setPhase(2), 1500)
    const timer3 = setTimeout(() => setPhase(3), 2500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 flex items-center justify-center z-50">
      {/* Background Hearts */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <Heart className="w-4 h-4 text-pink-400" fill="currentColor" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center relative z-10">
        {/* Phase 1: Hearts */}
        <div className={`transition-all duration-1000 ${phase >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Heart className="w-12 h-12 text-pink-500 animate-pulse" fill="currentColor" />
            <Heart className="w-16 h-16 text-rose-500 animate-pulse" fill="currentColor" />
            <Heart className="w-12 h-12 text-pink-500 animate-pulse" fill="currentColor" />
          </div>
        </div>

        {/* Phase 2: Main Text */}
        <div
          className={`transition-all duration-1500 ${phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 mb-4">
            Happy Anniversary,
          </h1>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-500 to-rose-600">
            My Love
          </h2>
        </div>

        {/* Phase 3: Sparkles */}
        <div className={`transition-all duration-1000 ${phase >= 3 ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(8)].map((_, i) => (
              <Sparkles
                key={i}
                className="absolute w-6 h-6 text-yellow-400 animate-ping"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-80px)`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Simplified Timeline Item Component
function TimelineItem({
  title,
  description,
  imageSrc,
  imageAlt,
  isLeft,
}: {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  isLeft: boolean
}) {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 group ${!isLeft ? "md:flex-row-reverse" : ""}`}>
      <div className="w-full md:w-1/2">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100 group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 cursor-pointer">
          <h3 className="font-serif text-2xl text-gray-800 mb-3 group-hover:text-pink-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="aspect-video bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl shadow-lg overflow-hidden group-hover:shadow-2xl transition-all duration-500">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  )
}
