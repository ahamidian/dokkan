import React, {useState} from 'react';
import {Image, ImageBackground, ScrollView, View} from 'react-native';
import {Button, Card, Form, Input, Item} from 'native-base';
import {getApi} from './api';
import {BG_COLOR, PRIMARY_COLOR} from './constants';

export default function Login({navigation}) {
    const [phoneNumber, setPhoneNumber] = useState('');
    // const isBackClicked = useRef(false);



    //
    // useFocusEffect(
    //     React.useCallback(() => {
    //         const onBackPress = () => {
    //             if (!isBackClicked.current) {
    //                 isBackClicked.current = true;
    //                 ToastAndroid.show(`برای خروج دوباره کلید بازگشت را بزنید.`, ToastAndroid.SHORT);
    //                 setTimeout(() => {
    //                     isBackClicked.current = false;
    //                 }, 3000);
    //             } else {
    //                 BackHandler.exitApp();
    //             }
    //             return true;
    //
    //         };
    //
    //         BackHandler.addEventListener('hardwareBackPress', onBackPress);
    //
    //         return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    //     }, []),
    // );

    function sendSMS() {
        getApi()
            .post('send_code/', {username: phoneNumber})
            .then(response => {
                navigation.push('ConfirmCode', {phoneNumber: phoneNumber});
            }).catch(err => {
                console.log(err);
            },
        );
    }

    return (

        <View style={{flex: 1, backgroundColor: BG_COLOR}}>
            <ImageBackground source={require('../../../bg.png')} style={{height: '100%', width: '100%'}}
                             resizeMode='cover'>
                <ScrollView keyboardShouldPersistTaps="always">

                    <Form height="100%" style={{alignItems: 'center'}}>

                        <Image
                            style={{flex: 1, width: '30%', height: 150}}
                            resizeMode="contain"
                            source={require('../../../typo3.png')}
                        />

                        <Card style={{marginTop: 0, padding: 20, width: '90%', alignItems: 'center', borderRadius: 40}}>
                            <p bold style={{fontSize: 25, marginTop: 10}}>ورود</p>
                            {/*<Icon*/}
                            {/*    type="FontAwesome5"*/}
                            {/*    name="mobile-alt"*/}
                            {/*    style={{fontSize: 80, color: PRIMARY_COLOR, margin: 30}}*/}
                            {/*/>*/}

                            <p style={{fontSize: 18, textAlign: 'center', padding: 5}}>لطفا شماره همراه خود را وارد
                                نمایید</p>
                            <Item regular style={{marginLeft: 10, marginRight: 10, marginTop: 20, borderRadius: 30}}>
                                <Input
                                    keyboardType="phone-pad"
                                    placeholder="شماره موبایل شما"
                                    type="tel"
                                    style={{
                                        textAlign: 'center',
                                        backgroundColor: 'white',
                                        borderRadius: 40,
                                        fontFamily: 'IRANSansMobile',
                                    }}
                                    value={phoneNumber}
                                    onChangeText={text => setPhoneNumber(text)}
                                />
                            </Item>
                            <Button
                                style={{backgroundColor: PRIMARY_COLOR, padding: 30, borderRadius: 40, marginTop: 20}}
                                onPress={sendSMS}>
                                <p style={{color: 'white', fontSize: 18}}> ارسال کد</p>
                            </Button>
                        </Card>

                    </Form>

                </ScrollView>
            </ImageBackground>
        </View>
    );
}
