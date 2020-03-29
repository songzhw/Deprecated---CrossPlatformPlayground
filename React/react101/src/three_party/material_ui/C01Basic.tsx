import { Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";

interface IProps {
}

export const C01Basic = (props: IProps) => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  const clickMe = () => {
    console.log(`szw click me`);
  };

  const showPopup = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };

  const closePopup = () => {
    setAnchor(null);
  };

  return (
    <div>
      {/*variant有三种可选值: text(边框都没有), outlined(只有边框), container(实心)*/}
      <Button variant="contained" color="primary" onClick={clickMe}>Click Me</Button>

      {/*弹出菜单. (我测试过, 下面Button的两个aria属性不加也没问题*/}
      <Button variant="text" aria-controls="menu-nav" aria-haspopup="true" onClick={showPopup}>Navigation</Button>
      <Menu id="menu-nav" anchorEl={anchor} open={anchor ? anchor.textContent === "Navigation" : false}
            onClose={closePopup}>
        <MenuItem onClick={closePopup}>Settings</MenuItem>
        <MenuItem onClick={closePopup}>Profile</MenuItem>
        <MenuItem onClick={closePopup}>Home</MenuItem>
      </Menu>

      {/*弹出菜单 -- 选择菜单(即弹出popover menu时, 是会记忆并突出显示上一次选的内容的*/}
      <Button variant="outlined" aria-controls="menu-toc" aria-haspopup="true" onClick={showPopup}>TOC</Button>
      <Menu id="menu-toc" anchorEl={anchor} open={anchor ? anchor.textContent === "TOC" : false} onClose={closePopup}>
        <MenuItem onClick={closePopup}>Chapter1. Hello</MenuItem>
        <MenuItem onClick={closePopup}>Chapter2. Headache</MenuItem>
        <MenuItem onClick={closePopup}>Chapter3. New Home</MenuItem>
      </Menu>

    </div>
  );
};

