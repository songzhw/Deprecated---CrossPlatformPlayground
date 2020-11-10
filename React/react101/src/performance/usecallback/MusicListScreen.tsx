import React, { MouseEvent, useCallback, useState } from "react";
import { PlayerConsole2 } from "./PlayerConsole";
import "./Music.css";

interface ISong {
  id: number;
  duration: string;
  title: string;
  isPlaying: boolean;
}

export const MusicListScreen = () => {
  const orig: ISong[] = [
    { id: 0, duration: "03:20", title: "new world", isPlaying: false },
    { id: 1, duration: "02:50", title: "jazz in hz", isPlaying: false },
    { id: 2, duration: "04:14", title: "wonderful yi", isPlaying: false }
  ];
  const [data, setData] = useState(orig);

  const selectItem = (ev: MouseEvent<HTMLDivElement>) => {
    const id = parseInt(ev.currentTarget.dataset.item!, 10);
    const songs = data.map(item => {
      item.isPlaying = item.id === id;
      return item;
    });
    setData(songs);
  };

  const work = useCallback(() => {
    console.log(`szw work`);
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={`${item.title}-${index}`} onClick={selectItem} data-item={item.id}>

          {item.isPlaying ?
            <img className="playIcon" src={require("./ic_play.png")} alt=""/>
            : <img className="playIcon" src={require("./ic_music.png")} alt=""/>
          }

          <span className="song">{item.title}</span>
        </div>
      ))}

      <PlayerConsole2 job={work}/>

    </div>
  );
};
