import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
const Chat = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-[#E3DCD4]">
      {/* Top Half with Logo and Button */}
      <View className="flex-1 items-center justify-center">
        <Image
          source={require('../../assets/images/miftah_logo.png')}
          className="w-80 h-48 -mt-28"
          resizeMode="contain"
        />
        <TouchableOpacity
          className="mt-14 bg-[#957D65] px-6 py-4 rounded-xl"
          onPress={() => router.push('/SignUp')}
        >
          <Text className="text-[#222635]">Request Membership</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
          className="items-end justify-end p-4 text-red-300 rounded-xl m-4"
          onPress={() => router.push('/SignIn')}
        >
          <Text className="text-[#222635]">Sign In</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Chat;
