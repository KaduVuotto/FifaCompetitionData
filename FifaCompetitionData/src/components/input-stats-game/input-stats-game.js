import React, { Component } from 'react';
import { TextInput } from 'react-native';

class InputStatsGame extends React.Component {
    render() {
        return (
            <TextInput
                keyboardType='numeric'
                placeholder='0'
                placeholderTextColor={'#b5d0f4'}
                style={this.props.style}
                onChangeText={this.props.onChangeText}
                value={this.props.value}
            />
        )
    }
}

export default InputStatsGame;