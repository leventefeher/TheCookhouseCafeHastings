import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import "../App.css";
import { Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { Drinks } from "./Drinks";

import { Foods } from "./Foods";

export const Menu = () => {
  let { pathname } = useLocation();
  console.log(pathname);

  return (
    <div>
      <Tabs selectedKey={pathname}>
        <TabList aria-label="Tabs">
          <Tab id="/menu/drinks">
            <NavLink to="/menu/drinks">Drinks</NavLink>
          </Tab>
          <Tab id="/menu/foods">
            <NavLink to="/menu/foods">Foods</NavLink>
          </Tab>
        </TabList>
        <div className="menuContainer">
          <article className="menuContent">
            <TabPanel id={pathname}>
              <Routes>
                <Route path="/drinks" element={<Drinks />} />
                <Route path="/foods" element={<Foods />} />
              </Routes>
            </TabPanel>
          </article>
        </div>
      </Tabs>
    </div>
  );
};
