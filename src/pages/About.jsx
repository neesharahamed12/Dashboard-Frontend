import React, { useState } from 'react';
import Sidebar from '../layouts/Sidebar'
import Nav from '../layouts/Nav'

const About = () => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

    // Function to toggle sidebar state
    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

        return (
            <>
            <div>
      
      
              <div className="flex min-h-screen bg-slate-100">
                {/* Sidebar with 25% width */}
                {/* <aside className="w-[18.5%] "> */}
                <aside className={`h-screen sticky top-0 overflow-y-auto no-scrollbar scrollbar-hide  bg-[#011F5B] transition-all duration-300 
                 ${ isSidebarExpanded ? 'w-[18.5%]' : 'w-16'}`}>
                  <Sidebar isExpanded={isSidebarExpanded} />
                </aside>
      
                {/* Main content with 75% width */}
                <div className="w-full bg-red-200">
                  {/* Navbar */}
                  <div className="bg-blue-500 h sticky top-0">
                    <Nav toggleSidebar={toggleSidebar} isExpanded={isSidebarExpanded} />
                  </div>
      
                  {/* Dashboard Body */}
                  <div className="p-4  overflow-y-auto">
                    <h1 className="text-xl font-bold">About Content</h1>
                    <p>Here is the main content of the dashboard.</p>
                    <div className="h-screen bg-white dark:bg-gray-800 text-black dark:text-white">
                      This text changes based on dark mode.
                    </div>
                    <div className="h-screen bg-white dark:bg-gray-800 text-black dark:text-white">
                      This text changes based on dark mode.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }

    export default About;