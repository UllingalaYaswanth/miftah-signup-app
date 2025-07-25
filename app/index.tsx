// import { Link } from "expo-router";
// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//         <Text className="text-xl font-bold text-blue-500">Welcome to Miftah App!</Text>
//         <Link href="/sign-in">Sign In</Link>
//         <Link href="/explore">Explore</Link>
//         <Link href="/profile">Profile</Link>
//         <Link href="/properties/1">Property</Link>
//     </View>
//   );
// }

// import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { useRouter } from 'expo-router';

// const logo = require('@/assets/images/background.png'); // fallback to relative if alias fails

// export default function HomeScreen() {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity>
//         <Image source={logo} style={styles.logo} />
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff', // make sure background isn't hiding logo
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     resizeMode: 'contain',
//   },
// });

import { View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const background = require('../assets/images/background.png');
const logo = require('../assets/images/miftah_logo.png');

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 relative">
      {/* Background Image */}
      <Image
        source={background}
        className="absolute top-0 left-0 w-full h-full"
        resizeMode="cover"
      />

      {/* Foreground Content */}
      <View className="flex-1 justify-end items-center pb-10">
        <TouchableOpacity onPress={() => router.push('/chat')}>
          <Image
            source={logo}
            className="w-24 h-24"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
