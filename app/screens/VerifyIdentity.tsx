
import { View, Text, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import Button from '../components/Button'
import BackButton from '../components/BackButton'
const VerifyIdentity = () => {
  const router = useRouter();
  return (
    <View className='flex-1 bg-[#E3DCD4] px-6 pt-12 pb-6'>
    <BackButton to='/screens/OnboardScreen' />
      <View className='flex-1 items-center justify-between mt-10 px-10'>
      <Text className='text-[#222635] text-center mb-3 text-base text-3xl font-bold'>Verify Your Identity</Text>
      <Text className='text-[#222635] text-center mb-3 text-base text-lg '>
       To continue using the app,Please complete KYC
      </Text>
      <View className='flex-1 justify-center items-center px-4'>
        <Image
          source={require('../../assets/images/doc-Photoroom.png')}
          className='w-68 h-56'
          resizeMode='contain'
        />
        <View className='w-full space-y-4 mb-8'>
          <Button label= "Take a picture of Valid ID" onPress={() => router.push('/screens/SelectDoc')} className='mt-6'/>
          <Button label= "Take a Selfie" onPress={() => router.push('/screens/SelectDoc')} className='mt-2'/>
        </View>
      </View>
      <Text className='text-[#222635] text-center mb-3 text-base'>
          If no valid document{' '}
          <Text className='font-bold underline' onPress={() => router.push('/screens/RequestScreen')}>save & exit</Text>
        </Text>
    </View>
    </View>
  )
}

export default VerifyIdentity