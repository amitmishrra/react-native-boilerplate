import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


import { setTheme } from '../../redux/actions/themes';

const HomePage = ({ navigation }) => {
    const dispatch = useDispatch();

    const theme = useSelector(state => {
        return state.theme.theme
    })

    const onPress = () => {
        dispatch(setTheme(theme == "light" ? "dark" : "light"));
        console.log(theme);
    }



    return (
        <View>
            <Text>Home Page</Text>
            {/* <Text>{users && users.length}</Text> */}
            <Button
                onPress={onPress}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    }
});


export default HomePage
