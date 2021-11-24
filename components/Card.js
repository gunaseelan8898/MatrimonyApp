import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

const Card = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.Card}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect} useForeground>
            <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={props.image} />
            </View>
            <View style={styles.details}>
                <View>
              <Text style={styles.name}>{props.name}</Text>
              <Text style={styles.age}>{props.age}</Text>
              </View>
              <View>
              <Text style={styles.job}>{props.job}</Text>
              <Text style={styles.salary}>{props.salary}</Text>
              </View>
            </View>
          </View>
        </TouchableCmp>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  Card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 250,
    margin: 20
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode:'contain'
  },
  details: {
    height: '35%',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:15,
    paddingTop:10,
    backgroundColor:'#fdf7ff'
},
  name: {
    fontSize:20,
    fontFamily:'OpenSans-SemiBold',
    marginVertical: 2
  },
  age: {
    fontSize: 14,
    fontWeight:'bold',
    color: '#888'
  },
  job: {
    fontSize:16,
    fontFamily:'OpenSans-Regular',
    marginVertical: 2
  },
  salary: {
    fontSize: 14,
    fontWeight:'bold',
    color: '#888'
  },
});

export default Card;
