import discover from '../pages/discover'
import friend from '../pages/friend'
import mine from '../pages/mine'
import {Redirect} from 'react-router-dom'
import React,{lazy} from "react";

const Recommend = lazy(() => import('../pages/discover/c-pages/recommend'))
const Ranking = lazy(() => import('../pages/discover/c-pages/ranking'))
const Songs = lazy(() => import('../pages/discover/c-pages/songs'))
const Djradio = lazy(() => import('../pages/discover/c-pages/djradio'))
const Artist = lazy(() => import('../pages/discover/c-pages/artist'))
const Album = lazy(() => import('../pages/discover/c-pages/album'))
const Player = lazy(() => import('../pages/player'))

const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to='/discover'/>
        )
    },
    {
        path: "/discover",
        component: discover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to={"/discover/recommend"}/>
                )
            },
            {
                path: "/discover/recommend",
                component: Recommend
            },
            {
                path: "/discover/ranking",
                component: Ranking
            },
            {
                path: "/discover/songs",
                component: Songs
            },
            {
                path: "/discover/djradio",
                exact: true,
                component: Djradio
            },
            {
                path: "/discover/artist",
                component: Artist
            },
            {
                path: "/discover/album",
                component: Album
            },
            {
                path: "/discover/player",
                component: Player
            }
        ]
    },
    {
        path: '/mine',
        component: mine
    },
    {
        path: '/friend',
        component: friend
    },
]

export default routes