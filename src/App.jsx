import React,{Component} from "react";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import users from "./data"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default class App extends Component{
    render(){
        return(
            <>
                <Header/>
                {
                    <div className="cardMain">
                       { users.map(val => <Cards
                        imgSrc = {val.imgSrc}
                        altImg = {val.altImg}
                        cardHead = {val.cardHead}
                        cardDes = {val.cardDes}
                        seeTerms = {val.seeTerms}
                        button = {val.button}
                        />)}
                    </div>
                }
                <Footer/>
                
            </>
        )
    }
}