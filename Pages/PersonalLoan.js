import {useEffect, useState} from 'react';
import {RadioButton} from 'react-native-paper';
import {
  StyleSheet,
  Image,
  Text,
  View,
  StatusBar,
  Button,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PersonalLoan({navigation}) {
  const [checked, setChecked] = useState('');
  const [response, setResponse] = useState(null);
  const url = 'https://accounts.zoho.in/oauth/v2/token';
  const redirect_uri = 'https://example.com/yourcallback';
  const client_id = '1000.GEQ55HXVSJ01P9O8DQ0S7YUZ9TVIDT';
  const client_secret = 'd05ae10e80fd8f358b6af7378ecaa05a759b2a88fd';
  const code =
    '1000.7dd1a8ab76131150721b8f9afc628db4.fda9e9d55305ac8d46d1baca53e35057';

  function movetoSalariedPage() {
    navigation.navigate('SalariedPage');
  }

  function movetoSelfEmployedBusinessPage() {
    navigation.navigate('BusinessLoan');
  }

  function movetoSelfEmployedProfessionalPage() {
    alert('madhur');
  }

  useEffect(async () => {
    const data = new URLSearchParams();
    data.append('code', code);
    data.append('client_id', client_id);
    data.append('redirect_uri', redirect_uri);
    data.append('client_secret', client_secret);
    data.append('grant_type', 'authorization_code');
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: data.toString(),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      });
      const json = await res.json();
      await AsyncStorage.setItem('refresh_token', json.refresh_token);
      const data1 = new URLSearchParams();
      let refresh_token = json.refresh_token;
      data1.append('client_id', client_id);
      data1.append('client_secret', client_secret);
      data1.append('refresh_token', refresh_token);
      data1.append('grant_type', 'refresh_token');
      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: data1.toString(),
        });
        const json1 = await res.json();
        await AsyncStorage.setItem('access_token', json1.access_token);
      } catch (error) {
        setResponse({error: 'Error fetching access_token'});
      }
    } catch (error) {
      setResponse({error: 'Error fetching refresh_token'});
    }
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Image
          style={{
            width: '50%',
            height: '10%',
            marginLeft: 10,
            objectFit: 'contain',
          }}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Paisabazaar-logo.svg/2560px-Paisabazaar-logo.svg.png',
          }}
        />
        <View style={styles.hrStyle} />
        <View style={{paddingLeft: 20, paddingRight: 20}}>
          <View style={{marginTop: 20}}>
            <Text style={styles.subHeading}>PERSONAL LOAN</Text>
            <Text style={{textAlign: 'right', marginTop: -15}}>
              <Text style={styles.subHeading}>Step 1/8</Text>
            </Text>

            <View style={{marginTop: 20}}>
              <Text style={styles.mainHeading}>
                Select your Employment Type to Start your Loan Process
              </Text>
            </View>
            <RadioButton.Group
              onValueChange={newValue => setChecked(newValue)}
              value={checked}>
              <View
                style={{
                  borderWidth: 1,
                  flexDirection: 'row',
                  padding: 20,
                  marginTop: 10,
                  borderRadius: 10,
                  borderColor: '#D3D3D3',
                }}
                onTouchStart={() => (
                  setChecked('first'), movetoSalariedPage()
                )}>
                <View style={{flex: 7.25}}>
                  <Text style={styles.radioHeading}>Salaried</Text>
                  <Text style={styles.radioSubHeading}>
                    Receive fixed amount of income every month
                  </Text>
                </View>
                <View style={{flex: 2, height: 10, textAlign: 'center'}}>
                  <RadioButton.Item label="First item" value="first" />
                </View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  flexDirection: 'row',
                  padding: 20,
                  marginTop: 10,
                  borderRadius: 10,
                  borderColor: '#D3D3D3',
                }}
                onTouchStart={() => (
                  setChecked('second'), movetoSelfEmployedBusinessPage()
                )}>
                <View style={{flex: 7.25}}>
                  <Text style={styles.radioHeading}>
                    Self Employed Business
                  </Text>
                  <Text style={styles.radioSubHeading}>Run a business</Text>
                </View>
                <View style={{flex: 2, height: 10, textAlign: 'center'}}>
                  <RadioButton.Item label="Second item" value="second" />
                </View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  flexDirection: 'row',
                  padding: 20,
                  marginTop: 10,
                  borderRadius: 10,
                  borderColor: '#D3D3D3',
                }}
                onTouchStart={() => (
                  setChecked('third'), movetoSelfEmployedBusinessPage()
                )}>
                <View style={{flex: 7.25}}>
                  <Text style={styles.radioHeading}>
                    Self Employed Professional
                  </Text>
                  <Text style={styles.radioSubHeading}>
                    Engage in a profession (Eg: Doctor, C.A, etc)
                  </Text>
                </View>
                <View style={{flex: 2, height: 10, textAlign: 'center'}}>
                  <RadioButton.Item label="Third item" value="third" />
                </View>
              </View>
            </RadioButton.Group>
          </View>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.subHeading}>
            By clicking on proceed, you have read and agreee to the
            Paisabazaar's Credit Report Terms of Use, Paisabazaar's Terms of Use
            & Privacy Policy
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
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
  },
  column: {
    flex: 1,
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
  radioSubHeading: {
    fontSize: 11,
    color: 'gray',
    fontWeight: '500',
  },
  bottomView: {
    marginTop: 25,
    marginBottom: 50,
    paddingHorizontal: 20,
  },
});
