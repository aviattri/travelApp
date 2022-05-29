import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
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
import StartRating from '../components/StarRating';
import {white} from 'react-native-paper/lib/typescript/styles/colors';

const StarReview = ({rate}) => {
  return <StartRating userRatings={rate} />;
};
const IconLabel = ({label, icon}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        resizeMode="cover"
        source={icon}
        style={{
          width: 50,
          height: 50,
        }}
      />
      <Text style={{marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3}}>
        {label}
      </Text>
    </View>
  );
};
const DestinationDetail = ({route, navigation}) => {
  const {details} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header  */}
        <View style={{flex: 2}}>
          <Image
            source={details.img}
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
          />
          {/* Sub Info */}
          <View
            style={[
              {
                marginTop: -SIZES.padding * 2,
                marginHorizontal: 20,
                zIndex: 1,
                borderRadius: 15,
                padding: SIZES.padding,
                backgroundColor: COLORS.white,
              },
              styles.shadow,
            ]}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.shadow}>
                <Image
                  source={details.img}
                  style={{height: 70, width: 70, borderRadius: 15}}
                />
              </View>
              <View
                style={{
                  marginHorizontal: SIZES.radius,
                  justifyContent: 'space-around',
                }}>
                <Text style={{...FONTS.h3}}>Skii Villa</Text>
                <Text style={{color: COLORS.gray, ...FONTS.body3}}>France</Text>
                <StarReview rate={4.5} />
              </View>
            </View>
            <View style={{marginTop: SIZES.radius}}>
              <Text
                style={{
                  color: COLORS.gray,
                  ...FONTS.body3,
                }}>{`Boasting mountain views, Ski View 1 features accommodation with a restaurant and a balcony, around 500 m from Mt. Buller. Featuring a terrace, the apartment is in an area where guests can engage in activities such as fishing and tennis.`}</Text>
            </View>
          </View>
        </View>

        {/* body  */}
        <View style={{flex: 1.5}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: SIZES.height / 3.2,
              paddingHorizontal: SIZES.padding * 2,
              justifyContent: 'space-between',
            }}>
            <IconLabel icon={icons.villa} label="villa" />
            <IconLabel icon={icons.parking} label="parking" />
            <IconLabel icon={icons.wind} label="4 °C " />
          </View>
          <View
            style={{
              marginTop: SIZES.padding,
              paddingHorizontal: SIZES.padding,
            }}>
            <Text style={{...FONTS.h2}}>About</Text>
            <Text
              style={{
                marginTop: SIZES.radius,
                color: COLORS.gray,
                ...FONTS.body3,
              }}>{`The Matterhorn is a mountain of the Alps, straddling the main watershed and border between Switzerland and Italy. It is a large, near-symmetric pyramidal peak in the extended Monte Rosa area of the Pennine Alps, whose summit is 4,478 metres high, making it one of the highest summits in the Alps and Europe`}</Text>
          </View>
        </View>

        {/* Footer */}
        <View
          style={{
            flex: 0.5,
            paddingHorizontal: SIZES.padding,
            marginTop: SIZES.radius,
          }}>
          <LinearGradient
            style={{
              height: 70,
              width: '100%',
              borderRadius: 15,
            }}
            colors={['#edf0fc', '#d6dfff']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  marginHorizontal: SIZES.padding,
                  justifyContent: 'center',
                }}>
                <Text style={{...FONTS.h1}}>$1000</Text>
              </View>
              <TouchableOpacity
                style={{
                  width: 130,
                  height: '80%',
                  marginHorizontal: SIZES.radius,
                }}
                onPress={() => {
                  console.log('pressed');
                }}>
                <LinearGradient
                  style={{
                    flex: 1,
                    marginLeft: SIZES.radius * 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80%',
                    borderRadius: 15,
                  }}
                  colors={['#46aeff', '#5884ff']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}>
                  <Text style={{color: COLORS.white, ...FONTS.h3}}>
                    Booking
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    position: 'relative',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
    height: '100%',
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
export default DestinationDetail;
