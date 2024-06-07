import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function FirstPage() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <Image
          style={{width: '50%', height: '10%', objectFit: 'contain'}}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Paisabazaar-logo.svg/2560px-Paisabazaar-logo.svg.png',
          }}
        />
        <Image
          style={styles.illustration}
          source={{
            uri: 'https://t4.ftcdn.net/jpg/04/28/75/97/360_F_428759715_jsOPITlaytE3QXc2yI1D4U6uwZdVGkRp.jpg',
          }}
        />
        <Text style={styles.mainHeading}>Single Click Sign-In</Text>
        <Text style={styles.subHeading}>
          Track your Credit Score, card & Loan applications at one place
        </Text>
        <TouchableOpacity style={styles.buttonOutside}>
          <Text style={styles.buttonInside}>SIGN IN WITH GOOGLE</Text>
        </TouchableOpacity>
        <View style={styles.dividerContainer}>
          <View style={styles.hrStyle} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.hrStyle} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>SIGN IN WITH MOBILE NUMBER</Text>
        </TouchableOpacity>
        <View style={styles.containerBottom}>
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
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  container: {
    width: '100%',
    paddingTop: 35,
    alignItems: 'center',
  },
  illustration: {
    height: 200,
    width: '100%',
    resizeMode: 'contain',
  },
  mainHeading: {
    fontSize: 20,
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 15,
    marginTop: 5,
    color: 'gray',
    maxWidth: 300,
    lineHeight: 22,
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonOutside: {
    padding: 10,
    width: '85%',
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#D2493D',
  },
  buttonInside: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  dividerContainer: {
    width: '85%',
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hrStyle: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  orText: {
    width: 50,
    color: 'gray',
    textAlign: 'center',
  },
  link: {
    color: 'blue',
  },
  containerBottom: {
    padding: 20,
    paddingTop: 30,
  },
  footerText: {
    color: 'gray',
    marginBottom: 50,
    textAlign: 'center',
  },
});
