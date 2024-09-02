// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import { Nav } from "./Nav";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Menu } from "./pages/Menu";
import { NavBar } from "./components/NavBar/NavBar";
import { Layout } from "./components/Layout";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
