import React from "react";

const Forms = (
  props //if one props than we can define like that if so many than we can go with()
) => (
  <form onSubmit={props.getWeather}>
    {/* <input type="text" name="state" placeholder="State..." /> */}
    <input type="text" name="city" placeholder="City..." />
    <input type="text" name="country" placeholder="Country..." />
    <button>Get Weather</button>
  </form>
);
export default Forms;
