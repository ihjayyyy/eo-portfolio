import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function LoadingScreen({ onComplete }) {
    const [text, setText] = useState("");
    const fullText = "<Ejay Olivar />";
    const { theme } = useContext(ThemeContext);
  
    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setText(fullText.substring(0, index));
        index++;
  
        if (index > fullText.length) {
          clearInterval(interval);
  
          setTimeout(() => {
            onComplete();
          }, 1000);
        }
      }, 100);
  
      return () => clearInterval(interval);
    }, [onComplete]);
  
    return (
      <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center theme-transition
        ${theme === 'dark' ? 'bg-black text-gray-100' : 'bg-white text-gray-800'}`}>
        <div className="mb-4 text-3xl md:text-4xl font-mono font-bold">
          {text} <span className="animate-blink ml-1"> | </span>
        </div>
  
        <div className={`w-[300px] md:w-[400px] h-[2px] rounded relative overflow-hidden 
          ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
          <div className="w-[50%] h-full bg-sky-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
        </div>
      </div>
    );
  };

export default LoadingScreen