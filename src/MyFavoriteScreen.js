import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Text, Button, Content, Input, Item, Container, Header, Icon, Footer, FooterTab, Row } from 'native-base';

// import Carousel from 'react-native-banner-carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ForYou extends Component {
    constructor() {
        super();
        this.state = {
            banner: [{
                title: 'Tahilalats',
                subtitle: '100+ Favorite',
                picture: 'http://blog.evercoss.com/wp-content/uploads/2016/10/84a42-rekomendasi2bjudul2bline2bwebtoon2b-2bfeatured.jpg'
            }, {
                title: 'Si Ocong',
                subtitle: '95 Favorite',
                picture: 'https://i.pinimg.com/originals/c1/6a/fd/c16afd4f703e5895bbf9867a82404142.jpg'
            }, {
                title: 'Si Juki',
                subtitle: '50 Favorite',
                picture: 'https://www.teknosaurus.com/wp-content/uploads/2017/07/CV-Aplikasi-Baca-Komik-Si-Juki-dan-Mang-Awung.jpg'
            }, {
                title: 'Dracko',
                subtitle: '80 Favorite',
                picture: 'https://i.ytimg.com/vi/w8In94uz_EY/maxresdefault.jpg'
            },
            ]
        }
    }


    render() {
        return (
            <Container style={style.container}>
                <Header style={style.header} searchBar rounded>
                    <Item>
                        <Input placeholder=" Search" />
                        <Icon name="ios-search" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>

                <Content>
                    <View>
                        {this.state.banner.map((item) => (
                            <View key={item.picture}>
                                <Row>
                                    <Image style={style.imageFavorite} source={{ uri: item.picture }}
                                    />
                                    <View>
                                        <Text style={style.titleFav} >{item.title}</Text>
                                        <Text style={style.subtitleFav} >{item.subtitle}</Text>
                                    </View>
                                </Row>
                            </View>
                        ))}
                    </View>

                </Content>
            </Container>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    header: {
        backgroundColor: '#32cd32'
    },
    footer: {

    },
    footerTab: {
        backgroundColor: 'green'
    },
    imageFavorite: {
        height: 100,
        width: 100,
        marginLeft: 30,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'silver',
        borderRadius: 5
    },
    titleFav: {
        fontSize: 22,
        marginLeft: 20,
        marginTop: 40
    },
    subtitleFav: {
        marginLeft: 20,
        fontSize: 15
    }
})