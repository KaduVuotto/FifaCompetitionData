import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';


class TouchButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.pressButton}>
                <LinearGradient
                    colors={this.props.gradientColors}
                    //colors={['#014bd6', '#0173e1']}
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    style={this.props.styleTouchButton}>
                    <Text style={this.props.styleTextButton}>{this.props.textButton}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
}

export default TouchButton;