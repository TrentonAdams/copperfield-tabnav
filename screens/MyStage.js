import React, {Component} from 'react';
import {Text} from "react-native";


export default class MyStage extends Component {
    static navigationOptions = {
        title: 'My Magic Stage',
        headerBackTitleVisible: true
    };
    render() {
        return (
            <Text>Welcome to my super special magic stage, prepare to be
                dazzled! Press back now!</Text>
        )
    }
}