import { View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const background = require('../../assets/images/background.png');
const logo = require('../../assets/images/miftah_logo.png');
const caption = require('../../assets/images/mifta_text-Photoroom.png');

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
      <View className="flex-1 justify-between items-center pb-10">
        <View />

        <TouchableOpacity onPress={() => router.push('/RequestScreen')}>
          <Image
            source={logo}
            className="w-80 h-48 mt-36 pt-20"
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Image
          source={caption}
          className="w-80 h-24"
          resizeMode="contain"
        />
      </View>
    </View>
  );
}