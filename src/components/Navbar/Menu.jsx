import React from 'react';
import UsFlag from '../../assets/us_flag.jpg';
import Figma from '../../assets/figma.png';
import Sketch from '../../assets/sketch.png';
import Translate from '../../assets/translate.png';
import PowerPoint from '../../assets/powerpoint.png';
import Google from '../../assets/google.png';
import Sheet from '../../assets/sheets.png';
import Word from '../../assets/word.png';
import Docs from '../../assets/docs.png';
import Calender from '../../assets/calender.png';
import { FaHome } from "react-icons/fa";

const Menu = () => {
    return (
        <>
            <div className="relative w-80 bg-white left-[-292px] z-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-sm">
                {/* Heading */}
                <div className=" leading-[3] text-lg font-semibold">
                    <h1 className="px-5 font-suse">Related Apps</h1>
                </div>
                <hr />
                {/* body */}
                <div className="p-2  grid grid-cols-3 gap-2 text-sm text-gray-600 font-suse">
                    <div>
                        <a href="">
                            <div className=" border border-slate-200 rounded-md hover:bg-slate-50 text-center py-5 ">
                                <div className="text-center w-8 m-auto"><img className="m-auto" src={Figma} alt="icon" /></div>
                                <div className="pt-1">Figma </div>
                            </div>
                        </a>
                    </div>
                 
                    <div className=" border border-slate-200 rounded-md hover:bg-slate-50 text-center py-5 ">
                        <div className="text-center w-8 m-auto"><img className="m-auto" src={Translate} alt="icon" /></div>
                        <div className="pt-1">Translate </div>
                    </div>
                    
                    <div className=" border border-slate-200 rounded-md hover:bg-slate-50 text-center py-5 ">
                        <div className="text-center w-8 m-auto"><img className="m-auto" src={Sketch} alt="icon" /></div>
                        <div className="pt-1">Sketch </div>
                    </div>
                    <div className=" border border-slate-200 rounded-md hover:bg-slate-50 text-center py-5 ">
                        <div className="text-center w-8 m-auto"><img className="m-auto" src={PowerPoint} alt="icon" /></div>
                        <div className="pt-1">PowerPoint </div>
                    </div>
                    <div className=" border border-slate-200 rounded-md hover:bg-slate-50 text-center py-5 ">
                        <div className="text-center w-8 m-auto"><img className="m-auto" src={Google} alt="icon" /></div>
                        <div className="pt-1">Google </div>
                    </div>
                    <div className=" border border-slate-200 rounded-md hover:bg-slate-50 text-center py-5 ">
                        <div className="text-center w-8 m-auto"><img className="m-auto" src={Sheet} alt="icon" /></div>
                        <div className="pt-1">Sheet </div>
                    </div>
                    <div className=" border border-slate-200 rounded-md hover:bg-slate-50 text-center py-5 ">
                        <div className="text-center w-8 m-auto"><img className="m-auto" src={Docs} alt="icon" /></div>
                        <div className="pt-1">Docs </div>
                    </div>
                    <div className=" border border-slate-200 rounded-md hover:bg-slate-50 text-center py-5 ">
                        <div className="text-center w-8 m-auto"><img className="m-auto" src={Word} alt="icon" /></div>
                        <div className="pt-1">Word </div>
                    </div>
                    <div className=" border border-slate-200 rounded-md hover:bg-slate-50 text-center py-5 ">
                        <div className="text-center w-8 m-auto"><img className="m-auto" src={Calender} alt="icon" /></div>
                        <div className="pt-1">Calender </div>
                    </div>

                </div>
                {/* button */}
                <hr />
                <div className="p-4 font-suse">
                    <button className="w-full bg-[#845adf] text-white p-1.5 rounded-sm hover:bg-violet-800 text-sm">View All</button>
                </div>
            </div>

            {/* <div className="w-40 bg-white   shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-sm">
                <div className="grid  grid-cols-6 px-3 leading-10 items-center hover:bg-violet-50 hover:text-violet-500 ">
                    <span className=""><FaHome className="inline-block" size={20} /></span>
                    <span className="ml-2">Menu</span>
                </div>
            </div> */}

        </>
    )
}

export default Menu;