import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, images, SIZES} from '../constants';

const Onboarding = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={images.onboardingImage}
          resizeMode="contain"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>
      <View style={styles.banner}>
        <View style={{alignItems: 'center', marginHorizontal: SIZES.padding}}>
          <Text style={{...FONTS.h2}}>Digital Ticket</Text>
          <Text
            style={{
              color: COLORS.gray,
              marginTop: SIZES.padding,
              textAlign: 'center',
              ...FONTS.body3,
            }}>
            Easy Solution to Buy tickets for your travel, business trips,
            transportation, lodging and much more
          </Text>
          <TouchableOpacity
            style={[
              {
                color: COLORS.gray,
                marginTop: SIZES.padding * 2,
                width: '70%',
                height: 50,
                textAlign: 'center',
              },
              styles.shadow,
            ]}
            onPress={() => navigation.navigate('Home')}>
            <LinearGradient
              style={{
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.radius,
              }}
              colors={['#46aeff', '#5884ff']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Text style={{color: COLORS.white, ...FONTS.h3}}>Start !</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  banner: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default Onboarding;
