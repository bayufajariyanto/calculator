import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={{ flex: 2, width: '90%', marginTop: 20, justifyContent: 'center' }}>
            <View style={{ width: '100%', height: '80%', backgroundColor: '#fff', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '96%', height: '90%', backgroundColor: '#B2BFA7', borderRadius: 14, justifyContent: 'center' }}>
                    <View style={{ zIndex: 1, alignItems: 'center' }}>
                        <Text style={{ width: '90%', color: '#00000020', fontSize: 34, fontFamily: 'DigitalNumbers-Regular', textAlign: 'right' }}>000000<Text style={{color: '#000'}}>3008</Text></Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})
