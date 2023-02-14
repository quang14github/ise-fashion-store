import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import Register from "./pages/Register/Register";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/login" element={<LogIn />} />
        <Route path="/account/register" element={<Register />} />
      </Routes>
    </Layout>
  );
};

export default App;
