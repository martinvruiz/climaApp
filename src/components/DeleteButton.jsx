import { Text, Pressable } from 'react-native'

const DeleteButton = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress} className="bg-red-500 rounded-xl p-4 m-1">
      <Text className="text-center text-white font-montserratRegular">
        {title}
      </Text>
    </Pressable>
  )
}

export default DeleteButton
