import React from "react";
import { Slide, Heading, Text } from "spectacle";

export const slide = (key) => (
  <Slide key={key} transition={["zoom"]} bgColor="primary">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      Spectacle Boilerplate
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
      open the presentation/index.js file to get started
    </Text>
  </Slide>
);
