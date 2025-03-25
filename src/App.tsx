import ProductGrid from "./components/ProductGrid/ProductGrid.tsx";

function App() {

  return (
      <main id="main-content">
          <section aria-labelledby="product index">
              <ProductGrid/>
          </section>
          <aside aria-labelledby="cart">
              Cart
          </aside>
      </main>
  )
}

export default App
