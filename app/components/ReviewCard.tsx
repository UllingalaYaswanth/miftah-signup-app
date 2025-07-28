// import { View, Text, TouchableOpacity } from 'react-native'
// import React from 'react'
// import Feather from '@expo/vector-icons/Feather';
// import AntDesign from '@expo/vector-icons/AntDesign';
// const ReviewCard = ({label, link}) => {
//   return (
//     <View className='px-6 items-left justify-center'>
//       <View className='items-left bg-gray-100/50 justify-center p-4 rounded-lg '>
//         <Text className='text-xl'>{label}</Text>
//         <View className='flex-row item-center justify-between mt-2 bg-white p-4 rounded-xl'>
//           <View className='flex-row items-center mt-2'>
//             <Feather name="link-2" size={24} color="black" />
//             <Text className='text-base text-blue-500 underline text-lg ml-2'>{link}</Text>
//           </View>
//           <View className='flex-row items-center space-x-4'>
//             <TouchableOpacity>
//               <Feather name="edit" size={24} color="black" />
//             </TouchableOpacity>
//             <TouchableOpacity >
//                 <View className="ml-3">
//                     <AntDesign name="delete" size={24} color="red" />
//                 </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   )
// }

// export default ReviewCard

import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

const ReviewCard = ({ label, link }) => {
  return (
    <View className='px-6 items-left justify-center'>
      <View className='items-left bg-gray-100/50 justify-center p-4 rounded-lg'>
        <Text className='text-xl'>{label}</Text>

        <View className='flex-row justify-between mt-2 bg-white p-4 rounded-xl items-start'>
          {/* Link section */}
          <View className='flex-1 flex-row items-start pr-4'>
            <Feather name="link-2" size={24} color="black" />
            <Text
              className='text-base text-blue-500 underline ml-2 flex-1'
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {link}
            </Text>
          </View>

          {/* Action buttons */}
          <View className='flex-row items-center space-x-4'>
            <TouchableOpacity>
              <Feather name="edit" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="delete" size={24} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReviewCard;
