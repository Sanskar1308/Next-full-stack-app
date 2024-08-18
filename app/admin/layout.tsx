import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Adminlayout({ children }: Props) {
  return (
    <div className="flex">
      <aside className="bg-slate-500 p-5 mr-5">Admin sidebar</aside>
      <main>{children}</main>
    </div>
  );
}

export default Adminlayout;
