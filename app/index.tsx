import { Redirect } from 'expo-router';

export default function Index() {
  return <Redirect href="/HomeScreen" />;
}


// import React from "react";
// import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"; // <-- Add TextInput and TouchableOpacity here
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function SignUp() {
//   return (
//     <SafeAreaView className="flex-1 bg-[#F5F5F5] justify-between items-center">
//       <View>
//         <Image
//           source={require('../assets/images/miftah_logo.png')}
//           className="w-48  h-48"
//           resizeMode="contain"
//         />
//       </View>
//       <View className="flex-1 w-full justify-top items-center">
//         <Text className="text-2xl font-bold">Request Membership</Text>
//         <View className="flex-1 mt-16 w-3/4">
//           <View className="mb-8">
//             <Text>Full Name</Text>
//             <TextInput
//               placeholder="Full Name"
//               className="bg-white rounded-2xl p-4 ml-1 mt-2"
//             />
//           </View>
//           <View className="mb-8">
//             <Text>Email</Text>
//             <TextInput
//               placeholder="Email"
//               className="bg-white rounded-2xl p-4 ml-1 mt-2"
//               keyboardType="email-address"
//               autoCapitalize="none"
//             />
//           </View>
//           <View className="mb-8">
//             <Text>Mobile Number</Text>
//             <TextInput
//               placeholder="Mobile Number"
//               className="bg-white rounded-2xl p-4 ml-1 mt-2"
//               keyboardType="phone-pad"
//             />
//           </View>
//           <TouchableOpacity className="bg-[#957D65] rounded-xl py-4 mt-20">
//             <Text className="text-[#222635] text-lg text-center">Continue</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

