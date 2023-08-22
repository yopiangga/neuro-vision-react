import IconApp from "src/assets/img/icon-app.png";

export function TopBar() {
  return (
    <nav className="flex dark:bg-white items-center relative justify-between bg-white px-8 py-3 w-full border border-gray-300">
      <div className="flex items-center space-x-2">
        <img src={IconApp} alt="" width="30" />
        <p className="font-semibold text-xl">
          Neutron{" "}
          <span className="text-violet-500 text-xl font-semibold">Imager</span>
        </p>
      </div>
      
    </nav>
  );
}
