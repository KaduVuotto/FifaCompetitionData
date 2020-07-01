import React, { Component } from 'react';
import { Text, View } from 'native-base';

class FifaCompetitionsData extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
      </View>
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
