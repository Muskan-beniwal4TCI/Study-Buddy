import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary-600 text-white font-bold">SB</div>
              <span className="text-lg font-semibold text-slate-900">Study Buddy</span>
            </div>
            <p className="mt-3 text-slate-600 text-sm max-w-sm">
              Learn faster with interactive explanations, animations, and 3D visualizations.
            </p>
          </div>
          <div className="flex gap-8">
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Links</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#how-it-works" className="text-slate-600 hover:text-primary-700">About</a></li>
                <li><a href="#" className="text-slate-600 hover:text-primary-700">Contact</a></li>
                <li><a href="#" className="text-slate-600 hover:text-primary-700">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-600 hover:text-primary-700">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Follow</h4>
              <div className="mt-3 flex gap-3">
                <a href="#" className="p-2 rounded-lg border border-slate-300 text-slate-600 hover:text-primary-700 hover:border-primary-300" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M13.5 9V7.125c0-.621.504-1.125 1.125-1.125H16.5V3h-1.875A3.375 3.375 0 0 0 11.25 6.375V9H9v3h2.25v9h3v-9H16.5l.75-3h-3.75Z"/></svg>
                </a>
                <a href="#" className="p-2 rounded-lg border border-slate-300 text-slate-600 hover:text-primary-700 hover:border-primary-300" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M7.5 3.75h9A3.75 3.75 0 0 1 20.25 7.5v9a3.75 3.75 0 0 1-3.75 3.75h-9A3.75 3.75 0 0 1 3.75 16.5v-9A3.75 3.75 0 0 1 7.5 3.75Zm0 3a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75h-9Zm9.75.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 8.25A3.75 3.75 0 1 1 8.25 12 3.75 3.75 0 0 1 12 8.25Z"/></svg>
                </a>
                <a href="#" className="p-2 rounded-lg border border-slate-300 text-slate-600 hover:text-primary-700 hover:border-primary-300" aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M3.9 7.2C4.4 5.6 5.6 4.7 7.3 4.6 9.9 4.5 12.6 4.5 15.2 4.6c1.7.1 2.9 1 3.4 2.6.2.8.3 1.8.3 3.4s-.1 2.6-.3 3.4c-.5 1.6-1.7 2.5-3.4 2.6-2.6.1-5.3.1-7.9 0-1.7-.1-2.9-1-3.4-2.6C3.7 13.2 3.6 12.2 3.6 10.6s.1-2.6.3-3.4ZM10 9l4.5 2.6L10 14.2V9Z"/></svg>
                </a>
                <a href="#" className="p-2 rounded-lg border border-slate-300 text-slate-600 hover:text-primary-700 hover:border-primary-300" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M6.75 3.75A2.25 2.25 0 1 1 4.5 6a2.25 2.25 0 0 1 2.25-2.25Zm-.75 5.25h3V20.25h-3V9Zm6 0h2.85v1.53h.04c.4-.72 1.38-1.77 3.16-1.77 3.38 0 4 2.22 4 5.1v6.15h-3v-5.46c0-1.3-.03-2.97-1.8-2.97-1.8 0-2.07 1.4-2.07 2.86v5.57h-3V9Z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
          <p>© {year} Study Buddy</p>
          <p>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
