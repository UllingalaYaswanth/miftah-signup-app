// import React, { useRef, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   KeyboardAvoidingView,
//   Platform
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const SignIn_Otp = () => {
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const inputs = useRef([]);

//   const handleChange = (text, index) => {
//     const newOtp = [...otp];
//     newOtp[index] = text;
//     setOtp(newOtp);

//     // Automatically focus next input
//     if (text && index < 5) {
//       inputs.current[index + 1].focus();
//     }
//   };

//   return (
//     <SafeAreaView className="flex-1 bg-[#E3DCD4]">
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         className="flex-1 justify-between items-center px-6 py-8"
//       >
//         {/* Logo + Tagline */}
//         <View className="items-center mt-8">
//           <Image
//             source={require('../../assets/images/miftah_logo.png')}
//             className="w-20 h-20 mb-4"
//             resizeMode="contain"
//           />
//           <Text className="text-[#7A5E47] font-semibold text-lg mb-2">MIFTAH LIFESTYLE</Text>
//           <Text className="text-white text-sm italic">Live Life, Limitlessly</Text>
//         </View>

//         {/* OTP Message */}
//         <Text className="text-center text-black text-base">
//           We have sent a 6-digit verification{'\n'}
//           code to +971 x xxx x666
//         </Text>

//         {/* OTP Inputs */}
//         <View className="flex-row justify-between w-full mt-6 px-4">
//           {otp.map((digit, index) => (
//             <TextInput
//               key={index}
//               ref={(ref) => (inputs.current[index] = ref)}
//               value={digit}
//               keyboardType="numeric"
//               maxLength={1}
//               onChangeText={(text) => handleChange(text, index)}
//               className="w-12 h-12 rounded-full text-center text-xl bg-white border border-gray-300 text-black"
//             />
//           ))}
//         </View>

//         {/* Resend OTP */}
//         <TouchableOpacity className="mt-4 self-end mr-8">
//           <Text className="text-[#7A5E47] underline">Resend otp</Text>
//         </TouchableOpacity>

//         {/* Login Button */}
//         <TouchableOpacity className="bg-[#7A5E47] w-[60%] py-3 rounded-xl mt-4">
//           <Text className="text-white text-center text-base font-semibold">Login</Text>
//         </TouchableOpacity>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default SignIn_Otp;


import React, { useRef, useState } from 'react';
import { View, TextInput } from 'react-native';

export default function OTPInput() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 50 }}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputs.current[index] = ref)}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          keyboardType="numeric"
          maxLength={1}
          style={{
            width: 50,
            height: 60,
            borderRadius: 25,
            backgroundColor: 'white',
            textAlign: 'center',
            fontSize: 20,
            borderColor: '#ccc',
            borderWidth: 1,
            color: 'black'
          }}
        />
      ))}
    </View>
  );
}
