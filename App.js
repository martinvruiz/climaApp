import { View, StyleSheet, StatusBar } from 'react-native'
import './global.css'
import useAPI from './src/hooks/useAPI'
import Home from './screens/Home'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Platform } from 'react-native'
import { API_KEY } from '@env'
import { useFonts } from 'expo-font'
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat'
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat'

export default function App() {
  useAPI(API_KEY)

  const [loaded] = useFonts({
    Montserrat_Regular: Montserrat_400Regular,
    Montserrat_Bold: Montserrat_700Bold,
  })

  return (
    <SafeAreaView
      className="h-screen w-screen bg-orange-200"
      style={styles.container}
    >
      <View>
        <Home />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
})
