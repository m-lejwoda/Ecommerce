import React, { Component,useEffect } from 'react'
import "../css/home.min.css"
import {connect} from "react-redux"
import HomepageItem from './HomepageItem'
import { useHistory } from 'react-router-dom';

const Homepage = (props) => {
    const history= useHistory()
    const handleRegister = () =>{
        console.log("ok")
        history.push('/signup/')
    }
    useEffect(() => {
        let items = props.allitems
    }, [])
    let items= props.allitems.items
        
        // const listItems = items.map((item,key) => <HomepageItem items={item} /> );
        const listItems = props.default.map((item,key) => <HomepageItem allitems={props.allitems.items} items={item} /> );
    return (
        <div className="home">
            <div className="home__box">
            <div className="home__container">
                <img className="home__container__img" src="http://127.0.0.1:8000/static/person.jpg/"></img>
              <div className="home__container__title">
                  <div className="home__container__title__title">ZIG KINETICA: NOWE KOLORY</div>
                  <p>Podkręć swój styl elektryzującymi zestawieniami kolorystycznymi. Poczuj przypływ mocy.</p>
                  <button>Kupuj męskie</button>
                  <button>Kupuj damskie</button>
              </div>
            </div>
            </div>
            <div className="home__twocontainers">
            
              <div className="home__twocontainers__firstcontainer">
              <img className="home__twocontainers__firstcontainer__img" src="http://127.0.0.1:8000/static/fashion.jpg/"></img>
                <div className="home__twocontainers__firstcontainer__title">  
                    <h3>Posiadamy również rozmiary plus size.</h3>
                    <h3>Zapraszamy zapoznaj się z naszą ofertą</h3>
                    <button>Przejdz do naszych produktów</button>
                    
                </div>
              </div>
              <div className="home__twocontainers__secondcontainer">
                <img className="home__twocontainers__secondcontainer__img" src="http://127.0.0.1:8000/static/shoes.jpg/"></img>
                <div className="home__twocontainers__secondcontainer__title">  
                    <h1> Posiadamy nową sportową kolekcje ubrań zarówno dla Pań jak i Panów</h1>
                </div>
              </div>
            </div>
            <div className="home__fourcontainers">
                <div className="home__fourcontainers__first">
                    <img className="home__fourcontainers__first__img" src="http://127.0.0.1:8000/static/sport1.jpg/"></img>
                </div>
                <div className="home__fourcontainers__second">
                    <img className="home__fourcontainers__second__img" src="http://127.0.0.1:8000/static/training.jpg/"></img>
                </div>
                <div className="home__fourcontainers__third">
                    <img className="home__fourcontainers__third__img" src="http://127.0.0.1:8000/static/balancing.jpg/"></img>
                </div>
                <div className="home__fourcontainers__fourth">
                    <img className="home__fourcontainers__fourth__img" src="http://127.0.0.1:8000/static/children.jpg/"></img>
                </div>
            </div>
            <div className="home__suggestions">
                {listItems} 
            </div>
            <div className="home__register">
                    <div className="home__register__title">
                        <span>Zarejestruj się a dostaniesz rabat -15% na wszystkie produkty</span>
                    </div>
                    <div className="home__register__button">
                        <button onClick={handleRegister}>Zarejestruj się</button>
                    </div>
            </div>
            
        </div>
    );
};
const mapStateToProps = state => {
    return {
    //   array: state.items.mainarray.items
    allitems : state.items.allitems,
    isLoaded : state.items.isAllLoadedItems,
    default : state.items.default
    };
  };
export default connect(mapStateToProps)(Homepage);




