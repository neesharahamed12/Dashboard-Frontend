import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import Logo from '../assets/logo2.png'
import Logoicon from '../assets/logo_icon.png'
import { FaHome } from "react-icons/fa";
import { RxDot } from "react-icons/rx";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";



const Sidebar = ({ isExpanded }) => {
    const [isDrop, setIsDrop] = useState(false);
    const [isPage, setIsPage] = useState(false);
    const [isTask, setIsTask] = useState(false);
    const [isForm, setIsForm] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isBlog, setIsBlog] = useState(false);
    const location = useLocation(); // Get the current location
    // Function to check if a route is active
    const isActive = (path) => location.pathname === path;
    useEffect(() => {
        if (location.pathname === '/') {
            toggleDropdown('dashboard')// Keep dropdown open
        }
        else if (location.pathname === '/about-us' || location.pathname === '/contact-us') {
            // setIsPage(true); // Keep dropdown open
            toggleDropdown('page')
        }
        else if (location.pathname === '/blog') {
            toggleDropdown('blog')
        }
    }, [location.pathname]);

    // 
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (dropdown) => {
        if (activeDropdown === dropdown) {
            setActiveDropdown(null); // Collapse if the same dropdown is clicked
        } else {
            setActiveDropdown(dropdown); // Set the active dropdown
        }
    };

    return (
        <div className='mb-32'>

            {isExpanded ? (
                // sidebar expande
                <div className="font-suse" >
                    <div className="sticky top-0 z-10   bg-[#011F5B]/70  backdrop-blur-md">
                        <div className="h-[3.75rem] flex items-center justify-center ">
                            <img className="size-full object-contain   " src={Logo} alt="" />
                        </div>
                        <hr className="border-[#ffffff1a]" />
                    </div>
                    {/* Container main */}
                    <div className="">
                        {/* main  */}
                        <div className="text-slate-300 m-4 ">
                            {/* Head and Menu-list  */}
                            <div className="">
                                {/* MASTER HEAD - MAIN */}
                                <div className="text-xs  text-slate-600 font-bold ml-3 mt-2 mb-2">MAIN</div>
                                {/* Menu- Dropdown & List  */}
                                <div className=''>
                                    {/* Heading - Dashboard */}
                                    <div className="ml-1 " >
                                        <button className={`w-full p-2 h-10 hover:bg-[#021c50] hover:text-white rounded-md `} onClick={() => toggleDropdown('dashboard')}>
                                            <div className="flex items-center  justify-between">
                                                <div className="col-span-3 felx items-center">
                                                    <FaHome className="inline-block " />
                                                    <span className='ml-3 relative top-0.5'>Dashboard</span>

                                                </div>
                                                <div className="">
                                                    {/* {(!isDrop) && (
                                                        <MdKeyboardArrowRight size={20} />
                                                    )}
                                                    {(isDrop) && (
                                                        <MdKeyboardArrowDown size={20} />
                                                    )} */}
                                                    {activeDropdown !== 'dashboard' ? (
                                                        <MdKeyboardArrowRight size={20} />
                                                    ) : (
                                                        <MdKeyboardArrowDown size={20} />
                                                    )}
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    {/* Dropdown List - Dashboard */}
                                    {activeDropdown === 'dashboard' && (
                                        <div className={`ms-5 transition-all duration-300 ease-in-out`}>
                                            <ul >
                                                <li className={`hover:bg-[#021c50] hover:text-white px-2 py-1.5 rounded-md ${isActive('/') ? 'bg-[#021c50] text-white' : ''}`}>
                                                    <Link to="/" className="">
                                                        <div className="flex items-center">
                                                            <div><RxDot /></div>
                                                            <div className="ml-2" >Home</div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className="hover:bg-[#021c50] hover:text-white px-2 py-1.5 rounded-md">
                                                    <Link to="/blog" className="">
                                                        <div className="flex items-center">
                                                            <div><RxDot /></div>
                                                            <div className="ml-2" >Drop 2</div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className="hover:bg-[#021c50] hover:text-white px-2 py-1.5 rounded-md">
                                                    <Link to="/about-us" className="">
                                                        <div className="flex items-center">
                                                            <div><RxDot /></div>
                                                            <div className="ml-2" >Drop 3</div>
                                                        </div>
                                                    </Link>
                                                </li>

                                            </ul>
                                        </div>
                                    )}

                                </div>
                                {/* MASTER HEAD - PAGES */}
                                <div className="text-xs  text-slate-600 font-bold ml-3 mt-4 mb-2">PAGES</div>
                                {/* Menu- Dropdown & List  */}
                                <div className=''>
                                    {/* Heading - Pages */}
                                    <div className="ml-1 " >
                                        <button className="w-full p-2 h-10 hover:bg-[#021c50] hover:text-white rounded-md " onClick={() => toggleDropdown('page')}>
                                            <div className="flex items-center  justify-between">
                                                <div className="col-span-3 felx items-center">
                                                    <FaHome className="inline-block " />
                                                    <span className='ml-3 relative top-0.5'>Pages</span>

                                                </div>
                                                <div className="">
                                                    {(activeDropdown === 'page' || activeDropdown === 'blog') ? (
                                                        <MdKeyboardArrowDown size={20} />
                                                    ) : (
                                                        <MdKeyboardArrowRight size={20} />
                                                    )}
                                                </div>
                                            </div>
                                        </button>
                                    </div>

                                    {/* Dropdown List - Pages */}
                                    {(activeDropdown === 'page' || activeDropdown === 'blog') && (
                                        <div className={`ms-5 transition-all duration-300 ease-in-out `}>
                                            <ul >
                                                <li className={`hover:bg-[#021c50] hover:text-white px-2 py-1.5 rounded-md ${isActive('/about-us') ? 'bg-[#021c50] text-white' : ''}`}>
                                                    <Link to="/about-us" className="">
                                                        <div className="flex items-center">
                                                            <div><RxDot /></div>
                                                            <div className="ml-2" >About us</div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className="">
                                                    <button className="hover:bg-[#021c50] hover:text-white px-2 py-1.5 rounded-md w-full" onClick={() => toggleDropdown('blog')}>

                                                        <div className="flex items-center  justify-between">
                                                            <div className=" felx items-center">
                                                                <RxDot className="inline-block " />
                                                                <span className='ml-3 '>Blog</span>

                                                            </div>
                                                            <div className="">
                                                                {activeDropdown !== 'blog' ? (
                                                                    <MdKeyboardArrowRight size={20} />
                                                                ) : (
                                                                    <MdKeyboardArrowDown size={20} />
                                                                )}
                                                            </div>
                                                        </div>

                                                    </button>
                                                    {/* Sub Dropdown List - Blog [Pages] */}
                                                    {activeDropdown === 'blog' && (
                                                        <div className={`ms-5 transition-all duration-300 ease-in-out `}>
                                                            <ul >
                                                                <li className="hover:bg-[#021c50] hover:text-white px-2 py-1 rounded-md">
                                                                    <Link to="/blogs" className="">
                                                                        <div className="flex items-center">
                                                                            <div><RxDot /></div>
                                                                            <div className="ml-2" >Blogs</div>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li className="hover:bg-[#021c50] hover:text-white px-2 py-1 rounded-md">
                                                                    <Link to="/about-us" className="">
                                                                        <div className="flex items-center">
                                                                            <div><RxDot /></div>
                                                                            <div className="ml-2" >Blog my</div>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li className="hover:bg-[#021c50] hover:text-white px-2 py-1 rounded-md">
                                                                    <Link to="/about-us" className="">
                                                                        <div className="flex items-center">
                                                                            <div><RxDot /></div>
                                                                            <div className="ml-2" >Blog india</div>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )}
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                {/* Menu  */}
                                <div className=''>
                                    {/* Heading - Widgets */}
                                    <div className="ml-1 " >
                                        <Link to="/widgets">
                                            <button className="w-full p-2 h-10 hover:bg-[#021c50] hover:text-white rounded-md " >
                                                <div className="flex items-center  justify-between">
                                                    <div className="col-span-3 felx items-center">
                                                        <FaHome className="inline-block " />
                                                        <span className='ml-3 relative top-0.5'>Widgets</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                                {/* Menu- Dropdown & List  */}
                                <div className=''>
                                    {/* Heading - Task */}
                                    <div className="ml-1 " >
                                        <button className="w-full p-2 h-10 hover:bg-[#021c50] hover:text-white rounded-md " onClick={() => toggleDropdown('task')}>
                                            <div className="flex items-center  justify-between">
                                                <div className="col-span-3 felx items-center">
                                                    <FaHome className="inline-block " />
                                                    <span className='ml-3 relative top-0.5'>Task</span>

                                                </div>
                                                <div className="">
                                                    {activeDropdown === 'task' ? (
                                                        <MdKeyboardArrowDown size={20} />
                                                    ) : (
                                                        <MdKeyboardArrowRight size={20} />
                                                    )}
                                                </div>
                                            </div>
                                        </button>
                                    </div>

                                    {/* Dropdown List - Task */}
                                    {activeDropdown === 'task' && (
                                        <div className={`ms-5 transition-all duration-300 ease-in-out`}>
                                            <ul >
                                                <li className="hover:bg-[#021c50] hover:text-white px-2 py-1.5 rounded-md">
                                                    <Link to="/about-us" className="">
                                                        <div className="flex items-center">
                                                            <div><RxDot /></div>
                                                            <div className="ml-2" >About us</div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className="hover:bg-[#021c50] hover:text-white px-2 py-1.5 rounded-md">
                                                    <Link to="/about-us" className="">
                                                        <div className="flex items-center">
                                                            <div><RxDot /></div>
                                                            <div className="ml-2" >About us</div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className="hover:bg-[#021c50] hover:text-white px-2 py-1.5 rounded-md">
                                                    <Link to="/about-us" className="">
                                                        <div className="flex items-center">
                                                            <div><RxDot /></div>
                                                            <div className="ml-2" >About us</div>
                                                        </div>
                                                    </Link>
                                                </li>

                                            </ul>
                                        </div>
                                    )}
                                </div>
                                {/* Menu- Dropdown & List  */}
                                <div className=''>
                                    {/* Heading - Form */}
                                    <div className="ml-1 " >
                                        <button className="w-full p-2 h-10 hover:bg-[#021c50] hover:text-white rounded-md " onClick={() => toggleDropdown('form')}>
                                            <div className="flex items-center  justify-between">
                                                <div className="col-span-3 felx items-center">
                                                    <FaHome className="inline-block " />
                                                    <span className='ml-3 relative top-0.5'>Form</span>

                                                </div>
                                                <div className="">
                                                    {(activeDropdown === 'form') ? (
                                                        <MdKeyboardArrowDown size={20} />
                                                    ) : (
                                                        <MdKeyboardArrowRight size={20} />
                                                    )}
                                                </div>
                                            </div>
                                        </button>
                                    </div>

                                    {/* Dropdown List - Task */}
                                    {activeDropdown === 'form' && (
                                        <div className={`ms-5 transition-all duration-300 ease-in-out `}>
                                            <ul >
                                                <li className="hover:bg-[#021c50] hover:text-white px-2 py-1.5 rounded-md">
                                                    <Link to="/about-us" className="">
                                                        <div className="flex items-center">
                                                            <div><RxDot /></div>
                                                            <div className="ml-2" >Input</div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className="hover:bg-[#021c50] hover:text-white px-2 py-1.5 rounded-md">
                                                    <Link to="/about-us" className="">
                                                        <div className="flex items-center">
                                                            <div><RxDot /></div>
                                                            <div className="ml-2" >Dropdown</div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className="hover:bg-[#021c50] hover:text-white px-2 py-1.5 rounded-md">
                                                    <Link to="/about-us" className="">
                                                        <div className="flex items-center">
                                                            <div><RxDot /></div>
                                                            <div className="ml-2" >Form</div>
                                                        </div>
                                                    </Link>
                                                </li>

                                            </ul>
                                        </div>
                                    )}
                                </div>
                                {/* Menu- Dropdown & List  */}
                                <div className=''>
                                    {/* Heading - Error */}
                                    <div className="ml-1 " >
                                        <button className="w-full p-2 h-10 hover:bg-[#021c50] hover:text-white rounded-md " onClick={() => { isError ? setIsError(false) : setIsError(true) }}>
                                            <div className="flex items-center  justify-between">
                                                <div className="col-span-3 felx items-center">
                                                    <FaHome className="inline-block " />
                                                    <span className='ml-3 relative top-0.5'>Error</span>

                                                </div>
                                                <div className="">
                                                    {(!isError) && (
                                                        <MdKeyboardArrowRight size={20} />
                                                    )}
                                                    {(isError) && (
                                                        <MdKeyboardArrowDown size={20} />
                                                    )}
                                                </div>
                                            </div>
                                        </button>
                                    </div>

                                    {/* Dropdown List - Error */}
                                    <div className={`ms-5 transition-all duration-300 ease-in-out ${isError ? '' : 'hidden'}`}>
                                        <ul >
                                            <li className="hover:bg-[#021c50] hover:text-white px-2 py-1.5 rounded-md">
                                                <Link to="/about-us" className="">
                                                    <div className="flex items-center">
                                                        <div><RxDot /></div>
                                                        <div className="ml-2" >About us</div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="hover:bg-[#021c50] hover:text-white px-2 py-1.5 rounded-md">
                                                <Link to="/about-us" className="">
                                                    <div className="flex items-center">
                                                        <div><RxDot /></div>
                                                        <div className="ml-2" >About us</div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="hover:bg-[#021c50] hover:text-white px-2 py-1.5 rounded-md">
                                                <Link to="/about-us" className="">
                                                    <div className="flex items-center">
                                                        <div><RxDot /></div>
                                                        <div className="ml-2" >About us</div>
                                                    </div>
                                                </Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>



                                {/* third */}



                            </div>

                        </div>
                    </div>


                </div>
            ) : (
                // sidebar collapse
                <div className="overflow-hidden" >
                    <div className="h-[3.75rem] flex items-center justify-center">
                        <img className="size-full object-contain  " src={Logoicon} alt="" />
                    </div>

                    <hr className="border-[#ffffff1a]" />
                    <div className="text-white mb-4">Dashboard2</div>
                </div>
            )
            }





        </div >
    );
};

export default Sidebar;