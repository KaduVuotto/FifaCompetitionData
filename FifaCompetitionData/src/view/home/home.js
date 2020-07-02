import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, View } from 'native-base';
import { StatusBar } from 'react-native';
import Rivals from '../rivals/rivals';
import Champions from '../champions/champions';

class FifaCompetitionsData extends React.Component {

  render() {
    return (
      <Container>
        <StatusBar
          backgroundColor={'#2C2D30'}
          barStyle={'light-content'}
        />
        <Tabs>
          <Tab
            heading="Rivals"
            textStyle={{ color: '#999' }}
            activeTextStyle={{ color: 'white' }}
            activeTabStyle={{ backgroundColor: '#2C2D30' }}
            tabStyle={{ backgroundColor: '#2C2D30'}}>
            <Rivals />
          </Tab>
          <Tab
            heading="Champions"
            textStyle={{ color: '#999' }}
            activeTextStyle={{ color: 'white' }}
            activeTabStyle={{ backgroundColor: '#2C2D30' }}
            tabStyle={{ backgroundColor: '#2C2D30' }}>
            <Champions />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

FifaCompetitionsData.navigationOptions = () => {
  const opcoes = {
    headerShown: false,
  }
  return opcoes;
}

export default FifaCompetitionsData;
