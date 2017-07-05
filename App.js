import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container,FooterTab,Footer,Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Expo from 'expo';

import StoreCard from './src/storecard';
import FooterTabs from './src/footerTab';

export default class CardImageExample extends Component {

  async componentWillMount() {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
    };

      render() {
        return (
          <Container>

            <Header/>

            <Content style={{padding: 10}}>

              <StoreCard />
            </Content>

              <FooterTabs/>

          </Container>
        );
      }
    }


  const styles = StyleSheet.create({

  artistBox:
  {
    flexDirection: 'row',
    margin: 5,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset:
      {
        height:1,
        width:-1,
      },
      elevation: 2,
  },
  image:
  {
    width: 180,
    height: 150,
    backgroundColor: 'yellow',
  },
  info:
  {
    flex:1,
    flexDirection: 'column',
    alignItems:'center',
  },
  artist:
  {
    fontSize: 16,
    marginTop: 15,
    color: 'gray',
  },
  row:
  {
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginHorizontal: 30,
   marginTop: 15,
  },
  iconContainer:
  {
    flex:1,
    alignItems: 'center',
  },
  count:
  {
    color: 'gray',
  }

});
