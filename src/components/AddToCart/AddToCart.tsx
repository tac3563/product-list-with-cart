import "./AddToCart.scss";
import addToCartIcon from "/src/assets/images/icon-add-to-cart.svg";

export default function AddToCart() {
  return (
    <div className="add-to-cart-button-wrapper">
      <button>
        <span>
          <img src={addToCartIcon} alt="cart icon" />
        </span>
        Add to Cart
      </button>
    </div>
  );
}
