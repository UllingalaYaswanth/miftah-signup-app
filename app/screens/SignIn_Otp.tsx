import { View, Text, Image, TextInput,TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/Button'
import { useRouter } from 'expo-router'

export default function index() {
  const [otp,setOtp] = useState(['','','','','',''])
  const input = useRef([[]])
  const router = useRouter();

  const handleChange = (text,index) =>{
    const newOtp = [...otp]
    newOtp[index] = text;
    setOtp(newOtp)
    if( text && index <5 ){
      input.current[index + 1].focus();
    }

  }

  return (
    <SafeAreaView className='flex-1 bg-[#E3DCD4] items-center justify-center'>
      <View className='w-full items-center mt-10'>
        <Image source={require('../../assets/images/miftah_logo.png')} className='w-40 h-20' resizeMode='contain'/>
        <Image source={require('../../assets/images/mifta_text-Photoroom.png')} className='w-[100%] h-40 ' resizeMode='contain' />
      </View>
      <View className='flex-1 items-center w-full mt-10'>
        <Text className='text-center w-[80%]'>We have sent a 6-digit verification code to +971  x xxx x666</Text>
        <View className='w-full flex-row' style={{justifyContent:"space-evenly"}}>
        {
          otp.map((digit,index) => (
            <TextInput
            key={index}
            ref={(ref) => (input.current[index] = ref)}
            onChange={(text) => handleChange(text,index)}
            value={digit}
            maxLength={1}
            style={{
              backgroundColor:'white',
              width:50,
              height:55,
              borderRadius:25,
              marginTop:20,
              textAlign:'center',
              borderColor:'#ccc',
              borderWidth:1,
              color:'blackb'
            }}
            />
          ))
        }
        </View>
        <TouchableOpacity className='w-full px-10' >
          <Text className='text-right mt-5 text-[#222635]'>Resend OTP</Text>
        </TouchableOpacity>
        <Button label='Login' onPress={() => router.push('/screens/BioMetric')} className='px-10 mt-5 w-[60%]'/>
      </View>
      <View>
        <Text className='text-center text-sm text-[#222635] px-5 mb-5'>
          By continuing, you agree to our{' '}
          <Text className='underline'>Terms of service</Text> & {' '}
          <Text className='underline'>Privacy policy</Text>
        </Text>
      </View>

    </SafeAreaView>
  )
}