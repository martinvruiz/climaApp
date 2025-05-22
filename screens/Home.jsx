import { View } from 'react-native'
import Header from '../src/components/Header'
import InputForm from '../src/components/InputForm'
import ViewLocation from '../src/components/ViewLocation'

const Home = () => {
  return (
    <View className="h-screen w-screen items-center bg-orange-200">
      <Header title="Weather App" />
      <View>
        <InputForm />
      </View>
      <ViewLocation />
    </View>
  )
}

export default Home
