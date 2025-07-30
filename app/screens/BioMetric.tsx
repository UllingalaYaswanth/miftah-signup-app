import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/Button'
import { useRouter } from 'expo-router'
import BackButton from '../components/BackButton'

const BioMetric = () => {
  const router= useRouter();
  return (
    <SafeAreaView className='flex-1 bg-[#E3DCD4] text-[#222635] px-3'>
      <BackButton to="/screens/SignIn"/>
      <View className='flex-1 w-full items-center'>
        <View>
          <Image source={require('../../assets/images/miftah_logo.png')} className='w-40 h-40' resizeMode='contain'/>
        </View>
        <View className='flex-1 w-full items-center'>
          <View className='w-[80%] items-center'>
            <Text className='text-2xl font-semibold text-center'>Enable Face ID/ Touch ID for faster  login?</Text>
            <Image source={require('../../assets/images/icons8-face-id-50.png')} className='w-40 h-40 mt-10' resizeMode='contain'/>
            <Text className='text-center px-10 mt-10 text-lg'>If accepted, biometrics will bestored securely on device</Text>
          </View>
          <View className='w-full items-center mt-10'>
            <Button label="Don't Enable" onPress={() => router.push('/screens/Wallet')} className='bg-white w-[60%]'/>
            <Button label="Enable" onPress={() => router.push('/screens/Wallet')} className='mt-4 w-[60%]'/>
          </View>
        </View>
        <View className='w-full items-center mb-20'>
          <Text>Use biometric?</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BioMetric