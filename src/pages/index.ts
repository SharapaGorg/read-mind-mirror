import { lazy } from 'react'

export const MainPage = lazy(() => import(/* webpackChunkName: 'main' */'./main'))
export const ChatPage = lazy(() => import(/* webpackChunkName: 'chat' */'./chat'))
export const CatalogPage = lazy(() => import(/* webpackChunkName: 'catalog' */'./catalog'))
export const OrdersPage = lazy(() => import(/* webpackChunkName: 'orders' */'./orders'))
export const AnalyticsPage = lazy(() => import(/* webpackChunkName: 'analytics' */'./analytics'))