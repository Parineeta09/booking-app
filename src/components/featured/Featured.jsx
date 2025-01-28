import "./featured.css";
import img1 from "../../images/jaipur.jpg";
import img2 from "../../images/mumbai.jpg";
import img3 from "../../images/udaipur.jpg";
import img4 from "../../images/varanasi.jpg";
import img5 from "../../images/leh.jpg";
import img6 from "../../images/delhi.jpg";


const Featured = () => {
  return (
    <div className="feature">
    <div className="featured">
       <div className="featuredItem">
        <img src={img1} 
             alt="" 
             className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Jaipur</h1>
          <h2>350 properties</h2>
        </div>
       </div>
       <div className="featuredItem">
        <img
          src={img2}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>500 properties</h2>
        </div>
        </div>
      <div className="featuredItem">
        <img
          src={img3}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Udaipur</h1>
          <h2>400 properties</h2>
        </div>
      </div>
      </div>
       
    
     <div className="featured">
       <div className="featuredItem">
        <img src={img4}
             alt="" 
             className="featuredImg"
        />
       <div className="featuredTitles">
           <h1>Varanasi</h1>
           <h2>200 properties</h2>
       </div>
       </div>
       <div className="featuredItem">
        <img
          src={img5}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Leh</h1>
          <h2>375 properties</h2>
        </div>
        </div>
       <div className="featuredItem">
        <img
          src={img6}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Delhi</h1>
          <h2>485 properties</h2>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Featured;
