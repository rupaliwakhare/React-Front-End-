import AxiosProduct from "./AxiosProduct.jsx";
import FetchProduct from "./FetchProduct.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-6">Product Store</h1>

      {/* Axios Version */}
      <AxiosProduct />

      {/* Fetch Version (optional)
      <FetchProduct /> */}
    </div>
  );
}

export default App;
