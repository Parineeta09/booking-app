import "./propertyList.css";
import img1 from "../../images/hotel.jpg";
import img2 from "../../images/apartment.jpg";
import img3 from "../../images/resort.jpg";
import img4 from "../../images/villa.jpg";
import img5 from "../../images/cabin.jpg";


const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src={img1}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
        <h1>Hotels</h1>
        <h2>780 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={img2}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>750 Apartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={img3}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>460 Resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={img4}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>500 Villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={img5}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>200 Cabins</h2>
        </div>
      </div>
    </div>
  )
}

export default PropertyList
 