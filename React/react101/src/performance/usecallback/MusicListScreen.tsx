import React, { MouseEvent } from "react";
import { PlayerConsole2 } from "./PlayerConsole";
import "./Music.css"

interface ISong {
  id: number;
  duration: string;
  title: string;
  isPlaying: boolean;
}

export const MusicListScreen = () => {
  const data: ISong[] = [
    { id: 0, duration: "03:20", title: "new world", isPlaying: false },
    { id: 1, duration: "02:50", title: "jazz in hz", isPlaying: false },
    { id: 2, duration: "04:14", title: "wonderful yi", isPlaying: false }
  ];

  const selectItem = (ev: MouseEvent<HTMLDivElement>) => {
    const id = ev.currentTarget.dataset.item;
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={`${item.title}-${index}`} onClick={selectItem} data-item={item.id}>
          <span className="song">{item.title}</span>
        </div>
      ))}
      <PlayerConsole2/>
    </div>
  );
};
