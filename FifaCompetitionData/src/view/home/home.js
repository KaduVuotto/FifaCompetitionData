import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, View } from 'native-base';
import { StatusBar, ScrollView } from 'react-native';
import Rivals from '../rivals/rivals';
import Champions from '../champions/champions';
import LinearGradient from 'react-native-linear-gradient';


class FifaCompetitionsData extends React.Component {

  render() {
    return (
      <Container>
        <StatusBar
          backgroundColor={'#0077e3'}
          barStyle={'light-content'}
        />
        <Tabs>
          <Tab
            heading="Rivals"
            textStyle={{ color: '#b5d0f4' }}
            activeTextStyle={{ color: 'white' }}
            activeTabStyle={{ backgroundColor: '#0077e3' }}
            tabStyle={{ backgroundColor: '#0077e3' }}>
            <ScrollView style={{ flex: 1 }}>
              <Rivals />
            </ScrollView>
          </Tab>
          <Tab
            heading="Champions"
            textStyle={{ color: '#b5d0f4' }}
            activeTextStyle={{ color: 'white' }}
            activeTabStyle={{ backgroundColor: '#0077e3' }}
            tabStyle={{ backgroundColor: '#0077e3' }}>
            <ScrollView style={{ flex: 1 }}>
              <Champions />
            </ScrollView>
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
