import { ReactElement } from 'react'
import { Linking, Pressable, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { Button } from './components/Button/Button'
import { styles } from './styles/App.styles'

export const App = (): ReactElement => {
  const currentYear = new Date().getFullYear()

  const AuthorPress = () => {
    Linking.openURL('https://github.com/sparky-code')
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <Button title="Click me" onPress={() => {}} accessibilityLabel="Click me" />
          <Text style={styles.text}>Chek - A React Native App for settling the check!</Text>
          <Text style={styles.subtext}>
            © {currentYear}{' '}
            <Pressable onPress={AuthorPress}>
              <Text style={styles.link}>@Sparky-code</Text>
            </Pressable>
          </Text>
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  )
}
