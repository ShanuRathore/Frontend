import React, { useState, useEffect,useContext, useRef } from 'react';
import axios from 'axios';
import Cards from './Cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SearchContext from '../Context/searchcontext';

function MainBody() {

    const [recipes, setRecipes] = useState([]);
    const [searchdata,setSearchData]=useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [onerecipe, setOneRecipe] = useState(null);

    const showonbox = (recipe) => {
        setOneRecipe(recipe); // Set the clicked recipe as the selected recipe
    };

    const sliderRef = useRef(null); // Add a ref for the Slider component

    // Function to scroll to the slider section
    const scrollToSlider = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Call scrollToSlider whenever a search is performed
    useEffect(() => {
        if (searchdata.length !== 0) {
            scrollToSlider();
        }
    }, [searchdata]);

    const { term, setTerm } = useContext(SearchContext);
    console.log(term);

    // -------------------fetching data from api-------------------
    const fetchRecipes = async () => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=c`);
            setRecipes(response.data.meals);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };
    const fetchsearchRecipes = async () => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
            setSearchData(response.data.meals || []);
            console.log(searchdata);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecipes();
      }, []);
    
      useEffect(() => {
        if (term) {
            fetchsearchRecipes();
        }
      }, [term]);
    

    // -------------------rendering recipe details-------------------
    const renderRecipeDetails = (recipe) => {
        if (!recipe) return <p>Select a recipe to see details</p>;
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = recipe[`strIngredient${i}`];
            const measure = recipe[`strMeasure${i}`];
            if (ingredient) {
                ingredients.push(
                    <div key={i} className="mb-2">
                        <strong>{ingredient}</strong>: {measure}
                    </div>
                );
            }
        }
        return (
            <div>
                <div className="mb-2 bg-orange-200 dark:bg-slate-500 rounded-full text-center m-2 p-1">
                    <strong>Tags: </strong>
                    {recipe.strTags}
                </div>
                {ingredients}
            </div>
        );
    }

    // -------------------loading, error, no data-------------------
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
            </div>
        );
    }
    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-500 font-bold">Error: {error.message}</p>
            </div>
        );
    }
    if (!recipes || recipes.length === 0) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-gray-500 font-bold">No recipes found.</p>
            </div>
        );
    }

    // -------------------slick slider settings-------------------
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, borderRadius: "50%", background: "black" }}
                onClick={onClick}
            ></div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, borderRadius: "50%", background: "black" }}
                onClick={onClick}
            ></div>
        );
    }
    // -------------------slick slider settings-------------------

    var settings = {
        focusOnSelect: true,
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <div className='max-w-screen-2xl md:mb-0 mb-0 container mx-auto  bg-gradient-light dark:bg-gradient-dark h-auto'>
                <div className='flex md:flex-row flex-col md:p-10 md:pb-20   '>

                    {/* -------------------left side ------------------------*/}

                    <div className='md:w-2/3 md:flex md:flex-row  hidden flex-col '>
                        <div className='  rounded-2xl object-contain  md:h-[32rem] md:m-0 m-2 flex md:flex-row flex-col'>
                            {onerecipe ? (
                                <>
                                    <img src={onerecipe.strMealThumb} alt={onerecipe.strMeal} className='object-fill w-1/2 md:h-full  h-48  md:rounded-2xl ' />
                                    <div className='flex flex-col  dark:text-white rounded-xl md:w-96 w-full md:ml-2 p-5 bg-orange-100 dark:bg-slate-700 md:overflow-y-auto overflow-x-auto scrollbar scroll-smooth scrollbar-thumb-orange-100 scrollbar-track-transparent'>
                                        <h1 className='text-2xl font-serif font-bold text-center text-red-700 dark:text-red-500'>{onerecipe.strMeal}</h1>
                                        <div className='flex flex-row text-center items-center justify-center gap-4 mt-2'>
                                            <p className='rounded-full px-2 bg-orange-300 dark:text-black font-medium'>{onerecipe.strCategory}</p>
                                            <p className='rounded-full px-2 bg-orange-300 dark:text-black font-medium'>{onerecipe.strArea}</p>
                                        </div>
                                        <div className='mt-4'>
                                            {renderRecipeDetails(onerecipe)}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="flex justify-center items-center w-full">
                                    <div className="relative">
                                        <img className='w-full rounded-2xl shadow-md md:h-full h-56 object-cover dark:opacity-50 opacity-80  ' src="/cat.jpg" alt="" />
                                        <div className='absolute top-48 '>
                                            <p className='  tracking-tighter w-full text-center text-white text-7xl font-bold'>Select a recipe to see details</p>
                                            <p className='w-full  text-center text-black text-2xl font-bold bg-slate-300 bg-opacity-70 mt-4 rounded-full py-2'>Note:Select from the  list in right side </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/*------------------- right side ------------------------*/}

                    <div className='md:w-1/3 w-full md:ml-5 md:border rounded-2xl h-[32rem]   md:mt-0 mt-5 md:mb-0 mb-10 md:overflow-y-auto overflow-x-auto scrollbar scroll-smooth scrollbar-thumb-orange-100 scrollbar-track-transparent'>
                        <ul className="space-y-2 ">
                            {recipes.map((recipe) => (
                                <li key={recipe.idMeal}>
                                    <div onClick={() => showonbox(recipe)} className='flex m-1 h-32  rounded-xl dark:bg-slate-700'>
                                        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="h-full w-1/2 rounded-l-xl" />
                                        <div className=' m-1 p-1 w-full dark:text-white flex flex-col justify-center items-center gap-2'>
                                            <h2 className="text-xl text-center text-red-700 dark:text-red-500  font-semibold font-serif ">{recipe.strMeal}</h2>
                                            <div className='flex gap-2'>
                                                <p className=' rounded-full px-2 bg-orange-300 dark:text-black font-medium'>{recipe.strCategory}</p>
                                                <p className=' rounded-full px-2 bg-orange-300 dark:text-black font-medium'>{recipe.strArea}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                <div className='p-10 ' ref={sliderRef}>
                    <div></div>
                    <div className='w-full text-7xl font-bold dark:text-white text-center pb-10 underline'>{term}</div>
                    <Slider {...settings} className=''>
                        {searchdata.length!==0?searchdata.map((recipe) => (
                            <Cards
                                key={recipe.idMeal}
                                image={recipe.strMealThumb}
                                youtube={recipe.strYoutube}
                                title={recipe.strMeal}
                                tags={recipe.strTags}
                                description={recipe.strInstructions}
                            />  
                        ))
                        :recipes.map((recipe) => (
                            <Cards
                                key={recipe.idMeal}
                                image={recipe.strMealThumb}
                                youtube={recipe.strYoutube}
                                title={recipe.strMeal}
                                tags={recipe.strTags}
                                description={recipe.strInstructions}
                            />))  }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default MainBody
