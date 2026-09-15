import { Text } from 'react-native'
import { styled } from 'nativewind'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'

const SafeAreaView = styled(RNSafeAreaView)

const index = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-background">
      <Text >index</Text>
    </SafeAreaView>
  )
}

export default index