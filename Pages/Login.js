// import {Button} from 'react-native';

// const Login = ({navigation}) => {
//   return (
//     <Button title="Homepage" onPress={() => navigation.navigate('Homepage')} />
//   );
// };

// export default Login;

import {
  StyleSheet,
  Image,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Switch,
  ScrollView,
} from 'react-native';
import {useState} from 'react';

export default function Login({navigation}) {
  const [text, setText] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleTextChange = text => {
    setText(text);
  };
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <Image
          style={{width: '50%', height: '10%', objectFit: 'contain'}}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Paisabazaar-logo.svg/2560px-Paisabazaar-logo.svg.png',
          }}
        />
        <View style={{width: '85%'}}>
          <Text style={styles.mainHeading}>Login with Mobile Number</Text>
          <Text style={{color: 'black'}}>Mobile Number</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderBottomWidth: 1}}
            onChangeText={handleTextChange}
            value={text}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.subHeading}>Get Updates on WhatsApp</Text>
          <Switch
            trackColor={{false: 'gray', true: 'ebf5ff '}}
            thumbColor={isEnabled ? 'blue' : 'white'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonOutside}
          onPress={() => navigation.navigate('Homepage')}>
          <Text style={styles.buttonInside}>Send OTP</Text>
        </TouchableOpacity>
        <View style={{padding: 30}}>
          <Text style={styles.footerText}>
            By continuing, you agree with our Privacy Policy, Credit Report
            Terms of Use and Terms of Use
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    width: '100%',
    paddingTop: 25,
    alignItems: 'center',
  },
  mainHeading: {
    fontSize: 20,
    marginTop: 20,
    color: 'black',
    marginBottom: 30,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonOutside: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 5,
    width: '85%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonInside: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 25,
  },
  subHeading: {
    marginRight: 16,
    fontSize: 14,
    fontWeight: 'bold',
  },
  footerText: {
    color: 'gray',
    marginBottom: 50,
    textAlign: 'center',
  },
});
