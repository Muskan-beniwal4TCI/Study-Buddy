import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import SubjectsGrid from './components/SubjectsGrid'
import AskAI from './components/AskAI'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <div id="home" className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <section id="subjects" className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">Explore Subjects</h2>
            <SubjectsGrid />
          </div>
        </section>
        <section id="ask-ai" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">Ask AI</h2>
            <AskAI />
          </div>
        </section>
        <section id="how-it-works" className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">How It Works</h2>
            <HowItWorks />
          </div>
        </section>
        <section id="testimonials" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">What Students Say</h2>
            <Testimonials />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

