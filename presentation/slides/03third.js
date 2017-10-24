import React from "react";
import { Slide, BlockQuote, Quote, Cite } from "spectacle";

export const slide = (key) => (
  <Slide
    key={key}
    transition={["fade"]}
    bgColor="secondary"
    textColor="primary"
  >
    <BlockQuote>
      <Quote>Example Quote</Quote>
      <Cite>Author</Cite>
    </BlockQuote>
  </Slide>
);
