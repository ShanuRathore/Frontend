import React from 'react'
import { FaAmazon, FaGithub, FaInstagram, FaSkype, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";

function Footer() {
    return (
        <>
            <hr className='dark:border-slate-900 dark:opacity-50'/>
            <div className='max-w-screen-2xl md:mb-0 mb-0 container mx-auto  bg-gradient-light dark:bg-gradient-dark'>
                <footer className="right-10  flex flex-row md:gap-14 justify-end md:mr-28">
                <img src="/image.png" alt="" className='md:mr-20 md:h-72 md:w-72 h-44 w-44 animate-bounce ' />
                    <nav className='flex flex-col font-bold md:p-10 p-4'>
                        <h6 className="footer-title text-orange-400">Services</h6>
                        <a className="link link-hover  hover:text-red-600 dark:text-white dark:hover:text-red-600">Dinners</a>
                        <a className="link link-hover hover:text-red-600 dark:text-white dark:hover:text-red-600">Meals</a>
                        <a className="link link-hover hover:text-red-600 dark:text-white dark:hover:text-red-600">Occasions</a>
                        <a className="link link-hover hover:text-red-600 dark:text-white dark:hover:text-red-600">Cuisines</a>
                        <a className="link link-hover hover:text-red-600 dark:text-white dark:hover:text-red-600">News</a>
                        <a className="link link-hover hover:text-red-600 dark:text-white dark:hover:text-red-600">Features</a>
                    </nav>
                    <nav className='flex flex-col md:p-10 p-4'>
                        <h6 className="footer-title text-orange-400">Company</h6>
                        <a className="link link-hover dark:text-slate-300">About us</a>
                        <a className="link link-hover dark:text-slate-300">Contact</a>
                        <a className="link link-hover dark:text-slate-300">Jobs</a>
                        <a className="link link-hover dark:text-slate-300">Press kit</a>
                    </nav>
                    <nav className='md:flex flex-col md:p-10 p-4 md:visible hidden'>
                        <h6 className="footer-title text-orange-400">Legal</h6>
                        <a className="link link-hover dark:text-slate-300">Terms of use</a>
                        <a className="link link-hover dark:text-slate-300">Privacy policy</a>
                        <a className="link link-hover dark:text-slate-300">Cookie policy</a>
                    </nav>
                </footer>
                <footer className="footer px-10 py-4  text-base-content border-base-300">
                    <aside className="items-center grid-flow-col">
                        <TbToolsKitchen3 className='h-10 w-10 hover:text-orange-500 dark:text-slate-300 dark:hover:text-orange-500'/>
                        <p className='font-bold dark:text-slate-300'>Mom's Recipie <br />Providing best recipie since 2000</p>
                    </aside>
                    <nav className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4 items-center">
                            <FaAmazon className='h-8 w-8 hover:text-orange-500 dark:text-slate-300 dark:hover:text-orange-500'/>
                            <FaTelegramPlane className='h-8 w-8 hover:text-orange-500 dark:text-slate-300 dark:hover:text-orange-500'/>
                            <FaInstagram className='h-8 w-8 hover:text-orange-500 dark:text-slate-300 dark:hover:text-orange-500' />
                            <FaSkype className='h-8 w-8 hover:text-orange-500 dark:text-slate-300 dark:hover:text-orange-500'/>
                            <FaYoutube className='h-8 w-8 hover:text-orange-500 dark:text-slate-300 dark:hover:text-orange-500' />
                            <FaGithub className='h-8 w-8 hover:text-orange-500 dark:text-slate-300 dark:hover:text-orange-500'/>
                        </div>
                    </nav>
                </footer>
            </div>
        </>
    )
}

export default Footer
