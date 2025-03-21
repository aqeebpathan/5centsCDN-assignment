import React from "react";
import Theme from "./ThemeToggle";

const Header = () => {
  return (
    <header>
      <div className="flex justify-end">
        <Theme />
        {/* <Button>Logout</Button> */}
      </div>
    </header>
  );
};

export default Header;
