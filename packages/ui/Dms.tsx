import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

export const Dms = ({ children }: Props) => {
  return (
    <div>
      <h1>dms</h1>
      {children}
    </div>
  );
};
