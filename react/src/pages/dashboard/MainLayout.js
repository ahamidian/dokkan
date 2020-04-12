import React, {useEffect, useState} from 'react';
import Header from "./Header";
import {Grid,Sidebar,Segment} from "semantic-ui-react";
import LoginRequired from "./LoginRequired";
import SideBar from "./SideBar";
import {Route, Switch, Redirect} from "react-router-dom";
import ModelPage from "./Common/ModelPage";


export default function MainLayout({children}) {

    const [isSideBarOpen, setSideBarOpen] = useState(window.innerWidth > 500);
    const [width, setWidth] = useState(window.innerWidth);
    let dynamicHeight = 'calc(100vh - 90px)';


    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => window.removeEventListener('resize', handleWindowSizeChange);
    }, []);

    function handleWindowSizeChange() {
        if(width!==window.innerWidth){
            setWidth(window.innerWidth);
            if (window.innerWidth > 500) {
                setSideBarOpen(true);
            }else {
                setSideBarOpen(false);
            }
        }
    }

    return (
        <LoginRequired>
            <Sidebar.Pushable>
                <SideBar visible={isSideBarOpen} setVisible={setSideBarOpen} width={width}/>

                <Sidebar.Pusher dimmed={isSideBarOpen&&width<500}>
                    <Grid columns="equal" style={{margin: "0"}}>
                        <Grid.Row style={{padding: "0"}}>
                            <Header onMenuTogglerClick={() => setSideBarOpen(!isSideBarOpen)}
                                    paddingRight={isSideBarOpen && width > 500 ? "260px" : "0px"}/>
                        </Grid.Row>
                        <Grid.Row style={{padding: "0"}}>

                            <div style={{
                                backgroundColor: "#e2e2e2",
                                marginRight: isSideBarOpen && width > 500 ? "260px" : "0px",
                                height: dynamicHeight,
                                overflowY: "auto",
                                width: "100%"
                            }}
                                 className={`shooka-pusher ${width>500?"p-4":"p-2"}`}>

                                <Switch>
                                    <Route exact path="/dashboard">
                                       <Redirect to="/dashboard/home" />
                                    </Route>


                                    <Route path="/dashboard/:path" name="base Page">
                                        <ModelPage/>
                                    </Route>

                                </Switch>
                            </div>
                        </Grid.Row>
                    </Grid>
                </Sidebar.Pusher>
            </Sidebar.Pushable>



        </LoginRequired>

    );

}
