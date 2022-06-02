import React from "react";

export default function Progressbar({ min, max, color="#333" }) {
  const [width, setWidth] = React.useState(0);
  React.useEffect(
    () => {
      setWidth((min / max) * 100);
    },
    [max, min]
  );

  return (
    <div className="w-full bg-gray-100 rounded-full ">
      <div
        className="bg-blue-700 rounded-full p-[.18rem] transition duration-300 ease-in-out delay-200"
        style={{ width: `${width}%`, backgroundColor: color }}
      ></div>
    </div>
  );
}
