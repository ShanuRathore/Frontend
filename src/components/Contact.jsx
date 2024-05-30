import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

function Contact() {

  const sendMessage = () => {
    const phoneNumber = '7807098594'; // Replace with the recipient's phone number
    const message = 'Hello, I have a question about the recipe.'; // Replace with your message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <div className='flex flex-row pt-16 bg-gradient-light dark:bg-gradient-dark dark:text-white'>

        {/*---------------------------- left------------------------------- */}
        <div className=' flex flex-col mt-10 items-center w-full '>
          <h1 className='md:text-6xl text-4xl font-bold md:items-start w-full md:pl-32 pl-24 md:pb-5 text-orange-600 dark:text-orange-400  '>Contact Us</h1>
          <div className='flex flex-col md:w-[450px] md:h-2/3 items-center  md:rounded-2xl md:bg-orange-100 md:dark:bg-slate-800 md:shadow-md shadow-slate-600  pb-10'>
            <div className='flex flex-col h-80 items-center'>
              <img src="/chef.png" alt="chef" className='h-32 w-32 mt-10 ' />
              <h1 className='text-center font-extrabold text-2xl text-orange-400 mt-4 '>Talk to the member of our team</h1>
              <p className='text-center mt-4 px-4 text-orange-500 dark:text-orange-200 font-thin'>We are always here to help you. If you have any questions or need help with your order, feel free to contact us.</p>
            </div>

            <button
              onClick={sendMessage}
              className='flex bg-orange-500 px-3 py-1 rounded-full text-lg font-bold w-36 mt-10 text-white hover:bg-green-600 hover:text-black'
            >
              Whatsapp <FaWhatsapp className='flex justify-center h-full ml-3' />
            </button>

          </div>
        </div>

        {/*---------------------------- right------------------------------- */}
        <div className='md:h-[700px] md:w-[900px] hidden md:block'>
          <div>
            <img src="/main.jpg" alt="" className='h-full w-full opacity-85 dark:opacity-70 shadow-inner ' />
            <div className='absolute top-32 right-48 text-6xl font-extrabold font-sans text-slate-200 space-y-5'>
              <h1 className=''>Be Happy</h1>
              <h1 className=''>Be True</h1>
              <h1 className=''>Be U .... :{")"}</h1>
            </div>
            <div className="absolute bottom-2 right-3 bg-orange-100 dark:bg-slate-800 w-[500px] text-black dark:text-white bg-opacity-80 p-2 rounded text-sm">
              <p><span className=' font-bold'>Address:</span> 1234 Street Name, City Name, Country Name</p>
              <p><span className=' font-bold'>Phone: </span>7807098594</p>
              <p><span className=' font-bold'>Email: </span>shanurathore004@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
