import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import LogoutIcon from "@mui/icons-material/Logout";

export function Sidebar() {
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <div className="sidebar-container">
      {localStorage.token ? (
        <div className="profile">
          <img
            className="profilepic"
            src="https://www.maxpixel.net/static/photo/640/Male-Man-Rugged-Portrait-Face-Handsome-Guy-White-6153298.jpg"
            alt="profile-pic"
          />
        </div>
      ) : (
        <Button
          sx={{ marginTop: 5 }}
          color="secondary"
          variant="text"
          onClick={() => navigate("/login")}
        >
          Login
          <IconButton>
            <LoginIcon />
          </IconButton>
        </Button>
      )}

      <div className="route-btn">
        <Button
          color="secondary"
          variant="text"
          onClick={() => navigate("/feed")}
        >
          <IconButton>
            <DynamicFeedIcon />
          </IconButton>
          Feed
        </Button>

        <Button
          color="secondary"
          variant="text"
          onClick={() => navigate("/trending")}
        >
          <IconButton>
            <WhatshotIcon />
          </IconButton>
          Trend
        </Button>
        <Button color="secondary" variant="text" onClick={() => navigate("/")}>
          <IconButton>
            <PlayCircleOutlineIcon />
          </IconButton>
          Player
        </Button>
        <Button
          color="secondary"
          variant="text"
          onClick={() => navigate("/favourites")}
        >
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          Liked
        </Button>
        <Button
          color="secondary"
          variant="text"
          onClick={() => navigate("/library")}
        >
          <IconButton>
            <LibraryMusicIcon />
          </IconButton>
          Library
        </Button>
      </div>
      {localStorage.token ? (
        <Button
          sx={{ marginBottom: 5 }}
          color="secondary"
          variant="text"
          onClick={() => logout()}
        >
          Logout
          <IconButton>
            <LogoutIcon />
          </IconButton>
        </Button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
