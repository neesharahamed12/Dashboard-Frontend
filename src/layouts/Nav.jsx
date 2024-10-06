import React, { useState, useEffect, useRef } from 'react';
import { VscListSelection } from "react-icons/vsc";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { TbSettings } from "react-icons/tb";
import ProfileImg from '../assets/profile_m.png';
import UsFlag from '../assets/us_flag.jpg';
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { PiSquaresFour } from "react-icons/pi";
import { BiBell } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineMoon } from "react-icons/ai";
import { MdOutlineLightMode } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import Flag from "../components/Navbar/Flag"
import Profile from "../components/Navbar/Profile"
import Menu from "../components/Navbar/Menu"
import Notification from "../components/Navbar/Notification"
import useOutsideClick from '../hooks/useOutsideClick';

const Nav = ({ toggleSidebar, isExpanded }) => {
    // Function to enter full screen mode
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isFlagDetailsVisible, setIsFlagDetailsVisible] = useState(false);
    const [isProfileDetailsVisible, setIsProfileDetailsVisible] = useState(false);
    const [isMenuDetailsVisible, setIsMenuDetailsVisible] = useState(false);
    const [isBellDetailsVisible, setIsBellDetailsVisible] = useState(false);
    const goFullScreen = () => {
        //    let Fullscreen =document.getElementById('fullScreen');
        //    Fullscreen.className('hidden');
        const elem = document.documentElement; // Fullscreen for entire page
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { // Firefox
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // IE/Edge
            elem.msRequestFullscreen();
        }
        setIsFullScreen(true);
    };
    // Function to exit full screen mode
    const exitFullScreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
        setIsFullScreen(false);
    };
    useEffect(() => {
        const handleFullScreenChange = () => {
            setIsFullScreen(!!document.fullscreenElement); // Update state based on fullscreen status
        };

        document.addEventListener('fullscreenchange', handleFullScreenChange);

        // Cleanup listener when the component is unmounted
        return () => {
            document.removeEventListener('fullscreenchange', handleFullScreenChange);
        };
    }, []);

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'true') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            if (newMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('darkMode', 'true');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('darkMode', 'false');
            }
            return newMode;
        });
    };
    // Flag hide if clicked outside
    const flagRef = useRef(null);
    const profileRef = useRef(null);
    const menuRef = useRef(null);
    const bellRef = useRef(null);
    const flagButtonRef = useRef(null);
    const profileButtonRef = useRef(null);
    const menuButtonRef = useRef(null);
    const bellButtonRef = useRef(null);
    useOutsideClick(flagRef, flagButtonRef, isFlagDetailsVisible, setIsFlagDetailsVisible);
    useOutsideClick(profileRef, profileButtonRef, isProfileDetailsVisible, setIsProfileDetailsVisible);
    useOutsideClick(menuRef, menuButtonRef, isMenuDetailsVisible, setIsMenuDetailsVisible);
    useOutsideClick(bellRef, bellButtonRef, isBellDetailsVisible, setIsBellDetailsVisible);

    return (
        <>
            {/* Navbar */}
            <nav className="w-full  bg-white " >
                <div className="px-6 h-[3.75rem] flex items-center justify-between bg-white">
                    {/* Hambarger icon */}
                    <div className=" ">
                        <button className="p-2 rounded-full hover:bg-slate-50 " onClick={toggleSidebar}>
                            {isExpanded && (
                                <HiBars3CenterLeft size={20} />
                            )}
                            {!isExpanded && (
                                <RxCross2 size={20} />
                            )}
                        </button>
                    </div>
                    {/* right  #374d6b */}


                    <div className="flex items-center  bg-white ">
                        {/* Serach icon   */}
                        <div className="px-2 "> <button className="p-2 rounded-full hover:bg-slate-50"><BiSearchAlt2 size={20} /> </button></div>
                        {/* Flag */}
                        <div className="px-2">
                            <div className="w-6 h-6  " >
                                <button className="size-full rounded-full hover:bg-slate-50" ref={flagButtonRef} onClick={() => setIsFlagDetailsVisible(!isFlagDetailsVisible)}>  <img className="size-full  rounded-full" src={UsFlag} alt="UsFlag" /></button>
                                {isFlagDetailsVisible && (
                                    <div ref={flagRef}>
                                        <Flag />
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Dark-light Mode */}
                        {isDarkMode && (
                            <div className="px-2 "><button className="p-2 rounded-full hover:bg-slate-50 " onClick={toggleDarkMode}><MdOutlineLightMode size={20} /></button> </div>
                        )}
                        {!isDarkMode && (
                            <div className="px-2 "><button className="p-2 rounded-full hover:bg-slate-50 " onClick={toggleDarkMode}><AiOutlineMoon size={20} /></button></div>
                        )}
                        {/* Cart */}
                        <div className="px-2 ">
                            <button className="p-2 rounded-full hover:bg-slate-50">    <FiShoppingCart size={20} />
                                <span className="absolute">
                                    <span className="inline-flex relative rounded-full w-4 h-4 bg-purple-800 top-[-36px] left-[4px] ">
                                        <span className="text-white text-[11px] relative top-[-1px] left-[4px]">4</span>
                                    </span>
                                </span>
                            </button>
                        </div>
                        {/* Notification Bells */}
                        <div className="px-2 ">

                            {/* <button>
                            <BiBell className='' size={20} />
                            <div>
                                <div className="size-24 bg-red-300 relative ">whtis</div>
                            </div>
                            </button> */}
                            
                          

                            <button className="p-2 rounded-full hover:bg-slate-50" ref={bellButtonRef} onClick={() => setIsBellDetailsVisible(!isBellDetailsVisible)}>
                                <BiBell className='' size={20} />
                                <span className="absolute">
                                    <span className="animate-ping relative inline-flex h-5 w-5 rounded-full bg-pink-400 opacity-75 top-[-32px] left-[1px]"></span>
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500 top-[-36px] left-[-18px] text-white text-sm">
                                        <span className='relative top-[-2px] left-[5px] text-[11px]'>5</span>
                                    </span>
                                </span>
                            </button>

                          
                            {isBellDetailsVisible && (
                                <div className="absolute"  ref={bellRef}>
                                    <Notification />
                                </div>
                            )}
                        </div>

                        {/* Menu */}
                        <div className="px-2  ">
                            <div className='size-9' >
                                <button className="p-2 rounded-full hover:bg-slate-50" ref={menuButtonRef} onClick={() => setIsMenuDetailsVisible(!isMenuDetailsVisible)}>
                                    <PiSquaresFour size={20} />
                                </button>
                                {isMenuDetailsVisible && (
                                    <div ref={menuRef}>
                                        <Menu />
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Full Screen & exit */}
                        {!isFullScreen && (
                            <div className="px-2 "> <button className="p-2 rounded-full hover:bg-slate-50" onClick={goFullScreen} ><MdFullscreen size={20} /></button> </div>
                        )}
                        {isFullScreen && (
                            <div className="px-2 "> <button className="p-2 rounded-full hover:bg-slate-50" onClick={exitFullScreen}><MdFullscreenExit size={20} /></button> </div>

                        )}
                        {/* Profile */}
                        <div className="px-2 flex">
                            <div className="w-10 h-10  bg-white-500" >
                                <button className=" rounded-full hover:bg-slate-50" ref={profileButtonRef} onClick={() => setIsProfileDetailsVisible(!isProfileDetailsVisible)}>
                                    <img className="size-full object-contain rounded-full" src={ProfileImg} alt="Profile" />
                                </button>
                                {isProfileDetailsVisible && (
                                    <div ref={profileRef}>
                                        <Profile />
                                    </div>
                                )}

                            </div>
                            <div className='flex flex-col text-xs leading-3 ml-3 font-semibold'>
                                <div className='text-sm font-bold text-gray-500'> Json Taylor </div>
                                <div className='text-gray-400'>Web Designer</div>

                            </div>
                        </div>
                        {/* Setting */}
                        <div className="px-2  ">
                            <button className="p-2 rounded-full hover:bg-slate-50">
                                <TbSettings className="animate-spin-slow hover:animate-none " size={20} />
                            </button>
                        </div>

                    </div>

                </div>
            </nav>
        </>
    )
}
export default Nav;