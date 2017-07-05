import React, { Component } from 'react';
import { Image, StyleSheet, ListView } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import {getStores} from './api/stores';

export default class StoreCard extends Component {


  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        tiendas: []
    }
  }

  componentDidMount(){

     getStores()
     .then(data => {
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(data) })
      })


      // return fetch('http://komercia.co/api/movil/tiendas/0')
      // .then(response => response.json())
      // .then(data => console.warn('data',data))
      // .then(tiendas => tiendas.map(tiendas=> {
      //   return {
      //     nombre: tiendas.nombre,
      //     logo: tiendas.logo,
      //     likes: 28,
      //     comments: 155
      //   }
      // // }))
      // .then(response =>this.setState({dataSource: this.state.dataSource.cloneWithRows(response) }) )
  }


  renderTiendas(tiendas){
    return(
      <Card>

        <CardItem cardBody>
          <Image source={{uri: 'https://s3.amazonaws.com/nikeinc/assets/35371/Nike-FI_Store_11.19.14-3_native_1600.jpg?1416493401'}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Text>{tiendas.nombre}</Text>
        </CardItem>
      </Card>
      )
  }

  render() {
      return (
        <ListView
              enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderRow= {this.renderTiendas.bind(this)}
            />
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
