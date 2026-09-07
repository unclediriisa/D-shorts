import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button, StyleSheet } from 'react-native';

function ForYou() {
  return (
    <View style={styles.centerBlack}>
      <Text style={styles.bigWhite}>D Shorts</Text>
      <Text style={styles.white}>For You Feed - Watermark ON</Text>
    </View>
  );
}
function Following() {
  return <View style={styles.center}><Text>Following - Only people you follow</Text></View>;
}
function Record() {
  return (
    <View style={styles.center}>
      <Text style={styles.bold}>D Shorts Studio</Text>
      <Text style={{marginTop:10}}>4K Recorder, Duet, Captions, TTS</Text>
      <Text>Admin: unclediriisa@gmail.com</Text>
    </View>
  );
}
function Discover() {
  return <View style={styles.center}><Text>Discover - Sounds, Shops, Business</Text></View>;
}
function Profile() {
  return <View style={styles.center}><Text>Profile - Private Account, D Coins, Stories</Text></View>;
}
function AuthScreen({navigation}) {
  return (
    <View style={styles.center}>
      <Text style={{fontSize:32,fontWeight:'bold'}}>D Shorts</Text>
      <Text style={{marginTop:10}}>Admin: unclediriisa@gmail.com</Text>
      <View style={{marginTop:20}}><Button title="Enter App" onPress={()=>navigation.replace('Main')} /></View>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="For You" component={ForYou} />
      <Tab.Screen name="Following" component={Following} />
      <Tab.Screen name="Record" component={Record} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthScreen} options={{headerShown:false}} />
        <Stack.Screen name="Main" component={MainTabs} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  center: {flex:1,justifyContent:'center',alignItems:'center',padding:20},
  centerBlack: {flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black'},
  bigWhite: {color:'white',fontSize:28,fontWeight:'bold'},
  white: {color:'white',marginTop:10},
  bold: {fontWeight:'bold',fontSize:20}
});
