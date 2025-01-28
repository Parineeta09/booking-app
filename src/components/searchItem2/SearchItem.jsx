import "./searchItem2.css";
import { useNavigate } from "react-router-dom";
import img1 from "../../images/pal.jpg";

const SearchItem2 = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/id2",);
  };
  return (
    <div className="searchItem2">
       <img
        src={img1}
        alt=""
        className="siImg2"
      />
       <div className="siDesc2">
        <h1 className="siTitle2">The Pal Hotel</h1>
        <span className="siDistance2">750m from The Leh Palace</span>
        <span className="siTaxiOp2">Free airport taxi</span>
        <span className="siSubtitle2">
          Experience World-class Service
        </span>
        <span className="siFeatures2">
        Dine at the on-site multicuisine restaurant and enjoy high-tea on the terrace. This property is located on the Upper Tukcha Road near the main touristy area of Leh.
        </span>
        <span className="siCancelOp2">Free cancellation </span>
        <span className="siCancelOpSubtitle2">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails2">
        <div className="siRating2">
          <span>Excellent</span>
          <button>8.8</button>
        </div>
        <div className="siDetailTexts2">
          <span className="siPrice2">INR 3500</span>
          <span className="siTaxOp2">Includes taxes and fees</span>
          <button className="siCheckButton2" onClick={handleSearch}>See availability</button>
        </div>
        </div>
    </div>
  );
};

export default SearchItem2;