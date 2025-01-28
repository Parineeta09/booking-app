import "./hotel2.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

import img1 from "../../images/din.jpg";
import img2 from "../../images/ter.jpg";
import img3 from "../../images/mar.jpg";
import img4 from "../../images/bedd.jpg";
import img5 from "../../images/bath.jpg";
import img6 from "../../images/hal.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel2 = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {src: img1},
    {src: img2},
    {src: img3},
    {src: img4},
    {src: img5},
    {src: img6},
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
      {open && (
      <div className="slider">
      <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" 
              className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
      </div>
      )}
      <div className="hotelWrapper">
       <button className="bookNow">Reserve or Book Now!</button>
        <h1 className="hotelTitle">The Pal Hotel</h1>
        <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span> Upper Tukcha Rd, Leh</span>
        </div>
        <span className="hotelDistance">
            Excellent location – located near to the Leh Palace
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over INR 3200 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
              The Pal is located in the heart of Leh it’s one of the best luxury hotel in Leh. 
              Our luxurious 3-star hotel is located near to the Leh Palace and 100 metres away from the Leh main market and and 6KM away from the Leh airport, 
              making it the perfect base for exploring the city’s and many more attractions, getting to and from the hotel is a breeze. 
              Our staff are friendly and accommodating, and will do everything they can to ensure that you have a memorable stay. 
              Whether you need help with your luggage, recommendations for restaurants, or assistance with booking tours or transportation, our team is always happy to help.
              </p>
            </div>
            <div className="hotelDetailsPrice">
            <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Leh, this property has an
                excellent location score of 8.9!
              </span>
              <h2>
                <b>INR 15000</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
            </div>
      </div>
      <MailList />
      <Footer />
    </div>
    </div>
  );
};

export default Hotel2;