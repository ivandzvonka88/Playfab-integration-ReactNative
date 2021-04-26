import React, { Component } from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';
import Images from '../../assets/Images';
import STRINGS from '../../localization';
import Styles from './Styles';




export default class TermsService extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={Styles.container}>
        <View style={Styles.topView}>
        <Image resizeMode='contain' style={Styles.logoStyle} source={Images.landing_logo}/>

      </View>

      <Text style={Styles.termText}>{STRINGS.TERMS}</Text>
      <Text style={Styles.textStyle}>{STRINGS.TERM_CONTENT}</Text>
      <TouchableOpacity  onPress={()=> alert("Content coming soon")}>

      <Text style={Styles.term}>{STRINGS.VIEW_TERM}</Text>
      </TouchableOpacity>
   


      <TouchableOpacity onPress={()=> this.props.navigation.navigate('LanguageSelection')} style={Styles.button_container}>
                <Text style={[{ opacity:2.0}, Styles.button_text]}>{STRINGS.ACCEPT}</Text>
            </TouchableOpacity>
      


     


      </View>
    );
  }
}
