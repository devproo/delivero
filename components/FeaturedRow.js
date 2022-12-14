import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className='mt-4 flex-row justify-between items-center px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00CC88' />
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {/* restaurants cards */}
        <RestaurantCard
          id={123}
          imgUrl='https://links.papareact.com/gn7'
          title='Yol Sushi'
          rating='4.5'
          genre='Japanese'
          address='123 Main St'
          short_description='This is a Test description'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl='https://links.papareact.com/gn7'
          title='Yol Sushi'
          rating='4.5'
          genre='Japanese'
          address='123 Main St'
          short_description='This is a Test description'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl='https://links.papareact.com/gn7'
          title='Yol Sushi'
          rating='4.5'
          genre='Japanese'
          address='123 Main St'
          short_description='This is a Test description'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl='https://links.papareact.com/gn7'
          title='Yol Sushi'
          rating='4.5'
          genre='Japanese'
          address='123 Main St'
          short_description='This is a Test description'
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow
