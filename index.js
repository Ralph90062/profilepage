import React, { Component } from 'react';
import { View, ScrollView, TouchableHighlight, TouchableOpacity,Image } from 'react-native';
class Home extends Component {

    render() {
        return (
            <View>
                <ScrollView>
                    <View style={{padding:10,width:'100%',backgroundColor:'#000',height:150}}>
                        <TouchableOpacity>
                            <Image source={require('../../screen/back.png')}
                            style={{ width:30, height:30}}></Image>
                            <View></View>
                            <View></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'left'}}>
                        <Image source={require('../../profile.png')} style={{width:}} style={{width:140,height:140,
                        borderRadius:100,marginTop:-70}}></Image>
                        <Text style={{fontSize:25,fontWeight:'bold',padding:10}}> Ralph Lopez </Text>
                        <Text style={{fontSize:15,fontWeight:'bold',color:'grey'}}> Ralph90062@gmail.com </Text>
                    </View>
                    <TouchableOpacity style={{
                        alignItems:'center',
                        justifyContent:'center',
                        flexDirection:'row',
                        backgroundColor:'white',
                        width:'90%',
                        padding:20,
                        borderRadius:10,
                        marginTop:20,
                        shadowOpacity:80,
                        elevation:15,
                    }}>
                    <Image source={require('../../screen/profile.png')}
                            style={{ width:30, height:30}}></Image>
                            <Text style={{fontSize:15,color:'#818181',fontWeight:'bold',marginLeft:10}}> Profile </Text>
                   
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        alignItems:'center',
                        justifyContent:'center',
                        flexDirection:'row',
                        backgroundColor:'white',
                        width:'90%',
                        padding:20,
                        borderRadius:10,
                        marginTop:20,
                        shadowOpacity:80,
                        elevation:15,
                        marginBottom:40
                    }}>
                    <Image source={require('../../screen/profile.png')}
                            style={{ width:30, height:30}}></Image>
                            <Text style={{fontSize:15,color:'#818181',fontWeight:'bold',marginLeft:10}}> Profile </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        alignItems:'center',
                        justifyContent:'center',
                        flexDirection:'row',
                        backgroundColor:'white',
                        width:'90%',
                        padding:20,
                        borderRadius:10,
                        marginTop:20,
                        shadowOpacity:80,
                        elevation:15,
                        marginBottom:40
                        backgroundColor:'blue'}}>
                            <Text style={{fontSize:15,color:'#fff',fontWeight:'bold',marginLeft:10}}> Logout </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    };
}

export default Home;