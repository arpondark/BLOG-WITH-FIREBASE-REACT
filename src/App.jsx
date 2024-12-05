import Header from "./Component/Header";
import Footer from "./Component/Footer";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <AllRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
