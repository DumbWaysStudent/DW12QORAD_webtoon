import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import { Text, Button, Content, Input, Item } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome'

export default class Webtoon extends Component {
    constructor () {
        super();
        this.state = {
            icon : "eye-slash",
            password : true,
            isDisabled : true,
            invalidPass : false,
            activeButton : true

        }
    }

changeIcon() {
    this.setState (prevState => ({
        icon: prevState.icon === 'eye' ? 'eye-slash' : 'eye',
        password: !prevState.password
    }) );
}


emailValidation(text) {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test (text) === false) {
        this.setState({
          isDisabled: false,
        })
      } else {
        this.setState({
          isDisabled: true,
      })}
}

passwordValidation(pass) {
    if (pass == "") {
      this.setState({
        invalidPass: false,
      })
    } else {
      this.setState({
        invalidPass: true,
    })}
}

buttonFunction () {
  let a = this.state.isDisabled;
  let b = this.state.invalidPass;
    if ( a == true && b == true) {
      return false 
    } else {
      return true
    }
}

  render() {
    return (   
      <View style= {style.container}>
        <Content>
        <Text style= {style.login}>LOG IN</Text>
        <Text style= {style.emailInfo}>Login with your account WEBTOON</Text>
        <Text style= {style.email}>Email</Text>
          <Item regular>
            <Input onChangeText = {(text) => this.emailValidation (text)} placeholder ='Enter the Email...'/>
          </Item>
          <Text style= {style.password}>Password</Text>
          <Item style={style.item} regular>
            <Input onChangeText={(pass) => this.passwordValidation (pass)} 
            secureTextEntry={this.state.password} 
            placeholder='Enter the Password...' /><Icon style={style.eyeIcon} name={this.state.icon} 
            onPress={() => this.changeIcon()}/>
          </Item>
          <Button onPress={() => this.props.navigation.navigate('ForYouScreen')} success disabled = {this.buttonFunction()} style={style.loginButton} block warning>
            <Text>Log In</Text>
          </Button>
        </Content>
      </View>
    );
  }
}



const style = StyleSheet.create ({

    container : {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center'       
    },
    login : {
        fontSize: 50,
        color: 'green',
        marginVertical: 10,
        marginTop: 120,
        marginHorizontal: 100
    },
    emailInfo : {
        marginHorizontal: 50,
        marginBottom: 40
    },
    email : {
        marginBottom: 5,
        marginLeft: 5
    },
    password : {
        marginBottom: 1,
        marginLeft: 5,
        marginTop: 5
    },
    item : {
        marginTop: 5
    },
    loginButton: {
        marginTop: 20
    },
    eyeIcon : {
        fontSize: 23,
        marginRight: 10
    }

})