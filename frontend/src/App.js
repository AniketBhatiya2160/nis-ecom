import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./style.css";
import VRegister from "./pages/VRegister";
import VLogin from "./pages/VLogin";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import Home from "./pages/Home";
import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/ProductScreen";
import MobileScreen from "./pages/Mobilescreen";
import LaptopScreen from "./pages/LaptopScreen";
import AccessoriesScreen from "./pages/AccessoriesScreen";
import "./index.css";
import Cartscreen from "./pages/Cartscreen";
import { Container } from "react-bootstrap";
import Buy from "./utils/Buy";

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route
              path="/vendor/Home"
              element={currentUser ? <Home /> : <VLogin />}
            />
            <Route
              path="/vendor/VRegister"
              element={!currentUser ? <VRegister /> : <Home />}
            />
            <Route
              path="/vendor/"
              element={!currentUser ? <VLogin /> : <Home />}
            />
            <Route
              path="/vendor/add"
              element={currentUser ? <Add /> : <VLogin />}
            />
            <Route
              path="/vendor/update/:id"
              element={currentUser ? <Update /> : <VLogin />}
            />
          </Routes>
          <div className="d-flex flex-column">
            <Container>
              <Routes>
                <Route path="/product/:p_id" element={<ProductScreen />} />
                <Route path="/" element={<HomeScreen />} />
                <Route path="/mobile" element={<MobileScreen />} />
                <Route path="/laptop" element={<LaptopScreen />} />
                <Route path="/accessories" element={<AccessoriesScreen />} />
                <Route path="/mycart" element={<Cartscreen />} />
                <Route path="/buy" element={<Buy />} />
              </Routes>
            </Container>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
