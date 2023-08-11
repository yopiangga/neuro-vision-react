import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { NavbarComponentDefault } from "./component/navbar-component";
import { BannerComponent } from "./component/banner-component";
import { FiturComponent } from "./component/fitur-component";
import {
  CallToActionComponent,
  CallToActionComponentText,
} from "./component/call-to-action-component";
import { ScreenshotComponent } from "./component/screenshot-component";
import { MapComponent } from "./component/map-component";
import { FooterComponent } from "./component/footer-component";
import { ContactComponent } from "./component/contact-component";

export function LandingPage() {
  const [pathDownload, setPathDownload] = useState(
    "https://drive.google.com/drive/folders/1Br1or410DSi7ZM3PYq7U5ySf-L427_De?usp=sharing"
  );

  return (
    <>
      <NavbarComponentDefault />
      <BannerComponent pathDownload={pathDownload} action={() => {}} />
      <FiturComponent />
      <CallToActionComponent pathDownload={pathDownload} action={() => {}} />
      <ScreenshotComponent />
      <CallToActionComponentText
        pathDownload={pathDownload}
        action={() => {}}
      />
      <MapComponent />
      <ContactComponent />
      <FooterComponent />
    </>
  );
}
