import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppColors from '../../utils/AppColors';


export default StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
      },

      logo:{
      
        marginTop:hp('35%'),
        alignSelf:'center',
      },
      nocomments:{
        letterSpacing:5,
        fontWeight:'500', 
        color: AppColors.WHITE, 
        fontSize: hp('2.5%') }

})
