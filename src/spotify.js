const authEND = "https://accounts.spotify.com/authorize?";
const clientID = "e75054989ad44a65af752ed49d98cb2b";
const redirectURL = "http://localhost:5173/";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEND}client_id=${clientID}&redirect_uri=${redirectURL}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
