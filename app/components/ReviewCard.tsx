import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as Linking from 'expo-linking';

const ReviewCard = ({ label = "Document", link = "#" }) => {
  const handleDelete = () => {
    Alert.alert("Confirm Delete", `Are you sure you want to delete ${label}?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          console.log(`Deleted ${label}`);
        },
      },
    ]);
  };

  return (
    <View className="bg-gray-100/50 justify-center p-4 rounded-lg mb-3">
      <Text className="text-xl text-[#222635]">{label}</Text>

      <View className="flex-row justify-between mt-2 bg-white p-4 rounded-xl items-start">
        <TouchableOpacity
          className="flex-1 flex-row items-start pr-4"
          onPress={() => Linking.openURL(link)}
          accessibilityRole="link"
          accessibilityLabel={`Open ${label} document link`}
        >
          <Feather name="link-2" size={24} color="black" />
          <Text
            className="text-base text-blue-500 underline ml-2 flex-1"
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {link}
          </Text>
        </TouchableOpacity>

        <View className="flex-row items-center space-x-4">
          <TouchableOpacity
            onPress={() => console.log(`Edit ${label}`)}
            accessibilityRole="button"
            accessibilityLabel={`Edit ${label}`}
            style={
              {
                marginRight:10
              }
            }
          >
            <Feather name="edit" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleDelete}
            accessibilityRole="button"
            accessibilityLabel={`Delete ${label}`}
          >
            <AntDesign name="delete" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ReviewCard;
