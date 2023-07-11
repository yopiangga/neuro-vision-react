import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannerComponent } from "src/components/BannerComponent";
import {
  CallToActionComponent,
  CallToActionComponentText,
} from "src/components/CallToActionComponent";
import { FiturComponent } from "src/components/FiturComponent";
import { NavbarComponentDefault } from "src/components/NavbarComponent";
import { ScreenshotComponent } from "src/components/ScreenshotComponent";
import { MapComponent } from "src/components/MapComponent";
import { ContactComponent } from "src/components/ContactComponent";
import { FooterComponent } from "src/components/FooterComponent";
import { CounterComponent } from "src/components/CounterComponent";
import { useEffect, useState } from "react";

export function LandingPage() {
  const [pathDownload, setPathDownload] = useState(
    "https://drive.google.com/drive/folders/1Br1or410DSi7ZM3PYq7U5ySf-L427_De?usp=sharing"
  );

  return (
    <>
      <NavbarComponentDefault />
      <BannerComponent pathDownload={pathDownload} action={() => {}} />
      {/* <CounterComponent /> */}
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
