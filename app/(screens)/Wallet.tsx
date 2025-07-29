import { View, Text, Image, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/Button'
import { useRouter } from 'expo-router'
import BackButton from '../components/BackButton'

const Wallet = () => {
  const router = useRouter()
  const countriess = [
  { code: 'USD', label: 'USD', flag: require('../../assets/icon/icons8-usa-48.png') },
  { code: 'GBP', label: 'GBP', flag: require('../../assets/icon/icons8-great-britain-48.png') },
  { code: 'EUR', label: 'EUR', flag: require('../../assets/icon/icons8-european-union-circular-flag-48.png') },
  { code: 'AUS', label: 'AUS', flag: require('../../assets/icon/icons8-australia-48.png') },
  { code: 'AED', label: 'AED', flag: require('../../assets/icon/icons8-saudi-arabia-48.png') },
  { code: 'CRYPTO', label: 'CRYPTO', flag: require('../../assets/icon/icons8-crypto-50.png') },
  ]

  const [selected,setSelected] = useState({
    USD: false,
    GBP: false,
    EUR: false,
    AUS: false,
    AED: true,
    CRYPTO: false,
  })

  const toggleSwitch = (code) =>{
    setSelected((prev) => ({
      ...prev,
      [code]: !prev[code],
    }))
  }

  return (
   <SafeAreaView className='flex-1 bg-[#E3DCD4] px-3'>
    <BackButton to='/BioMetric'/>
    <View className='flex-1 w-full items-center '>
    <View>
      <Image source={require('../../assets/images/miftah_logo.png')} className='w-40 h-40' resizeMode='contain'/>
    </View>
    <View className='flex-1 items-center w-full'>
      <Text className='text-3xl font-semibold'>Create your wallet</Text>
      <View className='mt-8 w-[80%]'>
        {
          countriess.map((item,index) => (
            <View key={item.code}>
              <View className='flex-row justify-between items-center mt-2'>
              <View className='flex-row items-center'>
              <View>
                <Image 
                source={item.flag}
                className='w-8 h-8 rounded-full'
                resizeMode='contain'
                />
              </View>
              <Text className='text-base text-lg ml-2'>{item.label}</Text>
              </View>
              <Switch
                trackColor={{false:'#ccc',true:"#a88e6d"}}
                thumbColor={selected[item.code] ? "#ffffff" : "#f4f3f4"} 
                ios_backgroundColor="#ccc"
                onValueChange={() => toggleSwitch(item.code)}
                value={selected[item.code]}
              />
              </View>
            </View>
          ))
        }
      </View>
      <View className='mt-10 flex-1 justify-center w-full items-center'>
        <Text className='text-base mb-10'>Please load your wallet  to request services</Text>
        <Button label= 'Add Funds' onPress={() => router.push('/(screens)/HomeScreen')} className='mb-5 w-[60%]'/>
          <TouchableOpacity>
            <Text className='text-center'>Skip for now</Text>
          </TouchableOpacity>
      </View>
    </View>
    </View>
   </SafeAreaView>
  )
}

export default Wallet