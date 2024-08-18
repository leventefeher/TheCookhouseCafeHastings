import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export const NavBar = () => {
  return (
    <div>
      <DesktopNavigation />
      <MobileNavigation />
    </div>
  );
};
