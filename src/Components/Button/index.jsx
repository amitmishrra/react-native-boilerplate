import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, SafeAreaView, TextInput, Button } from 'react-native';
import themeStore from "../../json/theme.json";
import { useDispatch, useSelector } from 'react-redux';

export default function ButtonComponenet({ title, onClick }) {
    const windowWidth = Dimensions.get('window').width;
    const theme = useSelector(state => {
        return state.theme.theme
    })
    return (
        <View>
            <SafeAreaView>
                <TouchableOpacity onPress={onClick}>
                    <Text style={{
                        ...styles.button,
                        backgroundColor: themeStore[ theme ].purple,
                        color: "rgba(255, 255, 255, 0.9)",
                        width: windowWidth * 1 / 2,
                    }}
                    >{title}</Text>

                </TouchableOpacity>

            </SafeAreaView>
        </View>

    )
}
const styles = StyleSheet.create({
    button: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        textAlignVertical: "center",
        borderWidth: 0,
        padding: 10,
        borderRadius: 38,
        fontSize: 18,
        marginVertical: 10,
    },
});
