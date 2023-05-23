import React from "react";

function InfoSection({ title, Icon, items, onClick = false }) {
  return (
    <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
      <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
        <Icon />
        {title}
      </h2>
      <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
        {items.map((item, index) => {
          if (!onClick) {
            return (
              <li key={index} className="w-full bg-white/5 p-3 rounded-md">
                {item}
              </li>
            );
          }
          return (
            <button
              key={index}
              className="w-full bg-white/5 p-3 rounded-md hover:bg-gray-900"
              onClick={() => {
                onClick(item);
              }}
            >
              "{item}" →
            </button>
          );
        })}
      </ul>
    </div>
  );
}

export default InfoSection;
