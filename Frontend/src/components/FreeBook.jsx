import React, { useEffect, useState } from 'react'
import Cards from './Cards'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

export default function Freebook() {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch('/list.json')
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((err) => {
        console.error('Failed to load /list.json', err)
        setList([])
      })
  }, [])

  const filterData = (list || []).filter((data) => data && data.category === 'Free')

  const slidesToShowCount = Math.min(3, filterData.length || 1)

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShowCount,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>

        <div className="pb-12">
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}