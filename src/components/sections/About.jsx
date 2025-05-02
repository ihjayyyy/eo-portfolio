import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import RevealOnScroll from '../RevealOnScroll';

function About() {
  const { theme } = useContext(ThemeContext);
  const frontendSkills = [
    { 
      name: 'HTML5', 
      icon: <img src="/html5.png" alt="HTML5" className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'dark-icon' : ''}`} />
    },
    { 
      name: 'CSS3', 
      icon: <img src="/css3.png" alt="CSS3" className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'dark-icon' : ''}`} />
    },
    { 
      name: 'Ionic', 
      icon: <img src="/ionic.png" alt="Ionic" className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'dark-icon' : ''}`} />
    },
    { 
      name: 'Angular', 
      icon: <img src="/angular.png" alt="Angular" className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'dark-icon' : ''}`} />
    },
    { 
      name: 'JavaScript', 
      icon: <img src="/javascript.png" alt="JavaScript" className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'dark-icon' : ''}`} />
    },
    { 
      name: 'TypeScript', 
      icon: <img src="/typescript.png" alt="TypeScript" className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'dark-icon' : ''}`} />
    },
    { 
      name: 'React', 
      icon: <img src="/react.png" alt="React" className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'dark-icon' : ''}`} />
    },
    { 
      name: 'SASS', 
      icon: <img src="/sass.png" alt="SASS" className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'dark-icon' : ''}`} />
    },
    { 
      name: 'TailwindCSS', 
      icon: <img src="/tailwindcss.png" alt="TailwindCSS" className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'dark-icon' : ''}`} />
    }
  ];
  
  const backendSkills = [
    { 
      name: '.NET', 
      icon: <img src="/dotnet.png" alt=".NET" className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'dark-icon' : ''}`} />
    },
    { 
      name: 'SQL', 
      icon: <img src="/sql.png" alt="SQL" className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'dark-icon' : ''}`} />
    },
    { 
      name: 'C#', 
      icon: <img src="/csharp.png" alt="API Development" className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'dark-icon' : ''}`} />
    }
  ];
  
  const tools = [
    { 
      name: 'Git', 
      icon: <img src="/github.png" alt="Git" className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'dark-icon' : ''}`} />
    },
    { 
      name: 'VS Code', 
      icon: <img src="/vscode.png" alt="VS Code" className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'dark-icon' : ''}`} />
    },
    { 
      name: 'Visual Studio', 
      icon: <img src="/visualstudio.png" alt="Visual Studio" className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'dark-icon' : ''}`} />
    },
    { 
      name: 'Figma', 
      icon: <img src="/figma.png" alt="Figma" className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'dark-icon' : ''}`} />
    }
  ];
  
  return (
    <section id='about' className={`min-h-screen relative flex flex-col items-center justify-center py-10 px-4 theme-transition ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
      <RevealOnScroll>
        <div className='max-w-4xl mx-auto px-4'>
          <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-center text-transparent'>
            About Me
          </h2>
          
          <div className='grid md:grid-cols-2 gap-8 mb-8'>
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>My Journey</h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              I'm a full-stack developer driven by a passion for turning ideas into elegant, functional digital experiences. With hands-on experience in both front-end and back-end technologies, I thrive at the intersection of design and development, always exploring new tools and techniques to grow my craft.
              </p>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>My Approach</h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                I write clean, scalable code through thoughtful planning, iterative development, and rigorous testing. Whether collaborating with teams or working independently, I bring a problem-solving mindset, a keen eye for detail, and a strong commitment to building user-focused solutions.
              </p>            
              </div>
          </div>

          <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
            Essential Tool I use
          </h3>
          <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites and mobile applications.
          </p>
    
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
            <div className={`rounded-xl md:col-span-2 p-6 hover:-translate-y-1 transition-all border ${theme === 'dark' ? 'border-white/10 hover:border-sky-500/30 border' : 'border-gray-300 hover:border-sky-500/80 border'}`}>
              <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                Frontend
              </h3>
              <div className='flex flex-wrap gap-2'>
                {frontendSkills.map((tech, key) =>
                  <div key={key} className={`flex items-center px-3 py-2 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/30' 
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-sky-500/80'
                  }`}>
                      {tech.icon}
                      {tech.name}
                  </div>
                )}
              </div>
            </div>

            <div className={`rounded-xl p-6 hover:-translate-y-1 transition-all border ${theme === 'dark' ? 'border-white/10 hover:border-sky-500/30 border' : 'border-gray-300 hover:border-sky-500/80 border'}`}>
              <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                Backend
              </h3>
              <div className='flex flex-wrap gap-2'>
                {backendSkills.map((tech, key) =>
                  <div key={key} className={`flex items-center px-3 py-2 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/30' 
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-sky-500/80'
                  }`}>
                    {tech.icon}
                    {tech.name}
                  </div>
                )}
              </div>
            </div>
            
            <div className={`rounded-xl p-6 hover:-translate-y-1 transition-all border ${theme === 'dark' ? 'border-white/10 hover:border-sky-500/30 border' : 'border-gray-300 hover:border-sky-500/80 border'}`}>
              <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                Tools
              </h3>
              <div className='flex flex-wrap gap-2'>
                {tools.map((tech, key) =>
                  <div key={key} className={`flex items-center px-3 py-2 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/30' 
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-sky-500/80'
                  }`}>
                    {tech.icon}
                    {tech.name}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Rest of the component remains the same */}
          <div className='grid md:grid-cols-2 gap-8 mb-8'>
            <div className={`p-6 rounded-xl border hover:-translate-y-1 transition-all ${theme === 'dark' ? 'border-white/10 hover:border-sky-500/30 border' : 'border-gray-300 hover:border-sky-500/80 border'}`}>
              <h3 className='text-xl font-bold mb-4'>🎓 Education</h3>
              <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <div className="mb-4">
                  <h3 className='text-lg font-bold'>Tertiary (College/University):</h3>
                  <p className="font-semibold">Technological University of the Philippines-Manila</p>
                  <p>Bachelor of Science in Computer Science</p>
                  <p>(2019-2023)</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Cum Laude</li>
                  </ul>
                </div>
                <div>
                  <h3 className='text-lg font-bold'>Senior High School (SHS):</h3>
                  <p className="font-semibold">San Sebastian College- Recoletos de Cavite</p>
                  <p>Science, Technology, Engineering, and Mathematics</p>
                  <p>(2017-2019)</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Graduated with Honors</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-xl border hover:-translate-y-1 transition-all ${theme === 'dark' ? 'border-white/10 hover:border-sky-500/30 border' : 'border-gray-300 hover:border-sky-500/80 border'}`}>
              <h3 className='text-xl font-bold mb-4'>💼 Work Experience</h3>
              <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <div>
                  <h4 className='text-lg font-semibold'>Full Stack Web/Mobile Developer at ODR. Technology Inc. (Dec 2025 - Present)</h4>
                  <p>Developing Angular/Ionic apps with TypeScript, .NET backend services, and SQL Server database management.</p>
                </div>

                <div>
                  <h4 className='text-lg font-semibold'>Full Stack Web Developer at Systems and Software Consulting Group Inc (June 2024 - Dec 2024)</h4>
                  <p>Built web applications with Angular, TypeScript, .NET, and SQL Server for anti-money laundering systems and company projects.</p>
                </div>

                <div>
                  <h4 className='text-lg font-semibold'>Front End Developer at ODR. Technology Inc. (April 2023 - June 2024)</h4>
                  <p>Developed the I Am Magsaysay mobile app and web portal marketplace, plus UI/UX design for the YLO App.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`text-center p-6 rounded-xl border hover:-translate-y-1 transition-all ${theme === 'dark' ? 'border-white/10 hover:border-sky-500/30 border' : 'border-gray-300 hover:border-sky-500/80 border'}`}>
            <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>When I'm Not Coding</h3>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Outside of development, I enjoy going to the gym, playing computer games and playing billiards. I find that these activities help fuel my creativity and provide fresh perspectives that I bring back to my technical work.
            </p>
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

export default About