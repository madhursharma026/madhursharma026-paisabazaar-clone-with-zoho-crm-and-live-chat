import {useState} from 'react';
import {RadioButton} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  Image,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function EmploymentDetails({navigation}) {
  const [text, setText] = useState('');

  async function movetoResidenceCityPage() {
    if (text === '') {
      alert('Please Fill the details');
    } else {
      await AsyncStorage.setItem('companyName', text);
      navigation.navigate('ResidenceCity');
    }
  }
  const handleTextChange = text => {
    setText(text);
  };

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
          <Text style={styles.subHeading}>Step 4/8</Text>
        </Text>

        <View style={{marginVertical: 10}}>
          <Text style={styles.mainHeading}>
            Please provide your Employment Details
          </Text>
        </View>
        <Text>Company Name</Text>
        <TextInput
          placeholder="Enter your Company Name"
          style={{height: 40, borderColor: 'gray', borderBottomWidth: 1}}
          onChangeText={handleTextChange}
          value={text}
        />
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructions}>
            Type slowly to select your company
          </Text>
        </View>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.buttonOutside}
          onPress={() => movetoResidenceCityPage()}>
          <Text style={styles.buttonInside}>Proceed</Text>
        </TouchableOpacity>
      </View>
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
  mainHeading: {
    fontSize: 24,
    color: 'blue',
    fontWeight: '600',
    lineHeight: 40,
  },
  instructionsContainer: {
    height: 20,
    marginTop: 5,
  },
  instructions: {
    fontSize: 12,
    color: '#999',
  },
  bottomView: {
    height: 50,
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  subHeading: {
    fontSize: 11,
    color: 'blue',
    fontWeight: '500',
  },
  buttonOutside: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonInside: {
    color: '#fff',
    fontSize: 17,
  },
});
