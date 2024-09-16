// import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
// import { Nav } from "./Nav";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Menu } from "./pages/Menu";
import { NavBar } from "./components/NavBar/NavBar";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/*" element={<Home />} />
        {/* <Route path="/menu" element={<Menu />} /> */}
        {/* <Route path="/menu/*">
          <Route index element={<Menu />}></Route>
          <Route path="foods/*" element={<Menu />}></Route>
        </Route> */}
        <Route path="menu/*" element={<Menu />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
