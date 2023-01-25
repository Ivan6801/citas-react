import React from "react";

export function Error({children}) {
  return (
    <div className="bg-red-800 text-center rounded-md">
      <p className="text-white p-1 text-1xl font-bold">
        {children}
      </p>
    </div>
  );
}
