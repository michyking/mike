import React, { useContext } from "react";
import {
  Button,
  Flex,
  FormControl,
  Input,
  Checkbox,
  Center,
  Text,
} from "@chakra-ui/react";
import { MichyContext } from "../context/FavContext";
import { useState } from "react";

const Home = () => {
  // const contextValue = useContext(MichyContext);

  const initialState = {
    username: "",
    fullName: "",
    school: "",
    age: "",
    password: "",
    isMarried: false,
  };

  const [user, setUser] = useState(initialState);

  const inputHandler = (event) => {
    const { name, value, valueAsNumber, type, checked} = event.target;

    setUser((prev) => ({
      ...prev,
      [name]: name === "age" ? valueAsNumber : type === "checkbox" ? checked :value,
    }));
  };

  return (
    <Flex
      minHeight={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={3}>
      <FormControl>
        <Input
          type={"text"}
          onChange={inputHandler}
          value={user.username}
          placeholder="Enter username"
          name="username"
        />
      </FormControl>
      <FormControl>
        <Input
          type={"text"}
          onChange={inputHandler}
          value={user.fullName}
          placeholder="Enter your full name"
          name="fullName"
        />
      </FormControl>
      <FormControl>
        <Input
          type={"text"}
          onChange={inputHandler}
          value={user.school}
          placeholder="Enter school"
          name="school"
        />
      </FormControl>
      <FormControl>
        <Input
          type={"number"}
          onChange={inputHandler}
          value={user.age}
          placeholder="Enter age"
          name="age"
        />
      </FormControl>
      <FormControl>
        <Input
          onChange={inputHandler}
          type={"password"}
          value={user.password}
          placeholder="Enter password"
          name="password"
        />
      </FormControl>
      <Checkbox
        checked={user.isMarried}
        onChange={inputHandler}
        name="isMarried">
        Are you married?
      </Checkbox>
      <Button colorScheme={"blue"} onClick={() => clickHandler()}>
        Increase Count
      </Button>
    </Flex>
  );
};

export default Home;
