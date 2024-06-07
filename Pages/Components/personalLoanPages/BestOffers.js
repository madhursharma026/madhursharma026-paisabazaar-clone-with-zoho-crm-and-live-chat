import React, {useEffect, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  Image,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
  ScrollView,
} from 'react-native';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';

export default function BestOffers({route}) {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [fullname, setFullname] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  const handleFullnameChange = fullnameText => {
    setFullname(fullnameText);
  };
  const handleEmailAddressChange = emailAddressText => {
    setEmailAddress(emailAddressText);
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const cameraPermission = await request(
          Platform.OS === 'ios'
            ? PERMISSIONS.IOS.CAMERA
            : PERMISSIONS.ANDROID.CAMERA,
        );

        const libraryPermission = await request(
          Platform.OS === 'ios'
            ? PERMISSIONS.IOS.PHOTO_LIBRARY
            : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        );

        if (
          cameraPermission !== RESULTS.GRANTED ||
          libraryPermission !== RESULTS.GRANTED
        ) {
          Alert.alert(
            'Sorry, we need camera and photo library permissions to make this work!',
          );
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 1000,
        maxHeight: 1000,
        quality: 1,
        includeBase64: false,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorMessage) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else {
          setImage(response.assets[0].uri);
          AsyncStorage.setItem('photoDetails', response.assets[0].uri);
        }
      },
    );
  };

  async function formSubmit() {
    if (fullname === '' || emailAddress === '' || image === null) {
      alert('Please Fill Your Details');
    } else {
      await AsyncStorage.setItem('fullname', fullname);
      await AsyncStorage.setItem('emailAddress', emailAddress);
      const bankName = await AsyncStorage.getItem('bankName');
      const cityName = await AsyncStorage.getItem('cityName');
      const loanAmount = await AsyncStorage.getItem('loanAmount');
      const companyName = await AsyncStorage.getItem('companyName');
      const annualIncome = await AsyncStorage.getItem('annualIncome');
      const residenceType = await AsyncStorage.getItem('residenceType');
      try {
        const access_token = await AsyncStorage.getItem('access_token');
        const api_url = 'https://www.zohoapis.in/crm/v2/PaisabazaarSalaried';
        const res = await fetch(api_url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Zoho-oauthtoken ${access_token}`,
          },
          body: JSON.stringify({
            data: [
              {
                Name: fullname,
                Email: emailAddress,
                Employment_Type: 'Salaried',
                Annual_Income: annualIncome,
                Bank_Account: bankName,
                Company_Name: companyName,
                Residence_City: cityName,
                Residence_Type: residenceType,
                Loan_Amount: loanAmount,
              },
            ],
            trigger: ['approval', 'workflow', 'blueprint'],
          }),
        });
        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`Error fetching API data: ${errorText}`);
        }
        const json = await res.json();
        await uploadImage(json.data[0].details.id);
      } catch (error) {
        alert(`Error fetching API data: ${error.message}`);
      }
    }
  }

  const uploadImage = async id => {
    const uri = await AsyncStorage.getItem('photoDetails');
    const apiUrl = `https://www.zohoapis.in/crm/v2/PaisabazaarSalaried/${id}/Attachments`;
    const access_token = await AsyncStorage.getItem('access_token');
    if (!access_token) {
      Alert.alert('Error', 'No access token found');
      return;
    }
    const fileName = uri.split('/').pop();
    const fileType = fileName.split('.').pop();
    const formData = new FormData();
    formData.append('file', {
      uri,
      name: fileName,
      type: `image/${fileType}`,
    });
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Zoho-oauthtoken ${access_token}`,
        },
        body: formData,
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error uploading image: ${errorText}`);
      }
      Alert.alert('Success', 'Data saved successfully!');
      navigation.navigate('PersonalLoan');
    } catch (error) {
      console.error('Error uploading image:', error);
      Alert.alert('Error', `Error uploading image: ${error.message}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
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
            <Text style={styles.subHeading}>Step 8/8</Text>
          </Text>
          <Text style={styles.mainHeading}>
            One step away to Get Best Offers
          </Text>
          <View style={{width: '100%', marginTop: 10}}>
            <Text style={{color: 'black'}}>Full Name</Text>
            <TextInput
              placeholder="As per your PAN Card"
              style={{height: 40, borderColor: 'gray', borderBottomWidth: 1}}
              onChangeText={handleFullnameChange}
              value={fullname}
            />
            <Text style={{marginTop: 20, color: 'black'}}>Your Email</Text>
            <TextInput
              placeholder="username@examplemail.com"
              style={{height: 40, borderColor: 'gray', borderBottomWidth: 1}}
              onChangeText={handleEmailAddressChange}
              value={emailAddress}
            />
            <View style={{marginTop: 20}}>
              {image !== null ? (
                <Image
                  style={{width: 100, height: 100}}
                  source={{
                    uri: image,
                  }}
                />
              ) : (
                <></>
              )}
              <TouchableOpacity
                style={styles.uploadButtonOutside}
                onPress={pickImage}>
                <Text style={styles.uploadButtonInside}>Upload PAN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.buttonOutside} onPress={formSubmit}>
            <Text style={styles.buttonInside}>Unlock Best Offers</Text>
          </TouchableOpacity>
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
    paddingBottom: 50,
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
  bottomView: {
    backgroundColor: '#fff',
    height: 50,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 50,
  },
  uploadButtonOutside: {
    backgroundColor: 'gray',
    padding: 5,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
    marginTop: 10,
  },
  uploadButtonInside: {
    color: '#fff',
    fontSize: 17,
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
