import { View, ScrollView } from 'react-native'
import Header from '../src/components/Header'
import InputForm from '../src/components/InputForm'
import ViewLocation from '../src/components/ViewLocation'

const Home = () => {
  return (
    <View className="h-full w-full items-center bg-orange-200">
      <ScrollView
        className="w-screen md:w-3/5 bg-orange-200"
        showsHorizontalScrollIndicator={false}
      >
        <Header title="Clima App" />
        <View>
          <InputForm />
        </View>
        <ViewLocation />
      </ScrollView>
    </View>
  )
}

export default Home
