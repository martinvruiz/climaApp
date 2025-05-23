import { View, Text } from 'react-native'
import useStore from '../../store/store'
import Location from './Location'
import ViewWeather from './ViewWeather'

const ViewLocation = () => {
  const data = useStore((state) => state.data)

  return (
    <View className="w-full px-6 py-4">
      {data ? (
        <View>
          <Location
            name={data.location.name}
            region={data.location.region}
            country={data.location.country}
            localTime={data.location.localtime}
          />
          <ViewWeather />
        </View>
      ) : (
        <View className="w-full bg-gray-400 rounded-lg items-center justify-center p-2">
          <Text className="text-2xl font-montserratRegular w-full text-center">
            No hay datos
          </Text>
        </View>
      )}
    </View>
  )
}

export default ViewLocation
