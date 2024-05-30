import React from 'react'
import { ReactTyped } from 'react-typed'

function TitleBody() {
    return (
        <>
            <div className="max-w-screen-2xl  container mx-auto mt-10">
                <div className="relative">
                    <img className='w-full shadow-md md:h-96 h-56 object-cover opacity-50  ' src="/foood.jpg" alt="" />
                    <div className=" absolute md:top-40 md:left-24 top-24 left-4 text-red-700 md:text-7xl text-4xl font-bold">

                        <ReactTyped
                            strings={[
                                "Welcome to Mom's Recipes ",
                                "Get your favourite recipes here",
                                "All the recipes you need are here",
                            ]}
                            typeSpeed={90}
                            backSpeed={40}
                            loop
                            loopCount={3}
                        />
                    </div>
                    <div className='md:absolute md:top-80 shadow-xl bg-black bg-opacity-50 p-4 w-full md:rounded-full'>
                        <ul className='flex md:flex-row flex-col justify-center items-center md:gap-10 font-bold text-white '>
                            <li className='hover:text-orange-400 hover:scale-105 cursor-pointer'>BREAKFAST & BRUNCH</li>
                            <li className='hover:text-orange-400 hover:scale-105 cursor-pointer'>LUNCH</li>
                            <li className='hover:text-orange-400 hover:scale-105 cursor-pointer'>DINNER</li>
                            <li className='hover:text-orange-400 hover:scale-105 cursor-pointer'>DESSERTS</li>
                            <li className='hover:text-orange-400 hover:scale-105 cursor-pointer'>MAIN DISHES</li>
                            <li className='hover:text-orange-400 hover:scale-105 cursor-pointer'>SIDE DISHES</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TitleBody
