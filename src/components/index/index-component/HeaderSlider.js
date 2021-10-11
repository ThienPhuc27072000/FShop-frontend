import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const photos = [
  {
    name: "Photo 1",
    url: "%PUBLIC%/images/slide-1-small.jpg",
    dataSrc: "%PUBLIC%/images/slide-1.jpg",
  },
  {
    name: "Photo 2",
    url: "%PUBLIC%/images/slide-2-small.jpg",
    dataSrc: "%PUBLIC%/images/slide-2.jpg",
  },
  {
    name: "Photo 3",
    url: "%PUBLIC%/images/slide-3-small.jpg",
    dataSrc: "%PUBLIC%/images/slide-3.jpg",
  },
  {
    name: "Photo 4",
    url: "%PUBLIC%/images/slide-4-small.jpg",
    dataSrc: "%PUBLIC%/images/slide-4.jpg",
  },
  {
    name: "Photo 5",
    url: "%PUBLIC%/images/slide-5-small.jpg",
    dataSrc: "%PUBLIC%/images/slide-5.jpg",
  },
]

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: '10px', zIndex: "1"}}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
}

const HeaderSlider = () => {
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
    return (
      <div style={{overFlow: "hidden", height: "70%"}}>
        <Slider {...settings}>       
          <img src={process.env.PUBLIC_URL + './images/slide-1.jpg'}/>
          <img src={process.env.PUBLIC_URL + './images/slide-2.jpg'}/>
          <img src={process.env.PUBLIC_URL + './images/slide-3.jpg'}/>
          <img src={process.env.PUBLIC_URL + './images/slide-4.jpg'}/>
          <img src={process.env.PUBLIC_URL + './images/slide-5.jpg'}/>     
        </Slider>
      </div>
    );
  
}

export default HeaderSlider;
