import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const BackButton = ({ to }) => {
  const router = useRouter();

  return (
    <View className="relative">
      <TouchableOpacity
        className="absolute top-4 left-0 bg-white w-10 h-10 rounded-full items-center justify-center"
        onPress={() => {
          if (to) {
            router.push(to);
          } else {
            router.back(); // fallback to go back if no path is passed
          }
        }}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;