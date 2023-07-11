import image1 from "src/assets/img/feature/feature-1.png";
import image2 from "src/assets/img/feature/feature-2.png";
import image3 from "src/assets/img/feature/feature-3.png";
import image4 from "src/assets/img/feature/feature-4.png";
import image5 from "src/assets/img/feature/feature-5.png";
import image6 from "src/assets/img/feature/feature-6.png";
import image7 from "src/assets/img/feature/feature-7.png";
import image8 from "src/assets/img/feature/feature-8.png";
import image9 from "src/assets/img/feature/feature-9.png";
import image10 from "src/assets/img/feature/feature-10.png";
import image11 from "src/assets/img/feature/feature-11.png";
import image12 from "src/assets/img/feature/feature-12.png";
import image13 from "src/assets/img/feature/feature-13.png";
import image14 from "src/assets/img/feature/feature-14.png";
import Slider from "react-slick";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

export function ScreenshotComponent() {
  const bgList = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
    { id: 7, image: image7 },
    { id: 8, image: image8 },
    { id: 9, image: image9 },
    { id: 10, image: image10 },
    { id: 11, image: image11 },
    { id: 12, image: image12 },
    { id: 13, image: image13 },
    { id: 14, image: image14 },
  ];

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
  };

  return (
    <div className="flex justify-center bg-gray-100" id="layar-aplikasi">
      <div className="w-10/12 text-center py-32 ">
        <div className="header-title text-center">
          <h2 className="text-4xl font-medium">Layar Aplikasi</h2>
          <p className="text-sm mt-5 text-gray-600">
            Anda dapat melihat tampilan aplikasi Neutron Imager di sini. Sangat
            mudah digunakan!
          </p>
        </div>

        {/* <img src={image1} /> */}

        <div className="mt-16 mx-auto" style={{ maxWidth: "1000px" }}>
          <BrowserView>
            <Slider {...settings} slidesToShow={4}>
              {bgList.map((el, idx) => {
                return (
                  <div key={idx} className="">
                    <img src={el.image} />
                  </div>
                );
              })}
            </Slider>
          </BrowserView>
          <MobileView>
            <Slider {...settings} slidesToShow={1}>
              {bgList.map((el, idx) => {
                return (
                  <div key={idx} className="">
                    <img
                      src={el.image}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                );
              })}
            </Slider>
          </MobileView>
        </div>
      </div>
    </div>
  );
}
