import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image, Button } from 'react-native';
import themeStore from "../../json/theme.json";
import TextInputComponenet from '../../Components/TextInputComponenet';
import ButtonComponenet from '../../Components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/actions/themes';
import { loginStart } from '../../redux/actions/login';
import { hash } from '../../utils';
export default function LoginPage() {
    const dispatch = useDispatch();
    const theme = useSelector(state => {
        return state.theme.theme
    })

    return (
        <View
            style={{
                backgroundColor: themeStore[ theme ].primaryBackground,
                ...styles.container
            }}
        >
            <Image
                source={theme == 1 ? require(`../../../assets/images/loginPage-light.gif`) : require(`../../../assets/images/loginPage-dark.gif`)}
                style={theme == 1 ? styles.lightImage : styles.darkImage}
            />
            <TextInputComponenet placeholder={"SSO ID"} />
            <TextInputComponenet placeholder={"Password"} />
            <ButtonComponenet onClick={doLogin} title={"Sign In"} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },
    darkImage: {
        width: 250,
        height: 70
    },
    lightImage: {
        width: 145,
        height: 145
    }
});
