import "./hotel3.css";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

import img1 from "../../images/spa.jpg";
import img2 from "../../images/vieww.jpg";
import img3 from "../../images/roo.jpg";
import img4 from "../../images/sofaa.jpeg";
import img5 from "../../images/tub1.jpeg";
import img6 from "../../images/sof.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel3 = () => {
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
        <h1 className="hotelTitle">The Lalit Mumbai</h1>
        <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span> Sahar Airport Road, Mumbai</span>
        </div>
        <span className="hotelDistance">
            Excellent location – located near to the Mumbai airport
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over INR 8500 at this property and get a free airport taxi
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
              The Lalit Mumbai is located along Sahar Airport Road, about 1 km from Sahar International Airport. 
              The hotel offers an outdoor pool, flat-screen cable TVs and 6 dining options.
              The air-conditioned guestrooms are equipped with ironing facilities, a work desk and free coffee/tea facilities. A safety deposit box and minibar are provided.
              The hotel features a business centre, shopping gallery and fitness centre. Other facilities include a spa pool and massage services at the hotel’s spa.
              Indian and international cuisines are served at 24/7 Restaurant, Baluchi Restaurant and Trendz Restaurant. Other dining options include The Delicatessen Café, Beluga Bar and Kitty Su.
              The Lalit Mumbai is situated at the centre of Sahar business district and about 7 km from Powai Lake, a popular tourist attraction.
              </p>
            </div>
            <div className="hotelDetailsPrice">
            <h1>Perfect for a 5-night stay!</h1>
              <span>
                Located in the real heart of Dream City Mumbai, this property has an
                excellent location score of 8.5!
              </span>
              <h2>
                <b>INR 25000</b> (5 nights)
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

export default Hotel3;