import { Button, Heading, Flex } from "@chakra-ui/react";
import React from "react";
import "./index.css";
import Home from "./pages/Home";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./pages/About";
import Michyking from "./pages/Michyking";
import GlobalLayout from "./components/GlobalLayout";
import FoodItem from "./pages/FoodItem";
import Error from "./components/Error";
import Gift from "./pages/Gift";

const App = () => {
  // const [count, setCount] = useState(0);
  // const [count1, setCount1] = useState(true);
  // const [person, setPerson] = useState({
  //   age: 40,
  //   school: "Techathon",
  // });

  // const { age, school } = person;

  // useEffect(() => {

  //   let main = true;
  //   if(main){
  //     // console.log("start");
  //     // setInterval(()=>{
  //     //   setCount((prev)=> prev + 1)
  //     // }, 1000);
  //   }
  //   document.title =age;
  //   // const timer = setInterval(()=>{
  //   //   setCount((prev)=> prev + 1)
  //   // }, 1000);

  //   return () =>{
  //     // clearInterval(timer)
  //     console.log("stopped");
  //     main = false;
  //   }
  // }, [age, count]);

  // // console.log(age);

  // const setUpadateHandler = () => {
  //   setCount((prev) => prev + 1);
  //   setCount1((prev) => !prev);

  //   setPerson((person) => {
  //     return {
  //       age: 56,
  //       school: "Tech",
  //     };
  //   });
  // };

  // const contextValue = useContext(MichyContext)

  //   {/* ONE WAY OF DECLEARING ROUTE VERSION 6.4 OF REACT ROUTER DOM */}
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  // ]);

  //   {/* ANOTHER WAY OF DECLEARING ROUTE VERSION 6.4 OF REACT ROUTER DOM */}

  const routes = createRoutesFromElements(
    <Route path="/" element={<GlobalLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="michyking" element={<Michyking />}></Route>
      <Route path="gift" element={<Gift />}></Route>
    </Route>
  );

  const router = createBrowserRouter(routes);
  
  return (
    <RouterProvider router={router} />

    //   {/* THIS IS VERSION 6.3 OF REACT ROUTER DOM */}
    // <Routes>
    //   <Route  path="/" element={<GlobalLayout/>}>
    //     <Route index element={<Home />}></Route>
    //     <Route path="about" element={<About />}></Route>
    //     <Route path="michyking" element={<Michyking />}></Route>
    //     <Route path=":id" element={<FoodItem />}></Route>
    //     <Route path="*" element={<Error />}></Route>
    //   </Route>
    // </Routes>
  );
};

export default App;
