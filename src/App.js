import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import Player from './Player';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {

  // const [token, setToken]  = useState(null);
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

  if(_token) {
    dispatch({
      type: "SET_TOKEN",
      token: _token,
    });

    // setToken(_token);
    spotify.setAccessToken(_token); 
    dispatch({
      type: "SET_SPOTIFY",
      spotify: spotify,
    });

    spotify.getMe().then(user => {
      dispatch({
        type: 'SET_USER',
        user: user
      });
    });

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });
    });

    spotify.getPlaylist('37i9dQZEVXcJvNjvvD2PDG').then((response) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    });

    spotify.getMyTopArtists().then((response) =>
    dispatch({
      type: "SET_TOP_ARTISTS",
      top_artists: response,
    })
  );
  }

}, [token, dispatch]);

  return (
    <div className="app">
      {
        token ? 
          <Player spotify={spotify}/> : <Login />
      }
    </div>
  );
}

export default App;
