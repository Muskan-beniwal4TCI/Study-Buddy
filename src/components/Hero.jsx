import React from 'react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Turn Tough Subjects into Visual Stories 🚀
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-700 max-w-2xl">
              Ask any question from Grade 6–12 and get instant answers, 3D models, and AI-powered animations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#ask-ai" className="inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-white font-medium shadow hover:bg-primary-700 transition">
                Ask a Question
              </a>
              <a href="#subjects" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-slate-700 font-medium hover:bg-slate-50 transition">
                Explore Visualizations
              </a>
            </div>
          </div>
          <div id="visualize" className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-slate-900 via-primary-700 to-primary-400 p-[2px] shadow-xl">
              <div className="h-full w-full rounded-2xl bg-white flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-11/12 h-5/6 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                          <path d="M11.7 2.042a.75.75 0 0 1 .6 0l8.25 3.75a.75.75 0 0 1 0 1.376l-8.25 3.75a.75.75 0 0 1-.6 0L3.45 7.168a.75.75 0 0 1 0-1.376l8.25-3.75Z"/>
                          <path d="M3 10.5a.75.75 0 0 1 1.05-.69l7.65 3.474a.75.75 0 0 0 .6 0l7.65-3.473A.75.75 0 0 1 21 10.5v6.75a.75.75 0 0 1-.45.69l-8.25 3.75a.75.75 0 0 1-.6 0L3.45 17.94A.75.75 0 0 1 3 17.25V10.5Z"/>
                        </svg>
                      </div>
                      <p className="text-slate-700 text-sm">Placeholder for 3D/animation preview</p>
                      <p className="text-slate-500 text-xs">Embed your canvas or image here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[120%] max-w-none" viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#9333ea" stopOpacity="0.2"/>
          </linearGradient>
        </defs>
        <path d="M0 100 C 150 150 350 50 600 100 C 850 150 1050 50 1200 100 L 1200 200 L 0 200 Z" fill="url(#g)"/>
      </svg>
    </section>
  )
}

