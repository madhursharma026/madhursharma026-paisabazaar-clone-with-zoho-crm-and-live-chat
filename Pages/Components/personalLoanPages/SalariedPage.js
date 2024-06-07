import {useState} from 'react';
import {RadioButton} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, Image, Text, View, StatusBar} from 'react-native';

export default function SalariedPage({navigation}) {
  const [checked, setChecked] = useState(null);

  async function movetoBankSelectPage(annualIncomeChecked) {
    await AsyncStorage.setItem('annualIncome', annualIncomeChecked);
    navigation.navigate('BankSelectPage');
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
          <Text style={styles.subHeading}>Step 2/8</Text>
        </Text>

        <View style={{marginTop: 10}}>
          <Text style={styles.mainHeading}>Select your Annual Income</Text>
        </View>
      </View>
      <RadioButton.Group
        onValueChange={newValue => setChecked(newValue)}
        value={checked}>
        <View style={styles.row}>
          <View
            style={styles.column}
            onTouchStart={() => (
              setChecked('3Lac'), movetoBankSelectPage('3Lac')
            )}>
            <View style={styles.row}>
              <View style={{flex: 11}}>
                <Text style={styles.radioHeading}>UpTo {'\u20B9'}3 Lac</Text>
              </View>
              <View style={{flex: 4.5, marginTop: -15}}>
                <RadioButton.Item value="3Lac" />
              </View>
            </View>
          </View>
          <View
            style={styles.column}
            onTouchStart={() => (
              setChecked('3to4Lac'), movetoBankSelectPage('3to4Lac')
            )}>
            <View style={styles.row}>
              <View style={{flex: 11}}>
                <Text style={styles.radioHeading}>UpTo {'\u20B9'}3-4 Lac</Text>
              </View>
              <View style={{flex: 4.5, marginTop: -15, marginLeft: -40}}>
                <RadioButton.Item value="3to4Lac" />
              </View>
            </View>
          </View>
        </View>

        <View style={{marginTop: 40}}>
          <View style={styles.row}>
            <View
              style={styles.column}
              onTouchStart={() => (
                setChecked('4to5Lac'), movetoBankSelectPage('4to5Lac')
              )}>
              <View style={styles.row}>
                <View style={{flex: 11}}>
                  <Text style={styles.radioHeading}>
                    UpTo {'\u20B9'}4-5 Lac
                  </Text>
                </View>
                <View style={{flex: 4.5, marginTop: -15}}>
                  <RadioButton.Item value="4to5Lac" />
                </View>
              </View>
            </View>
            <View
              style={styles.column}
              onTouchStart={() => (
                setChecked('5to10Lac'), movetoBankSelectPage('5to10Lac')
              )}>
              <View style={styles.row}>
                <View style={{flex: 11}}>
                  <Text style={styles.radioHeading}>
                    UpTo {'\u20B9'}5-10 Lac
                  </Text>
                </View>
                <View style={{flex: 4.5, marginTop: -15, marginLeft: -40}}>
                  <RadioButton.Item value="5to10Lac" />
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
                setChecked('10to15Lac'), movetoBankSelectPage('10to15Lac')
              )}>
              <View style={styles.row}>
                <View style={{flex: 15}}>
                  <Text style={styles.radioHeading}>
                    UpTo {'\u20B9'}10-15 Lac
                  </Text>
                </View>
                <View style={{flex: 4.5, marginTop: -15, marginLeft: -40}}>
                  <RadioButton.Item value="10to15Lac" />
                </View>
              </View>
            </View>
            <View
              style={styles.column}
              onTouchStart={() => (
                setChecked('15PlusLac'), movetoBankSelectPage('15PlusLac')
              )}>
              <View style={styles.row}>
                <View style={{flex: 11}}>
                  <Text style={styles.radioHeading}>
                    UpTo {'\u20B9'}15+ Lac
                  </Text>
                </View>
                <View style={{flex: 4.5, marginTop: -15, marginLeft: -40}}>
                  <RadioButton.Item value="15PlusLac" />
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
