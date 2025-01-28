import "./searchItem4.css";
import { useNavigate } from "react-router-dom";
import img1 from "../../images/marriott.jpg";

const SearchItem4 = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/id4",);
  };
  return (
      <div className="searchItem4">
       <img
        src={img1}
        alt=""
        className="siImg4"
      />
       <div className="siDesc4">
        <h1 className="siTitle4">Jaipur Marriott Hotel</h1>
        <span className="siDistance4">6 minute drive from Airport</span>
        <span className="siTaxiOp4">Free airport taxi</span>
        <span className="siSubtitle4">
        Nestled in the vibrant heart of the Pink City.
        </span>
        <span className="siFeatures4">
        Stay at our hotel to enjoy easy access to nearby destinations like Jawahar Circle, the Pink City business district, City Palace and Hawa Mahal. Its dining outlets include the award-winning Okra.
        </span>
        <span className="siCancelOp4">Free cancellation </span>
        <span className="siCancelOpSubtitle4">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating4">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts4">
          <span className="siPrice4">INR 8400</span>
          <span className="siTaxOp4">Includes taxes and fees</span>
          <button className="siCheckButton4" onClick={handleSearch}>See availability</button>
        </div>
        </div>
    </div>
  );
};

export default SearchItem4;
