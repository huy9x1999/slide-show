import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ItemSlide from "../item/index";

import slideImage1 from "../../assets/slide1.jpg";
import slideImage2 from "../../assets/slide2.jpg";
import slideImage3 from "../../assets/slide3.jpg";
import slideImage4 from "../../assets/slide4.jpg";
import slideImage5 from "../../assets/slide5.jpg";
import slideImage6 from "../../assets/slide6.jpg";
import slideImage7 from "../../assets/slide7.jpg";
import slideImage8 from "../../assets/slide8.jpg";
import slideImage9 from "../../assets/slide9.jpg";
import { WrapSlides } from "./style";

const SliderShow = () => {
  const test = [
    { id: 1, image: slideImage1, content: ["item 1", "item 2", "item 3"] },
    { id: 2, image: slideImage2, content: ["item 1", "item 2", "item 3"] },
    { id: 3, image: slideImage3, content: ["item 1", "item 2", "item 3"] },
    { id: 4, image: slideImage4, content: ["item 1", "item 2", "item 3"] },
    { id: 5, image: slideImage5, content: ["item 1", "item 2", "item 3"] },
    { id: 6, image: slideImage6, content: ["item 1", "item 2", "item 3"] },
    { id: 7, image: slideImage7, content: ["item 1", "item 2", "item 3"] },
    { id: 8, image: slideImage8, content: ["item 1", "item 2", "item 3"] },
    { id: 9, image: slideImage9, content: ["item 1", "item 2", "item 3"] }
  ];

  const [slide, setSlide] = useState(0);

  const settings = {
    centerMode: true,
    dots: false,
    infinite: true,
    arrows: false,
    focusOnSelect: true,
    speed: 500,
    useTransform: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: "0",
    draggable: false,
    beforeChange: (idx, index) => {
      setSlide(index);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          draggable: true,
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <WrapSlides>
      <h2>Slide Show</h2>
      <Slider {...settings}>
        {test.map((item, idx) => (
          <ItemSlide
            key={item.id}
            item={item}
            index={idx}
            slidesLength={test.length}
            currentSlide={slide}
          />
        ))}
      </Slider>
    </WrapSlides>
  );
};

export default SliderShow;
