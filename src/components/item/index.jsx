import React, { useEffect, useState } from "react";
import { SlideItem, WrapSlideItem } from "./style";

const ItemSlide = ({ currentSlide, index, slidesLength, item }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [currentSlide]);

  const className = () => {
    let className = "";
    if (currentSlide === 0) {
      if (index === currentSlide + 1 || index === slidesLength - 1) {
        className = "beside-center-slide";
      }
    } else if (currentSlide === slidesLength - 1) {
      if (index === 0 || index === currentSlide - 1) {
        className = "beside-center-slide";
      }
    } else {
      if (index + 1 === currentSlide || index - 1 === currentSlide) {
        className = "beside-center-slide";
      }
    }

    if (index === currentSlide) {
      className = `${className} center-slide`;
    }

    return className;
  };

  const handleOpen = () => {
    // console.log(index === currentSlide);
    index === currentSlide && setOpen(!open);
  };

  console.log(open);
  return (
    <WrapSlideItem>
      <SlideItem onClick={handleOpen} className={`${className()}`}>
        <img src={item.image} alt="" />
      </SlideItem>
      {open && (
        <div className="test">
          <h4>List</h4>
          <ul>
            {item.content.map((name, idx) => (
              <li key={idx}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </WrapSlideItem>
  );
};

export default ItemSlide;
