import React from "react";
import { AiOutlineMenuFold } from "@react-icons/all-files/Ai/AiOutlineMenuFold";
import "../style/layout/navbar.scss";

interface Props {}
const Navbar = (props: Props): JSX.Element => {
  const onPress = (): void => {
    console.log("yooo");
  };

  return (
    <div onClick={onPress} className="menu">
      <AiOutlineMenuFold className="menu__icon" />
    </div>
  );
};

export default Navbar;
