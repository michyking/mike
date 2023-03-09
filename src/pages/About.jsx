import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
    console.log(location);
  return (
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt debitiss
      voluptas repudiandae sequi officiis voluptates provident! Incidunt
      voluptatum error vel unde ipsum corrupti nisi quisquam nihil, esse
      similique quas? Itaque suscipit ratione reprehenderit voluptatem.
      Reiciendis dolorum minima cumque natus! Et expedita fuga tempore ducimu
      natus voluptates vel ipsum, aperiam deserunt.
    </div>
  );
};

export default About;
