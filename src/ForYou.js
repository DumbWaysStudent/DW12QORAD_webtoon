import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
import { Text, Button, Content, Input, Item, Container, Header, Icon, Footer, FooterTab, Row } from 'native-base';

import Carousel from 'react-native-banner-carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 180;

export default class ForYou extends Component {
    constructor () {
        super();
        this.state = {
            banner: [{
                title: 'Tahilalats',
                picture: 'http://blog.evercoss.com/wp-content/uploads/2016/10/84a42-rekomendasi2bjudul2bline2bwebtoon2b-2bfeatured.jpg'
            }, {
                title: 'Si Ocong',
                picture: 'https://i.pinimg.com/originals/c1/6a/fd/c16afd4f703e5895bbf9867a82404142.jpg'
            }, {
                title: 'Si Juki',
                picture: 'https://www.teknosaurus.com/wp-content/uploads/2017/07/CV-Aplikasi-Baca-Komik-Si-Juki-dan-Mang-Awung.jpg'
            },  {
                title: 'Dracko',
                picture: 'https://i.ytimg.com/vi/w8In94uz_EY/maxresdefault.jpg'
            },            
            ]
        }
    }

    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} 
                source={{ uri: image.picture }}/>
            </View>
        );
    }

    render() {
        return (
        <Container style = {style.container}>
            <Header style = {style.header} searchBar rounded>
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
                    <Carousel
                        autoplay
                        autoplayTimeout={4000}
                        loop
                        index={0}
                        pageSize={BannerWidth}>
                        {this.state.banner.map((image, index) => this.renderPage(image, index))}
                    </Carousel>                   
                    <View>
                    <Text style={style.favorite}>Your Favorite Comics</Text>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal= {true} >
                            {this.state.banner.map((image) =>  (
                            <View key= {image.picture}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate
                                ('DetailWebtoonScreen', {gambar:image.picture})} >
                                <Image style={style.imageFavorite}
                                source= {{ uri: image.picture}}
                                />
                              </TouchableOpacity>                                
                                <Text style={style.textFav}>{image.title} </Text>
                            </View>
                            ))}
                        </ScrollView>
                    </View> 
                    <View>
                        <Text style={style.allText}>All</Text>
                        {this.state.banner.map((image) => (
                        <View key={image.picture}>
                            <Row>
                                <Image style= {style.imageRow} source= {{ uri: image.picture}}
                                />
                                <View>
                                    <Text style={style.titleFav} >{image.title}</Text>
                                    <Button warning small style={style.titleButton}>
                                    <Text style={style.favButton}>+ Favourite</Text>
                                    </Button> 
                                </View>
                            </Row>
                        </View>
                        ))}
                    </View>              
                </View>
                
            </Content>

            <Footer style = {style.footer}>
            <FooterTab style = {style.footerTab}>
                <Button vertical>
                <Icon name="apps" />
                <Text>For You</Text>
                </Button>
                <Button vertical>
                <Icon name="star" />
                <Text>Favorite</Text>
                </Button>
                <Button vertical>
                <Icon name="person" />
                <Text>Profile</Text>
                </Button>
            </FooterTab>
            </Footer>
        </Container>
        );
    }
}

const style = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    header: {
        backgroundColor: 'green'
    },
    footer: {
        
    },
    footerTab: {
        backgroundColor: 'green'
    },
    favorite: {
        fontSize: 20,
        marginTop: 5,
        marginLeft: 15,
        marginBottom: 10
    },
    imageFavorite: {
        height : 150,
        width : 150,
        marginRight: 5,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
    },
    imageRow: {
        height: 100,
        width: 100,
        marginLeft: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5
    },
    allText: {
        marginLeft : 10,
        marginTop: 5,
        marginBottom: 5,
        fontSize: 20
    },
    titleFav: {
        marginLeft: 10,
        marginTop: 10
    },
    titleButton: {
        marginLeft: 10,
        marginTop: 10,
    },
    textFav: {
      marginLeft: 15,
      marginTop: 10,
      marginBottom: 10
    }
})


