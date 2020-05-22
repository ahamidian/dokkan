// import React, {useEffect, useRef, useState} from 'react';
// import {View, ScrollView, ToastAndroid, ImageBackground, Image, BackHandler} from 'react-native';
// import {Button, Card, Form, H2, H3, Icon, Input, Item, Toast} from 'native-base';
// import {getApi} from '../../api';
// import Text from '../../components/MyText';
// import {BG_COLOR, PRIMARY_COLOR} from '../../constants';
// import {useFocusEffect} from '@react-navigation/native';
//
// export default function ConfirmCode({route, navigation}) {
//     const [code, setCode] = useState('');
//     const [countDownTime, setCountDownTime] = useState(60);
//     const {phoneNumber} = route.params;
//     const inputRef = useRef(null);
//
//     useFocusEffect(
//         React.useCallback(() => {
//             startTimer();
//             inputRef.current._root.focus();
//         }, []),
//     );
//
//
//     function startTimer() {
//         let startTime = new Date().getTime();
//
//         let x = setInterval(function () {
//             let distance = new Date().getTime() - startTime;
//             setCountDownTime(60 - Math.floor(distance / 1000));
//             if (distance > 60000) {
//                 clearInterval(x);
//             }
//         }, 1000);
//     }
//
//     function resendSMS() {
//         getApi()
//             .post('send_code/', {username: phoneNumber})
//             .then(response => {
//                 ToastAndroid.show(`کد فعال سازی مجددا برای شما ارسال شد`, ToastAndroid.SHORT);
//                 startTimer();
//             }).catch(err => {
//                 console.log(err);
//             },
//         );
//     }
//
//     function tryLogin() {
//
//         getApi()
//             .post('token/', {username: phoneNumber, password: code})
//             .then(response => {
//                 storage.save({
//                     key: 'user',
//                     data: {
//                         firstName: response.data.user.first_name,
//                         lastName: response.data.user.last_name,
//                         username: response.data.user.username,
//                     },
//                 });
//                 storage.save({
//                     key: 'userCredentials',
//                     data: {
//                         access: response.data.access,
//                         refresh: response.data.refresh,
//                         authorized: true,
//                     },
//                 });
//                 navigation.popToTop();
//
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }
//
//     return (
//
//         <View style={{flex: 1, backgroundColor: BG_COLOR}}>
//             <ImageBackground source={require('../../../bg.png')} style={{height: '100%', width: '100%'}}
//                              resizeMode='cover'>
//                 <ScrollView keyboardShouldPersistTaps="always">
//
//                     <Form height="100%" style={{alignItems: 'center'}}>
//
//                         <Image
//                             style={{flex: 1, width: '30%', height: 150}}
//                             resizeMode="contain"
//                             source={require('../../../typo3.png')}
//                         />
//
//                         <Card style={{marginTop: 0, padding: 20, width: '90%', alignItems: 'center', borderRadius: 40}}>
//                             <Text bold style={{fontSize: 25, marginTop: 10}}>ورود</Text>
//                             {/*<Icon*/}
//                             {/*    type="FontAwesome"*/}
//                             {/*    name="check-square-o"*/}
//                             {/*    style={{fontSize: 80, color: PRIMARY_COLOR, margin: 30}}*/}
//                             {/*/>*/}
//
//                             <Text style={{fontSize: 18, textAlign: 'center', padding: 5}}>کد ارسال شده
//                                 را
//                                 وارد نمایید</Text>
//                             <Item regular style={{marginLeft: 10, marginRight: 10, marginTop: 20, borderRadius: 30}}>
//                                 <Input
//                                     ref={inputRef}
//                                     keyboardType="numeric"
//                                     placeholder="کد تایید"
//                                     value={code}
//                                     onChangeText={text => setCode(text)}
//                                     style={{
//                                         textAlign: 'center',
//                                         backgroundColor: 'white',
//                                         borderRadius: 40,
//                                         fontFamily: 'IRANSansMobile',
//                                     }}
//                                 />
//                             </Item>
//                             <Button
//                                 style={{backgroundColor: PRIMARY_COLOR, padding: 30, borderRadius: 40, marginTop: 20}}
//                                 onPress={tryLogin}>
//                                 <Text style={{color: 'white', fontSize: 18}}>تایید کد ارسالی</Text>
//                             </Button>
//                             <Button
//                                 transparent
//                                 style={{marginTop: 20}}
//                                 onPress={resendSMS}>
//                                 <Text style={{color: 'black'}}>
//                                     ارسال مجدد کد {countDownTime > 0 && countDownTime}
//                                 </Text>
//                             </Button>
//                         </Card>
//
//                     </Form>
//
//                 </ScrollView>
//             </ImageBackground>
//         </View>
//     );
//
// }
