import {useState} from 'react';
import {RadioButton, Checkbox} from 'react-native-paper';
import {
  StyleSheet,
  Image,
  Text,
  View,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function BusinessLoan({navigation}) {
  const [text, setText] = useState('');
  const [checked, setChecked] = useState('');
  const [checkBoxchecked, setCheckBoxChecked] = useState(false);

  const handleTextChange = text => {
    setText(text);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Image
          style={{
            width: '50%',
            height: '2%',
            objectFit: 'contain',
          }}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Paisabazaar-logo.svg/2560px-Paisabazaar-logo.svg.png',
          }}
        />
        <View style={styles.hrStyle} />
        <View style={{paddingLeft: 20, paddingRight: 20}}>
          <View style={{marginTop: 10}}>
            <Text style={styles.mainHeading}>Business Loan</Text>
            <Text style={styles.instructions}>
              You are two step away from best Offers
            </Text>
          </View>
          <View style={{width: '100%', marginTop: 20}}>
            <Text>Desired Loan Amount*</Text>
            <TextInput
              placeholder="Loan Amount - Eg. ₹ 5,00,000"
              style={{height: 40, borderColor: 'gray', borderBottomWidth: 1}}
              onChangeText={handleTextChange}
              value={text}
            />
          </View>
          <View style={{width: '100%', marginTop: 20}}>
            <Text>Employment Type*</Text>
            <TextInput
              placeholder="Nature of Employment - Eg. Professional"
              style={{height: 40, borderColor: 'gray', borderBottomWidth: 1}}
              onChangeText={handleTextChange}
              value={text}
            />
          </View>
          <View style={{width: '100%', marginTop: 20}}>
            <Text>Net Monthly Income*</Text>
            <TextInput
              placeholder="Net Monthly Income - Eg. ₹ 50,000"
              style={{height: 40, borderColor: 'gray', borderBottomWidth: 1}}
              onChangeText={handleTextChange}
              value={text}
            />
          </View>
          <View style={{width: '100%', marginTop: 20}}>
            <Text>Salary Received In*</Text>
            <TextInput
              placeholder="Enter your Bank Name"
              style={{height: 40, borderColor: 'gray', borderBottomWidth: 1}}
              onChangeText={handleTextChange}
              value={text}
            />
          </View>
          <View style={{width: '100%', marginTop: 20}}>
            <Text>Full Name*</Text>
            <TextInput
              placeholder="Enter Your Name"
              style={{height: 40, borderColor: 'gray', borderBottomWidth: 1}}
              onChangeText={handleTextChange}
              value={text}
            />
          </View>
          <View style={{width: '100%', marginTop: 20}}>
            <Text>PAN Number*</Text>
            <TextInput
              placeholder="Enter Your PAN Here"
              style={{height: 40, borderColor: 'gray', borderBottomWidth: 1}}
              onChangeText={handleTextChange}
              value={text}
            />
          </View>
          <View style={{width: '100%', marginTop: 20}}>
            <Text>Date of Birth*</Text>
            <TextInput
              placeholder="DD-MM-YYYY"
              style={{height: 40, borderColor: 'gray', borderBottomWidth: 1}}
              onChangeText={handleTextChange}
              value={text}
            />
          </View>
          <View style={{width: '100%', marginTop: 20}}>
            <Text>Pin Code*</Text>
            <TextInput
              placeholder="Enter Your PinCode Here"
              style={{height: 40, borderColor: 'gray', borderBottomWidth: 1}}
              onChangeText={handleTextChange}
              value={text}
            />
          </View>
          <View style={{width: '100%', marginTop: 20}}>
            <Text>Gender*</Text>
            <RadioButton.Group
              onValueChange={newValue => setChecked(newValue)}
              value={checked}>
              <View style={styles.row}>
                <View
                  style={styles.column}
                  onTouchStart={() => setChecked('4to5Lac')}>
                  <View style={styles.row}>
                    <View style={{flex: 4.5, marginTop: -15, marginLeft: -40}}>
                      <RadioButton.Item value="Male" />
                    </View>
                    <View style={{flex: 11}}>
                      <Text style={styles.radioHeading}>Male</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={styles.column}
                  onTouchStart={() => setChecked('Female')}>
                  <View style={styles.row}>
                    <View style={{flex: 4.5, marginTop: -15, marginLeft: -40}}>
                      <RadioButton.Item value="Female" />
                    </View>
                    <View style={{flex: 11}}>
                      <Text style={styles.radioHeading}>Female</Text>
                    </View>
                  </View>
                </View>
              </View>
            </RadioButton.Group>
          </View>
          <View style={{width: '100%'}}>
            <Text>Residing City*</Text>
            <TextInput
              placeholder="Enter Your City"
              style={{height: 40, borderColor: 'gray', borderBottomWidth: 1}}
              onChangeText={handleTextChange}
              value={text}
            />
          </View>
        </View>
        <View style={styles.row}>
          <Text
            style={{
              color: 'blue',
              marginTop: 20,
              fontSize: 12,
              marginHorizontal: 10,
            }}>
            I Hereby appoint Paisabazaar as my authorised representative to
            Receive my credit information from cibil/Equifax/Experian/CRIF
            Highmark (bureau)
          </Text>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity
            style={styles.buttonOutside}
            onPress={() => navigation.navigate('Homepage')}>
            <Text style={styles.buttonInside}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
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
    fontSize: 20,
    color: 'blue',
    fontWeight: '600',
  },
  instructions: {
    fontSize: 12,
    color: '#999',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 11,
  },
  column: {
    flex: 1,
    borderColor: '#94999D',
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
  bottomView: {
    backgroundColor: '#fff',
    height: 50,
    marginHorizontal: 20,
    marginBottom: 50,
  },
});
