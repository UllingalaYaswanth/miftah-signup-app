// // import { Redirect } from 'expo-router';

// // export default function Index() {
// //   return <Redirect href="/HomeScreen" />;
// // }




// import { View, Text,Image, TextInput, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { useRouter } from 'expo-router'
// import Button from './components/Button'

// const SignIn = () => {
//   const router = useRouter();
//   return (
//     <SafeAreaView className='flex-1 bg-[#E3DCD4] px-6 justify-between items-center'>
//       <View className='flex-1 items-center justify-between w-full'>
//        <View className="w-full items-center mt-10 " style={{height: '30%'}}>
//         <Image source={require('../assets/images/miftah_logo.png')} className='w-40 h-20' resizeMode='contain'/>
//           <Image
//             source={require('../assets/images/mifta_text-Photoroom.png')}
//             style={{ width: "110%", height: 150 }}
//             resizeMode="contain"
//           />

//         </View>
//         <View className='w-full flex-1 items-center px-5'>
//           <Text className='text-center mb-10'><Text onPress={() => router.push('/(screens)/SignIn')}>Log In </Text>or <Text onPress={() => router.push('/(screens)/RequestScreen')}>Sign Up</Text></Text>
//           <View className='bg-white rounded-2xl w-full mt-7'>
//           <TextInput 
//           keyboardType='phone-pad'
//           placeholder='Mobile Number'
//           className='px-4'
//           />
//           </View>
//           <Button label="Request OTP" onPress={() => router.push('/(screens)/ReviewDoc')} className='mt-10 px-16'/>
//         </View>
//         <Text className="text-sm text-center mb-4 text-[#222635] px-4">
//           By continuing, you agree to our{' '}
//           <Text className="underline">Terms of Service</Text> &{' '}
//           <Text className="underline">Privacy Policy</Text>
//         </Text>

//       </View>
//     </SafeAreaView>
//   )
// }

// export default SignIn


import React, { useRef, useState } from "react";
import { View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Opt(){
  const [opt,setOtp] = useState(['','','','','',''])
  const input = useRef([[]])
  
  const handleChange = (text,index) => {
    const newOtp = [...opt];
    newOtp[index] = text;
    setOtp(newOtp)
    if (text && index <5) {
      input.current[index + 1].focus();
    } 
  }

  return(
    <SafeAreaView className="flex-1 bg-[#E3DCD4] flex-row mt-10" style={{justifyContent:'space-evenly'}}>
      {
        opt.map((digit,index) =>(
          <TextInput
          key={index}
          ref={(ref) => (input.current[index] = ref)}
          onChange={(text) => handleChange(text,index)}
          value={digit}
          keyboardType="numeric"
          maxLength={1}
          style={{
            width:50,
            height:55,
            borderRadius:25,
            backgroundColor:'white',
            textAlign:'center',
            fontSize:20,
            borderColor:"#ccc",
            borderWidth:1,
            color:'black'
          }}

          />
        ))
      }

    </SafeAreaView>
  )
}