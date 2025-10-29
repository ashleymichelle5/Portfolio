mport React, { useState, useEffect } from 'react'

import menu_icon from '../assets/menu_icon.svg'
import cross_icon from '../assets/cross_icon.svg'

const Navbar = () => {
    const[showMobileMenu, setShowMobileMenu] = useState(false);
    
    // Debug: Ver el estado actual
    console.log('Mobile menu state:', showMobileMenu);
    
useEffect(() => {
    if(showMobileMenu) {
        document.body.style.overflow = 'hidden';
        console.log('menu abierto, scroll oculto');
    } else {
        document.body.style.overflow = 'auto';
        console.log('Menu cerrado, scroll habilitado');
    }
    return () => {
        document.body.style.overflow = 'auto';
    }
}, [showMobileMenu]);
    
  return (
    <div className='fixed top-0 left-0 right-0 z-50'>
      <div className='bg-gradient-to-b from-gray-900 via-gray-900/50 via-gray-900/95  to-transparent backdrop-blur-sm'>
        <div className='container mx-auto flex justify-between items-center py-6 px-6 md:px-20 lg:px-32'>
          
          {/* Logo con gradiente */}
          <div className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-bold text-2xl'>
            JL
          </div>
          
          {/* Menu centrado */}
          <ul className='hidden md:flex gap-10 text-gray-300 font-medium'>
            <a href="#Header" className='cursor-pointer hover:text-white transition-colors duration-300 relative after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full'>
              Home
            </a>
            <a href="#About" className='cursor-pointer hover:text-white transition-colors duration-300 relative after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full'>
              About
            </a>
            <a href="#Projects" className='cursor-pointer hover:text-white transition-colors duration-300 relative after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full'>
              Projects
            </a>
            <a href="#Testimonials" className='cursor-pointer hover:text-white transition-colors duration-300 relative after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full'>
              Testimonials
            </a>
          </ul>

          {/* Iconos sociales */}
          <div className='hidden md:flex gap-4'>
            <div className='w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300 cursor-pointer'>
              <span className='text-white text-sm'><a href="https://www.accessnjhomes.com/?aios_agent=joseph-lee-2"><svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg></a></span>
            </div>
            <div className='w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300 cursor-pointer'>
              <span className='text-white text-sm'><a href="https://instagram.com/joelee.realestate"><svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg></a></span>
            </div>
          </div>
          
          {/* Botón del Menú Móvil */}
          <img 
            onClick={()=>{
              console.log('Menu icon clicked, current state:', showMobileMenu);
              setShowMobileMenu(true);
            }} 
            src={menu_icon} 
            className='md:hidden w-7 cursor-pointer hover:opacity-70 transition-opacity' 
            alt="Menu" 
          />
        </div>
      </div>

      {/* Panel del Menú Móvil */}
      <div 
        className={showMobileMenu ? 
          'fixed inset-0 bg-gray-900 z-[9999] md:hidden' : 
          'hidden'
        }
      >
        <div className='flex justify-end p-6 cursor-pointer'>
          <img 
            onClick={()=>{
              console.log('Close icon clicked');
              setShowMobileMenu(false);
            }} 
            src={cross_icon} 
            className='w-6 text-white hover:opacity-70 transition-opacity' 
            alt="Close" 
          />
        </div>
        <ul className='flex flex-col items-center gap-6 mt-5 px-5 text-lg font-medium'>
          <a onClick={()=>setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block text-gray-300 hover:text-white transition-colors duration-300'>Home</a>
          <a onClick={()=>setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block text-gray-300 hover:text-white transition-colors duration-300'>About</a>
          <a onClick={()=>setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block text-gray-300 hover:text-white transition-colors duration-300'>Projects</a>
          <a onClick={()=>setShowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block text-gray-300 hover:text-white transition-colors duration-300'>Testimonials</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
