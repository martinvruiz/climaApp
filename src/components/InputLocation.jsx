import { View, Text, TextInput } from 'react-native'

const InputLocation = ({ location, onChangeText }) => {
  return (
    <View className="bg-white rounded-xl">
      <TextInput
        className="p-6 text-xl text-center font-montserratRegular"
        placeholder="Ingrese ciudad o estado"
        placeholderTextColor="#000"
        value={location}
        onChangeText={onChangeText}
      />
    </View>
  )
}

export default InputLocation
