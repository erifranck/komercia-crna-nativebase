import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Expo from 'expo';



import StoreCard from './src/storecard';

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
            <Content>
              <StoreCard />
              <Grid>
                <Col style={{ backgroundColor: '#D954D7', height: 200 }}>


                </Col>
                <Col style={{ backgroundColor: '#D93735', height: 200 }}></Col>
              </Grid>

            </Content>
          </Container>
        );
      }
    }
