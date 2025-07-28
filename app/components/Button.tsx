import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

const Button = ({ label, onPress, className = '' }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`bg-[#957D65] px-6 py-4 rounded-xl ${className}`}
    >
      <Text className="text-[#222635] text-lg text-center">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
