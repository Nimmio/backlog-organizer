import React, { ReactNode } from "react";

interface AppTitelProps {
  children: ReactNode;
}

const AppTitel = (props: AppTitelProps) => {
  const { children } = props;

  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-2xl">
      {children}
    </h1>
  );
};

export default AppTitel;
