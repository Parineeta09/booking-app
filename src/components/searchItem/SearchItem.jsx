import { useNavigate } from "react-router-dom";
import "./searchItem.css";
import img1 from "../../images/taj lake.jpg";

const SearchItem = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/id",);
  };

  return (
    <div className="searchItem">
       <img
        src={img1}
        alt=""
        className="siImg"
      />
       <div className="siDesc">
        <h1 className="siTitle">Taj Lake Palace</h1>
        <span className="siDistance">200m from Ambrai Ghat</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          5 star resort with 10 room options
        </span>
        <span className="siFeatures">
        Located in the middle of the pristine Lake Pichola, regal accommodation and upscale amenities are offered. This island hotel has opulent suites with antique furnishing and spacious living rooms.
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Exceptional</span>
          <button>9.5</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">INR 40000</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={handleSearch}>See availability</button>
        </div>
        </div>
    </div>
  );
};
export default SearchItem;

