import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Text, Button, Content, Input, Item, Container, Header, Icon, Footer, FooterTab, Row } from 'native-base';

export default class Profile extends Component {
    constructor() {
        super();
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Edit Profile',
            headerRight: (
                <Icon type="FontAwesome" name="check" style={{ marginRight: 10 }} onPress={() => this.props.navigation.navigate('Profile')}
                />
            ),
        };
    }

    render() {
        return (
            <Container style={style.container}>
                <View style={style.contentImage}>
                    <Image
                        style={style.imageProfile}
                        source={{ uri: 'https://scontent.fcgk18-1.fna.fbcdn.net/v/t1.0-0/p370x247/22366781_1748979058470225_8820785541863561298_n.jpg?_nc_cat=101&_nc_oc=AQnlHiAFDBL6m6_ZOwbsi3y6jxFp70BURn5RPomZeQNz0ylgzlywKStts0BikY-tbi0&_nc_ht=scontent.fcgk18-1.fna&oh=852ae5351f48f780e85a28d1b2d3d053&oe=5E2382D9' }}
                    />
                    <Text style={style.profileName} >Nur Muhamad. R</Text>
                </View>
                <View >
                    <Item style={style.placeholder} regular>
                        <Input placeholder='Edit Your Name Here' />
                    </Item>
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
    placeholder: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    }
})