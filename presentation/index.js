import React from "react";
import { Deck } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";

import { getTheme } from "./theme";
import { getSlides } from "./slides";
import { getImages } from "./images";
import { importStyles } from "./styles";

importStyles();

preloader(getImages());

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={getTheme()}
      >
        {getSlides().map((slide) => slide)}
      </Deck>
    );
  }
}
