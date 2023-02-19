import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import Register from "./pages/Register/Register";
import Account from "./pages/Account/Account";
import Cart from "./pages/Cart/Cart";
import Collection from "./pages/Collection/Collection";
const App = () => {
  return (
    <Router>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/collections" element={<Collection />}></Route>
        <Route path="/account/login" element={<LogIn />}></Route>
        <Route path="/account/register" element={<Register />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Layout>
  </Router>
  );
};

export default App;

