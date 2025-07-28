// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { Camera } from 'expo-camera'; // make sure this is named import exactly
// import { useRouter } from 'expo-router';

// const DocScan = () => {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [cameraReady, setCameraReady] = useState(false);
//   const cameraRef = useRef(null);
//   const router = useRouter();

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   const takePicture = async () => {
//     if (cameraRef.current && cameraReady) {
//       const photo = await cameraRef.current.takePictureAsync();
//       console.log('Photo taken:', photo.uri);
//       router.push('/PreviewPhoto', { photoUri: photo.uri });
//     }
//   };

//   if (hasPermission === null) {
//     return (
//       <View className="flex-1 justify-center items-center bg-black">
//         <Text className="text-white">Requesting camera permission...</Text>
//       </View>
//     );
//   }

//   if (hasPermission === false) {
//     return (
//       <View className="flex-1 justify-center items-center bg-black">
//         <Text className="text-white">No access to camera</Text>
//       </View>
//     );
//   }

//   return (
//     <View className="flex-1">
//       <Camera
//         style={{ flex: 1 }}
//         ref={cameraRef}
//         onCameraReady={() => setCameraReady(true)}
//         ratio="16:9"
//       />
//       <View className="absolute bottom-10 w-full flex-row justify-center">
//         <TouchableOpacity
//           onPress={takePicture}
//           className="w-18 h-18 bg-white rounded-full border-4 border-[#957D65]"
//         />
//       </View>
//     </View>
//   );
// };

// export default DocScan;

import { View,Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import { useRouter } from 'expo-router'
import BackButton from '../components/BackButton'


const DocScan = () => {
  const router = useRouter();
  return (
    <View className='flex-1 bg-[#E3DCD4] px-6 pt-12 pb-6'>
      <BackButton to='/SelectDoc' />
      <View className='flex-1 justify-center items-center'>
      <Button label="Scan Document" onPress={() => router.push('/ReviewDoc')} className='w-64 mt-6' />
        </View>
    </View>
  )
}

export default DocScan