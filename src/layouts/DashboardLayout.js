import { SideBar } from "src/components/side-bar";
import { TopBar } from "src/components/top-bar";

export function DashboardLayout({ children }) {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <TopBar />
        <div className="flex h-full">
          <SideBar />
          {children}
        </div>
      </div>
    </div>
  );
}
