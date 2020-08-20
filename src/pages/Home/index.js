import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './Header'

const Home = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1f3f6' }}>
            <Header />
            <View style={{ flex: 4, width: '90%', marginBottom: 20 }}>
                <View style={styles.row}>
                    <View style={styles.wrapper}>
                        <View style={styles.whiteBox}>
                            <Text style={styles.fontBlack}>AC</Text>
                        </View>
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.whiteBox}>
                            <Text style={styles.fontBlack}>+/-</Text>
                        </View>
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.whiteBox}>
                            <Text style={styles.fontBlack}>%</Text>
                        </View>
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.blackBox}>
                            <Text style={styles.fontWhite}>/</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.wrapper}>
                        <View style={styles.whiteBox}>
                            <Text style={styles.fontBlack}>7</Text>
                        </View>
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.whiteBox}>
                            <Text style={styles.fontBlack}>8</Text>
                        </View>
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.whiteBox}>
                            <Text style={styles.fontBlack}>9</Text>
                        </View>
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.blackBox}>
                            <Text style={styles.fontWhite}>x</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.wrapper}>
                        <View style={styles.whiteBox}>
                            <Text style={styles.fontBlack}>4</Text>
                        </View>
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.whiteBox}>
                            <Text style={styles.fontBlack}>5</Text>
                        </View>
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.whiteBox}>
                            <Text style={styles.fontBlack}>6</Text>
                        </View>
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.blackBox}>
                            <Text style={styles.fontWhite}>-</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.wrapper}>
                        <View style={styles.whiteBox}>
                            <Text style={styles.fontBlack}>1</Text>
                        </View>
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.whiteBox}>
                            <Text style={styles.fontBlack}>2</Text>
                        </View>
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.whiteBox}>
                            <Text style={styles.fontBlack}>3</Text>
                        </View>
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.blackBox}>
                            <Text style={styles.fontWhite}>+</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.wrapperZero}>
                        <View style={styles.whiteBoxZero}>
                            <View style={styles.containerZero}>
                                <Text style={styles.fontBlack}>0</Text>
                            </View>
                            <View style={styles.containerZero} />
                        </View>
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.whiteBox}>
                            <Text style={styles.fontBlack}>.</Text>
                        </View>
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.blackBox}>
                            <Text style={styles.fontWhite}>=</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    blackBox: { width: '90%', height: '90%', backgroundColor: 'black', borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
    containerZero: { flex: 1, alignItems: 'center' },
    fontBlack: { fontFamily: 'Orbitron-Regular', fontSize: 27 },
    fontWhite: { fontFamily: 'Orbitron-Regular', fontSize: 27, color: 'white' },
    row: { flex: 1, flexDirection: 'row' },
    whiteBox: { width: '90%', height: '90%', backgroundColor: 'white', borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
    wrapper: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    wrapperZero: { flex: 2, justifyContent: 'center', alignItems: 'center' },
    whiteBoxZero: { width: '90%', height: '90%', backgroundColor: 'white', borderRadius: 15, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' },
})
