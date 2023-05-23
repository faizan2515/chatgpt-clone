import React, { useEffect, useState } from "react";
import { Add, Exit, ExternalLink, Gear, Message, Trash, User } from "../icons";

function Sidebar() {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <div
      className="dark flex-shrink-0 overflow-x-hidden bg-gray-900"
      style={{ width: 260 }}
    >
      <div className="h-full w-full">
        <div className="flex h-full min-h-0 flex-col">
          <div className="relative h-full w-full flex-1 items-start border-white/20">
            <nav className="flex h-full w-full flex-col p-2">
              <button className="flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 mb-1 flex-shrink-0">
                <Add />
                New chat
              </button>
              <div className="flex-col flex-1 transition-opacity duration-500 overflow-y-auto">
                <div className="flex flex-col gap-2 pb-2 text-gray-100 text-sm">
                  <div
                    className="relative h-auto opacity-100"
                    // style={{
                    //   display: "none",
                    // }}
                  >
                    <div className="sticky top-0 z-[16] opacity-100">
                      <h3 className="h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-900">
                        Today
                      </h3>
                    </div>
                    <div className="relative z-[15] opacity-100 h-auto">
                      <a className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 bg-gray-900 group">
                        <Message />
                        <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                          Cloning ChatGPT using React and Tailwind.
                          <div className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/20 pt-2">
                <a className="flex py-3 px-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm hover:bg-gray-800 rounded-md">
                  <span className="flex w-full flex-row justify-between">
                    <span className="gold-new-button flex items-center gap-3">
                      <User />
                      Upgrade to Plus
                    </span>
                    <span className="rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800">
                      NEW
                    </span>
                  </span>
                </a>
                <div className="group relative" data-headlessui-state="">
                  <button
                    className="flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800"
                    onClick={() => setShowUserMenu((prev) => !prev)}
                  >
                    <div className="-ml-0.5 w-5 flex-shrink-0">
                      <div className="relative flex">
                        <img src="/assets/images/user.webp" />
                      </div>
                    </div>
                    <div className="grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white">
                      Faizan Raza
                    </div>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 flex-shrink-0 text-gray-500"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </button>
                  {showUserMenu && (
                    <div className="absolute bottom-full left-0 z-20 mb-2 w-full overflow-hidden rounded-md bg-[#050509] py-1.5 outline-none">
                      <nav role="none">
                        <button className="w-full flex py-3 px-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm hover:bg-gray-700">
                          <ExternalLink />
                          Help &amp; FAQ
                        </button>
                        <div className="my-1.5 h-px bg-white/20"></div>
                        <button className="w-full flex py-3 px-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm hover:bg-gray-700">
                          <Trash />
                          Clear conversations
                        </button>
                        <button className="w-full flex py-3 px-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm hover:bg-gray-700">
                          <Gear />
                          Settings
                        </button>
                        <div
                          className="my-1.5 h-px bg-white/20"
                          role="none"
                        ></div>
                        <button className="w-full flex py-3 px-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm hover:bg-gray-700">
                          <Exit />
                          Log out
                        </button>
                      </nav>
                    </div>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
