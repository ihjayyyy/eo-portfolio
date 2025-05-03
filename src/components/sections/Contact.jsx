import React, { useState } from 'react';
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import RevealOnScroll from '../RevealOnScroll';
import emailjs from 'emailjs-com'

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    subject:"",
    message:"",
  });
  
  const [notification, setNotification] = useState({
    show: false,
    type: '', // success or error
    message: ''
  });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();

    setNotification({
      show: true,
      type: 'loading',
      message: 'Sending your message...'
    });
    
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID, 
      import.meta.env.VITE_TEMPLATE_ID, 
      e.target, 
      import.meta.env.VITE_PUBLIC_KEY
    )
      .then((res) => {
        // Success notification
        setNotification({
          show: true,
          type: 'success',
          message: 'Message sent successfully! Thank you for reaching out.'
        });
        
        setFormData({name:'', subject:'', message:'', email:''});
        
        setTimeout(() => {
          setNotification(prev => ({...prev, show: false}));
        }, 5000);
      })
      .catch((error) => {
        setNotification({
          show: true,
          type: 'error',
          message: `Oops! Something went wrong. Please try again.`
        });
        
        setTimeout(() => {
          setNotification(prev => ({...prev, show: false}));
        }, 5000);
      });
  };
  
  const closeNotification = () => {
    setNotification(prev => ({...prev, show: false}));
  };

  return (
    <section id="contact" className={`min-h-screen relative flex flex-col items-center justify-center py-10 px-4 ${theme === 'dark' ? ' text-white' : ' text-gray-800'}`}>
      <RevealOnScroll>
        <div className="max-w-4xl px-4 w-screen mx-auto">
          <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-center text-transparent'>
            Get In Touch
          </h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            
            <div className={`card ${theme === 'dark' ? 'border-white/10 hover:border-sky-500/30' : 'border-gray-300 hover:border-sky-500/80'}`}>
              <h3 className='text-xl font-bold mb-2'>
                Connect With Me
              </h3>
              
              <div className="space-y-4 mt-4">
                <a 
                  href="https://www.linkedin.com/in/elbert-john-olivar-b073131b9/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex items-center p-4 rounded-xl transition-all hover:-translate-y-1 ${
                    theme === 'dark' 
                      ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/30' 
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-sky-500/80'
                  }`}
                >
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <div>
                    <span className={`font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>LinkedIn</span>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Elbert John Olivar</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/ihjayyyy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex items-center p-4 rounded-xl transition-all hover:-translate-y-1 ${
                    theme === 'dark' 
                      ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/30' 
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-sky-500/80'
                  }`}
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <div>
                    <span className={`font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>GitHub</span>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>ihjayyyy</p>
                  </div>
                </a>
            
                <a 
                  href="https://www.instagram.com/ihjayyy/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex items-center p-4 rounded-xl transition-all hover:-translate-y-1 ${
                    theme === 'dark' 
                      ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/30' 
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-sky-500/80'
                  }`}
                >
                  <svg className="w-6 h-6 text-pink-600 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  <div>
                    <span className={`font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Instagram</span>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>@ihjayyy</p>
                  </div>
                </a>

                <a 
                  href="https://www.facebook.com/Ihjayyyy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex items-center p-4 rounded-xl transition-all hover:-translate-y-1 ${
                    theme === 'dark' 
                      ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/30' 
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-sky-500/80'
                  }`}
                >
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <div>
                    <span className={`font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Facebook</span>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Ihjayyyy</p>
                  </div>
                </a>
                
                <div className="mt-4">
                  <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    📍 Location
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Manila, Philippines
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`card ${theme === 'dark' ? 'border-white/10 hover:border-sky-500/30' : 'border-gray-300 hover:border-sky-500/80'}`}>
              <h3 className='text-xl font-bold mb-2'>
                Send Me a Message
              </h3>
              
              <form className='space-y-4 mt-4' onSubmit={handleSubmit}>
                <div className="relative">
                  <label htmlFor="name" className={`block mb-2 font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    value={formData.name} 
                    placeholder="Your name..." 
                    onChange={(e)=>setFormData({...formData, name:e.target.value})}
                    className={`w-full rounded-xl px-4 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 border ${
                      theme === 'dark' 
                        ? 'bg-white/5 border-white/10 text-white hover:border-sky-500/30' 
                        : 'bg-black/5 text-black border-gray-300 hover:border-sky-500/80'
                    }`} 
                  />
                </div>
                
                <div className="relative">
                  <label htmlFor="email" className={`block mb-2 font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email} 
                    onChange={(e)=>setFormData({...formData, email:e.target.value})}
                    placeholder="example@gmail.com" 
                    className={`w-full rounded-xl px-4 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 border ${
                      theme === 'dark' 
                        ? 'bg-white/5 border-white/10 text-white hover:border-sky-500/30' 
                        : 'bg-black/5 text-black border-gray-300 hover:border-sky-500/80'
                    }`} 
                  />
                </div>

                <div className="relative">
                  <label htmlFor="subject"  className={`block mb-2 font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    placeholder="Subject..." 
                    required 
                    onChange={(e)=>setFormData({...formData, subject:e.target.value})}
                    className={`w-full rounded-xl px-4 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 border ${
                      theme === 'dark' 
                        ? 'bg-white/5 border-white/10 text-white hover:border-sky-500/30' 
                        : 'bg-black/5 text-black border-gray-300 hover:border-sky-500/80'
                    }`} 
                  />
                </div>

                <div className="relative">
                  <label htmlFor="message" className={`block mb-2 font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formData.message} 
                    placeholder="Your message..." 
                    required 
                    onChange={(e)=>setFormData({...formData, message:e.target.value})}
                    className={`w-full rounded-xl px-4 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 border ${
                      theme === 'dark' 
                        ? 'bg-white/5 border-white/10 text-white hover:border-sky-500/30' 
                        : 'bg-black/5 text-black border-gray-300 hover:border-sky-500/80'
                    }`} 
                  />
                </div>

                <button 
                  type="submit" 
                  className="filled-button w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      {notification.show && (
        <div 
          className={`fixed bottom-0 right-0 max-w-md transform transition-all duration-300 ease-in-out z-50 ${
            notification.show ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <div 
            className={`rounded-xl shadow-lg border px-6 py-4 flex items-center justify-between ${
              notification.type === 'success'
                ? `${theme === 'dark' ? 'bg-green-900/80 border-green-600' : 'bg-green-50 border-green-200'}`
                : notification.type === 'error'
                ? `${theme === 'dark' ? 'bg-red-900/80 border-red-600' : 'bg-red-50 border-red-200'}`
                : `${theme === 'dark' ? 'bg-blue-900/80 border-blue-600' : 'bg-blue-50 border-blue-200'}`
            }`}
          >
            <div className="flex items-center">
              {notification.type === 'success' && (
                <div className={`mr-3 p-2 rounded-full ${theme === 'dark' ? 'bg-green-800' : 'bg-green-100'}`}>
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
              
              {notification.type === 'error' && (
                <div className={`mr-3 p-2 rounded-full ${theme === 'dark' ? 'bg-red-800' : 'bg-red-100'}`}>
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
              
              {notification.type === 'loading' && (
                <div className={`mr-3 p-2 rounded-full ${theme === 'dark' ? 'bg-blue-800' : 'bg-blue-100'}`}>
                  <svg className="w-5 h-5 text-blue-500 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              )}
              
              <div>
                <p className={`font-medium ${
                  notification.type === 'success'
                    ? `${theme === 'dark' ? 'text-green-100' : 'text-green-800'}`
                    : notification.type === 'error'
                    ? `${theme === 'dark' ? 'text-red-100' : 'text-red-800'}`
                    : `${theme === 'dark' ? 'text-blue-100' : 'text-blue-800'}`
                }`}>
                  {notification.message}
                </p>
              </div>
            </div>
            
            <button 
              onClick={closeNotification}
              className={`ml-4 p-1 rounded-full ${
                notification.type === 'success'
                  ? `${theme === 'dark' ? 'hover:bg-green-800' : 'hover:bg-green-100'}`
                  : notification.type === 'error'
                  ? `${theme === 'dark' ? 'hover:bg-red-800' : 'hover:bg-red-100'}`
                  : `${theme === 'dark' ? 'hover:bg-blue-800' : 'hover:bg-blue-100'}`
              }`}
            >
              <svg className={`w-4 h-4 ${
                notification.type === 'success'
                  ? `${theme === 'dark' ? 'text-green-200' : 'text-green-500'}`
                  : notification.type === 'error'
                  ? `${theme === 'dark' ? 'text-red-200' : 'text-red-500'}`
                  : `${theme === 'dark' ? 'text-blue-200' : 'text-blue-500'}`
              }`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}