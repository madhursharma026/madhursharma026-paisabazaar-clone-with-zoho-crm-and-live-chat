import {useState} from 'react';
import {RadioButton} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, Image, Text, View, StatusBar} from 'react-native';

export default function ResidenceType({navigation}) {
  const [checked, setChecked] = useState('');

  async function movetoLoanAmountPage(residenceTypeChecked) {
    await AsyncStorage.setItem('residenceType', residenceTypeChecked);
    navigation.navigate('LoanAmount');
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <Image
        style={{
          width: '50%',
          height: '10%',
          objectFit: 'contain',
          marginLeft: 10,
        }}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Paisabazaar-logo.svg/2560px-Paisabazaar-logo.svg.png',
        }}
      />
      <View style={styles.hrStyle} />
      <View style={{paddingLeft: 20, paddingRight: 20}}>
        <Text style={{fontSize: 30, fontWeight: '700'}}>←</Text>
        <Text style={{textAlign: 'right', marginTop: -20}}>
          <Text style={styles.subHeading}>Step 6/8</Text>
        </Text>

        <View style={{marginTop: 10}}>
          <Text style={styles.mainHeading}>Select your Residence Type</Text>
        </View>
      </View>
      <RadioButton.Group
        onValueChange={newValue => setChecked(newValue)}
        value={checked}>
        <View style={styles.row}>
          <View
            style={styles.column}
            onTouchStart={() => (
              setChecked('OwnedBySelfORSpouse'),
              movetoLoanAmountPage('OwnedBySelfORSpouse')
            )}>
            <View style={styles.row}>
              <View style={{flex: 1}}>
                <Text style={styles.radioHeading}>Owned by Self / Spouse</Text>
              </View>
              <View style={{flex: 1, marginTop: -13, marginLeft: -40}}>
                <RadioButton.Item value="OwnedBySelfORSpouse" />
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop: 40}}>
          <View style={styles.row}>
            <View
              style={styles.column}
              onTouchStart={() => (
                setChecked('OwnedByParentsORSiblings'),
                movetoLoanAmountPage('OwnedByParentsORSiblings')
              )}>
              <View style={styles.row}>
                <View style={{flex: 11}}>
                  <Text style={styles.radioHeading}>
                    Owned by Parents / Siblings
                  </Text>
                </View>
                <View style={{flex: 4.5, marginTop: -13, marginLeft: -40}}>
                  <RadioButton.Item value="OwnedByParentsORSiblings" />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop: 40}}>
          <View style={styles.row}>
            <View
              style={styles.column}
              onTouchStart={() => (
                setChecked('RentedWithFamilyORStayingAlone'),
                movetoLoanAmountPage('RentedWithFamilyORStayingAlone')
              )}>
              <View style={styles.row}>
                <View style={{flex: 11}}>
                  <Text style={styles.radioHeading}>
                    Rented With Family / Staying Alone
                  </Text>
                </View>
                <View style={{flex: 4.5, marginTop: -13, marginLeft: -40}}>
                  <RadioButton.Item value="RentedWithFamilyORStayingAlone" />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop: 40}}>
          <View style={styles.row}>
            <View
              style={styles.column}
              onTouchStart={() => (
                setChecked('PayingGuestORHostel'),
                movetoLoanAmountPage('PayingGuestORHostel')
              )}>
              <View style={styles.row}>
                <View style={{flex: 11}}>
                  <Text style={styles.radioHeading}>Paying Guest / Hostel</Text>
                </View>
                <View style={{flex: 4.5, marginTop: -13, marginLeft: -40}}>
                  <RadioButton.Item value="PayingGuestORHostel" />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop: 40}}>
          <View style={styles.row}>
            <View
              style={styles.column}
              onTouchStart={() => (
                setChecked('CompanyProvided'),
                movetoLoanAmountPage('CompanyProvided')
              )}>
              <View style={styles.row}>
                <View style={{flex: 11}}>
                  <Text style={styles.radioHeading}>Company Provided</Text>
                </View>
                <View style={{flex: 4.5, marginTop: -13, marginLeft: -40}}>
                  <RadioButton.Item value="CompanyProvided" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </RadioButton.Group>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: 'white',
    height: '100%',
  },
  hrStyle: {
    marginTop: 10,
    width: '100%',
    height: 1,
    backgroundColor: '#D3D3D3',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 11,
  },
  column: {
    flex: 1,
    height: 50,
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: '#94999D',
    borderRadius: 10,
  },
  mainHeading: {
    fontSize: 24,
    color: 'blue',
    fontWeight: '600',
    lineHeight: 40,
  },
  subHeading: {
    fontSize: 11,
    color: 'blue',
    fontWeight: '500',
  },
  radioHeading: {
    fontSize: 14,
    color: 'blue',
    fontWeight: '500',
  },
});
