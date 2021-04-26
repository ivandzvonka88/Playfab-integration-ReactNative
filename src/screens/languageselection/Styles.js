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
      welcomeText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: heightPercentageToDP('2%'),
    textAlign: 'center',
    alignSelf: 'center'
  },
  BUTTON_CONTAINER:
  {
    height: heightPercentageToDP('6.5%'),
    width: widthPercentageToDP('90%'),
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
    elevation: 7,
    justifyContent: 'center',
    bottom: 0, position: 'absolute',
    marginBottom: heightPercentageToDP('10%')

  },
  BUTTON_TEXT: {
    width: '100%',
    alignSelf: 'center',
    color: AppColors.WHITE,
    textAlign: 'center',
    fontSize: heightPercentageToDP('2.5%'),
    fontWeight: '600',
  },

})