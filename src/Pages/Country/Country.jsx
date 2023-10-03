import React from "react";

const Country = (props) => {
  console.log(props.country);

  return (
    <div>
      <h2>{props.country.name.common}</h2>
      <img src={props.country.flags.png} alt="" srcset="" />
      <h3>Population:{props.country.population}</h3>
    </div>
  );
};

export default Country;
