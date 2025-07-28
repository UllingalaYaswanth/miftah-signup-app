import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
const ReviewCard = ({label, link}) => {
  return (
    <View className='px-6 py-4 items-left justify-center'>
      <View className='items-left bg-gray-100/50 justify-center p-5 rounded-lg '>
        <Text className='text-xl'>{label}</Text>
        <View className='flex-row item-center justify-between mt-3 bg-white p-5 rounded-xl'>
          <View className='flex-row items-center space-x-2 mt-2'>
            <Feather name="link-2" size={24} color="black" />
            <Text className='text-base text-blue-500 underline text-lg ml-2'>{link}</Text>
          </View>
          <View className='flex-row items-center space-x-4'>
            <TouchableOpacity>
              <Feather name="edit" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity >
                <View className="ml-3">
                    <AntDesign name="delete" size={24} color="red" />
                </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ReviewCard