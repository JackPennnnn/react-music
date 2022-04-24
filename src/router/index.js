import discover from '../pages/discover'
import friend from '../pages/friend'
import mine from '../pages/mine'
import { Redirect } from 'react-router-dom'
import React from "react";

import Recommend from '../pages/discover/c-pages/recommend'
import Ranking from '../pages/discover/c-pages/ranking'
import Songs from '../pages/discover/c-pages/songs'
import Djradio from '../pages/discover/c-pages/djradio'
import Artist from '../pages/discover/c-pages/artist'
import Album from '../pages/discover/c-pages/album'

const routes = [
    {
      path:"/",
      exact: true ,
      render:() => (
          <Redirect to='/discover' />
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
            }
        ]
    },
    {
        path:'/mine',
        component:mine
    },
    {
        path:'/friend',
        component:friend
    },
]

export default routes