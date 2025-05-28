import { View, StyleSheet, StatusBar } from 'react-native'
import './global.css'
import useAPI from './src/hooks/useAPI'
import Home from './screens/Home'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
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

  if (!loaded) {
    return null
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView
        className="h-full w-screen bg-orange-200 items-center p-2"
        style={styles.container}
      >
        <View className="h-full w-full items-center">
          <Home />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
})
