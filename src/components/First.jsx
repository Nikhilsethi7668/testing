import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRight, FaRegArrowAltCircleRight } from "react-icons/fa";

const First = () => {

    return (
        <div data-scroll data-scroll-speed='-.9' className="first ">
            <div className='font-bold h-[100vh] text-[18vh] sm:text-[18vh] leading-none flex flex-col justify-center ml-[5vw]'>
                <div className="first">
                    <h1>WE CREATE</h1>
                </div>

                <div className="second flex h-fit ">
                    <motion.div initial={{ width: 0 }} animate={{ width: "8vw" }} transition={{ ease: [0.76, 0, 0.24, 1] }} className="img w-[9vw] bg-red-800 rounded-md ">

                    </motion.div>
                    <h1>EYE-OPENING</h1>
                </div>
                <div className="third">
                    <h1>PRESENTATIONS</h1>
                </div>


            </div>
            <div className="line w-[100vw] bg-black h-[0.1vh] relative -top-[20vh]"></div>
            <div className="bottom relative -top-[18vh] flex justify-between items-center ">
                {["For Public and Private Companies", "From the First Pitch to IPO"].map((item, index) => (
                    <h6 className='sm:text-[2vh]'>{item}</h6>


                ))}
                <div className="right flex items-center  ">
                    <button className='border border-black rounded-full h-[5vh] mx-5 flex items-center justify-center p-5 hover:bg-black hover:text-white'>Start The Project</button>
                    <FaRegArrowAltCircleRight className='h-[8vh] w-[8vh] -rotate-45 hover:bg-gray-700  border rounded-full hover:text-white ' />
                </div>

            </div>
        </div>
    )
}

export default First
