import sneaker from "./assets/sneaker.png";
import "./styles.scss";
export const ProductCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={sneaker} alt="" className="card-img" />

        <div className="card-data">
          <h1 className="card-title">Nike Air Jordan</h1>
          <span className="card-preci">$99</span>
          <p className="card-description">
            Nike Air Jordan Footwear basketball sneakers.
          </p>
          <a href="#" className="card-button">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};
