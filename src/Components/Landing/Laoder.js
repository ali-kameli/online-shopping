import React from "react";
import "./Loader.css"

const Loader = () => {
  return (
    <section id="global">
      <div id="top" class="mask">
        <div class="plane"></div>
      </div>
      <div id="middle" class="mask">
        <div class="plane"></div>
      </div>

      <div id="bottom" class="mask">
        <div class="plane"></div>
      </div>

      <p >
        <i>LOADING...</i>
      </p>
    </section>
  );
};

export default Loader;
