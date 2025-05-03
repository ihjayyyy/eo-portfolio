import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import RevealOnScroll from '../RevealOnScroll';

function Projects() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <section id="projects" className={`relative min-h-screen flex items-center justify-center py-10 theme-transition ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-center text-transparent'>
            Featured Projects
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className={`p-6 rounded-xl border flex flex-col justify-around hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ${theme === 'dark' ? 'border-white/10 hover:border-sky-500/30 border' : 'border-gray-300 hover:border-sky-500/80 border'}`}>
              <h3 className='text-xl font-bold mb-2'>
                I Am Magsaysay
              </h3>

              <div className={`px-3 py-2 rounded-lg mt-3 mb-3 ${
                    theme === 'dark' 
                      ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/30' 
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-sky-500/80'
                  }`}
              >
                <span className={`font-semibold ${theme === 'dark' ? 'text-sky-300' : 'text-sky-600'}`}>
                  Role:
                </span> Lead Front End Developer, UI/UX Designer Support
              </div>

              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                A cross-platform mobile app available on iOS and Android that enables users to engage with the community, explore career opportunities, and access exclusive products and services.
              </p>

              <div className='flex flex-wrap gap-2 mb-4'>
                {["Ionic", "Figma", ".NET","SQL", "Node.js", "C#", "TypeScript", "SASS", "Angular"].map((tech, key) => (
                <span 
                  key={key} 
                  className={`py-1 px-3 rounded-full text-sm hover:shadow-md transition ${
                    theme === 'dark'
                      ? 'bg-sky-800/20 text-sky-300 hover:bg-sky-700/30 hover:text-sky-200'
                      : 'bg-sky-100 text-sky-600 hover:bg-sky-200 hover:text-sky-700'
                  }`}
                >
                  {tech}
                </span>
                ))}
              </div>

              <h3 className='text-lg font-bold mb-2'>
                View Project
              </h3>
              <div className='flex flex-wrap gap-3'>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.IAM.Magsaysay&pcampaignid=web_share" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='filled-button'
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 7.5l8-5 8 5M4 7.5v9l8 5M4 7.5l8 5M20 7.5v9l-8 5M20 7.5l-8 5"/>
                  </svg>
                  Android
                </a>
                <a 
                  href="https://apps.apple.com/ph/app/i-am-magsaysay/id6466820884" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='secondary-filled-button'
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/>
                    <path d="M10 2c1 .5 2 2 2 5"/>
                  </svg>
                  iOS
                </a>
              </div>
            </div>
            
            <div className={`p-6 rounded-xl border flex flex-col justify-around hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ${theme === 'dark' ? 'border-white/10 hover:border-sky-500/30 border' : 'border-gray-300 hover:border-sky-500/80 border'}`}>
              <h3 className='text-xl font-bold mb-2'>
                Integral 360
              </h3>

              <div className={`px-3 py-2 rounded-lg mt-3 mb-3 ${
                    theme === 'dark' 
                      ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/30' 
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-sky-500/80'
                  }`}
              >
                <span className={`font-semibold ${theme === 'dark' ? 'text-sky-300' : 'text-sky-600'}`}>
                  Role:
                </span> Full Stack Web Developer / System Maintainer
              </div>

              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                A web-based anti-money laundering (AML) system designed to ensure financial compliance by detecting and flagging suspicious transactions indicative of money laundering activities.
              </p>

              <div className='flex flex-wrap gap-2 mb-4'>
                {["MVC", ".NET", "C#", "CSS", "SQL", "Kendo"].map((tech, key) => (
                <span 
                  key={key} 
                  className={`py-1 px-3 rounded-full text-sm hover:shadow-md transition ${
                    theme === 'dark'
                      ? 'bg-sky-800/20 text-sky-300 hover:bg-sky-700/30 hover:text-sky-200'
                      : 'bg-sky-100 text-sky-600 hover:bg-sky-200 hover:text-sky-700'
                  }`}
                >
                  {tech}
                </span>
                ))}
              </div>

              <h3 className='text-lg font-bold mb-2'>
                View Project
              </h3>
              <div className='flex flex-wrap gap-3'>
                <a 
                  href="https://sysdevintegral360staging.sscgi.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='filled-button'
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <path d="M9 3v18"/>
                    <path d="M14 8v1"/>
                    <path d="M14 15v1"/>
                    <path d="M14 11v2"/>
                  </svg>
                  Visit Website
                </a>
              </div>
            </div>

            <div className={`p-6 rounded-xl border flex flex-col justify-around hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ${theme === 'dark' ? 'border-white/10 hover:border-sky-500/30 border' : 'border-gray-300 hover:border-sky-500/80 border'}`}>
              <h3 className='text-xl font-bold mb-2'>
                Client Success Portal
              </h3>

              <div className={`px-3 py-2 rounded-lg mt-3 mb-3 ${
                    theme === 'dark' 
                      ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/30' 
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-sky-500/80'
                  }`}
              >
                <span className={`font-semibold ${theme === 'dark' ? 'text-sky-300' : 'text-sky-600'}`}>
                  Role:
                </span> Lead Front End Developer, Backend Developer Support
              </div>

              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                The Client Success Portal is a web application for JLL Corporation that tracks client deals by status (new, in-progress, completed) and supports creating and updating transactions. The admin panel provides full CRUD functionality for users, roles, clients, sectors, templates, and reference data essential to deal management.
              </p>

              <div className='flex flex-wrap gap-2 mb-4'>
                {["Angular", "TypeScript", ".NET", "C#", "SASS", "Figma", "SQL"].map((tech, key) => (
                <span 
                  key={key} 
                  className={`py-1 px-3 rounded-full text-sm hover:shadow-md transition ${
                    theme === 'dark'
                      ? 'bg-sky-800/20 text-sky-300 hover:bg-sky-700/30 hover:text-sky-200'
                      : 'bg-sky-100 text-sky-600 hover:bg-sky-200 hover:text-sky-700'
                  }`}
                >
                  {tech}
                </span>
                ))}
              </div>


              <div className='flex items-center gap-2 text-sky-400'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                <span className='text-sm'>Ongoing Project</span>
              </div>
            </div>
            
            <div className={`card ${theme === 'dark' ? 'border-white/10 hover:border-sky-500/30 border' : 'border-gray-300 hover:border-sky-500/80 border'}`}>
              <h3 className='text-xl font-bold mb-2'>
                Zap Mobile App (EV Charging)
              </h3>

              <div className={`px-3 py-2 rounded-lg mt-3 mb-3 ${
                    theme === 'dark' 
                      ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/30' 
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-sky-500/80'
                  }`}
              >
                <span className={`font-semibold ${theme === 'dark' ? 'text-sky-300' : 'text-sky-600'}`}>
                  Role:
                </span> Lead Front End Developer, Backend Developer Support
              </div>

              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Zap Mobile App is a cross-platform EV charging solution that integrates Google Maps to help users locate nearby charging stations. The app allows users to adjust the search radius, apply filters, and purchase Zap tokens for use at selected stations. It also provides real-time monitoring of the charging progress for their electric vehicles.
              </p>

              <div className='flex flex-wrap gap-2 mb-4'>
                {["Angular","Ionic", "SQL", "TypeScript","C#", "SASS", ".NET"].map((tech, key) => (
                <span 
                  key={key} 
                  className={`py-1 px-3 rounded-full text-sm hover:shadow-md transition ${
                    theme === 'dark'
                      ? 'bg-sky-800/20 text-sky-300 hover:bg-sky-700/30 hover:text-sky-200'
                      : 'bg-sky-100 text-sky-600 hover:bg-sky-200 hover:text-sky-700'
                  }`}
                >
                  {tech}
                </span>
                ))}
              </div>


              <div className='flex items-center gap-2 text-sky-400'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                <span className='text-sm'>Ongoing Project</span>
              </div>
            </div>

            <div className={`card ${theme === 'dark' ? 'border-white/10 hover:border-sky-500/30 border' : 'border-gray-300 hover:border-sky-500/80 border'}`}>
              <h3 className='text-xl font-bold mb-2'>
                Systems and Software Consulting Group Inc. Website
              </h3>

              <div className={`px-3 py-2 rounded-lg mt-3 mb-3 ${
                    theme === 'dark' 
                      ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/30' 
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-sky-500/80'
                  }`}
              >
                <span className={`font-semibold ${theme === 'dark' ? 'text-sky-300' : 'text-sky-600'}`}>
                  Role:
                </span> Full Stack Developer, UI/UX Designer Support
              </div>

              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                This in-house project for the company's official website includes an admin panel for managing employees, roles, and activities, while the public site highlights career opportunities, events, achievements, and services offered.          
              </p>

              <div className='flex flex-wrap gap-2 mb-4'>
                {["Angular", "TypeScript", "Figma" , "C#", "CSS", ".NET", "SQL"].map((tech, key) => (
                <span 
                  key={key} 
                  className={`py-1 px-3 rounded-full text-sm hover:shadow-md transition ${
                    theme === 'dark'
                      ? 'bg-sky-800/20 text-sky-300 hover:bg-sky-700/30 hover:text-sky-200'
                      : 'bg-sky-100 text-sky-600 hover:bg-sky-200 hover:text-sky-700'
                  }`}
                >
                  {tech}
                </span>
                ))}
              </div>


              <div className='flex items-center gap-2 text-amber-400'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                </svg>
                <span className='text-sm'>Ongoing until departure</span>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <div className="absolute bottom-0 animate-bounce">
        <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Projects