import React from 'react'

export default function NavBar() {
  const [open, setOpen] = React.useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Subjects', href: '#subjects' },
    { label: 'Ask AI', href: '#ask-ai' },
    { label: 'Visualize', href: '#visualize' },
    { label: 'About', href: '#how-it-works' },
  ]

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary-600 text-white font-bold">SB</div>
            <span className="text-lg font-semibold text-slate-900">Study Buddy</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-700 hover:text-primary-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#login" className="px-4 py-2 rounded-md border border-primary-600 text-primary-700 hover:bg-primary-50 transition">
              Login / Signup
            </a>
          </nav>
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-slate-700 hover:text-primary-600" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#login" className="px-4 py-2 rounded-md border border-primary-600 text-primary-700 text-center" onClick={() => setOpen(false)}>
                Login / Signup
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
