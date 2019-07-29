import React, { Component } from 'react';
import axios from 'axios';

import Navigation from './navbar.jsx';
import PlaylistItem from './PlaylistItem.jsx';

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistsArr: [],
    };
    
  }

  componentWillMount() {
    axios.get('/playlists').then((playlistsArr) => {
      this.setState({
        playlistsArr: playlistsArr.data,
      });
    });
  }

  render() {
    console.log(this);
    const { playlistsArr } = this.state;
    return (
      <React.Fragment>
        <Navigation />

        {playlistsArr.map(playlist => <div><PlaylistItem playlist={playlist} /><br /></div>) }
      </React.Fragment>
    );
  }
}

export default Playlist;
