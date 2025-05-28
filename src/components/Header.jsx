import { View, Text } from 'react-native'

const Header = ({ title }) => {
  return (
    <View className="pt-4 w-full">
      <Text className="text-4xl font-montserratBold text-center">{title}</Text>
    </View>
  )
}

export default Header
