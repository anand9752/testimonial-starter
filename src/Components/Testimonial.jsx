import React, { useEffect, useState } from 'react'
import Card from './Card'
import {FiChevronLeft ,  FiChevronRight} from 'react-icons/fi' ;

const Testimonial = (props) => {
  let review = props.reviews

  const[a , seta ] = useState(0);
  
  function increase(){
    if(a == review.length-1){
      seta(0)
    } else {
      seta(a+1)

    }
  }
  function decrease(){
    if(a == 0){
      seta(review.length-1)
    } else {
      seta(a-1)

    }


  }
  function supriseHandler(){

    let x =   Math.floor( (review.length-1)* Math.random())
    seta(x) 
  }


  return (
    <div className='w-[65vw] h -[70vh] md:[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-2xl'>
       
        <Card  review={review[a]}  />
        <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto mb-5'>
            <button className='cursor-pointer hover:text-violet-500 ' onClick={decrease}>
                <FiChevronLeft/>
            </button>
            <button className='cursor-pointer hover:text-violet-500 ' onClick={increase}>
            <FiChevronRight/>

            </button>
        </div>
        <div>
            <button className='bg-violet-500 hover:bg-violet-700 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg hover:shadow-xl ' onClick={supriseHandler}>
                Suprise Me
            </button>
        </div>
              
    
    </div>
  )
}

export default Testimonial
