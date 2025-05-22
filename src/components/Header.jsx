import { View, Text } from 'react-native'

const Header = ({ title }) => {
  return (
    <View className="pt-14">
      <Text className="text-4xl font-montserratBold">{title}</Text>
    </View>
  )
}

export default Header
