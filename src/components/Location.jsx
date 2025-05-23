import { View, Text } from 'react-native'

const Location = ({ name, country, localTime, region }) => {
  return (
    <View className="w-full bg-orange-400 rounded-lg items-center justify-center p-2 shadow-md">
      <Text className="text-2xl font-montserratBold">{name}</Text>
      <Text className="text-xl font-montserratRegular">
        {region}, {country}
      </Text>
      <Text className="text-lg font-montserratRegular">{localTime}</Text>
    </View>
  )
}

export default Location
