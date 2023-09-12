import { Link } from "react-router-dom";

export function NavbarComponentDefault() {
  const link = [
    {
      id: "",
      path: "#beranda",
      title: "Beranda",
    },
    {
      id: "",
      path: "#fitur",
      title: "Fitur",
    },
    {
      id: "",
      path: "#video-aplikasi",
      title: "Video",
    },
    {
      id: "",
      path: "#layar-aplikasi",
      title: "Layar Aplikasi",
    },
    {
      id: "",
      path: "#kontak",
      title: "Kontak",
    },
  ];

  return (
    <nav className="fixed z-40 lg:h-20 h-16 w-full bg-gradient-to-r from-purple-600 via-purple-600 to-indigo-600 flex justify-center shadow-lg">
      <div className="w-11/12 h-full flex justify-between items-center text-white">
        <div className="logo">
          <h1 className="text-xl font-bold">
            Neutron Imager | Aplikasi Seluler
          </h1>
        </div>
        <div className="menu lg:block hidden">
          <ul className="uppercase flex text-sm gap-8 font-medium items-center">
            {link.map((el, idx) => {
              return (
                <a className="uppercase" href={el.path}>
                  <li>{el.title}</li>
                </a>
              );
            })}

        <a className="bg-white rounded-md py-3 px-8 w-fit text-slate-900 text-xs font-medium" href="/sign-in">
                  <li>Masuk</li>
                </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}
