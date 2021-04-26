import React, { Component } from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Images from '../../assets/Images';
import STRINGS from '../../localization';
import Styles from './Styles';
import DropDownPicker from 'react-native-dropdown-picker';


export default class LanguageSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedLanguage:'', 
        setLanguage:'',

    };
  }
  checkSelection = () =>{
      if(this.state.selectedLanguage ===''){
          alert('Please select laanguage ')
      }
      else{
          alert(this.state.selectedLanguage)
      }
  }

  render() {
      const { selectedLanguage } = this.state;
    return (
      <View style={Styles.container}>
         <View style={Styles.topView}>
        <Image resizeMode='contain' style={Styles.logoStyle} source={Images.landing_logo}/>
       </View>

      <Text style={[Styles.welcomeText,{marginTop:heightPercentageToDP('10%')}]}>{STRINGS.YOUR_LANGUAGE}</Text>

      <DropDownPicker    
    items={[
        {label: 'English', value: 'english'},
        {label: 'Spanish', value: 'spanish',},
    ]}
    // showArrow={true}
    defaultValue={selectedLanguage}
    containerStyle={{marginTop:50,height: 40,width:widthPercentageToDP('90%'),alignSelf:'center',borderRadius:0}}
    style={{backgroundColor: 'black',}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    labelStyle={{color:'white'}}
    dropDownStyle={{backgroundColor: 'black'}}
    arrowColor='white'
    placeholder='Please select language:'
    arrowStyle={{borderLeftWidth:1,borderLeftColor:'white',paddingLeft:10}}
    onChangeItem={item => this.setState({selectedLanguage:item.value})}
/>


<TouchableOpacity style={[Styles.BUTTON_CONTAINER]} onPress={() => this.checkSelection()}>
                <Text style={[{ opacity:2.0}, Styles.BUTTON_TEXT]}>{STRINGS.ACCEPT}</Text>
            </TouchableOpacity>

      </View>
    );
  }
}
