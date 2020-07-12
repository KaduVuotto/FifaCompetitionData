import React, { Component } from 'react';
import { Text, View, Icon } from 'native-base';
import { TouchableHighlight, KeyboardAvoidingView, ScrollView } from 'react-native';
import InfoHeader from '../../components/info-header/info-header';

class Champions extends React.Component {
  state = {
    dashboard: true,
    history: false,
    stats: false,
    squad: false,
  }

  //renders
  renderContent() {
    if (this.state.dashboard) {
      return (
        <View style={{ flex: 1, width: '100%', justifyContent: 'flex-start', alignItems: "center", backgroundColor: '#3A3A3A', paddingTop:30 }}>
          <View style={{
            height: '30%',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#2e2f33',
            width: '80%',
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>

          </View>
        </View>
      )
    }
    else if (this.state.history) {
      return (
        <View style={{ flex: 1, width: '100%', justifyContent: "center", alignItems: "center", backgroundColor: '#3A3A3A' }}>
          <Text>history</Text>
        </View>
      )
    } else if (this.state.stats) {
      return (
        <View style={{ flex: 1, width: '100%', justifyContent: "center", alignItems: "center", backgroundColor: '#3A3A3A' }}>
          <Text>stats</Text>
        </View>
      )
    } else if (this.state.squad) {
      return (
        <View style={{ flex: 1, width: '100%', justifyContent: "center", alignItems: "center", backgroundColor: '#3A3A3A' }}>
          <Text>squad</Text>
        </View>
      )
    }
  }

  renderHeader() {
    return (
      <InfoHeader
        activyDashboard={() => {
          this.setState({
            dashboard: true,
            history: false,
            stats: false,
            squad: false,
          });
        }}
        activyHistory={() => {
          this.setState({
            history: true,
            dashboard: false,
            stats: false,
            squad: false,
          });
        }}
        activyStats={() => {
          this.setState({
            history: false,
            dashboard: false,
            stats: true,
            squad: false,
          });
        }}
        activySquad={() => {
          this.setState({
            history: false,
            dashboard: false,
            stats: false,
            squad: true,
          });
        }}
        //Estilo
        colorDashboard={this.state.dashboard ? 'white' : '#666'}
        colorHistory={this.state.history ? 'white' : '#666'}
        colorStats={this.state.stats ? 'white' : '#666'}
        colorSquad={this.state.squad ? 'white' : '#666'}
      />
    )
  }


  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {this.renderContent()}
        {this.renderHeader()}
      </View>
    );
  }
}

Champions.navigationOptions = () => {
  const opcoes = {
    headerShown: false,
  }
  return opcoes;
}

export default Champions;
