import rightMobile from "src/assets/img/banner/right-mobile.png";
import homeBanner from "src/assets/img/banner/home-banner.jpg";
import { useEffect, useState } from "react";

export function BannerComponent({ pathDownload, action }) {
  return (
    <div
      className="w-full flex justify-center items-center text-white"
      id="beranda"
      style={{ backgroundImage: `url(${homeBanner})`, backgroundSize: "cover" }}
    >
      <div className="w-10/12 h-full top-0 bottom-0 my-32 ">
        <div className="flex banner_content flex-col lg:flex-row">
          <div className="lg:w-3/4 w-full flex flex-col justify-center">
            <h2 className="lg:text-6xl text-3xl font-semibold">
              Digitalisasi CT Scan & <br /> Klasifikasi Stroke <br />
              Otomatis
            </h2>
            <p className="mt-5 lg:w-96 font-light text-sm">
              Maju Bersama Mencapai SDGs dengan Platform Canggih untuk CT Scan
              dan Klasifikasi Stroke Otomatis
            </p>
            <a
              href={pathDownload}
              onClick={action}
              download
              className="mt-10 bg-white rounded-md py-4 px-12 w-fit text-slate-900 text-xs font-medium"
            >
              Unduh Sekarang
            </a>
          </div>
          <div className="lg:w-1/4 w-full flex items-center justify-center h-full lg:mt-0 mt-16">
            <div className="">
              <img className="w-64" src={rightMobile} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
