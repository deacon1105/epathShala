import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from "./Cards";
import { useEffect, useState } from 'react'

function FreeBook() {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/list.json')
      .then(res => res.json())
      .then(data => setList(data))
      .catch(err => {
        console.error('Failed to load list.json', err)
        setList([])
      })
      .finally(() => setLoading(false))
  }, [])

    const filterData = list.filter((data) => {
      // support both old 'price: 0' and 'category: "Free"' entries
      if (data == null) return false
      if (typeof data.price === 'number') return data.price === 0
      if (typeof data.category === 'string') return data.category.toLowerCase() === 'free'
      return false
    });

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
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
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-bold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>
       

        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Slider {...settings}>
              {filterData.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
           )} 
        </div>
         </div>
    </>
    
        
  )
}

export default FreeBook