import { View, Text } from 'react-native'
import React from 'react'

const VerifyCard = ({ label, ID, status }) => {
  return (
    <View className='bg-[#E3DCD4] px-6 pb-6 items-center justify-center'>
      <View className='bg-white p-6 rounded-lg shadow-lg flex-row items-center justify-between w-full'>
        <View>
          <Text className='text-xl font-bold text-[#222635]'>{label}</Text>
          <Text className='text-[#666666]'>{ID}</Text>
        </View>
        <View>
          <Text className={` ${status === 'Approved' ? 'text-green-600 bg-green-100 px-4 py-2 rounded-2xl text-center' : 'text-red-600 bg-red-100 px-4 py-2 rounded-2xl text-center'}`}>{status === 'Approved' ? 'Approved' : 'Pending'}</Text>
        </View>
      </View>
      
    </View>
  )
}

export default VerifyCard