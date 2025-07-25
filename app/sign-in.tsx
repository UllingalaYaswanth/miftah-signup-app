import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import  logo from '@/assets/images/miftah_logo.png'
const SignIn = () => {
  return (
    <SafeAreaView className='bg-white h-full w-full flex items-center justify-center'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={logo} className='w-full h-4/6' resizeMode='contain' />
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn