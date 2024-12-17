import React,{Component} from "react";

export default class Cards extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <section>
                <div className="wholeCards">
                    <div className="cards">
                        <div className="cardImg">
                            <img src= {this.props.imgSrc} alt= {this.props.altImg}/>
                        </div>
                        <div className="imgDetails">
                            <div className="details">
                                <h2>{this.props.cardHead}</h2>
                                <p>{this.props.cardDes}</p>
                                <a href="">{this.props.seeTerms}</a>
                            </div>
                            <button>{this.props.button}</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}