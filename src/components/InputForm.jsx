import { View } from 'react-native'
import useStore from '../../store/store'
import InputLocation from './InputLocation'
import Button from './Button'
import DeleteButton from './DeleteButton'

const InputForm = () => {
  const setLocation = useStore((state) => state.setLocation)
  const input = useStore((state) => state.input)
  const setInput = useStore((state) => state.setInput)
  const setData = useStore((state) => state.setData)

  const handleSearchLocation = () => {
    if (input) {
      setLocation(input)
      setInput('')
    }
  }

  const handleDeleteData = () => {
    setData(null)
    setLocation('')
  }

  return (
    <View className="w-full items-center bg-orange-200">
      <View className="w-full px-6 py-4">
        <InputLocation location={input} onChangeText={setInput} />
      </View>
      <View className="w-full px-6">
        <Button title="Buscar" onPress={() => handleSearchLocation()} />
        <DeleteButton title="Borrar" onPress={() => handleDeleteData()} />
      </View>
    </View>
  )
}

export default InputForm
