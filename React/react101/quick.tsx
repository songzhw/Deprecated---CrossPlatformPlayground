import React from "react";

interface IQuickProps {
  id?: string,
  center?: [number, number],
  radius?: number,
  zoom?: number;
  camera?: string;
}

export const QuickScreen = (props: IQuickProps) => {
  return (
    <div>
      <p>Quick</p>
    </div>
  );
};

const initValue : Partial<IQuickProps> = {
  id: "20sdadsdfkajsdklasda",
  center: [0, 0],
  radius: 100
};
export const QuicksUser = () => {
  return (
    <QuickScreen {...initValue} />
  );
};