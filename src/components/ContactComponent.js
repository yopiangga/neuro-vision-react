import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { useState } from "react";

export function ContactComponent() {
  const [message, setMessage] = useState({
    fullname: "",
    email: "",
    textMessage: "",
  });

  function handleChange(e) {
    setMessage({ ...message, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="flex justify-center" id="kontak">
      <div className="flex flex-wrap" style={{ maxWidth: "1200px" }}>
        <div className="lg:w-7/12 w-full py-20 lg:px-14 px-8 bg-gray-100 text-center">
          <div className="mt-12"></div>
          <div className="header-title text-center">
            <h2 className="text-4xl font-medium">Kontak kami</h2>
            <p className="text-sm mt-5 text-gray-600">
              Kami akan menghubungi Anda dalam waktu kurang dari 24 jam.
            </p>
          </div>

          <div className="form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullname"
                id=""
                className="bg-white border-2 border-gray-300 outline-none h-14 w-full text-lg px-4 text-gray-900 mt-16"
                placeholder="Nama"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                id=""
                className="bg-white border-2 border-gray-300 outline-none h-14 w-full text-lg px-4 text-gray-900 mt-6"
                placeholder="Alamat Email"
                onChange={handleChange}
              />
              <textarea
                type="text"
                name="textMessage"
                id=""
                rows={5}
                className="bg-white border-2 border-gray-300 outline-none w-full text-lg px-4 py-4 text-gray-900 mt-6"
                placeholder="Pesan"
                onChange={handleChange}
              />

              <button
                type="submit"
                className=" bg-gray-900 hover:bg-gray-900 text-white font-medium h-14 px-6 mt-8 text-lg"
              >
                KIRIM PESAN
              </button>
            </form>
          </div>
        </div>
        <div className="lg:w-5/12 w-full py-20 lg:px-14 px-8">
          <div className="mt-12"></div>

          <div className="header-title text-center">
            <h2 className="text-4xl font-medium">Lokasi kami</h2>
            <p className="text-sm mt-5 text-gray-600">
              Untuk Dukungan Pelanggan dan Pertanyaan, Hubungi kami.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            <div className="item flex gap-4">
              <div className="">
                <FiMapPin size={36} />
              </div>
              <div>
                <h2 className="text-xl font-medium mb-3">ATRA Indonesia</h2>
                <a
                  className="text-lg"
                  href="https://goo.gl/maps/rKmsvQXbLxtU36BRA"
                >
                  Politeknik Elektronika Negeri Surabaya, <br />
                  Jl. Raya ITS, Keputih,
                  <br />
                  Kec. Sukolilo, Kota SBY, Jawa Timur <br />
                  60111 Indonesia
                </a>
              </div>
            </div>
            <div className="item flex gap-4">
              <div className="">
                <FiPhone size={36} />
              </div>
              <div>
                <h2 className="text-xl font-medium mb-3">Telephone</h2>
                <a className="text-lg" href="https://wa.me/6282330410865">
                  +62 823-3041-0865
                </a>
              </div>
            </div>
            <div className="item flex gap-4">
              <div className="">
                <FiMail size={36} />
              </div>
              <div>
                <h2 className="text-xl font-medium mb-3">Busines Email</h2>
                <a className="text-lg" href="mailto:info@myatra.net">
                  info@myatra.net
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
