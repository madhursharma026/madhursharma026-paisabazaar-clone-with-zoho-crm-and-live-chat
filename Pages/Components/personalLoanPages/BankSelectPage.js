import {useState} from 'react';
import {RadioButton} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, Image, Text, View, StatusBar} from 'react-native';

export default function BankSelectPage({navigation}) {
  const [checked, setChecked] = useState('');

  async function movetoEmploymentDetailsPage(bankNameChecked) {
    await AsyncStorage.setItem('bankName', bankNameChecked);
    navigation.navigate('EmploymentDetails');
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
          <Text style={styles.subHeading}>Step 3/8</Text>
        </Text>

        <View style={{marginTop: 10}}>
          <Text style={styles.mainHeading}>
            Select your Salary Bank Account
          </Text>
        </View>
      </View>
      <RadioButton.Group
        onValueChange={newValue => setChecked(newValue)}
        value={checked}>
        <View style={styles.row}>
          <View
            style={styles.column}
            onTouchStart={() => (
              setChecked('hdfc'), movetoEmploymentDetailsPage('hdfc')
            )}>
            <View style={styles.row}>
              <View style={{flex: 11}}>
                <Text style={styles.radioHeading}>
                  <Image
                    style={{width: 20, height: 20}}
                    source={{
                      uri: 'https://www.gurpreetsaluja.com/wp-content/uploads/2020/09/HDFC-LOGO.png',
                    }}
                  />{' '}
                  HDFC
                </Text>
              </View>
              <View style={{flex: 4.5, marginTop: -13, marginLeft: -40}}>
                <RadioButton.Item value="hdfc" />
              </View>
            </View>
          </View>
          <View
            style={styles.column}
            onTouchStart={() => (
              setChecked('sbi'), movetoEmploymentDetailsPage('sbi')
            )}>
            <View style={styles.row}>
              <View style={{flex: 11}}>
                <Text style={styles.radioHeading}>
                  <Image
                    style={{width: 20, height: 20}}
                    source={{
                      uri: 'https://seeklogo.com/images/S/sbi-logo-744E8B0C10-seeklogo.com.png',
                    }}
                  />{' '}
                  SBI
                </Text>
              </View>
              <View style={{flex: 4.5, marginTop: -13, marginLeft: -40}}>
                <RadioButton.Item value="sbi" />
              </View>
            </View>
          </View>
        </View>

        <View style={{marginTop: 40}}>
          <View style={styles.row}>
            <View
              style={styles.column}
              onTouchStart={() => (
                setChecked('icici'), movetoEmploymentDetailsPage('icici')
              )}>
              <View style={styles.row}>
                <View style={{flex: 11}}>
                  <Text style={styles.radioHeading}>
                    <Image
                      style={{width: 20, height: 20}}
                      source={{
                        uri: 'https://companieslogo.com/img/orig/IBN-af38b5c0.png?t=1648383607',
                      }}
                    />{' '}
                    ICICI
                  </Text>
                </View>
                <View style={{flex: 4.5, marginTop: -13, marginLeft: -40}}>
                  <RadioButton.Item value="icici" />
                </View>
              </View>
            </View>
            <View
              style={styles.column}
              onTouchStart={() => (
                setChecked('axis'), movetoEmploymentDetailsPage('axis')
              )}>
              <View style={styles.row}>
                <View style={{flex: 11}}>
                  <Text style={styles.radioHeading}>
                    <Image
                      style={{width: 20, height: 20}}
                      source={{
                        uri: 'https://companieslogo.com/img/orig/AXISBANK.BO-8f59e95b.png?t=1672905040',
                      }}
                    />{' '}
                    Axis
                  </Text>
                </View>
                <View style={{flex: 4.5, marginTop: -13, marginLeft: -40}}>
                  <RadioButton.Item value="axis" />
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
                setChecked('kotak'), movetoEmploymentDetailsPage('kotak')
              )}>
              <View style={styles.row}>
                <View style={{flex: 11}}>
                  <Text style={styles.radioHeading}>
                    <Image
                      style={{width: 20, height: 20}}
                      source={{
                        uri: 'https://assets-netstorage.groww.in/stock-assets/logos/GSTK500247.png',
                      }}
                    />{' '}
                    Kotak
                  </Text>
                </View>
                <View style={{flex: 4.5, marginTop: -13, marginLeft: -40}}>
                  <RadioButton.Item value="kotak" />
                </View>
              </View>
            </View>
            <View
              style={styles.column}
              onTouchStart={() => (
                setChecked('yesbank'), movetoEmploymentDetailsPage('yesbank')
              )}>
              <View style={styles.row}>
                <View style={{flex: 11}}>
                  <Text style={styles.radioHeading}>
                    <Image
                      style={{width: 20, height: 20}}
                      source={{
                        uri: 'https://companieslogo.com/img/orig/YESBANK.NS-a31ff15a.png?t=1603312763',
                      }}
                    />{' '}
                    Yes Bank
                  </Text>
                </View>
                <View style={{flex: 4.5, marginTop: -13, marginLeft: -40}}>
                  <RadioButton.Item value="yesbank" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </RadioButton.Group>
      <Text
        style={{
          textAlign: 'center',
          color: 'blue',
          marginTop: 60,
          fontWeight: '600',
          textDecorationLine: 'underline',
        }}>
        View More
      </Text>
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
