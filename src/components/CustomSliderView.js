import React, { Component } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const CustomSliderView = props => {
  return (
    <View style={{ marginTop:hp('7%'), width: wp('100%'), height: ('45%'), backgroundColor: 'transparent' }}>
      <ImageBackground 
      source={props.img} 
      style={{  overflow: 'hidden',alignSelf: 'center', 
      borderRadius: 30, borderWidth: 2, 
      borderColor: 'transparent',backgroundColor:'transparent',
      width: hp('40%'), height: hp('30%') }}>
      </ImageBackground>
    </View>
  );
}

export default CustomSliderView;