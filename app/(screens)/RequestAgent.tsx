import { View, Text, Image } from 'react-native';
import React from 'react';
import BackButton from '../components/BackButton';

const RequestAgent = () => {
  return (
    <View className="flex-1 bg-[#E3DCD4] py-10 px-5">
      <BackButton to='/OnboardScreen' />
      <View className="items-center mt-10">
        <Image
          source={require('../../assets/images/miftah_logo.png')}
          className="w-48 h-40"
          resizeMode="contain"
        />
      </View>
      <View className="flex-1 justify-center items-center px-4 mb-20">
        <Text className="text-[#222635] text-center font-semibold text-2xl">
          Our lifestyle Agent will contact you shortly.
        </Text>
      </View>
      <View className="h-10" />
    </View>
  );
};

export default RequestAgent;