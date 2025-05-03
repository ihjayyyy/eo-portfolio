import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import RevealOnScroll from '../RevealOnScroll';
import { Download } from 'lucide-react';

function Home() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center pt-20 pb-10 theme-transition ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
      <RevealOnScroll>
        <div className="max-w-4xl gap-2 mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left z-10 md:max-w-lg">
              <div className="md:hidden mb-6 flex justify-center ">
                <img 
                  src="/eo-portfolio/profile-pic.jpg" 
                  alt="Profile" 
                  className="rounded-xl h-64 w-64 shadow-xl"
                />
              </div>
              
              <div className="mb-3 flex items-center justify-center md:justify-start">
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-sky-500/20 text-sky-400' : 'bg-sky-100 text-sky-700'}`}>
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Available for work
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
                Hi, I'm Ejay Olivar
              </h1>

              <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm a full-stack developer who turns designs into intuitive interfaces with robust backend functionality, aiming to deliver high-performance solutions with great user experiences.      
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a 
                  href="/eo-portfolio/Resume.pdf" 
                  download 
                  className="filled-button"
                >
                  <Download size={18} />
                  Download CV
                </a>

                <a 
                  href="#projects" 
                  className={`outlined-button  
                    ${theme === 'dark' 
                        ? 'border-sky-500/50 hover:bg-sky-500/10 text-sky-500' 
                        : 'border-sky-600/50 hover:bg-sky-500/20 text-sky-600'}`}
                >
                  View Projects
                </a>
                
                <a 
                  href="#contact" 
                  className={`outlined-button  
                    ${theme === 'dark' 
                        ? 'border-sky-500/50 hover:bg-sky-500/10 text-sky-500' 
                        : 'border-sky-600/50 hover:bg-sky-500/20 text-sky-600'}`}
                >
                  Contact me
                </a>
              </div>
            </div>
          
          <div className={`hidden md:block rounded-xl hover:-translate-y-1 transition-all border ${theme === 'dark' ? 'border-white/10 hover:border-sky-500/30' : 'border-gray-300 hover:border-sky-500/80'}`}>
            <img 
              src="/eo-portfolio/profile-pic.jpg" 
              alt="Profile" 
              className="rounded-xl h-96 w-80 shadow-xl"
            />
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

export default Home