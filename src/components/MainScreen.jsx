import { useState } from "react";
import { Bulb, Light, Send, Warning } from "../icons";
import InfoSection from "./InfoSection";

const examples = [
  "Explain quantum computing in simple terms",
  "Got any creative ideas for a 10 year old's birthday?",
  "How do I make an HTTP request in Javascript?",
];

const capabilities = [
  "Remembers what user said earlier in the conversation",
  "Allows user to provide follow-up corrections",
  "Trained to decline inappropriate requests",
];

const limitations = [
  "May occasionally generate incorrect information",
  "May occasionally produce harmful or biased content",
  "Limited knowledge of world and events after 2021",
];

function MainScreen() {
  const [text, setText] = useState("");
  return (
    <div className="relative flex h-full max-w-full flex-1 overflow-hidden">
      <div className="flex h-full max-w-full flex-1 flex-col">
        <div className="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
          <div className="flex-1 overflow-hidden">
            <div className="react-scroll-to-bottom--css-sgrab-79elbk h-full dark:bg-gray-800">
              <div className="react-scroll-to-bottom--css-sgrab-1n7m0yu">
                <div className="flex flex-col text-sm dark:bg-gray-800">
                  <div className="text-gray-800 w-full mx-auto md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100">
                    <h1 className="text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center">
                      ChatGPT
                    </h1>
                    <div className="md:flex items-start text-center gap-3.5">
                      <InfoSection
                        title="Examples"
                        Icon={Bulb}
                        items={examples}
                        onClick={(item) => setText(item)}
                      />
                      <InfoSection
                        title="Capabilities"
                        Icon={Light}
                        items={capabilities}
                      />
                      <InfoSection
                        title="Limitations"
                        Icon={Warning}
                        items={limitations}
                      />
                    </div>
                  </div>
                  <div className="h-32 md:h-48 flex-shrink-0"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full border-t md:border-t-0 border-white/20 md:border-transparent md:bg-vert-light-gradient bg-gray-800 md:!bg-transparent md:bg-vert-gradient pt-2">
            <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
              <div className="relative flex h-full flex-1 items-stretch md:flex-col">
                <div className="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-gray-900/50 text-white bg-gray-700 rounded-md shadow-[0_0_15px_rgba(0,0,0,0.10)]">
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows="1"
                    placeholder="Send a message."
                    className="outline-0 m-0 w-full resize-none border-0 p-0 pr-7 focus:ring-0 focus-visible:ring-0 bg-transparent pl-2 md:pl-0"
                    style={{ maxHeight: 200, height: 24, overflowY: "hidden" }}
                  ></textarea>
                  <button
                    type="button"
                    disabled={text === ""}
                    className="absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 enabled:hover:text-gray-400 hover:bg-gray-900 disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40"
                  >
                    <Send />
                  </button>
                </div>
              </div>
            </form>
            <div className="px-3 pb-3 pt-2 text-center text-xs text-gray-300 md:px-4 md:pb-6 md:pt-3">
              <span>
                Free Research Preview. ChatGPT may produce inaccurate
                information about people, places, or facts
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
