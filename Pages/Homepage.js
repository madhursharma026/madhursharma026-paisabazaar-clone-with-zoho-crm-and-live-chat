// import {Button} from 'react-native';

// const Homepage = ({navigation}) => {
//   return (
//     <Button
//       title="PersonalLoan"
//       onPress={() => navigation.navigate('PersonalLoan')}
//     />
//   );
// };

// export default Homepage;

import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import CarouselSlider from './Components/Carousel';
import CarouselSlider2 from './Components/Carousel2';

export default function Homepage({navigation}) {
  return (
    <>
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <Image
          style={{width: '50%', height: '3%', objectFit: 'contain'}}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Paisabazaar-logo.svg/2560px-Paisabazaar-logo.svg.png',
          }}
        />
        <CarouselSlider />
        <View style={{marginTop: 20}}>
          <Text style={styles.subHeading}>CREDIT PRODUCTS -------------</Text>
        </View>
        <View style={styles.row}>
          {/* <Image style={styles.column}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOW3c3zs4qjIEUULmI2WxpRiilojbFUoCBA&usqp=CAU',
            }}
          /> */}
          <View style={styles.column}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOW3c3zs4qjIEUULmI2WxpRiilojbFUoCBA&usqp=CAU',
              }}
            />
          </View>
          {/* <Image style={styles.column}
            source={{
              uri: 'https://www.madhuvan.com/wp-content/uploads/2018/01/personal-loan-icon.png',
            }}
          /> */}
          <View style={styles.column}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PersonalLoan')}>
              <Image
                style={{width: 50, height: 50}}
                source={{
                  uri: 'https://www.madhuvan.com/wp-content/uploads/2018/01/personal-loan-icon.png',
                }}
              />
            </TouchableOpacity>
          </View>
          {/* <Image style={styles.column}
            source={{
              uri: 'https://media.istockphoto.com/id/1159449758/vector/micro-finance-icon.jpg?s=612x612&w=0&k=20&c=URdeZiYk7uthKx4k_efClzyXPNYO8fXUohOwUFruGGw=',
            }}
          /> */}
          <View style={styles.column}>
            <Image
              style={{width: 50, height: 50}}
              source={{
                uri: 'https://media.istockphoto.com/id/1159449758/vector/micro-finance-icon.jpg?s=612x612&w=0&k=20&c=URdeZiYk7uthKx4k_efClzyXPNYO8fXUohOwUFruGGw=',
              }}
            />
          </View>
          {/* <Image style={styles.column}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahKF9Hn7kB_fu5PsUQUPOod9SrWX1QvHpiYV9YtlfANVoeXLpUFcYagHf_CYv6NHjQ3E&usqp=CAU',
            }}
          /> */}
          <View style={styles.column}>
            <Image
              style={{width: 50, height: 50}}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahKF9Hn7kB_fu5PsUQUPOod9SrWX1QvHpiYV9YtlfANVoeXLpUFcYagHf_CYv6NHjQ3E&usqp=CAU',
              }}
            />
          </View>
        </View>
        <View style={styles.row}>
          {/* <Image style={styles.column}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahKF9Hn7kB_fu5PsUQUPOod9SrWX1QvHpiYV9YtlfANVoeXLpUFcYagHf_CYv6NHjQ3E&usqp=CAU',
            }}
          /> */}
          <View style={styles.column}>
            <Image
              style={{width: 50, height: 50}}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahKF9Hn7kB_fu5PsUQUPOod9SrWX1QvHpiYV9YtlfANVoeXLpUFcYagHf_CYv6NHjQ3E&usqp=CAU',
              }}
            />
          </View>
          {/* <Image style={styles.column}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOW3c3zs4qjIEUULmI2WxpRiilojbFUoCBA&usqp=CAU',
            }}
          /> */}
          <View style={styles.column}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOW3c3zs4qjIEUULmI2WxpRiilojbFUoCBA&usqp=CAU',
              }}
            />
          </View>
          {/* <Image style={styles.column}
            source={{
              uri: 'https://www.madhuvan.com/wp-content/uploads/2018/01/personal-loan-icon.png',
            }}
          /> */}
          <View style={styles.column}>
            <Image
              style={{width: 50, height: 50}}
              source={{
                uri: 'https://www.madhuvan.com/wp-content/uploads/2018/01/personal-loan-icon.png',
              }}
            />
          </View>
          {/* <Image style={styles.column}
            source={{
              uri: 'https://media.istockphoto.com/id/1159449758/vector/micro-finance-icon.jpg?s=612x612&w=0&k=20&c=URdeZiYk7uthKx4k_efClzyXPNYO8fXUohOwUFruGGw=',
            }}
          /> */}
          <View style={styles.column}>
            <Image
              style={{width: 50, height: 50}}
              source={{
                uri: 'https://media.istockphoto.com/id/1159449758/vector/micro-finance-icon.jpg?s=612x612&w=0&k=20&c=URdeZiYk7uthKx4k_efClzyXPNYO8fXUohOwUFruGGw=',
              }}
            />
          </View>
        </View>
        <View style={styles.row}>
          {/* <Image style={styles.column}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOW3c3zs4qjIEUULmI2WxpRiilojbFUoCBA&usqp=CAU',
            }}
          /> */}
          <View style={styles.column}>
            <Image
              style={{width: 50, height: 50}}
              source={{
                uri: 'https://www.madhuvan.com/wp-content/uploads/2018/01/personal-loan-icon.png',
              }}
            />
          </View>
          <View style={styles.column}></View>
          <View style={styles.column}></View>
          <View style={styles.column}></View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.subHeading}>
            CREDIT SCORE IMPROVEMENT -------------
          </Text>
          <View style={styles.row}>
            {/* <Image style={styles.column}
              source={{
                uri: 'data:image/png;base64,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',
              }}
            /> */}
            <View style={styles.column}>
              <Image
                style={{width: 50, height: 50}}
                source={{
                  uri: 'data:image/png;base64,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',
                }}
              />
            </View>
            <View style={styles.column}></View>
            <View style={styles.column}></View>
            <View style={styles.column}></View>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.subHeading}>
            CREDIT SCORE IMPROVEMENT -------------
          </Text>
          <View style={styles.row}>
            {/* <Image style={styles.column}
              source={{
                uri: 'data:image/png;base64,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',
              }}
            /> */}
            <View style={styles.column}>
              <Image
                style={{width: 50, height: 50}}
                source={{
                  uri: 'data:image/png;base64,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',
                }}
              />
            </View>
            <View style={styles.column}></View>
            <View style={styles.column}></View>
            <View style={styles.column}></View>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.subHeading}>
            INSURANCE & OTHER PRODUCTS -------------
          </Text>
          <View style={styles.row}>
            {/* <Image style={styles.column}
              source={{
                uri: 'https://st2.depositphotos.com/8301258/11646/v/950/depositphotos_116464174-stock-illustration-umbrella-logo-symbol-rainy-season.jpg',
              }}
            /> */}
            <View style={styles.column}>
              <Image
                style={{width: 50, height: 50}}
                source={{
                  uri: 'https://st2.depositphotos.com/8301258/11646/v/950/depositphotos_116464174-stock-illustration-umbrella-logo-symbol-rainy-season.jpg',
                }}
              />
            </View>
            {/* <Image style={styles.column}
              source={{
                uri: 'https://media.istockphoto.com/id/1328395253/vector/hundred-points-emoji-icon.jpg?s=612x612&w=0&k=20&c=zy2NI8jM4FQhOuIqv4EfkqRvLamb-DeL4DDhqBKsS74=',
              }}
            /> */}
            <View style={styles.column}>
              <Image
                style={{width: 50, height: 50}}
                source={{
                  uri: 'https://media.istockphoto.com/id/1328395253/vector/hundred-points-emoji-icon.jpg?s=612x612&w=0&k=20&c=zy2NI8jM4FQhOuIqv4EfkqRvLamb-DeL4DDhqBKsS74=',
                }}
              />
            </View>
            {/* <Image style={styles.column}
              source={{
                uri: 'data:image/png;base64,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',
              }}
            /> */}
            <View style={styles.column}>
              <Image
                style={{width: 50, height: 50}}
                source={{
                  uri: 'data:image/png;base64,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',
                }}
              />
            </View>
            <View style={styles.column}></View>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.subHeading}>
            KEEPING YOU FINANCIALLY HEATHY AND SAFE, ALWAYS
          </Text>
          <CarouselSlider2 />
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Image
              style={{width: 15, height: 15, marginTop: 10}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/17/17704.png',
              }}
            />
            <Text style={{fontSize: 12}}>Home</Text>
          </View>
          <View style={styles.column}>
            <Image
              style={{width: 40, height: 20, marginTop: 5}}
              source={{
                uri: 'https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/good-credit-score.jpg',
              }}
            />
            <Text style={{fontSize: 12}}>Score</Text>
          </View>
          <View style={styles.column}>
            <Image
              style={{width: 20, height: 20, marginTop: 5}}
              source={{
                uri: 'data:image/png;base64,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',
              }}
            />
            <Text style={{fontSize: 12}}>Card</Text>
          </View>
          <View style={styles.column}>
            <Image
              style={{width: 15, height: 15, marginTop: 10}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/61/61205.png',
              }}
            />
            <Text style={{fontSize: 12}}>Account</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: 'white',
    height: '100%',
  },
  subHeading: {
    marginRight: 16,
    fontSize: 12,
    color: 'blue',
    fontWeight: '500',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '96%',
    marginTop: 10,
  },
  column: {
    flex: 1,
    height: 50,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: 20,
  },
});
