import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import img1 from "../../images/ent.jpeg";
import img2 from "../../images/terrace.jpg";
import img3 from "../../images/bathh.jpg";
import img4 from "../../images/bed.jpg";
import img5 from "../../images/bat.jpg";
import img6 from "../../images/hall.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
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
        <h1 className="hotelTitle">Taj Lake Palace</h1>
        <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Near Lake Pichola, Udaipur</span>
        </div>
        <span className="hotelDistance">
            Excellent location – located on an island in the middle of Lake Pichola
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over INR 30000 at this property and get a free airport taxi
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
              Royalty meets fairy tale at the Taj Lake Palace Udaipur, seemingly poised to grace the waters of Lake Pichola. 
              Here, every glance unveils breathtaking panoramas of the serene water expanse, rolling hills, and the splendid city of Udaipur. 
              Jag Niwas, a masterpiece conceived between 1743-1746 by Maharana Jagat Singh II, the illustrious 62nd custodian of the House of Mewar, once served as a summer haven for the Mewar Royal family.
              In 1963, under the discerning eye of Maharana is Maharana Bhagwat Singh Mewar of Udaipur, it was transformed into a heritage haven, reflecting the epitome of lavish living.
              Meticulously resurrected to its former glory, it mirrors the unwavering commitment to excellence that characterises the Taj Lake Palace, Udaipur.
              Indulge in this Mughal-inspired luxury hotel in Udaipur, which offers 65 luxurious rooms and 18 grand suites that have been meticulously restored to their original glory. 
              Stay in chambers adorned with troves of silk, velvet, priceless rugs, and objets d'art, once graced by royalty. 
              Set against an unmatched backdrop, our regal palace hotel in Udaipur hosts elegant dining experiences open only to our resident guests. 
              Sample authentic Rajasthani delicacies at Neel Kamal, savour European dishes at Bhairo or indulge in world cuisine at Jharokha. 
              Begin with signature cocktails at Amrit Sagar bar, then luxuriate at J Wellness Circle. Let our concierge arrange a tour of the city's iconic landmarks in a vintage car. 
              Udaipur's serene lakes, elaborate palaces and resplendent gardens await your discovery.
              </p>
            </div>
            <div className="hotelDetailsPrice">
            <h1>Perfect for a 7-night stay!</h1>
              <span>
                Located in the real heart of Udaipur, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>INR 60000</b> (7 nights)
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

export default Hotel;
