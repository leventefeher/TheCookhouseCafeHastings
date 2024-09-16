import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import "../App.css";
import { Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { Drinks } from "./Drinks";

import { Foods } from "./Foods";

export const Menu = () => {
  let { pathname } = useLocation();
  console.log(pathname);

  return (
    <content>
      <Tabs selectedKey={pathname}>
        <TabList aria-label="Tabs">
          <Tab id="/menu">
            <NavLink to="/menu">Drinks</NavLink>
          </Tab>
          <Tab id="/foods">
            <NavLink to="/menu/foods">Foods</NavLink>
          </Tab>
        </TabList>
        <TabPanel id={pathname}>
          <Routes>
            <Route path="/" element={<Drinks />} />
            <Route path="/foods" element={<Foods />} />
          </Routes>
        </TabPanel>
      </Tabs>
    </content>
  );
};
