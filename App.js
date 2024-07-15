import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
// Kích thước màn hình
const { width, height } = Dimensions.get('window');

// Màn hình Onboarding
const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/8140 1.png')} // Đảm bảo hình ảnh được lưu trong thư mục assets
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        <Image
          source={require('./assets/Carrot.png')} // Đảm bảo hình ảnh được lưu trong thư mục assets
          style={styles.carrotIcon}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome to our store</Text>
        </View>
        <Text style={styles.subtext}>Get your groceries in as fast as one hour</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function IconButton({ name, text, backgroundColor }) {
  return (
    <TouchableOpacity style={[styles.iconButton, { backgroundColor }]}>
      <Icon name={name} size={20} color="white" style={styles.iconLeft} />
      <Text style={styles.iconButtonText}>{text}</Text>
    </TouchableOpacity>
  );
}
// Màn hình SignIn
const SignInScreen = () => {
  return (
    <View style={styles.signInContainer}>
      <Image
        source={require('./assets/Mask Group (1).png')} // Đảm bảo hình ảnh được lưu trong thư mục assets
        style={styles.signInImageImage}
      />
      <View style={styles.signInContainer}>
        <Text style={styles.signInTitle}>Get your groceries with nectar</Text>
      </View>
      <View style={styles.inputContainer}>
        <Image source={require('./assets/Rectangle 11.png')} style={styles.phoneIcon} />
        <Text style={styles.phoneText}>+880</Text>
      </View>
      <Text style={styles.socialText}>Or connect with social media</Text>
      <IconButton name="google" text="Continue with Google" backgroundColor="#4B70F5" style={{marginBottom:20}}/>
      <IconButton name="facebook" text="Continue with Facebook" backgroundColor="#3B5998" />
    </View>
  );
};

// Cấu hình điều hướng
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Các kiểu dáng
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  content: {
    position: 'absolute',
    top: height * 0.5, // Đặt content bắt đầu từ giữa màn hình
    width: width * 0.9, // Chiếm 90% chiều rộng màn hình
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  carrotIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 20, // Khoảng cách giữa icon và tiêu đề
  },
  title: {
    fontFamily: 'Gilroy', // Đảm bảo font chữ được liên kết đúng
    fontWeight: '600',
    fontSize: 48,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20, // Khoảng cách giữa tiêu đề và subtext
  },
  titleContainer: {
    width: 260,   
    alignItems: 'center', 
    justifyContent: 'center',
  },
  subtext: {
    fontFamily: 'Gilroy-Medium', // Đảm bảo font chữ được liên kết đúng
    fontSize: 16,
    textAlign: 'center',
    color: "#fff",
    marginBottom: 30, // Khoảng cách giữa subtext và nút bấm
  },
  button: {
    width: 353, // Chiếm 90% chiều rộng màn hình
    height: 67,
    backgroundColor: '#53b175',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  signInImage: {
    width: "100%", // Chiếm 90% chiều rộng màn hình
    height: 300, // Chiếm 40% chiều cao màn hình
    resizeMode: 'cover',
    
  },
  signInContainer: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    backgroundColor: 'white',
  },
  signInTitle: {
    marginTop: 20,
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  signInContainer:{
    width: 262,
  },
  phoneIcon: {
    height: 30,
    width: 50,
    marginRight: 10,
  },
  phoneText: {
    fontSize: 20,
    color: 'black',
  },
  inputContainer: {
    width:'133%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    alignSelf: 'flex-start',
    marginLeft: 20,
    borderBottomColor: 'black',  // Set the bottom border color to black
    borderBottomWidth: 1,        // Set the bottom border width to 1 (or as needed)
  },
  socialText: {
    color: 'gray',
    fontSize: 15,
    marginVertical: 20,
    textAlign: 'center',
    left: 60
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
    width: 364,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius:10,
    height:67,
  },
  iconLeft: {
    marginRight: 45,
  },
  iconButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    left: 30
  },
});

export default App;
