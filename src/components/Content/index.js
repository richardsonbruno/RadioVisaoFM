import React from "react";

import {
  Conteudo,
  PlayPause,
  ButtonRadio
} from "./styles";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false,
      live: false,
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

  handleLivePlayPause = () => {
    this.setState({
      online: false,
      live: !this.state.live
    });
  };

  playMusic = () => {
    return (<
      PlayPause onClick={this.handlePlayPause}>

      {
        this.state.online ? (<
          i className="fa fa-play" />
        ) : (<
          i className="fa fa-pause" />
          )
      }

      <audio
        id="myAudio"
        src="https://on.sucesso.fm/visao"
        preload="auto"
        autoPlay /
      >
    </PlayPause>
    );
  };

  playLive = () => (
    <iframe
      id="iFrame"
      src="https://www.smashcast.tv/embed/master0258?popout=true&autoplay=true" />
  );

  render() {
    return (
      <Conteudo >
        {
          this.state.live == true ? this.playLive() : this.playMusic()
        }
        <ButtonRadio onClick={this.handleLivePlayPause}>
          {this.state.live == false ? <i className="fa fa-video-camera" /> : <i className="fa fa-close" />}
        </ButtonRadio>
      </Conteudo >
    );
  }
}
