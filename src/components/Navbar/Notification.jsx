import React from 'react';

import { FiGift } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { BsPersonCheckFill } from "react-icons/bs";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineVerified } from "react-icons/md";
import { TbRosetteDiscount } from "react-icons/tb";


const Notification = () => {
    return (
        <>
            <div className="relative w-96 bg-white left-[-292px] z-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-sm font-suse">
                {/* Heading */}
                <div className="  flex justify-between ">
                    <h1 className="px-5 font-suse text-lg font-semibold leading-[3]">Notifications</h1>
                    <div className="px-5 font-suse text-xs self-center font-semibold"> <span className="bg-cyan-200 text-cyan-500 px-2 rounded-sm ">5 Unread</span></div>
                </div>
                <hr />
                {/* body */}
                <div className="">

                    <div className="flex items-center ps-2  py-2 hover:bg-slate-50 "> 
                        <div className='bg-purple-200 p-3 rounded-full  text-purple-600'><FiGift  /></div>
                        <div className="flex  items-center  grow ">
                            <div className="grow px-2">
                                <div className="font-semibold">Your Order Has Been Shipped</div>
                                <div className="text-slate-400 text-sm">Order No: 123456 Has Shipped To Your Delivery Address</div>
                            </div>
                            <div className="p-3 text-gray-500"> <button><RxCross2 /></button> </div>
                        </div>
                       
                    </div>
                    <hr />
                    <div className="flex items-center ps-2  py-2 hover:bg-slate-50 "> 
                        <div className='bg-purple-200 p-3 rounded-full  text-purple-600'><TbRosetteDiscount  /></div>
                        <div className="flex  items-center  grow ">
                            <div className="grow px-2">
                                <div className="font-semibold">Your Order Has Been Shipped</div>
                                <div className="text-slate-400 text-sm">Order No: 123456 Has Shipped To Your Delivery Address</div>
                            </div>
                            <div className="p-3 text-gray-500"> <button><RxCross2 /></button> </div>
                        </div>
                       
                    </div>
                    <hr />
                    <div className="flex items-center ps-2  py-2 hover:bg-slate-50 "> 
                        <div className='bg-purple-200 p-3 rounded-full  text-purple-600'><BsPersonCheckFill  /></div>
                        <div className="flex  items-center  grow ">
                            <div className="grow px-2">
                                <div className="font-semibold">Your Order Has Been Shipped</div>
                                <div className="text-slate-400 text-sm">Order No: 123456 Has Shipped To Your Delivery Address</div>
                            </div>
                            <div className="p-3 text-gray-500"> <button><RxCross2 /></button> </div>
                        </div>
                       
                    </div>
                    
                    <hr />
                    <div className="flex items-center ps-2  py-2 hover:bg-slate-50 "> 
                        <div className='bg-purple-200 p-3 rounded-full  text-purple-600'><IoCheckmarkCircleOutline  /></div>
                        <div className="flex  items-center  grow ">
                            <div className="grow px-2">
                                <div className="font-semibold">Your Order Has Been Shipped</div>
                                <div className="text-slate-400 text-sm">Order No: 123456 Has Shipped To Your Delivery Address</div>
                            </div>
                            <div className="p-3 text-gray-500"> <button><RxCross2 /></button> </div>
                        </div>
                    </div>
                    {/* <hr />
                    <div className="flex items-center ps-2  py-2 hover:bg-slate-50 "> 
                        <div className='bg-purple-200 p-3 rounded-full  text-purple-600'><AiOutlineClockCircle  /></div>
                        <div className="flex  items-center  grow ">
                            <div className="grow px-2">
                                <div className="font-semibold">Your Order Has Been Shipped</div>
                                <div className="text-slate-400 text-sm">Order No: 123456 Has Shipped To Your Delivery Address</div>
                            </div>
                            <div className="p-3 text-gray-500"> <button><RxCross2 /></button> </div>
                        </div>
                    </div> */}
                   

                   


                </div>
                {/* button */}
                <hr />
                <div className="p-4 font-suse">
                    <button className="w-full bg-[#845adf] text-white p-1.5 rounded-sm hover:bg-violet-800 text-sm">View All</button>
                </div>
            </div >



        </>
    )
}

export default Notification;