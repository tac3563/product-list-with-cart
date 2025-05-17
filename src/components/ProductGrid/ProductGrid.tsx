import "./ProductGrid.scss";
import data from "../../data/data.ts";
import AddToCart from '../AddToCart/AddToCart.tsx';

export default function ProductGrid() {
  const updatedData = data.map((product) => ({
    ...product,
    image: {
      desktop: product.image.desktop.replace(".", "dist"),
      tablet: product.image.tablet.replace(".", "dist"),
      mobile: product.image.mobile.replace(".", "dist"),
      thumbnail: product.image.thumbnail.replace(".", "dist"),
    },
    price: product.price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    }),
  }));

  return (
    <section id="products-index" aria-labelledby="product index">
      <h1 className="product-grid-title">Desserts</h1>
      <div className="products-grid">
        {updatedData.map((product, index) => (
          <div key={index} className="product-card">
            <img
              className="product-image"
              src={`${product.image.desktop}`}
              srcSet={`${product.image.desktop} 1440w, ${product.image.tablet} 768w, ${product.image.mobile} 320w`}
              alt={product.name}
            />
            <AddToCart thumbnail={product.image.thumbnail} price={product.price} id={product.name} key={`${product.name}-button`}/>
            <p className="product-category">{product.category}</p>
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
