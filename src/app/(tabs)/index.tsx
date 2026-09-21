import { Image, Text, View } from 'react-native'
import { styled } from 'nativewind'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'
import images from '../../../constants/images'
import { HOME_BALANCE, HOME_USER } from '../../../constants/data'
import { icons } from '../../../constants/icon'
import { formatCurrency } from '../../../lib/utils'
import dayjs from 'dayjs'
const SafeAreaView = styled(RNSafeAreaView)

const index = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <View className="home-header">
        <View className="home-user">
          <Image source={images.avatar} className="home-avatar" />
          <Text className="home-user-name">{HOME_USER.name}</Text>
          <Image source={icons.add} className="home-add-icon"/>
        </View>
      </View>

      <View className="home-balance-card">
        <Text className="home-balance-lable text-white text-xl font-sans-bold">Balance</Text>
        <View className="home-balance-row">
          <Text className="home-balance-amount">{formatCurrency(HOME_BALANCE.amount)}</Text>
          <Text className="home-balance-data text-white text-xl font-sans-bold">
            {dayjs(HOME_BALANCE.nextRenewalDate).format('MM/DD')}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default index