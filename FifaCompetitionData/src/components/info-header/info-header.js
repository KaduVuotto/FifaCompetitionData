import React, { Component } from 'react';
import { Text, View, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import styles from './info-header.styles';
import LinearGradient from 'react-native-linear-gradient';


class InfoHeader extends React.Component {
    render() {
        return (
            <View style={{
                backgroundColor: '#f5faff',
                height: 80,
                width: '100%',
                alignItems: 'center'
            }}>
                <LinearGradient
                    colors={['#014bd6', '#0173e1']}
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    style={{
                        marginTop: 20,
                        flex: 1,
                        paddingLeft: 26,
                        paddingRight: 26,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '80%',
                        height: 70,
                        borderRadius: 24,
                        shadowColor: "#d7dbe0",
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
                            <Text numberOfLines={1} style={{ fontSize: 14, color: this.props.colorDashboard }}>Jogos</Text>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.props.activyHistory}>
                        <View style={{ height: 50, width: 60, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                name='history'
                                type='MaterialCommunityIcons'
                                style={{ color: this.props.colorHistory }}
                            />
                            <Text numberOfLines={1} style={{ fontSize: 14, color: this.props.colorHistory }}>Histórico</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.props.activyStats}>
                        <View style={{ height: 50, width: 80, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                name='ios-stats'
                                type='Ionicons'
                                style={{ color: this.props.colorStats }}
                            />
                            <Text numberOfLines={1} style={{ fontSize: 14, color: this.props.colorStats }}>Estatísticas</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.props.activySquad}>
                        <View style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                name='soccer-field'
                                type='MaterialCommunityIcons'
                                style={{ color: this.props.colorSquad }}
                            />
                            <Text numberOfLines={1} style={{ fontSize: 14, color: this.props.colorSquad }}>Elenco</Text>
                        </View>
                    </TouchableOpacity>
                </LinearGradient>
            </View >
        );
    }
}

export default InfoHeader;
