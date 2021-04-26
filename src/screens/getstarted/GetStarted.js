import React, { Component } from 'react';
import { View, Text,Image,TouchableOpacity, ImageBackground } from 'react-native';
import Images from '../../assets/Images';
import Styles from '../../screens/getstarted/Styles';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import AppColors from '../../utils/AppColors';
import CustomSliderView from '../../components/CustomSliderView';
import STRINGS from '../../localization';


export default class GetStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,

    };
  }

  render() {
    const { currentIndex } = this.state
    return (
      <View style={Styles.container}>
        <View style={Styles.topView}>
        <Image resizeMode='contain' style={Styles.logoStyle} source={Images.landing_logo}/>
      </View>
      <ImageBackground  resizeMode='stretch' source={Images.bgWelcome} style={Styles.inner_container}>

        <View style={{height: heightPercentageToDP('45%')}}>
          <SwiperFlatList    
                        onChangeIndex={(a, b) => this.setState({ currentIndex: a.index })}
                        paginationActiveColor='yellow'
                        paginationDefaultColor='green'
                        data={[{ img: Images.sport1 }, { img: Images.sport1 }, { img: Images.sport1 }]}
                        index={currentIndex}
                        renderItem={({ item }) =>
                            <CustomSliderView img={item.img} />
                        }                       
                        PaginationComponent={({ item }) =>
                            <View style={Styles.bottomView}>
                                <View style={[Styles.indicatorView, { height: widthPercentageToDP('1.5'), backgroundColor: currentIndex === 0 ?  AppColors.BLUE : AppColors.WHITE }]} />
                                <View style={[Styles.indicatorView, { height: widthPercentageToDP('1.5'), backgroundColor: currentIndex === 1 ?  AppColors.BLUE : AppColors.WHITE}]} />
                                <View style={[Styles.indicatorView, { height:  widthPercentageToDP('1.5'), backgroundColor: currentIndex === 2 ? AppColors.BLUE : AppColors.WHITE}]} />
                            </View>
                        }
                        showPagination
                    >
                    </SwiperFlatList>
                    </View>

       <Text style={Styles.welcomeText}>{STRINGS.WELCOME}</Text>
       <Text style={Styles.textStyle}>{STRINGS.WELCOME_TEXT}</Text>



       <TouchableOpacity onPress={()=> this.props.navigation.navigate('TermsService')} style={[Styles.button_container]}>
                <Text style={[{ opacity:2.0}, Styles.button_text]}>{STRINGS.GET_STARTED}</Text>
            </TouchableOpacity>

       </ImageBackground>

      

      </View>
    );
  }
}
