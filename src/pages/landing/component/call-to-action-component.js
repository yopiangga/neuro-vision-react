import interior1 from "src/assets/img/interior-1.png";
import video1 from "src/assets/img/video-1.png";
import videoIcon1 from "src/assets/img/icon/video-icon-1.png";

import { FaAndroid } from "react-icons/fa";

export function CallToActionComponent({ pathDownload, action }) {
  return (
    <div
      className="flex flex-col justify-center items-center"
      id="video-aplikasi"
    >
      <div className="w-10/12 pt-16 pb-10 grid lg:grid-cols-2 grid-cols-1">
        <div className="text">
          <h2 className="text-4xl font-medium">
            Apa yang dapat dilakukan oleh Neutron Imager?
          </h2>
          <p className="mt-7 text-sm text-slate-600">
            Aplikasi teknologi berbasis Artificial Intelligence (AI) yang dapat
            digunakan untuk membantu tenaga medis dalam mengidentifikasi pasien
            stroke saat ahli radiologi tidak ada, serta memberikan masukan
            kepada ahli radiologi terkait penyakit stroke yang dialami pasien.
          </p>
          <p className="mt-7 text-sm text-slate-600">
            Diharapkan dapat membantu meningkatkan kualitas pelayanan kesehatan
            dan mengurangi angka kematian akibat stroke untuk mencapai SDGs di
            bidang kesehatan.
          </p>
          <a
            href={pathDownload}
            onClick={action}
            download
            className="mt-10 block bg-gradient-to-r from-purple-600 via-purple-600 to-indigo-600 rounded-md py-4 px-12 w-fit text-white text-xs font-medium"
          >
            Unduh
          </a>
        </div>
        <div className="image flex justify-center lg:mt-0 mt-10">
          <img src={interior1} />
        </div>
      </div>
      <div className="w-10/12 pt-10 pb-32">
        <div
          className="h-96 w-full rounded-2xl overflow-hidden flex justify-center items-center"
          style={{ backgroundImage: `url(${video1})`, backgroundSize: "cover" }}
        >
          <a href="" target="_blank">
            {/* <a href="https://youtu.be/2ZujHa0Z_ik" target="_blank"> */}
            <img src={videoIcon1} className="hover:cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function CallToActionComponentText({ pathDownload, action }) {
  return (
    <div className="flex justify-center bg-gradient-to-r from-purple-600 via-purple-600 to-indigo-600">
      <div className="w-10/12 py-32 text-center text-white flex flex-col items-center">
        <h2 className="text-4xl font-medium">Unduh Aplikasi Ini Sekarang!</h2>
        <p className="mt-5">
          Unduh aplikasi kami! Bergabunglah dengan orang-orang yang sudah
          menggunakan aplikasi kami.
        </p>
        <a
          download
          onClick={action}
          href={pathDownload}
          className="mt-8 border border-white rounded-lg py-3 px-8 flex gap-7"
        >
          <div className="flex items-center">
            <FaAndroid size={32} />
          </div>
          <div className="text-left ">
            <h3 className="text-2xl font-medium">Unduh</h3>
            <p className="text-sm">di perangkat Android</p>
          </div>
        </a>
      </div>
    </div>
  );
}
