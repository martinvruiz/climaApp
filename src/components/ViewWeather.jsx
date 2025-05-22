import { View, Text, Image } from 'react-native'
import useStore from '../../store/store'

const ViewWeather = () => {
  const data = useStore((state) => state.data)
  return (
    <View className="w-full bg-gray-500 rounded-lg items-center justify-center mt-2 p-2 shadow-lg">
      {data ? (
        <View className="w-full items-center justify-center gap-1">
          <Image
            source={{ uri: `https:${data.current.condition.icon}` }}
            className="w-28 h-28"
            resizeMode="cover"
          />
          <Text className="text-3xl font-montserratBold text-white">
            {data.current.temp_c}°C
          </Text>
          <Text className="text-2xl text-white font-montserratRegular">
            {data.current.condition.text}
          </Text>
          <Text className="text-xl text-white font-montserratRegular">
            Humedad: {data.current.humidity}%
          </Text>
          <Text className="text-xl text-white font-montserratRegular">
            Nubes: {data.current.cloud}%
          </Text>
          <Text className="text-xl text-white font-montserratRegular">
            Actualizado: {data.current.last_updated}
          </Text>
        </View>
      ) : (
        <View className="w-full bg-gray-400 rounded-lg items-center justify-center p-2">
          <Text className="text-2xl font-semibold">No hay datos</Text>
        </View>
      )}
    </View>
  )
}

export default ViewWeather
