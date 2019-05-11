import React from "react";

import { Conteudo, PlayPause } from "./styles";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false
    };
  }

  handlePlayPause = () => {
    this.setState({
      online: !this.state.online
    });

    if (this.state.online) {
      document.querySelector("#myAudio").play();
    } else {
      document.querySelector("#myAudio").pause();
    }
  };

  playMusic = () => {
    return (
      <PlayPause onClick={this.handlePlayPause}>
        {this.state.online ? (
          <i className="fa fa-play" />
        ) : (
          <i className="fa fa-pause" />
        )}

        <audio
          id="myAudio"
          src="http://centova1.plugarhost.com.br:8078/;stream/1"
          preload="auto"
          autoPlay
        />
      </PlayPause>
    );
  };

  render() {
    return <Conteudo>{this.playMusic()}</Conteudo>;
  }
}
