import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '../components/BackButton'
import ReviewCard from '../components/ReviewCard'
import { useRouter } from 'expo-router'

const ReviewDoc = () => {
    const router = useRouter();
  return (
    <SafeAreaView className='flex-1 bg-[#E3DCD4] px-6'>
        <BackButton to='/SelectDoc' />
        <View className='flex-1 items-center mt-6 w-full'>
            <View className='text-[#222635] mb-3 mt-10'>
                <Text className='text-3xl font-semibold text-left'>Review Documents</Text>
                <Text className='text-left text-lg'>Verify before submitting required documents</Text>
            </View>
            <View className='flex-1 px-5'>
                <ReviewCard label="Passport" link="https://example.com/passport" />
                <ReviewCard label="Emirates ID" link="https://example.com/emirates-id" />
            </View>
        </View>
        <View className='w-full items-center justify-center mb-6 px-12'>
            <TouchableOpacity className='bg-[#957D65] px-6 py-4 rounded-lg w-full' onPress={() => {router.push('/VerifyStatus')}}>
                <Text className='text-[#222635] text-center text-lg'>Submit all</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default ReviewDoc
