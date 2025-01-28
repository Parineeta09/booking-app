import "./searchItem3.css";
import { useNavigate } from "react-router-dom";
import img1 from "../../images/lalit.jpg";

const SearchItem3 = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/id3",);
  };
  return (
      <div className="searchItem3">
       <img
        src={img1}
        alt=""
        className="siImg3"
      />
       <div className="siDesc3">
        <h1 className="siTitle3">The Lalit Mumbai</h1>
        <span className="siDistance3">1.3km from Airport</span>
        <span className="siTaxiOp3">Free airport taxi</span>
        <span className="siSubtitle3">
          Stay in the heart of Mumbai
        </span>
        <span className="siFeatures3">
        This hotel offers a range of top-notch facilities to its guests, including a luxurious swimming pool, a relaxing Jacuzzi, a rejuvenating spa, a delectable restaurant, and personalized butler services.
        </span>
        <span className="siCancelOp3">Free cancellation </span>
        <span className="siCancelOpSubtitle3">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails3">
        <div className="siRating3">
          <span>Excellent</span>
          <button>8.8</button>
        </div>
        <div className="siDetailTexts3">
          <span className="siPrice3">INR 7600</span>
          <span className="siTaxOp3">Includes taxes and fees</span>
          <button className="siCheckButton3" onClick={handleSearch}>See availability</button>
        </div>
        </div>
    </div>
  );
};

export default SearchItem3;
