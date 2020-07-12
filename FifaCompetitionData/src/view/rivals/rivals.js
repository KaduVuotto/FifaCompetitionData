import React, { Component, useState } from 'react';
import { Text, View, Icon } from 'native-base';
import { TouchableHighlight, KeyboardAvoidingView, ScrollView } from 'react-native';
import InfoHeader from '../../components/info-header/info-header';
import InputStatsGame from '../../components/input-stats-game/input-stats-game';
import TouchButton from '../../components/touch-button/touch-button';

import styles from './rivals.styles'

class Rivals extends React.Component {
  state = {
    dashboard: true,
    history: false,
    stats: false,
    squad: false,

    win: false,
    loss: false,

  }

  activyDashboard() {
    this.setState({
      dashboard: true,
      history: false,
      stats: false,
      squad: false,
    });
  }

  activyHistory() {
    this.setState({
      history: true,
      dashboard: false,
      stats: false,
      squad: false,
    });
  }

  activyStats() {
    this.setState({
      history: false,
      dashboard: false,
      stats: true,
      squad: false,
    });
  }
  activySquad() {
    this.setState({
      history: false,
      dashboard: false,
      stats: false,
      squad: true,
    });
  }

  changeToWin() {
    this.setState({
      win: true,
      loss: false,
    });
  }

  changeToLose() {
    this.setState({
      win: false,
      loss: true,
    });
  }

  //renders
  renderContent() {
    if (this.state.dashboard) {
      const colorWin = this.state.win ? 'white' : '#b5d0f4'
      const colorGradientWin = this.state.win ? ['#014bd6', '#0173e1'] : ['white', 'white']

      const colorLose = this.state.loss ? 'white' : '#b5d0f4'
      const colorGradientLose = this.state.loss ? ['#014bd6', '#0173e1'] : ['white', 'white']

      return (
        <View style={styles.viewContent}>

          <View style={styles.viewCard}>
            <Text style={styles.textGameStats}>Resultado da partida</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', marginTop: 16 }}>
              <TouchButton
                pressButton={() => this.changeToWin()}
                gradientColors={colorGradientWin}
                styleTouchButton={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 120,
                  height: 40,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: colorWin,
                }}
                textButton={'Vitória'}
                styleTextButton={{ color: colorWin }}
              />
              <TouchButton
                pressButton={() => this.changeToLose()}
                gradientColors={colorGradientLose}
                styleTouchButton={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 120,
                  height: 40,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: colorLose,
                  marginLeft: 16,
                }}
                textButton={'Derrota'}
                styleTextButton={{ color: colorLose }}
              />
            </View>
          </View>

          <View style={styles.viewCard}>
            <Text style={styles.textGameStats}>Dados da partida</Text>
            <View style={styles.viewTeams}>
              <Text style={styles.textYourTeam}>Seu time</Text>
              <Text style={styles.textOpposingTeam}>Adversário</Text>
            </View>

            <View style={styles.viewGoals}>
              <InputStatsGame
                style={{ color: '#6aa1ea', paddingLeft: 32, }}
              />
              <Text style={styles.textBlue}>Gols</Text>
              <InputStatsGame
                style={{ color: '#6aa1ea', paddingRight: 32, }}
              />
            </View>

            <View style={styles.viewInputStatsGame}>
              <InputStatsGame
                style={{ color: '#6aa1ea', paddingLeft: 32, }}
              />
              <Text style={styles.textBlue}>Finalizações</Text>
              <InputStatsGame
                style={{ color: '#6aa1ea', paddingRight: 32, }}
              />
            </View>

            <View style={styles.viewInputStatsGame}>
              <InputStatsGame
                style={{ color: '#6aa1ea', paddingLeft: 32, }}
              />
              <Text style={styles.textBlue}>Finalizações certas</Text>
              <InputStatsGame
                style={{ color: '#6aa1ea', paddingRight: 32, }}
              />
            </View>

            <View style={styles.viewInputStatsGame}>
              <InputStatsGame
                style={{ color: '#6aa1ea', paddingLeft: 32, }}
              />
              <Text style={styles.textBlue}>Posse de bola</Text>
              <InputStatsGame
                style={{ color: '#6aa1ea', paddingRight: 32, }}
              />
            </View>

            <View style={styles.viewInputStatsGame}>
              <InputStatsGame
                style={{ color: '#6aa1ea', paddingLeft: 32, }}
              />
              <Text style={styles.textBlue}>Precisão no passe</Text>
              <InputStatsGame
                style={{ color: '#6aa1ea', paddingRight: 32, }}
              />
            </View>
          </View>

          <View style={styles.viewCard}>
            <Text style={styles.textGameStats}>Detalhe dos jogadores</Text>
            <View style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              marginTop: 16,
            }}>
              <Text style={{ color: '#6aa1ea', paddingLeft: 16 }}>Quem fez gol:</Text>
              <Text style={{ color: '#6aa1ea', paddingRight: 16 }}>Qtd.</Text>
            </View>
            <View style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
            }}>
              <Text style={{ color: '#b5d0f4', paddingLeft: 16 }}>Nome +</Text>
              <InputStatsGame
                style={{ color: '#6aa1ea', paddingRight: 16, }}
              />
            </View>

            <View style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              marginTop: 16,
            }}>
              <Text style={{ color: '#6aa1ea', paddingLeft: 16 }}>Quem deu assistência:</Text>
              <Text style={{ color: '#6aa1ea', paddingRight: 16 }}>Qtd.</Text>
            </View>
            <View style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
            }}>
              <Text style={{ color: '#b5d0f4', paddingLeft: 16 }}>Nome +</Text>
              <InputStatsGame
                style={{ color: '#6aa1ea', paddingRight: 16, }}
              />
            </View>

            <View style={{
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'flex-start',
              marginTop: 16,
            }}>
              <Text style={{ color: '#6aa1ea', paddingLeft: 16 }}>MVP da partida:</Text>
              <Text style={{ color: '#b5d0f4', paddingLeft: 16, marginTop: 16 }}>Nome +</Text>

            </View>


          </View>


        </View>
      )
    }
    else if (this.state.history) {
      return (
        <View style={styles.viewContent}>
          <Text style={styles.textBlue}>history</Text>
        </View>
      )
    } else if (this.state.stats) {
      return (
        <View style={styles.viewContent}>
          <Text style={styles.textBlue}>stats</Text>
        </View>
      )
    } else if (this.state.squad) {
      return (
        <View style={styles.viewContent}>
          <Text style={styles.textBlue}>squad</Text>
        </View>
      )
    }
  }

  renderHeader() {
    return (
      <InfoHeader
        activyDashboard={() => this.activyDashboard()}
        activyHistory={() => this.activyHistory()}
        activyStats={() => this.activyStats()}
        activySquad={() => this.activySquad()}
        //Estilo
        colorDashboard={this.state.dashboard ? 'white' : '#b5d0f4'}
        colorHistory={this.state.history ? 'white' : '#b5d0f4'}
        colorStats={this.state.stats ? 'white' : '#b5d0f4'}
        colorSquad={this.state.squad ? 'white' : '#b5d0f4'}
      />
    )
  }

  renderSave() {
    return (
      <View style={styles.viewCard}>
        <Text style={styles.textGameStats}>Salvar</Text>
      </View>
    )
  }


  render() {
    return (
      <View style={styles.viewRivals}>
        {this.renderHeader()}
        {this.renderContent()}
      </View>
    );
  }
}

Rivals.navigationOptions = () => {
  const opcoes = {
    headerShown: false,
  }
  return opcoes;
}

export default Rivals;
