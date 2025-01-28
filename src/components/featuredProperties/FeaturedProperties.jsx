import "./featuredProperties.css";
import img1 from "../../images/rambagh.jpg";
import img2 from "../../images/taj.jpg";
import img3 from "../../images/radisson.jpeg";
import img4 from "../../images/oberoi.jpg";

const FeaturedProperties = () => {
  return (
    <div className="fp">
       <div className="fpItem">
        <img
          src={img1}
          alt=""
          className="fpImg"
        />
        <span className="fpName">The Rambagh Palace</span>
        <span className="fpCity">Jaipur</span>
        <span className="fpPrice">Starting from INR 38000</span>
        <div className="fpRating">
          <button>9.7</button>
          <span>Exceptional</span>
      </div>
      </div>
      <div className="fpItem">
        <img
          src={img2}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Taj Mahal Palace</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from INR 20000</span>
        <div className="fpRating">
          <button>9.5</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={img3}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Radisson Blu</span>
        <span className="fpCity">Delhi</span>
        <span className="fpPrice">Starting from INR 6000</span>
        <div className="fpRating">
          <button>8.6</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={img4}
          alt=""
          className="fpImg"
        />
        <span className="fpName">The Oberoi Udaivilas</span>
        <span className="fpCity">Udaipur</span>
        <span className="fpPrice">Starting from INR 25000</span>
        <div className="fpRating">
          <button>9.5</button>
          <span>Exceptional</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
