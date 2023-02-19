import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Collection from "./pages/Collection/Collection";
const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/collections" element={<Collection />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
