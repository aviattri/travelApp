import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, dummyData, icons, SIZES} from '../constants/index';

const Ratings = ({
  containerStyle,
  activeColor = COLORS.orange,
  inactiveColor = COLORS.lightOrange3,
  iconStyle,
  userRatings,
  setUserRating,
}) => {
  const [ratings, setRatings] = React.useState(userRatings);

  return (
    <View
      style={{
        flexDirection: 'row',
        ...containerStyle,
      }}>
      {dummyData.ratings.map((item, index) => {
        return (
          <TouchableOpacity
            key={`star-${index}`}
            onPress={() => {
              setRatings(index + 1);
              setUserRating(index + 1);
            }}>
            <Image
              source={icons.starFull}
              style={{
                tintColor: ratings - 1 >= index ? activeColor : inactiveColor,
                ...styles.rateIcon,
                ...iconStyle,
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  rateIcon: {
    height: 15,
    width: 15,
  },
});

export default Ratings;
