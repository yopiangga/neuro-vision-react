import { useState } from "react";
import { TopBar } from "./component/top-bar";
import { SideBar } from "./component/sidebar";
import { Main } from "./main";

export function DashboardPage(){
    return(
      <div>
          <div className="flex flex-col h-screen">
            <TopBar />
              <div className="flex h-full">
                <SideBar />
                <Main />
              </div>
          </div>
      </div>
    );
}