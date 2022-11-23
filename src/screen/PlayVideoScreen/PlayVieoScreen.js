import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Video from 'react-native-video';
const sampVideo = require('../../../assets/videos/video0.mp4');
export class PlayVieoScreen extends Component {
  render() {
    return (
      <Video
        source={sampVideo}
        ref={ref => {
          this.player = ref;
        }}
        onBuffer={this.onBuffer}
        onError={this.onError}
      />
    );
  }
}

export default PlayVieoScreen;
