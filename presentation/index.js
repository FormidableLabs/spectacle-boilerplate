// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
// import createTheme from "spectacle/lib/themes/default";
import theme from "../themes/seattlejs/index.js";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../themes/seattlejs/index.css");
// Best way to include fonts rite
require("../fonts/worksans.css");
require("../fonts/biorhyme.css");
require("../fonts/silkscreen.css");

const images = {
  bg: require("../assets/bg_skyline.svg"),
  logo: require("../assets/logo-seattlejsconference.svg"),
  logoAlexa: require("../assets/logo-alexa.svg"),
  logoImdb: require("../assets/logo-IMDb.svg"),
  logoFormidable: require("../assets/logo-formidable.svg"),
  logoMicrosoft: require("../assets/logo-microsoft.svg"),
  logoZillow: require("../assets/logo-zillow.svg"),
  logoGalvanize: require("../assets/logo-galvanize.svg"),
  logoAppSheet: require("../assets/logo-appsheet.svg"),
  logoGoDaddy: require("../assets/logo-godaddy.svg"),
  logoNpm: require("../assets/logo-npm.svg"),
  logoSitepen: require("../assets/logo-sitepen.svg"),
  logoIndeed: require("../assets/logo-indeed.png"),
  logoOpenDoor: require("../assets/logo-opendoor.svg"),
  logoSheCodesNow: require("../assets/logo-shecodesnow.png"),
  logoSendGrid: require("../assets/logo-sendgrid.svg"),
  logoTwitter: require("../assets/logo-twitter.svg"),
  logoUnbounce: require("../assets/logo-unbounce.png")
};

preloader(images);

export default class Presentation extends React.Component {
  renderSponsorHeading(text) {
    return (
      <Heading
        caps
        size={6}
        style={{ letterSpacing: "0.05em" }}
      >
        {text}
      </Heading>
    );
  }

  render() {
    const skylineBg = {
      backgroundImage: `url(${images.bg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
      backgroundSize: "105% auto"
    };

    const sponsor = {
      display: "block",
      marginBottom: "1.5em"
    };

    const wifiSlide = (
      <Slide style={skylineBg}>
        <Heading size={3}>WiFi</Heading>
        <Layout>
          <Fill>
            <Text textFont="monospace">Network</Text>
            <Text>Foundry</Text>
          </Fill>
          <Fill>
            <Text textFont="monospace">Password</Text>
            <Text>foundry98103</Text>
          </Fill>
        </Layout>
        <Text style={{ marginBottom: 0 }}>
          <Link href="https://twitter.com/seattlejs">
            <Image
              height="1.5em"
              src={images.logoTwitter}
              style={{ verticalAlign: "middle" }}
            />
            @SeattleJS
          </Link>
        </Text>
        <Text style={{ marginTop: 0, marginBottom: "3em" }}>
          <Link href="https://twitter.com/hashtag/SeattleJSConf?src=hash">
            <Image
              height="1.5em"
              src={images.logoTwitter}
              style={{ verticalAlign: "middle" }}
            />
            #SeattleJSConf
          </Link>
        </Text>
      </Slide>
    );

    return (
      <Deck
        autoplay
        progress="none"
        theme={theme}
        transition={["fade"]}
        transitionDuration={500}
      >
        <Slide style={skylineBg}>
          <Image width="100%" src={images.logo} />
          <Text textFont="monospace" margin="auto auto 5em auto">
            10-11 August 2017
          </Text>
        </Slide>
        {wifiSlide}
        <Slide bgColor="white">
          {this.renderSponsorHeading("Presenting Sponsor")}
          <Image width="90%" src={images.logoFormidable} />
        </Slide>
        <Slide bgColor="white">
          {this.renderSponsorHeading("Diamond Sponsor")}
          <Image width="90%" src={images.logoMicrosoft} />
        </Slide>
        <Slide bgColor="white">
          {this.renderSponsorHeading("Platinum Sponsor")}
          <Image width="90%" src={images.logoAlexa} />
        </Slide>
        <Slide bgColor="white">
          {this.renderSponsorHeading("Gold Sponsor")}
          <Image width="50%" src={images.logoImdb} />
        </Slide>
        {wifiSlide}
        <Slide bgColor="white">
          {this.renderSponsorHeading("Silver Sponsors")}
          <Layout>
            <Fill>
              <Image style={sponsor} width="90%" src={images.logoZillow} />
              <Image style={sponsor} width="90%" src={images.logoGalvanize} />
            </Fill>
            <Fill>
              <Image style={sponsor} width="90%" src={images.logoAppSheet} />
              <Image style={sponsor} width="90%" src={images.logoGoDaddy} />
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="white">
          {this.renderSponsorHeading("Community Sponsors")}
          <Layout style={{ alignItems: "center" }}>
            <Fill>
              <Image style={sponsor} width="60%" src={images.logoNpm} />
            </Fill>
            <Fill>
              <Image style={sponsor} width="95%" src={images.logoSendGrid} />
            </Fill>
            <Fill>
              <Image style={sponsor} width="75%" src={images.logoIndeed} />
            </Fill>
          </Layout>
          <Layout style={{ alignItems: "center" }}>
            <Fill>
              <Image style={sponsor} width="80%" src={images.logoSitepen} />
            </Fill>
            <Fill>
              <Image style={sponsor} width="90%" src={images.logoOpenDoor} />
            </Fill>
            <Fill>
              <Image style={sponsor} width="60%" src={images.logoSheCodesNow} />
            </Fill>
          </Layout>
          <Layout>
            <Fill />
            <Fill>
              <Image style={sponsor} width="80%" src={images.logoUnbounce} />
            </Fill>
            <Fill />
          </Layout>
        </Slide>
        {wifiSlide}
      </Deck>
    );
  }
}
