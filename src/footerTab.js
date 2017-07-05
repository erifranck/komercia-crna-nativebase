import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabs extends Component {
  render() {
    return (

        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="cart" />
              <Text>Comprar</Text>
            </Button>

            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Explorar</Text>
            </Button>
            <Button vertical>
              <Icon name="keypad" />
              <Text>Tiendas</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Perfil</Text>
            </Button>
          </FooterTab>
        </Footer>
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
})
