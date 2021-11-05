import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import { FinalPage } from '../pages/FinalPage/FinalPage'
import { HotelPage } from '../pages/HotelPage/HotelPage'
import { PurchasePage } from '../pages/PurchasePage/PurchasePage'



export const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HotelPage />
                </Route>
                <Route exact path='/purchase/:id/:price'>
                    <PurchasePage />
                </Route>
                <Route exact path='/concluded'>
                    <FinalPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}