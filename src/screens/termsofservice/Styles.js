import { StyleSheet} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import AppColors from '../../utils/AppColors'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#595959'
    },
    topView:{
   
        alignItems: 'center',
        height: heightPercentageToDP('25%'),
        width:widthPercentageToDP('100%'),
        backgroundColor:'black'
      },
      logoStyle:{
        marginTop:heightPercentageToDP('10%')
      },
      termText:
      {
        color: 'white',
        fontWeight: '600',
        marginTop: heightPercentageToDP('8%'),
    
        fontSize: heightPercentageToDP('3%'),
        textAlign: 'center',
        alignSelf: 'center'
      },

      textStyle:
      {
        color: 'white',
        fontWeight: '400',
        marginTop: heightPercentageToDP('2%'),
        letterSpacing:1,
        fontSize: heightPercentageToDP('2%'),
        textAlign: 'center',
        alignSelf: 'center'
      },

      term:
      {
        color: AppColors.BLUE,
        fontWeight: '400',
        marginTop: heightPercentageToDP('4%'),
        letterSpacing:1,
        fontSize: heightPercentageToDP('2%'),
        textAlign: 'center',
        alignSelf: 'center',
        textDecorationLine:'underline'
      },

      button_container:{
    height: heightPercentageToDP('6.5%'),
    width: widthPercentageToDP('90%'),
   marginBottom:heightPercentageToDP('10%'),
    backgroundColor: AppColors.BLUE,
    alignSelf: 'center',
    margin: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    borderRadius:5,
    elevation: 7,
    justifyContent: 'center',
    bottom: 0, position: 'absolute',
    

  },
  button_text: {
    width: '100%',
    alignSelf: 'center',
    color: AppColors.WHITE,
    textAlign: 'center',
    fontSize: heightPercentageToDP('2.5%'),
    fontWeight: '500',
  },

})