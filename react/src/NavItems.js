import React from 'react';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import WidgetsOutlinedIcon from '@material-ui/icons/WidgetsOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';

export const navItems = [
    {
        name: 'داشبورد',
        url: '/dashboard/home',
        icon: <DashboardOutlinedIcon/>,
    },
    {
        name: 'محصولات',
        url: '/dashboard/products',
        icon: <LocalMallOutlinedIcon/>,
        singleName: 'product'
    },
    {
        name: 'دسته بندی ها',
        url: '/dashboard/categories',
        icon: <WidgetsOutlinedIcon/>,
        singleName: 'category',
        adminOnly:true,
    },
    {
        name: 'سبد های خرید',
        url: '/dashboard/orders',
        icon: <ShoppingCartOutlinedIcon/>,
        singleName: 'order',
        adminOnly:true,
    },
    {
        name: 'سفارش ها',
        url: '/dashboard/orderLines',
        icon: <ShoppingCartOutlinedIcon/>,
        singleName: 'orderLine',
    },
    {
        name: 'خریداران',
        url: '/dashboard/sellers',
        icon: <PeopleAltOutlinedIcon/>,
        singleName: 'seller',
        adminOnly:true,
    },
    {
        name: 'شرکت ها',
        url: '/dashboard/companies',
        icon: <BusinessOutlinedIcon/>,
        singleName: 'company',
        adminOnly:true,
    }
];