import { styled } from 'nativewind'
import { View, Text } from 'react-native'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'


const SafeAreaView = styled(RNSafeAreaView)

const Subscriptions = () => {
  return (
    <SafeAreaView className='flex-1 justify-center items-center bg-background'>
      <Text className='p-4'>Subscriptions</Text>
    </SafeAreaView>
  )
}

export default Subscriptions