import "./hotel4.css";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

import img1 from "../../images/swim.jpg";
import img2 from "../../images/rest.jpg";
import img3 from "../../images/sofa.jpg";
import img4 from "../../images/view.jpeg";
import img5 from "../../images/bath1.jpg";
import img6 from "../../images/lounge.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel4 = () => {
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
        <h1 className="hotelTitle">Jaipur Marriott Hotel</h1>
        <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Ashram Marg, Jaipur</span>
        </div>
        <span className="hotelDistance">
            Excellent location – located near to the International Airport of the city
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over INR 10800 at this property and get a free airport taxi
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
              Jaipur Marriott Hotel is located in the commercial area of Ashram Marg, a 6-minute drive from the International Airport of the city. 
              The premium 5-star hotel mixes tradition with modernity and offers a spa, free parking with electric vehicle charging station.
              Air-conditioned guestrooms are fitted with an tea/coffee making facilities and a flat-screen TV with satellite channels.
              The tour desk can assist guests with making travel arrangements. Laundry and dry cleaning services are offered.
              The property also boasts large banquet spaces to host a variety of events, especially for weddings in Jaipur.
              The restaurants in Jaipur Marriott hotel include Okra, an all-day dining global restaurant while Saffron serves contemporary Indian delights. 
              The hotel also has a pastry shop on site, Jaipur Baking Company where guests can enjoy from a selection of gourmet sandwiches, soups and salads and a variety of coffees. 
              Guest can unwind at its high-energy lounge bar 'Lounge 18'.
              Hotel Marriott Jaipur is 8 km from the Birla Temple and 10.5 km from the Jaipur Railway Station. 
              The architectural marvel of Hawa Mahal and City Palace are within 12 km from the property. 
              The Jawahar Circle is 250 metres from Jaipur Marriott Hotel.
              Guests looking to relax and recharge can indulge in the revitalizing services at the hotel's Quan Spa, where they will experience a true sense of rejuvenation.
              </p>
            </div>
            <div className="hotelDetailsPrice">
            <h1>Perfect for a 8-night stay!</h1>
              <span>
                Located in the real heart of Pink City, this property has an
                excellent location score of 9.2!
              </span>
              <h2>
                <b>INR 45000</b> (8 nights)
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

export default Hotel4;