
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Button from '../components/Button';
import { useRouter } from 'expo-router';

const OnboardScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#E3DCD4] px-6 pt-12 pb-6">
      {/* Logo */}
      <View className="items-center mt-10">
        <Image
          source={require('../../assets/images/miftah_logo.png')}
          className="w-[40%] h-40"
          resizeMode="contain"
        />
      </View>

      {/* Main content */}
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl text-[#222635] mb-20">
          Onboarding Choice
        </Text>

        <View className="w-full space-y-4 mb-8">
          <Button label="Request Membership" onPress={() => router.push('/screens/VerifyIdentity')} className='mb-6'/>
          <Button label="Request an Agent" onPress={() => router.push('/screens/RequestAgent')} className='mb-6'/>
        </View>

        <View className="px-2 mt-10">
          <Text className="text-[#222635] text-center mb-3 text-base">
            Unlock the full value with the power of the key by completing your onboarding process
          </Text>
          <Text className="text-[#222635] text-center text-sm">
            Note: The onboarding process has to be completed within{' '}
            <Text className="font-bold">72 hrs</Text>: if not, the account will be automatically deleted
          </Text>
        </View>
      </View>
      <Button label="Save and Exit" onPress={() => router.push('/screens/RequestScreen')} />
    </View>
  );
};

export default OnboardScreen;
