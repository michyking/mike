import React from "react";
import { Button, Heading, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useLocation, NavLink } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/michyking", title: "Michyking" },
  ];

  const renderLinks = navLinks.map((value, index) => {
    return (
      <NavLink
        to={value.path}
        key={index}
        // style={{ color: location.pathname === value.path ? "red" : "blue" }}
        style={({isActive})=>({
            color: isActive ? "red": "blue"
        })}
        // using external CSS 
        // className={({isActive})=> isActive? 'box': null}
      >
        {value.title}
      </NavLink>
    );
  });
  return (
    <Flex
      marginRight={"1rem"}
      justifyContent={"center"}
      gap={4}
      alignItems={"center"}
      width={"100%"}
    >
      {renderLinks}
    </Flex>
  );
};

export default Nav;
