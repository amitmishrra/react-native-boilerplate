import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, SafeAreaView, TextInput } from 'react-native';
import themeStore from "../../json/theme.json";
import { useDispatch, useSelector} from 'react-redux';

export default function TextInputComponenet({placeholder}) {
    const windowWidth = Dimensions.get('window').width;
    const theme = useSelector(state => {
        return state.theme.theme
    })

    return (
        <View>
            <SafeAreaView>
                <TextInput
                    style={{
                        ...styles.input,
                        borderColor : themeStore[theme].secondaryText,
                        color : themeStore[theme].secondaryText,
                        width : windowWidth - 40,
                    }}
                    placeholderTextColor={themeStore[theme].secondaryText}
                    placeholder={placeholder}
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 45,
        borderWidth : 1,
        padding : 10,
        borderRadius : 8,
        fontSize : 16,
        marginVertical : 10,
    },
  });
