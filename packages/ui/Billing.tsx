import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

export const Billing = ({ children }: Props) => {
  return (
    <div>
      <h1>billing</h1>
      {children}
    </div>
  );
};
