import React from "react";
import "./SeasonDisplay.css";

const SeasonConfig = {
  summer: {
    text: "Lets hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Burr it is chilly",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = SeasonConfig[season]; // { text, iconName}

  return (
    <div className={`season_display ${season}`}>
      <i className={`icon_left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon_right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
