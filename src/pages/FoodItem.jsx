import React from "react";
import { useParams } from "react-router-dom";
import { Button, Heading, Flex } from "@chakra-ui/react";
import Error from "../components/Error";
import { useNavigate } from "react-router-dom";

const FoodItem = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const clickHandler = () =>{
    navigate('/')
  }

  const nums = [1, 23, 44, 30, 4, 3, 26, 7, 5, 8, 6, 88];
  const item = nums.find((num) => num === parseInt(id));
  if (item) {
    return (
      <Flex
        flexDirection={"column"}
        justifyContent={"ceneter"}
        alignItems={"center"}>
        Food {item}
        <Button onClick={clickHandler}>Back Home</Button>
      </Flex>
    );
  }
  return <Error />;
};

export default FoodItem;
