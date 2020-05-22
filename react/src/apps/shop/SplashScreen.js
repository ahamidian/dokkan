import React, {useEffect, useState} from 'react';
// import {Animated, BackHandler, Dimensions, Image, ToastAndroid, View} from 'react-native';
import {getApi} from './api';
import Spinner from "react-spinkit";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import typo from "./typo3.png"
import {MIN_SPLASH_TIME, PRIMARY_COLOR} from './constants';
import RefreshRoundedIcon from '@material-ui/icons/RefreshRounded';
import {useHistory} from "react-router-dom";
// import messaging from '@react-native-firebase/messaging';
import {useCart} from './CartContext';
import {useUser} from './UserContext';

// async function registerAppWithFCM() {
//     await messaging().registerDeviceForRemoteMessages();
// }

export default function SplashScreen({navigation}) {

    const history = useHistory();

    const {setUser} = useUser();
    const {setCart} = useCart();
    const [categories, setCategories] = useState({});
    const [slides, setSlides] = useState({});
    const [segments, setSegments] = useState({});
    const [showEnough, setShowEnough] = useState(false);
    const [orderLineLoaded, setOrderLineLoaded] = useState(false);
    const [userLoaded, setUserLoaded] = useState(false);
    const [state, setState] = useState(0);


    // useEffect(() => {
    //     registerAppWithFCM();
    // }, []);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('userCredentials'))?.authorized) {
            downloadInitialData();
            loadOrder();
            loadUser();
            setTimeout(() => setShowEnough(true), MIN_SPLASH_TIME);
        } else {
            // history.push("/shop/login");
        }

    }, []);

    useEffect(() => {
        if (orderLineLoaded && userLoaded && slides.done && segments.done && categories.done && showEnough) {
            history.push("/shop/main", {
                categories: categories.items,
                slides: slides.items,
                segments: segments.items,
            });
        }

    }, [orderLineLoaded, userLoaded, slides, segments, categories, showEnough]);

    //
    function downloadInitialData() {
        getApi()
            .get('initial_data/', false)
            .then(response => {
                if (response.data.categories.length > 0) {
                    setCategories({done: true, items: response.data.categories});
                    localStorage.setItem('categories', JSON.stringify(response.data.categories));
                }
                if (response.data.slides.length > 0) {
                    setSlides({done: true, items: response.data.slides});
                    localStorage.setItem('slides', JSON.stringify(response.data.slides));
                }
                if (response.data.segments.length > 0) {
                    setSegments({done: true, items: response.data.segments});
                    localStorage.setItem('segments', JSON.stringify(response.data.segments));
                }
            })
            .catch(resp => {
                console.log(resp);
                setState(1);
            });
    }

    function loadOrder() {
        let cart = JSON.parse(localStorage.getItem('cart')) || {};
        setCart(cart);
        setOrderLineLoaded(true);

    }

    function loadUser() {
        let user =  JSON.parse(localStorage.getItem('user')) || {};
        setUser(user);
        setUserLoaded(true);

    }

    function handleRetryClick() {
        setState(0);
        // downloadInitialData();
    }


    function renderFooter() {
        if (state === 1) {
            return <Button full large onPress={handleRetryClick} transparent style={{marginBottom: 30}}>
                <p style={{color: 'white', fontSize: 18}}>تلاش مجدد</p>
                <RefreshRoundedIcon style={{color: 'white', fontSize: 24}}/>
            </Button>;
        } else if (state === 0) {
            return <Spinner style={{alignSelf: 'center', marginBottom: 30}} size={60}
                            type="ThreeBounce"
                            color="white"/>;
        }
    }

    return (
        <Grid container direction="column" alignItems="center"
              style={{flex: 1, backgroundColor: PRIMARY_COLOR, height: "100vh"}}>
            <Grid container direction="column" alignItems="center" justify="center"
                  style={{flex: 1, backgroundColor: PRIMARY_COLOR, height: "100%"}}>
                <img
                    style={{width: '50%', maxHeight: '100%', height: "auto"}}
                    src={typo}
                    alt="logo dokkan"
                />
            </Grid>

            {renderFooter()}
        </Grid>
    );
}
