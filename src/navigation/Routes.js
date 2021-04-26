import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Splash from "../screens/splash/Splash"
import GetStarted from '../screens/getstarted/GetStarted'
import TermsService from '../screens/termsofservice/TermsService'
import LanguageSelection from '../screens/languageselection/LanguageSelection'



export function AppNavigation() {
    return(
        <NavigationContainer>
           <OnBoardNavigation/>
        </NavigationContainer>
    )
}

const OnBoardStack = createStackNavigator()
function OnBoardNavigation ()  {
    return (
            <OnBoardStack.Navigator initialRouteName='Splash'screenOptions={{headerShown:false}}>
                <OnBoardStack.Screen
                  name="Splash"
                  component={Splash}/>

                  <OnBoardStack.Screen
                  name="GetStarted"
                  component={GetStarted}/>

                  <OnBoardStack.Screen
                  name="TermsService"
                  component={TermsService}/>

                  <OnBoardStack.Screen
                  name="LanguageSelection"
                  component={LanguageSelection}/>


            </OnBoardStack.Navigator>
    )
}
 