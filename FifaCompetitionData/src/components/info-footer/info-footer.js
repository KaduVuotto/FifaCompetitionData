import React, { Component } from 'react';
import { Text, View, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import styles from './info-footer.styles'

class InfoFooter extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                paddingLeft: 26,
                paddingRight: 26,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                position: 'absolute',
                backgroundColor: '#2C2D30',
                width: '80%',
                height: 60,
                borderRadius: 24,
                bottom: 26,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }}>
                <TouchableOpacity onPress={this.props.activyDashboard}>
                    <View style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon
                            name='trophy-outline'
                            type='MaterialCommunityIcons'
                            style={{ color: this.props.colorDashboard }}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.props.activyHistory}>
                    <View style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon
                            name='history'
                            type='MaterialCommunityIcons'
                            style={{ color: this.props.colorHistory }}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.props.activyStats}>
                    <View style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon
                            name='ios-stats'
                            type='Ionicons'
                            style={{ color: this.props.colorStats }}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.props.activySquad}>
                    <View style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon
                            name='soccer-field'
                            type='MaterialCommunityIcons'
                            style={{ color: this.props.colorSquad }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default InfoFooter;
