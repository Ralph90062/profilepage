import React, { Component } from 'react';
import {View, ScrollView, TouchableHighlight, TouchableOpacity,Image ,Text} from 'react-native';
class Home extends Components {

    render() {
        return (
            <View>
                <ScrollView>
                    <View style={{padding:10, width:'100%',backgroundColor:'#000', height:150}}>
                        <TouchableOpacity>
                            <Image source={require('../../screen/back.png')} 
                            style={{ width:30, height:30}}></Image>
                            <View></View>
                            <View></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../../screen/profile.png')} style={{width:140,height:140,
                            borderRaduis:100,marginTop:-70}}></Image>
                            <Text styl={{fontSize:25,fontWeight:'bold',padding:10}}> Ralph Lopez </Text>
                            <Text styl={{fontSize:15,fontWeight:'bold',color:'grey'}}>Ralph90062@gmail.com</Text>
                    </View>
                    <View style={{alignSelf:'left',flexDirection:row}}>
                        <Image source={require('../../Screen/work.png')}
                            style={{width:20,height:20}}></Image>
                            <Text>Profile</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Home; 