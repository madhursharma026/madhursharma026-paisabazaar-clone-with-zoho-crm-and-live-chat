import Login from './Pages/Login';
import React, {useEffect} from 'react';
import Homepage from './Pages/Homepage';
import FirstPage from './Pages/FirstPage';
import PersonalLoan from './Pages/PersonalLoan';
import {LogBox, Platform, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ZohoSalesIQ} from 'react-native-zohosalesiq-mobilisten';
import LoanAmount from './Pages/Components/personalLoanPages/LoanAmount';
import BestOffers from './Pages/Components/personalLoanPages/BestOffers';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SalariedPage from './Pages/Components/personalLoanPages/SalariedPage';
import ResidenceCity from './Pages/Components/personalLoanPages/ResidenceCity';
import ResidenceType from './Pages/Components/personalLoanPages/ResidenceType';
import BankSelectPage from './Pages/Components/personalLoanPages/BankSelectPage';
import BusinessLoan from './Pages/Components/SelfEmployedBusinessPages/BusinessLoan';
import EmploymentDetails from './Pages/Components/personalLoanPages/EmploymentDetails';

LogBox.ignoreAllLogs();
const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    const appKey =
      Platform.OS === 'ios'
        ? '1Qo6N6%2F7rvwzKH6RWBOWWzcdQRDhA0saocXxGNfPATja1fn%2F83z9FRt9hPDX4JvB_in'
        : '1Qo6N6%2F7rvwzKH6RWBOWWzcdQRDhA0saocXxGNfPATja1fn%2F83z9FRt9hPDX4JvB_in';
    const accessKey =
      Platform.OS === 'ios'
        ? '7%2Bg5yyf7%2FhLiDdJjFy0e7m0ANdRoYN5IzNrqRgXrtTYgSDLhSPYXT2FqY8INgAl9w7qhbW66hnYzfIOTBnSMHZjtsbxVyLODaG%2FyE4gPKRRNBg5%2FIdtV2w%3D%3D'
        : '7%2Bg5yyf7%2FhLiDdJjFy0e7uNFCCspFmR3nUGagDYuSolvyJJLNzIzEYWocBh9FVhVLOJ%2BN8uCLZiBo0BuSjRcXyjDgxTqoSqMoiMJiqLZx1jEGZQLTS5Fwg%3D%3D';

    ZohoSalesIQ.initWithCallback(appKey, accessKey, success => {
      if (success) {
        ZohoSalesIQ.Launcher.show(ZohoSalesIQ.Launcher.VisibilityMode.ALWAYS);
      } else {
        console.error('Zoho SalesIQ initialization failed');
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PersonalLoan"
          component={PersonalLoan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SalariedPage"
          component={SalariedPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BankSelectPage"
          component={BankSelectPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EmploymentDetails"
          component={EmploymentDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResidenceCity"
          component={ResidenceCity}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResidenceType"
          component={ResidenceType}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoanAmount"
          component={LoanAmount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BestOffers"
          component={BestOffers}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BusinessLoan"
          component={BusinessLoan}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
