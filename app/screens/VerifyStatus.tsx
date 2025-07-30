import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '../components/BackButton'
import VerifyCard from '../components/VerifyCard'
import { useRouter } from 'expo-router'

const VerifyStatus = () => {
  const router = useRouter()
  return (
    <SafeAreaView className='flex-1 bg-[#E3DCD4] px-6'>
      <BackButton to={'/screens/ReviewDoc'} />
      <View className='flex-1 items-center w-full'>
        <View className='text-[#222635] mt-[4rem]'>
          <Text className='text-3xl font-semibold text-left'>Verification Status</Text>
          <Text className='text-left text-lg'>Check the status of your document verification</Text>
        </View>
        <View className='flex-1 mt-6'>
          <VerifyCard label="Proof Of Identity" ID="Emirates ID" status="Approved" />
          <VerifyCard label="Face Picture" ID="Face Picture" status="Pending" />
        </View>
      </View>
      <TouchableOpacity className='mt-4 bg-[#957D65] px-6 py-3 rounded-lg px-10 mb-5' onPress={() => { router.push('/screens/HomeScreen') }}>
        <Text className='text-[#222635] text-center'>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default VerifyStatus