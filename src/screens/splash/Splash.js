import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import Images from '../../assets/Images';
import Styles from './Styles';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import AppColors from '../../utils/AppColors';
import STRINGS from '../../localization';
import { Rating, AirbnbRating } from 'react-native-ratings';
import StarRating from 'react-native-star-rating';



export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount:5
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('GetStarted')
    }, 3000)
  }

 


  render() {
    return (
      <LinearGradient colors={AppColors.gradientColours} style={Styles.container}>
        <Image style={Styles.logo}
          resizeMode='contain'
          source={Images.landing_logo}>
        </Image>
        <Text style={[Styles.nocomments,{ marginTop: heightPercentageToDP('7%')}]}>{STRINGS.NOCOMMENTS}</Text>

       <View style={{marginTop:17}}>

        <StarRating
        disabled={true}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={5}
        starSize={22}
        emptyStarColor='#33c2df'
        fullStarColor='#33c2df'
        rating={this.state.starCount}
      />
      </View>
         <Text style={[Styles.nocomments,{ marginTop: heightPercentageToDP('2%')}]}>{STRINGS.JUSTSTART}</Text>
      </LinearGradient>
    );
  }
}
