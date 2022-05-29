import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  FlatList,
} from 'react-native';
import React from 'react';
import {
  COLORS,
  SIZES,
  images,
  icons,
  FONTS,
  dummyData,
} from '../constants/index';
import LinearGradient from 'react-native-linear-gradient';

const OptionItem = ({icon, bgColor, label}) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => console.log('')}>
      <View style={[styles.shadow, {width: 60, height: 60}]}>
        <LinearGradient
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
          }}
          colors={bgColor}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <Image
            source={icon}
            style={{height: 30, width: 30, tintColor: COLORS.white}}
          />
        </LinearGradient>
      </View>
      <Text style={{marginTop: SIZES.base, color: COLORS.gray, ...FONTS.h4}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
const Home = ({navigation}) => {
  const [destinations, setDestinations] = React.useState(
    dummyData.destinations,
  );
  function renderDestination(item, index) {
    var destinationStyle = {};
    if (index == 0) {
      destinationStyle = {marginLeft: SIZES.padding};
    }
    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          marginHorizontal: SIZES.base,
          ...destinationStyle,
        }}
        onPress={() => {
          navigation.navigate('DestinationDetail');
        }}>
        <Image
          source={item.img}
          resizeMode="cover"
          style={{width: SIZES.width * 0.28, height: '82%', borderRadius: 5}}
        />
        <Text
          style={{
            marginTop: SIZES.radius / 2,
            ...FONTS.h4,
            paddingBottom: SIZES.base,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      {/* Banner */}
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.base,
        }}>
        <Image
          resizeMode="contain"
          source={images.homeBanner}
          style={{
            height: '100%',
            width: '100%',
            borderRadius: 15,
          }}
        />
      </View>
      {/* Options */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.base,
          }}>
          <OptionItem
            icon={icons.airplane}
            bgColor={['#46aeff', '#5884ff']}
            label="flight"
          />
          <OptionItem
            icon={icons.taxi}
            bgColor={['#fddf90', '#fcda13']}
            label="taxi"
          />
          <OptionItem
            icon={icons.train}
            bgColor={['#e973ad', '#da5df2']}
            label="train"
          />
          <OptionItem
            icon={icons.bus}
            bgColor={['#fcaba8', '#fe6bba']}
            label="bus"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.base,
          }}>
          <OptionItem
            icon={icons.bed}
            bgColor={['#ffc465', '#5884ff']}
            label="Hotel"
          />
          <OptionItem
            icon={icons.eat}
            bgColor={['#46aeff', '#fca397']}
            label="Eats"
          />
          <OptionItem
            icon={icons.compass}
            bgColor={['#7be993', '#46caff']}
            label="bus"
          />
          <OptionItem
            icon={icons.event}
            bgColor={['#fca397', '#fcb667']}
            label="event"
          />
        </View>
      </View>
      {/* Details */}
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.padding,
            ...FONTS.h3,
          }}>
          Destination
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={destinations}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => renderDestination(item, index)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.53,
    shadowRadius: 3.97,
    elevation: 5,
  },
});
export default Home;
