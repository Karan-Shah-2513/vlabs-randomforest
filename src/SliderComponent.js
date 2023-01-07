import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import svg5 from "./random-forest-svgs/decision_tree_wine_5.svg";
import svg10 from "./random-forest-svgs/decision_tree_wine_10.svg";
import svg25 from "./random-forest-svgs/decision_tree_wine_25.svg";
import svg50 from "./random-forest-svgs/decision_tree_wine_50.svg";
import svg100 from "./random-forest-svgs/decision_tree_wine_100.svg";

const marks = [
  {
    value: 5,
    label: "5",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 25,
    label: "25",
  },
  {
    value: 50,
    label: "50",
  },
  {
    value: 100,
    label: "100",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return `${value}`;
}

export default function DiscreteSliderValues() {
  const [svg, setSvg] = React.useState(svg5);
  const updateSvg = (event) => {
    switch (event.target.value) {
      case 5:
        setSvg(svg5);
        break;
      case 10:
        setSvg(svg10);
        break;
      case 25:
        setSvg(svg25);
        break;
      case 50:
        setSvg(svg50);
        break;
      case 100:
        setSvg(svg100);
        break;
      default:
        alert("Some error Occured");
    }
  };
  return (
    <>
      <Box
        className="slider-box"
        sx={{
          width: 300,
          marginTop: 10,
        }}
      >
        <Slider
          aria-label="Restricted values"
          defaultValue={5}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          onChange={updateSvg}
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </Box>
      <img src={svg} alt="decision tree"></img>
    </>
  );
}
