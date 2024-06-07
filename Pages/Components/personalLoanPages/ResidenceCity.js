import {useState} from 'react';
import {RadioButton} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, Image, Text, View, StatusBar} from 'react-native';

export default function ResidenceCity({navigation}) {
  const [checked, setChecked] = useState('');

  async function movetoResidenceTypePage(cityNameChecked) {
    await AsyncStorage.setItem('cityName', cityNameChecked);
    navigation.navigate('ResidenceType');
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
          <Text style={styles.subHeading}>Step 5/8</Text>
        </Text>

        <View style={{marginTop: 10}}>
          <Text style={styles.mainHeading}>Select your Residence City</Text>
        </View>
      </View>
      <RadioButton.Group
        onValueChange={newValue => setChecked(newValue)}
        value={checked}>
        <View style={styles.row}>
          <View
            style={styles.column}
            onTouchStart={() => (
              setChecked('Delhi'), movetoResidenceTypePage('Delhi')
            )}>
            <View style={styles.row}>
              <View style={{flex: 11}}>
                <Text style={styles.radioHeading}>Delhi</Text>
              </View>
              <View style={{flex: 4.5, marginTop: -13, marginLeft: -40}}>
                <RadioButton.Item value="Delhi" />
              </View>
            </View>
          </View>
          <View
            style={styles.column}
            onTouchStart={() => (
              setChecked('Mumbai'), movetoResidenceTypePage('Mumbai')
            )}>
            <View style={styles.row}>
              <View style={{flex: 11}}>
                <Text style={styles.radioHeading}>Mumbai</Text>
              </View>
              <View style={{flex: 4.5, marginTop: -13, marginLeft: -40}}>
                <RadioButton.Item value="Mumbai" />
              </View>
            </View>
          </View>
        </View>

        <View style={{marginTop: 40}}>
          <View style={styles.row}>
            <View
              style={styles.column}
              onTouchStart={() => (
                setChecked('pune'), movetoResidenceTypePage('pune')
              )}>
              <View style={styles.row}>
                <View style={{flex: 11}}>
                  <Text style={styles.radioHeading}>pune</Text>
                </View>
                <View style={{flex: 4.5, marginTop: -13, marginLeft: -40}}>
                  <RadioButton.Item value="pune" />
                </View>
              </View>
            </View>
            <View
              style={styles.column}
              onTouchStart={() => (
                setChecked('Chennai'), movetoResidenceTypePage('Chennai')
              )}>
              <View style={styles.row}>
                <View style={{flex: 11}}>
                  <Text style={styles.radioHeading}>Chennai</Text>
                </View>
                <View style={{flex: 4.5, marginTop: -13, marginLeft: -40}}>
                  <RadioButton.Item value="Chennai" />
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
                setChecked('Bengaluru'), movetoResidenceTypePage('Bengaluru')
              )}>
              <View style={styles.row}>
                <View style={{flex: 11}}>
                  <Text style={styles.radioHeading}>Bengaluru</Text>
                </View>
                <View style={{flex: 4.5, marginTop: -13, marginLeft: -40}}>
                  <RadioButton.Item value="Bengaluru" />
                </View>
              </View>
            </View>
            <View
              style={styles.column}
              onTouchStart={() => (
                setChecked('Hyderabad'), movetoResidenceTypePage('Hyderabad')
              )}>
              <View style={styles.row}>
                <View style={{flex: 11}}>
                  <Text style={styles.radioHeading}>Hyderabad</Text>
                </View>
                <View style={{flex: 4.5, marginTop: -13, marginLeft: -40}}>
                  <RadioButton.Item value="Hyderabad" />
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
                setChecked('Kolkata'), movetoResidenceTypePage('Kolkata')
              )}>
              <View style={styles.row}>
                <View style={{flex: 11}}>
                  <Text style={styles.radioHeading}>Kolkata</Text>
                </View>
                <View style={{flex: 4.5, marginTop: -13, marginLeft: -40}}>
                  <RadioButton.Item value="Kolkata" />
                </View>
              </View>
            </View>
            <View
              style={styles.column}
              onTouchStart={() => (
                setChecked('Jaipur'), movetoResidenceTypePage('Jaipur')
              )}>
              <View style={styles.row}>
                <View style={{flex: 11}}>
                  <Text style={styles.radioHeading}>Jaipur</Text>
                </View>
                <View style={{flex: 4.5, marginTop: -13, marginLeft: -40}}>
                  <RadioButton.Item value="Jaipur" />
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
        View All Cities
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
