import ProductGrid from "./components/ProductGrid/ProductGrid.tsx";
import Cart from "./components/Cart/Cart.tsx";
import Layout from "./components/Layout/Layout.tsx";

function App() {
  return (
    <Layout>
      <ProductGrid />
      <Cart />
    </Layout>
  );
}

export default App;
