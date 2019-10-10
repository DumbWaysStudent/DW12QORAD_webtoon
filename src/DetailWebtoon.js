import React, { Component } from 'react';
import { View, StyleSheet, Image, Share} from 'react-native';
import { Text, Button, Content, Input, Item, Container, Row, Icon } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';


export default class DetailWebtoon extends Component {

    constructor () {
        super(); 
            this.state = {
                detailEps: [{
                    title: 'Chapter 1',
                    date: '1 Januari 2019',
                    picture: 'https://yt3.ggpht.com/a/AGF-l78MPb-ueTmaxPacXweyEgvIbezP_N0WIOqDTQ=s900-c-k-c0xffffffff-no-rj-mo'
                }, {
                    title: 'Chapter 2',
                    date: '7 Januari 2019',
                    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xqt5URWCF8-cr-zzbU-0RXsg6-d9DnyCId0EmaTG5wPy9vp5'
                }, {
                    title: 'Chapter 3',
                    date: '14 Januari 2019',
                    picture: 'https://roryfordblog.files.wordpress.com/2012/07/600px-ma_route_3-svg_.png'
                },  {
                    title: 'Chapter 4',
                    date: '21 Januari 2019',
                    picture: 'http://www.roulette-online.org/wp-content/uploads/2011/03/4.png'
                },            
                ]
            }
        }

static navigationOptions = ({ navigation }) => {
    return {
            headerRight: (
            <Icon type= "FontAwesome" name="share-alt" style={{marginRight: 10}} onPress={() => {alert('Success Pressed');}}
            />
            ),
        };
    }
    
render() {
    return (
        <Container style={style.container}>
            <Content>
                <View>
                    <Image style={style.imageBanner} source= {{uri: this.props.navigation.getParam('gambar') }} />
                </View>
                <Text style={style.chapterText}>All Chapter</Text>
                <View>
                    <FlatList
                        data={this.state.detailEps}
                        keyExtractor= {(item) => item.id}
                        renderItem={ ({item}) =>
                        <View>
                            <View key={item.picture}>
                                <Row>
                                    <Image style= {style.imageItem} source= {{ uri: item.picture}}/>
                                    <View>
                                        <Text style={style.titleImage}>{item.title}</Text>
                                        <Text style={style.titleDate}>{item.date}</Text>
                                    </View>
                                </Row>
                            </View>
                        </View>
                        }
                    />
                </View>  
            </Content>
        </Container>
        );
    }
}

const style = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    imageBanner: {
        height: 250,
        width: 390,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 5
    },
    imageItem: {
        height: 100,
        width: 100,
        marginLeft: 30,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 10,
        borderRadius: 5,
        marginBottom: 10
    },
    chapterText: {
        fontSize: 22,
        marginLeft: 30,
        marginTop: 15
    },
    titleImage: {
        fontSize: 20,
        marginTop: 30,
        marginLeft: 15
    },
    titleDate: {
        marginLeft: 16,
        fontSize: 14
    }
})

