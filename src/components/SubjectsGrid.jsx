import React from 'react'

const subjects = [
  { name: 'Math', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm.75 4.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z"/>
    </svg>
  ) },
  { name: 'Physics', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M11.47 3.84a.75.75 0 0 1 1.06 0l7.63 7.62a.75.75 0 0 1 0 1.06l-7.63 7.64a.75.75 0 0 1-1.06 0L3.84 12.52a.75.75 0 0 1 0-1.06l7.63-7.62Z"/>
    </svg>
  ) },
  { name: 'Chemistry', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M9.75 3a.75.75 0 0 1 .75.75V9l6.62 8.27a2.25 2.25 0 0 1-1.77 3.73H6.65a2.25 2.25 0 0 1-1.77-3.73L11.5 9V3.75a.75.75 0 0 1 .75-.75h-2.5Z"/>
    </svg>
  ) },
  { name: 'Biology', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2.25a.75.75 0 0 1 .75.75v17.19l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Z"/>
    </svg>
  ) },
  { name: 'History', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 3.75a8.25 8.25 0 1 0 8.25 8.25A8.26 8.26 0 0 0 12 3.75Zm.75 4.5a.75.75 0 0 0-1.5 0V12c0 .2.08.39.22.53l3 3a.75.75 0 1 0 1.06-1.06l-2.78-2.78V8.25Z"/>
    </svg>
  ) },
  { name: 'Geography', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2.25a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 12 2.25Zm-3 6l2.25 1.5L12 12l1.5-1.5 3 2.25-1.5 3.75H9l-1.5-6Z"/>
    </svg>
  ) },
  { name: 'English', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M4.5 3.75A.75.75 0 0 0 3.75 4.5v15a.75.75 0 0 0 .75.75h10.5a.75.75 0 0 0 .75-.75V9.75L12 3.75H4.5Z"/>
    </svg>
  ) },
]

export default function SubjectsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
      {subjects.map((s) => (
        <a
          key={s.name}
          href="#"
          className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
        >
          <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center">
            {s.icon}
          </div>
          <span className="text-sm font-medium text-slate-800 group-hover:text-primary-700">{s.name}</span>
        </a>
      ))}
    </div>
  )
}

