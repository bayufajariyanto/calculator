import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home from './pages/Home'


const App = () => {

  return (
    <View style={{flex: 1}}>
      <Home />
      {/* <View style={{ flex: 2, backgroundColor: 'white' }}> */}
        {/* <View style={{ backgroundColor: '#f1f3f6', width: 328, height: 160, borderRadius: 15, marginTop: 50, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', paddingVertical: 8 }}> */}
          {/* <View style={{ marginHorizontal: 10, width: 312, height: 144, backgroundColor: '#CCD5C6', borderRadius: 15, borderWidth: 2, borderColor: '#969C91', justifyContent: 'space-between', paddingHorizontal: 10 }}> */}
            {/* <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}> */}
              {/* <Text style={{ fontFamily: 'DigitalNumbers-Regular', fontSize: 44, alignSelf: 'flex-end', zIndex: 1 }}>30080000</Text> */}
              {/* <Text style={{ fontFamily: 'DigitalNumbers-Regular', fontSize: 44, alignSelf: 'flex-end', color: '#00000020', zIndex: 0.2 }}>00000000</Text> */}
            {/* </View> */}
          {/* </View> */}
        {/* </View> */}
      {/* </View> */}
      {/* <View style={{ flex: 4, backgroundColor: 'purple' }}></View> */}
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  text: {
    fontFamily: 'DigitalNumbers-Regular',
    // fontSize: 25
  }
})
