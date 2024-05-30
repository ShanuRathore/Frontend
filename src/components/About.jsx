import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="max-w-screen-2xl  container mx-auto mt-16 ">
        <div className=''>
          <img className='w-full shadow-md md:h-80 h-56 object-cover dark:opacity-60 opacity-50 ' src="/1.jpg" alt="" />
          <div className=" absolute md:top-40 w-full top-28 left-4 dark:text-red-500 text-red-600 text-center md:text-8xl text-4xl font-bold">
            About Us
          </div>
        </div>

        <div className='flex md:flex-row flex-col md:py-20 md:px-40  bg-gradient-light dark:bg-gradient-dark dark:text-white'>
          <img src="/about.jpg" alt="" className='md:w-80 p-2 md:p-0 md:h-64 md:rounded-lg rounded-2xl' />
          <div className='md:ml-10'>
            <h1 className='w-full text-2xl font-sans font-bold tracking-wider text-center md:text-left'>WHAT WE DO</h1>
            <p className='mt-2 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id odio reprehenderit vitae placeat exercitationem pariatur veniam, eligendi possimus, iste maiores unde sed magnam consectetur. Architecto minus deserunt corporis blanditiis.</p>
            <p className='text-sm mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore ratione exercitationem accusantium deserunt magnam molestias quisquam aliquid animi, eligendi veritatis ex nemo quas. Quos, dolore natus eaque magni suscipit explicabo quam tempore cupiditate error eligendi, voluptas voluptates amet dolorem maxime culpa aliquam id reprehenderit tenetur iste voluptatum exercitationem? Error, odit?</p>
            <img src="/signnn.png" alt="" className='p-2 h-20 text-white' />
          </div>
        </div>

        <div className='w-full flex flex-col md:pb-32 pb-10 bg-gradient-light dark:bg-gradient-dark dark:text-white ' >
          <div className='w-full flex flex-col md:px-80 justify-center text-center gap-2 text-md'>
            <h1 className='text-4xl font-sans font-semibold text-center tracking-wider'>OUR TEAM</h1>
            <p className='text-center md:px-2 md:mt-3 opacity-90'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi temporibus rerum error corrupti harum quidem, expedita eveniet quisquam dolorem iure.</p>
          </div>
          <div className='flex md:flex-row flex-col mt-14 gap-10  items-center justify-center'>
            <div>
              <img src="/team_member_1.png" alt="1" className='h-48 w-48 rounded-full shadow-xl border-2 border-slate-700 dark:border-white' />
              <h1 className='text-center text-xl font-semibold pt-2'>Rick Stein</h1>
              <p className='text-center opacity-80'>Head Chef</p>
              <div className='flex justify-center gap-4 pt-3'>
                <FaFacebook className='text-2xl opacity-85'/>
                <FaInstagram className='text-2xl opacity-85'/>
                <FaTwitter className='text-2xl opacity-85'/>
              </div>
            </div>
            <div>
              <img src="/team_member_2.png" alt="1" className='h-48 w-48  rounded-full shadow-xl border-2 border-slate-700 dark:border-white' />
              <h1 className='text-center text-xl font-semibold pt-2'>Wolfgang Puck's</h1>
              <p className='text-center opacity-80'>Sous Chef</p>
              <div className='flex justify-center gap-4 pt-3'>
                <FaFacebook className='text-2xl opacity-85'/>
                <FaInstagram className='text-2xl opacity-85'/>
                <FaTwitter className='text-2xl opacity-85'/>
              </div>
            </div>
            <div>
              <img src="/team_member_3.png" alt="1" className='h-48 w-48 rounded-full shadow-xl border-2 border-slate-700 dark:border-white' />
              <h1 className='text-center text-xl font-semibold pt-2'>Art Smith</h1>
              <p className='text-center opacity-80'>Pastry Chef</p>
              <div className='flex justify-center gap-4 pt-3'>
                <FaFacebook className='text-2xl opacity-85'/>
                <FaInstagram className='text-2xl opacity-85'/>
                <FaTwitter className='text-2xl opacity-85'/>
              </div>
            </div>
            <div>
              <img src="/team_member_4.png" alt="1" className='h-48 w-48 rounded-full shadow-xl border-2 border-slate-700 dark:border-white' />
              <h1 className='text-center text-xl font-semibold pt-2'>Matty Matheson</h1>
              <p className='text-center opacity-80'>Prep Cook</p>
              <div className='flex justify-center gap-4 pt-3'>
                <FaFacebook className='text-2xl opacity-85'/>
                <FaInstagram className='text-2xl opacity-85'/>
                <FaTwitter className='text-2xl opacity-85'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
