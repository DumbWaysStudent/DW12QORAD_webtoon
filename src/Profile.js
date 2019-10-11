import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Text, Button, Content, Input, Item, Container, Header, Icon, Footer, FooterTab, Row } from 'native-base';

export default class Profile extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Container style={style.container}>
                <View style={style.header}>
                    <Text style={style.profileText}>Profile</Text>
                    <Icon onPress={() => this.props.navigation.navigate('EditProfileScreen')} style={style.iconPencil} type="FontAwesome" name="pencil" />
                </View>
                <View style={style.contentImage}>
                    <Image
                        style={style.imageProfile}
                        source={{ uri: 'https://scontent.fcgk18-1.fna.fbcdn.net/v/t1.0-0/p370x247/22366781_1748979058470225_8820785541863561298_n.jpg?_nc_cat=101&_nc_oc=AQnlHiAFDBL6m6_ZOwbsi3y6jxFp70BURn5RPomZeQNz0ylgzlywKStts0BikY-tbi0&_nc_ht=scontent.fcgk18-1.fna&oh=852ae5351f48f780e85a28d1b2d3d053&oe=5E2382D9' }}
                    />
                    <Text style={style.profileName} >Nur Muhamad. R</Text>
                </View>
                <View style={style.myCreation}>
                    <Text style={style.myWebtoon}>My Webtoon Creation</Text>
                    <Icon onPress={() => this.props.navigation.navigate('MyWebtoonCreation')} style={style.arrow} type="FontAwesome" name="arrow-right" />
                </View>
                <View>
                    <Text style={style.logOut}>Log Out</Text>
                </View>
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
        flexDirection: 'row'
    },
    profileText: {
        flex: 12,
        fontSize: 25,
        marginLeft: 20,
        marginTop: 15,
    },
    iconPencil: {
        flex: 2,
        marginTop: 20,
        fontSize: 30,
        color: '#32cd32'
    },
    imageProfile: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 50,
        borderWidth: 5,
        borderColor: '#dcdcdc'
    },
    contentImage: {
        alignItems: 'center'
    },
    profileName: {
        fontSize: 25,
        marginTop: 20,
    },
    myWebtoon: {
        flex: 7,
        marginTop: 30,
        marginLeft: 20,
        fontSize: 20,
        marginBottom: 20
    },
    logOut: {
        marginLeft: 20,
        fontSize: 20,
    },
    myCreation: {
        flexDirection: 'row'
    },
    arrow: {
        flex: 1,
        marginTop: 30
    }
})