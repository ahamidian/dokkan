import React, {useEffect, useState} from 'react';
import {getApi} from "../../../api";
import Spinner from "react-spinkit"
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {PRIMARY_COLOR} from "../../../constants";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    unaffected: {
        flip: false,
        direction: "ltr"
    },
    dataCard: {
        padding: theme.spacing(1),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },


}));

export default function Dashboard() {

    const [data, setdata] = useState({});
    const [state, setState] = useState("loading");
    const classes = useStyles();

    useEffect(() => {
        loadData()
    }, []);

    function loadData() {
        getApi().get(`dashboard/dashboard-data`, true)
            .then(response => {
                setdata(response.data);
                setState("loaded");
            })
            .catch((response) => {
                console.log(response);
                setState("error");
            });
    }

    if (state === "loading") {
        return (
            <div style={{flex: 1, marginTop: 50, width: "100%"}}>
                <Spinner name="ball-grid-pulse" color={PRIMARY_COLOR} fadeIn="none" style={{margin: "auto"}}/>
            </div>
        )
    } else if (state === "error") {
        return (
            <Grid container justify="center" direction="column" alignItems="center" style={{marginTop: 80}}>
                <p style={{textAlign: "center"}}>خطایی پیش آمد، دوباره تلاش کنید.</p>
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    onClick={() => {
                        setState("loading");
                        loadData();
                    }}
                >
                    تلاش مجدد
                </Button>
            </Grid>
        )
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={3}>
                <Paper>
                    <Grid container className={classes.dataCard}>
                        <Grid container item xs={4} justify="center">
                            <BusinessOutlinedIcon style={{fontSize: 60, color: PRIMARY_COLOR}}/>
                        </Grid>
                        <Grid container item xs={8} justify="center">
                            <p style={{fontSize: 18, textAlign: "right"}}>{`${data.total_companies} تولید کننده`}</p>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <Paper>
                    <Grid container className={classes.dataCard}>
                        <Grid container item xs={4} justify="center">
                            <PeopleAltOutlinedIcon style={{fontSize: 60, color: PRIMARY_COLOR}}/>
                        </Grid>
                        <Grid container item xs={8} justify="center">
                            <p style={{fontSize: 18, textAlign: "right"}}>{`${data.total_sellers} فروشنده`}</p>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <Paper>
                    <Grid container className={classes.dataCard}>
                        <Grid container item xs={4} justify="center">
                            <LocalMallOutlinedIcon style={{fontSize: 60, color: PRIMARY_COLOR}}/>
                        </Grid>
                        <Grid container item xs={8} justify="center">
                            <p style={{fontSize: 18, textAlign: "right"}}>{`${data.total_products} کالا`}</p>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <Paper>
                    <Grid container className={classes.dataCard}>
                        <Grid container item xs={4} justify="center">
                            <ShoppingCartOutlinedIcon style={{fontSize: 60, color: PRIMARY_COLOR}}/>
                        </Grid>
                        <Grid container item xs={8} justify="center">
                            <p style={{fontSize: 18, textAlign: "right"}}>{`${data.total_orders_value} فروش`}</p>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>


            <Grid item xs={12} lg={6}>
                <Paper className={classes.unaffected}>
                    <p style={{padding: 10, fontSize: 20, marginTop: 0, textAlign: "right"}}>آمار روزانه مغازه ها</p>
                    <ResponsiveContainer aspect={2}>
                        <AreaChart
                            data={data.order_data}
                            margin={{top: 5, right: 15, left: -10, bottom: 5,}}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                            <XAxis dataKey="date"/>
                            <YAxis/>
                            <Tooltip animationDuration={100} offset={5}
                                     cursor={{stroke: '#00000011', strokeWidth: 20}}/>
                            <defs>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="10%" stopColor={PRIMARY_COLOR} stopOpacity={.2}/>
                                    <stop offset="90%" stopColor={PRIMARY_COLOR} stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="value" stroke={PRIMARY_COLOR} strokeWidth={2.5}
                                  isAnimationActive={false}
                                  dot={{stroke: "white", fill: PRIMARY_COLOR, strokeWidth: 3, r: 5}}
                                  activeDot={{stroke: "white", fill: PRIMARY_COLOR, strokeWidth: 3, r: 5.5}}
                                  fillOpacity={1} fill="url(#colorPv)"/>
                        </AreaChart>
                    </ResponsiveContainer>
                </Paper>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Paper className={classes.unaffected}>
                    <p style={{padding: 10, fontSize: 20, marginTop: 0, textAlign: "right"}}>آمار روزانه مغازه ها</p>
                    <ResponsiveContainer aspect={2}>
                        <AreaChart
                            data={data.seller_data}
                            margin={{top: 5, right: 15, left: -10, bottom: 5,}}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                            <XAxis dataKey="date"/>
                            <YAxis/>
                            <Tooltip animationDuration={100} offset={5}
                                     cursor={{stroke: '#00000011', strokeWidth: 20}}/>
                            <defs>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="10%" stopColor={PRIMARY_COLOR} stopOpacity={.2}/>
                                    <stop offset="90%" stopColor={PRIMARY_COLOR} stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="value" stroke={PRIMARY_COLOR} strokeWidth={2.5}
                                  isAnimationActive={false}
                                  dot={{stroke: "white", fill: PRIMARY_COLOR, strokeWidth: 3, r: 5}}
                                  activeDot={{stroke: "white", fill: PRIMARY_COLOR, strokeWidth: 3, r: 5.5}}
                                  fillOpacity={1} fill="url(#colorPv)"/>
                        </AreaChart>
                    </ResponsiveContainer>
                </Paper>
            </Grid>

        </Grid>

    );

}

