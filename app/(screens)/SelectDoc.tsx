
import { View, Text, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import Button from '../components/Button'
import BackButton from '../components/BackButton'

const VerifyIdentity = () => {
  const router = useRouter();
  return (
    <View className='flex-1 bg-[#E3DCD4] px-6 pt-12 pb-6'>
    <BackButton to='/VerifyIdentity' />
      <View className='flex-1 items-center justify-between mt-10 px-10'>
      <View className='w-full items-center mt-10'>
      <Text className='text-[#222635] text-center mb-3 text-base text-4xl font-bold'>Verify Your Identity</Text>
      <Text className='text-[#222635] text-center mb-3 text-base text-lg '>
       To continue using the app,Please complete KYC
      </Text>
      </View>
      <View className='flex-1 w-full justify-center items-center -mt-16'>
        <Image
          source={require('../../assets/images/selectDoc-Photoroom.png')}
          className='w-[100%] h-56'
          resizeMode='contain'
        />
        <View className='space-y-4 mb-8'>
          <Button label= "Passport" onPress={() => router.push('/DocScan')} className='mt-6 w-64'/>
          <Button label= "Emirates ID" onPress={() => router.push('/KYC')} className='mt-2 w-64'/>
        </View>
      </View>
      <Text className='text-[#222635] text-center mb-3 text-base'>
          If no valid document{' '}
          <Text className='font-bold underline' onPress={() => router.push('/RequestScreen')}>save & exit</Text>
        </Text>
    </View>
    </View>
  )
}

export default VerifyIdentity