import React from "react"
import { VStack, Heading} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Home = () => {
    const location = useLocation();
    console.log(location);
    return (
        <VStack>
            <Heading>Home</Heading>
        <Link to={'/about'} style={{color: "red"}}>
            About
            </Link>
        </VStack>
    )
};

export default Home;