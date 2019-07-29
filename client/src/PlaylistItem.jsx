import React, { Component } from 'react';
import axios from 'axios';

import Navigation from './navbar.jsx';
import SongList from './components/SongList.jsx';
import VideoPlayer from './components/VideoPlayer.jsx';


class PlaylistItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video: "",
      songs: props.playlist.songs,
      polarity: "positive"
    };
    this.songTitleClick = this.songTitleClick.bind(this);
    this.handlePositivePolarity = this.handlePositivePolarity.bind(this);
    this.handleNegativePolarity = this.handleNegativePolarity.bind(this);
  }

  songTitleClick(title) {
    return axios.get(`/video/${title}`).then(response => {
      this.setState({
        video: response.data
      });
    });
  }

  handleNegativePolarity() {
    this.setState({
      polarity: "negative"
    });
  }

  handlePositivePolarity() {
    this.setState({
      polarity: "positive"
    });
  }

  componentWillMount() {
    const { playlist } = this.props;
    this.setState({
      songs: playlist.songs,
      name: playlist.name,
    });
  }

  render() {
    console.log(this.props);
    const { songs, polarity, video, name } = this.state;
    console.log(this);
    return (
      <React.Fragment>
        <div className="section">
          <div className="player">
            <VideoPlayer video={video} />
          </div>
          <div className="songTitles">
            {/* <h3>{name}</h3> */}
            <SongList
              songs={songs}
              polarity={polarity}
              songTitleClick={this.songTitleClick}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PlaylistItem;
