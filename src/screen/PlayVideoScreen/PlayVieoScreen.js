import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import React, {Component} from 'react';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome5';

const sampVideo = 'https://vjs.zencdn.net/v/oceans.mp4';
// const route = useRoute();
// const uri = route.params;

const {width} = Dimensions.get('window');
export default class PlayVieoScreen extends Component {
  constructor(p) {
    super(p);
    this.state = {
      currentTime: 0,
      duration: 0.1,
      paused: false,
      overlay: false,
      fullscreen: false,
      repeat: true,
    };
  }

  fullscreen = () => {
    const {fullscreen} = this.state;
    // if (fullscreen) {
    //   Orientation.lockToPortrait;
    // } else {
    //   Orientation.lockToLandscape();
    // }
    this.setState({fullscreen: !fullscreen});
  };
  render() {
    const {currentTime, duration, overlay, paused, fullscreen} = this.state;

    return (
      <View style={style.container}>
        <View style={{width: '100%', height: '100%', backgroundColor: 'black'}}>
          <Video
            repeat={true}
            fullscreen={fullscreen}
            paused={paused}
            ref={ref => (this.video = ref)}
            source={{uri: sampVideo}}
            style={{...StyleSheet.absoluteFill}}
            resizeMode="cover"
            onLoad={this.load}
            onProgress={this.progess}
          />
          <View style={style.overlay}>
            {!overlay ? (
              <View style={{...style.overlaySet, backgroundColor: '#0006'}}>
                <View>
                  <Icon
                    onPress={this.fullscreen}
                    name={fullscreen ? 'compress' : 'expand'}
                    style={style.iconfs}
                  />
                </View>
              </View>
            ) : (
              <View style={style.overlaySet}>
                <TouchableNativeFeedback onPress={this.youtubeSeekLeft}>
                  <View style={{flex: 1}} />
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={this.youtubeSeekRight}>
                  <View style={{flex: 1}} />
                </TouchableNativeFeedback>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {...StyleSheet.absoluteFillObject},
  overlaySet: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
  },
  iconfs: {
    flex: 1,
    color: 'white',
    textAlign: 'right',
    textAlignVertical: 'bottom',
    fontSize: 25,
  },
});
