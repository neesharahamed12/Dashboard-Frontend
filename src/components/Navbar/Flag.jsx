import React from 'react';
import UsFlag from '../../assets/us_flag.jpg';

const Flag = () => {
    return (
        <>
            <div className="w-40 bg-white   shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-sm">
                <div className="grid  grid-cols-6 px-3 leading-10 items-center hover:bg-violet-50 hover:text-violet-500 ">
                    <div className="size-6 col-span-2"><img className="rounded-full size-full" src={UsFlag} alt="Us Flag" /></div>
                    <div className="col-span-3">English</div>
                </div>
                <div className="grid  grid-cols-6 px-3 leading-10 items-center hover:bg-violet-50 hover:text-violet-500">
                    <div className="size-6 col-span-2"><img className="rounded-full size-full" src={UsFlag} alt="Us Flag" /></div>
                    <div className="col-span-3">Spanish</div>
                </div>
                <div className="grid  grid-cols-6 px-3 leading-10 items-center hover:bg-violet-50 hover:text-violet-500">
                    <div className="size-6 col-span-2"><img className="rounded-full size-full" src={UsFlag} alt="Us Flag" /></div>
                    <div className="col-span-3">Hindi</div>
                </div>
                <div className="grid  grid-cols-6 px-3 leading-10 items-center hover:bg-violet-50 hover:text-violet-500">
                    <div className="size-6 col-span-2"><img className="rounded-full size-full" src={UsFlag} alt="Us Flag" /></div>
                    <div className="col-span-3">Italian</div>
                </div>
                <div className="grid  grid-cols-6 px-3 leading-10 items-center hover:bg-violet-50 hover:text-violet-500">
                    <div className="size-6 col-span-2"><img className="rounded-full size-full" src={UsFlag} alt="Us Flag" /></div>
                    <div className="col-span-3">German</div>
                </div>
                <div className="grid  grid-cols-6 px-3 leading-10 items-center hover:bg-violet-50 hover:text-violet-500">
                    <div className="size-6 col-span-2"><img className="rounded-full size-full" src={UsFlag} alt="Us Flag" /></div>
                    <div className="col-span-3">Russian</div>
                </div>
              
            </div>

        </>
    )
}

export default Flag;