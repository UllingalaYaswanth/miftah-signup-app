
import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Modal, FlatList, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from '@react-native-picker/picker';
import  {useRouter} from 'expo-router';

const countryCodes = [
  { label: "+1", value: "+1" },
  { label: "+144", value: "+144" },
  { label: "+91", value: "+91" },
  // Add more codes here as needed
];

export default function SignUp() {
  const [countryCode, setCountryCode] = useState("+1");
  const [mobileNumber, setMobileNumber] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#E3DCD4] justify-between items-center">
      <View>
        <Image
          source={require('../../assets/images/miftah_logo.png')}
          className="w-48 h-48"
          resizeMode="contain"
        />
      </View>
      <View className="flex-1 w-full justify-top items-center">
        <Text className="text-2xl font-bold">Request Membership</Text>
        <View className="flex-1 mt-16 w-[85%]">
          <View className="mb-8">
            <Text className= "font-semibold">Full Name</Text>
            <TextInput
              placeholder="Full Name"
              className="bg-white rounded-2xl p-4 ml-1 mt-2"
            />
          </View>
          <View className="mb-8">
            <Text  className= "font-semibold">Email</Text>
            <TextInput
              placeholder="Email"
              className="bg-white rounded-2xl p-4 ml-1 mt-2"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View className="mb-8">
            <Text className= "font-semibold">Mobile </Text>
            <View className="flex-row items-center bg-white rounded-2xl h-14 mt-2 border border-gray-300">
              
              {/* Country Code Picker */}
              <View className="w-36 overflow-hidden">
                <Picker
                  selectedValue={countryCode}
                  onValueChange={(itemValue) => setCountryCode(itemValue)}
                  mode="dropdown"
                  style={{
                    width: '100%',
                    height: 50,
                    color: '#000',
                  }}
                  dropdownIconColor="#000"
                >
                  {countryCodes.map((code) => (
                    <Picker.Item label={code.label} value={code.value} key={code.value} />
                  ))}
                </Picker>
              </View>

              {/* Mobile Number Input */}
              <TextInput
                className="flex-1 px-3 text-base"
                placeholder="Mobile Number"
                keyboardType="phone-pad"
                value={mobileNumber}
                onChangeText={setMobileNumber}
              />
            </View>
          </View>

          <TouchableOpacity className="bg-[#957D65] rounded-lg py-4 mt-20">
            <Text className="text-[#222635] text-lg text-center" onPress={() => router.push('/SignUp_Otp')}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
