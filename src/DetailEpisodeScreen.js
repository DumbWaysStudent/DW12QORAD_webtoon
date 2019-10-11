import React, { Component } from 'react';
import { View, StyleSheet, Image, Share } from 'react-native';
import { Text, Button, Content, Input, Item, Container, Row, Icon } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

export default class DetailEpisodeScreen extends Component {

    constructor() {
        super();
        this.state = {
            Episode: [{
                title: 'Chapter 1',
                date: '1 Januari 2019',
                picture: 'https://cdn.idntimes.com/content-images/community/2018/09/fb564228809b941a07f053fe0e2f8776.jpg'
            }, {
                title: 'Chapter 2',
                date: '7 Januari 2019',
                picture: 'https://4.bp.blogspot.com/-K07IUz_5ZUQ/WMAKNdn426I/AAAAAAAAAEc/DUTLlmE_1cI8dGrpKyOWk4wmQQsjRWSDgCLcB/s1600/17021540_1309235969143844_7985200570484807518_n.jpg'
            }, {
                title: 'Chapter 3',
                date: '14 Januari 2019',
                picture: 'https://cdns.klimg.com/dream.co.id/resized/500x/real/2018/04/09/270882/instagramcomtahilalats.jpg'
            }, {
                title: 'Chapter 4',
                date: '21 Januari 2019',
                picture: 'https://4.bp.blogspot.com/-qOlykMNKu20/WMAKLnAAeKI/AAAAAAAAAEQ/DJNbv9_qdxYw-3H6nerkCptv4ExIKW9qACLcB/s1600/16996262_1301703776563730_2823948984842521986_n.jpg'
            },
            ]
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Detail Chapter',
            headerRight: (
                <Icon type="FontAwesome" name="share-alt" style={{ marginRight: 10 }} onPress={() => Share.share({ message: "tes" })}
                />
            ),
        };
    }

    render() {
        return (
            <Container style={style.container}>
                <Content>
                    <View>
                        <FlatList
                            data={this.state.Episode}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) =>
                                <View>
                                    <View key={item.picture}>
                                        <Row>
                                            <Image style={style.image} source={{ uri: item.picture }} />
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

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    image: {
        height: 400,
        width: 400,
        marginLeft: 5,
        marginTop: 20,
        marginBottom: 50
    }
})