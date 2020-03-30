import { blue, green, orange, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Menu, MenuItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import "./mu.css";

interface IProps {
}

export const C01Basic = (props: IProps) => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const [selected, setSelected] = useState(1);

  const toc = [
    "Talbe Of Content",
    "Chapter 1. New House",
    "Chapter 2. Memory",
    "Chapter 3. Welcome Home"
  ];

  const clickMe = () => {
    console.log(`szw click me`);
  };

  const showPopup = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };

  const closePopup = () => {
    setAnchor(null);
  };

  const selectChapter = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setSelected(index);
    setAnchor(null);
  };

  const selectBottomMenu = (event: React.ChangeEvent<{}>, newValue: string) => {
    console.log(`szw value = ${newValue}`);
  };

  const goBack = () => {
    console.log(`szw go back`);
  };

  return (
    <div className="c01">

      <div>
        {/*variant有三种可选值: text(边框都没有), outlined(只有边框), container(实心)*/}
        <Button variant="contained" color="primary" onClick={clickMe}>Click Me</Button>
        <Button variant="contained" color="default" startIcon={<MenuBookIcon style={{ color: blue[500] }}/>}> open book </Button>
      </div>


      <BottomNavigation className="bottoms" onChange={selectBottomMenu}>
        <BottomNavigationAction icon={<ArrowBackIcon color="primary"/>} value="back" onClick={goBack}/>
        <BottomNavigationAction icon={<ArrowBackIosIcon color="secondary"/>} value="prev"/>
        <BottomNavigationAction icon={<ArrowForwardIosIcon color="disabled"/>} value="next"/>
        <BottomNavigationAction icon={<BookmarksIcon style={{ color: orange[500] }}/>} value="bookmark" onClick={showPopup} aria-controls="menu-nav" aria-haspopup="true">
          <Menu id="menu-nav" anchorEl={anchor} open={Boolean(anchor)}
                onClose={closePopup}>
            <MenuItem onClick={closePopup}>Settings</MenuItem>
            <MenuItem onClick={closePopup}>Profile</MenuItem>
            <MenuItem onClick={closePopup}>Home</MenuItem>
          </Menu>
        </BottomNavigationAction>
      </BottomNavigation>


    </div>
  );
};

