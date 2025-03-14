import React from "react";
// import index from "../index.css";
import logo from "../assests/Hero section.jpg"
const HeroSection=()=>{
    return(
        <>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[550px] w-screen ">
                <div className=" space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-20 md:py-0 md:px-0  md:items-start md:ml-20 w-full">
                    <h1 className=" text-4xl xl:text-5xl font-bold ">
                        Earn Extra Cash with Local Tasks
                    </h1>
                    <p className=" text-lg whitespace-nowrap">Connect with job opportunities in your neighborhood - flexible hours, fair pay
                    </p>
                    <div className="flex space-x-16 w-full">
                        <button className="primary-btn bg-white hover:bg-amber-800 hover:text-white duration-300 px-6 py-3 rounded-lg text-black border border-solid border-black w-40">Post Jobs</button>
                        <button className="primary-btn bg-white hover:bg-amber-800 hover:text-white duration-300 px-6 py-3 rounded-lg text-black border border-solid border-black w-40">Browse Jobs</button>
                    </div>
                </div>

                <div className="flex justify-center items-center md:ml-0 overflow-hidden">
                    <img src={logo} alt="People working" className="md:w-[90%] xl:w-[80%] w-full h-auto max-w-full rounded-xl shadow-2xl object-cover" />
                </div>
            </div>
        </div>
        <hr className="border-t-2 border-solid mt-10" />
        </>
    );
}

export default HeroSection;