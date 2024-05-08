import React from 'react';

function Nav() {
    return (
        <div className='sticky top-0 z-50 h-[8vh] flex justify-between items-center px-4 sm:gap-6'>
            <div className="left">
                <h1>ochi</h1>
            </div>
            <div className="right flex gap-10 items-center ">
                <div className="one flex gap-2 underline">
                    {["Services", "our work", "About us", "Insights"].map((item, index) => (
                        <h2 key={index}>{item}</h2>
                    ))}
                </div>
                <div className="two">
                    <h2>Contact us</h2>
                </div>
            </div>
        </div>
    );
}

export default Nav;
