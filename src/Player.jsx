import { useEffect, useState } from "react";
import "./CSS/Player.css";
import { API } from "./Api";

export function Player() {
  const [Player, setPlayer] = useState([]);
  useEffect(() => {
    fetch(`${API}/songs/`, {
      headers: { "x-auth-token": localStorage.getItem("token") },
    })
      .then((data) => checkAuth(data))
      .then((data) => setPlayer(data.result));
  }, []);

  function checkAuth(data) {
    if (data.status === 401) {
      throw Error("UnAuthorized");
    } else {
      return data.json();
    }
  }

  console.log(Player);
  return (
    <div className="screen-container">
      <div className="Player-container">
        {Player.map((song, _id) => (
          <PlayerList key={_id} song={song} />
        ))}
      </div>
    </div>
  );
}

function PlayerList({ song }) {
  const [Play, setPlay] = useState(false);
  function Player(id) {
    console.log(id);
    setPlay(false);
    setPlay(true);
  }

  return (
    <div className="song-container">
      <button
        className="song-btn"
        onClick={() => {
          Player(song._id);
        }}
      >
        <img className="song-pic" src={song.artwork} alt={song.artwork} />
        <div className="song-details">
          <h3 className="song-title">{song.title}</h3>
          <p className="song-artist">{song.artist}</p>
        </div>
        {Play ? (
          <div>
            <audio controls>
              <source src={song.url} type="audio/mpeg" />
            </audio>
          </div>
        ) : null}
      </button>
    </div>
  );
}
