import React from "react";

const Spinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.message || 'Loading...'}</div>
    </div>
  );
};

export default Spinner;
