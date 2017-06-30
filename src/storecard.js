import React, { Component } from 'react';
import { Image, StyleSheet, ListView } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { getStores } from './api/stores';

export default class StoreCard extends Component {


  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      tiendas:[]
    }
  }

  componentWillMount() {
    fetch('http://komercia.co/api/movil/tiendas/0')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ tiendas: data })
      })
      .then(console.warn('tienda',this.state.tiendas))
  }

  render() {
      const imagestore = 'https://lc-www-live-s.legocdn.com/r/www/r/stores/-/media/brand%20retail/stores/photos/new/600x450_0007_store%20front.jpg?l.r2=896430844'
      // let tiendas = this.state.tiendas;
      // console.warn('tienda',this.state.tiendas)

      return (

        <ListView
              enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderRow= { (tiendas) => {
                return(
                  <Card>
                    <CardItem>
                      <Left>
                        <Thumbnail source={{uri: 'Image URL'}} />
                        <Body>
                          <Text>{tiendas.nombre}</Text>
                          <Text note>GeekyAnts</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Image source={{uri: imagestore}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                      <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>12 Likes</Text>
                      </Button>
                      <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text >4 Comments</Text>
                      </Button>
                      <Text>11h ago</Text>
                    </CardItem>
                  </Card>
                  )
                }}
            />
        );
    }
  }
