import { View, Text,Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import Button from '../components/Button'

const SignIn = () => {
  const router = useRouter();
  return (
    <SafeAreaView className='flex-1 bg-[#E3DCD4] px-6 justify-between items-center'>
      <View className='flex-1 items-center justify-between w-full'>
       <View className="w-full items-center mt-10 " style={{height: '30%'}}>
        <Image source={require('../../assets/images/miftah_logo.png')} className='w-40 h-20' resizeMode='contain'/>
          <Image
            source={require('../../assets/images/mifta_text-Photoroom.png')}
            style={{ width: "110%", height: 150 }}
            resizeMode="contain"
          />

        </View>
        <View className='w-full flex-1 items-center px-5'>
          <Text className='text-center mb-10'><Text onPress={() => router.push('/(screens)/SignIn')}>Log In </Text>or <Text onPress={() => router.push('/(screens)/RequestScreen')}>Sign Up</Text></Text>
          <View className='bg-white rounded-2xl w-full mt-7'>
          <TextInput 
          keyboardType='phone-pad'
          placeholder='Mobile Number'
          className='px-4'
          />
          </View>
          <Button label="Request OTP" onPress={() => router.push('/(screens)/SignIn_Otp')} className='mt-10 px-16 w-[70%]'/>
        </View>
        <Text className="text-sm text-center mb-4 text-[#222635] px-4">
          By continuing, you agree to our{' '}
          <Text className="underline">Terms of Service</Text> &{' '}
          <Text className="underline">Privacy Policy</Text>
        </Text>

      </View>
    </SafeAreaView>
  )
}

export default SignIn