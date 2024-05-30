import React, { useState } from 'react';
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styled from '@emotion/styled';

const StyledPopupContent = styled.div`
  width: 330px;
  border-radius: 20px;
  background-color: #FBEEE6;

  @media (max-width: 600px) {
    width: 200px; /* Adjust the width as needed */
  }
`;


function Card({ image, youtube, title, tags, description }) {


    return (
        <div className="max-w-sm rounded-3xl overflow-hidden  bg-white dark:bg-gray-800 h-[450px]">
            {<img className="w-full h-56 shadow-lg" src={image} alt={title} />}
            <div className="px-6 py-4 h-36">
                <div className="hover:text-orange-600 dark:hover:text-orange-600 font-bold text-2xl mb-2 text-gray-900 dark:text-white">{title}</div>
                <p className="hover:text-orange-600 dark:hover:text-orange-600 font-normal text-md mb-2 text-gray-900 dark:text-white">Tags: {tags}</p>
            </div>
            <div className='flex '>
                <Popup trigger={<button className="bg-orange-500 px-3 py-1 ml-4 rounded-full text-white font-bold hover:cursor-pointer hover:scale-105"> More</button>}
                    position="right center" contentStyle={{ borderRadius: '20px', backgroundColor: '#FBEEE6' }}>
                    <StyledPopupContent>
                        <div className='text-center font-bold font-2xl '>{title}</div>
                        <div className='text-sm opacity-70 font-serif'>{description}</div>
                    </StyledPopupContent>
                </Popup>
                <Link to={youtube} target="_blank" rel="noopener noreferrer" className="w-full mr-4 flex items-center justify-end font-bold">
                    <p className='hover:text-orange-600 dark:hover:text-orange-600 dark:text-white'>Click-{">"} </p>
                    <FaYoutube className='text-red-600 text-4xl w-14 hover:cursor-pointe hover:scale-110' />
                </Link>
            </div>
        </div>
    );
}

export default Card;



