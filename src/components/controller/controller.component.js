// import React, {useState, useEffect} from 'react';
// import {SafeArea} from '../utility/safe-area.component';
// import { Text } from 'react-native';
// import {} from './controller.styles';
// import {Spacer} from '../spacer/spacer.component';
// // import {colors} from '../../infrastructure/theme/colors';
// // import {useFetch} from '../hooks/useFetch';
// import {colors} from '../../infrastructure/theme/colors';
// import TrackPlayer,{ Capability, State } from 'react-native-track-player';


// const Controller = () => {
// await TrackPlayer.setupPlayer()
// // The player is ready to be used
 


// const track1 = {
//     url: 'http://example.com/avaritia.mp3', // Load media from the network
//     title: 'Avaritia',
//     artist: 'deadmau5',
//     album: 'while(1<2)',
//     genre: 'Progressive House, Electro House',
//     date: '2014-05-20T07:00:00+00:00', // RFC 3339
//     artwork: 'http://example.com/cover.png', // Load artwork from the network
//     duration: 402 // Duration in seconds
// };

// const track2 = {
//     url: require('./coelacanth.ogg'), // Load media from the app bundle
//     title: 'Coelacanth I',
//     artist: 'deadmau5',
//     artwork: require('./cover.jpg'), // Load artwork from the app bundle
//     duration: 166
// };

// const track3 = {
//     url: 'file:///storage/sdcard0/Downloads/artwork.png', // Load media from the file system
//     title: 'Ice Age',
//     artist: 'deadmau5',
//      // Load artwork from the file system:
//     artwork: 'file:///storage/sdcard0/Downloads/cover.png',
//     duration: 411
// };

// TrackPlayer.updateOptions({
//     stopWithApp:false,


//      // Media controls capabilities
//     capabilities:[ 
//         Capability.Play,
//         Capability.Pause,
//         Capability.SkipToNext,
//         Capability.SkipToPrevious,
//         Capability.Stop,
//     ],

//       // Capabilities that will show up when the notification is in the compact form on Android
//     compactCapabilities: [Capability.Play, Capability.Pause,Capability.Stop,Capability.SkipToNext,Capability.SkipToPrevious ],

//       // Icons for the notification on Android (if you don't like the default ones)
//     playIcon: require('./play-icon.png'),
//     pauseIcon: require('./pause-icon.png'),
//     stopIcon: require('./stop-icon.png'),
//     previousIcon: require('./previous-icon.png'),
//     nextIcon: require('./next-icon.png'),
//     icon: require('./notification-icon.png')
// })


//   return (
//         <Text>Hello world</Text>
//     );

// };
// export default Controller;








// // You can then [add](https://react-native-track-player.js.org/docs/api/functions/queue#addtracks-insertbeforeindex) the items to the queue
// // await TrackPlayer.add([track1, track2, track3]);


// // const state = await TrackPlayer.getState();
// // if (state === State.Playing) {
// //     console.log('The player is playing');
// // };

// // let trackIndex = await TrackPlayer.getCurrentTrack();
// // let trackObject = await TrackPlayer.getTrack(trackIndex);
// // console.log(`Title: ${trackObject.title}`);

// // const position = await TrackPlayer.getPosition();
// // const duration = await TrackPlayer.getDuration();
// // console.log(`${duration - position} seconds left.`);



// // TrackPlayer.play();
// // TrackPlayer.pause();
// // TrackPlayer.stop();
// // TrackPlayer.reset();

// // // Seek to 12.5 seconds:
// // TrackPlayer.seekTo(12.5);

// // // Set volume to 50%:
// // TrackPlayer.setVolume(0.5);

