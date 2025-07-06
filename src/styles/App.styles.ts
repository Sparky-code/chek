import { Dimensions, Platform, StyleSheet } from 'react-native'

import { theme } from './theme'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    width: Platform.OS === 'web' ? width : '100%',
    height: Platform.OS === 'web' ? height : '100%'
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.large
  },
  text: {
    marginBottom: theme.spacing.small,
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text.primary,
    textAlign: 'center'
  },
  subtext: {
    fontSize: theme.typography.body.fontSize - 2,
    color: theme.colors.subtext.primary,
    marginBottom: theme.spacing.large,
    textAlign: 'center'
  },
  link: {
    color: theme.colors.primary
  }
})
