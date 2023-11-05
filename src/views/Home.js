import React, { Component } from 'react';
import { Header } from '../components/Header';
import { Slide } from '../components/Slide';

import { Layout } from '../layers/Layout';
import { Footer } from '../components/Footer';



export class Home extends Component {

    constructor( props ){
        super( props );
        this.state = {
           btnValue : true,
           value : 0 ,
           visibility : true ,
           textCssClass : 'visible',
           paletteCssClass : 'hide-item'
        }
    }

    toggleBtn = ()=>{  this.state.visibility ?  this.setState({ btnValue: false , visibility : false, textCssClass : 'hide-item', paletteCssClass : 'visible' })  :  this.setState({ btnValue: true, visibility : true, textCssClass : 'visible', paletteCssClass : 'hide-item' }) };

    toggleHome = ()=>{  this.setState({ value : 0 }) };
    toggleRegist = ()=>{  this.setState({ value : 1 }) };
    toggleList = ()=>{  this.setState({ value : 2 }) };
    toggleForm = ()=>{  this.setState({ value : 3 }) };
    toggleService = ()=>{  this.setState({ value : 4 }) };
    toggleStat = ()=>{  this.setState({ value : 5 }) };


    render(){

        return (
<div>

    <Header />
        
      
    <div className="container-fluid p-0 m-0"> 
            <div className="slide">
                <div className="over py-5 px-2">
                    <div className="row d-flex justify-content-center">
                        <div className="col-10">
    
                            <div className="row d-flex justify-content-between mt-4">
                            {/* <!--  --> */}
                                <div className="col-md-5 d-flex flex-column">

                                    {/*  */}
                                
                                <div className={ this.state.textCssClass }>
                                    <div className="d-flex flex-column">
                                        <span className="mb-2 clr-white fs-6">Lorem ipsum dolor sit. </span>
                                        <span className="display-6 mb-2 fw-bold clr-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit </span>
                                        <span className="mb-4 fs-4 clr-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                                    </div>
                                </div>

                                    {/*  */}
                                <div className={ this.state.paletteCssClass }> 
                                    <div className="row shadow round bg-white mb-4"> 

                                        <div className="col-6 border p-3 rounded-top-left d-flex flex-column align-items-center cursor" onClick={this.toggleHome} >
                                            <img src={'img/icons8-page-d’accueil-96.png'} alt="" width={30} />
                                            <span className="text-center"> Accueil </span>
                                        </div>
                                        <div className="col-6 border p-3 rounded-top-right d-flex flex-column align-items-center cursor" onClick={this.toggleRegist}>
                                            <img src={'img/icons8-modifier-lutilisateur-homme-100.png'} alt="" width={30} />
                                            <span className="text-center"> Incription </span>
                                        </div>

                                        <div className="col-6 border p-3 d-flex flex-column align-items-center cursor" onClick={this.toggleList}>
                                            <img src={'img/icons8-formalités-administratives-64.png'} alt="" width={30} />
                                            <span className="text-center"> List etudiants </span>
                                        </div>
                                        <div className="col-6 border p-3 d-flex flex-column align-items-center cursor" onClick={this.toggleForm}>
                                            <img src={'img/icons8-tableau-noir-96.png'} alt="" width={30} />
                                            <span className="text-center"> Formations </span>
                                        </div>

                                        <div className="col-6 border p-3 rounded-bottom-left d-flex flex-column align-items-center cursor" onClick={this.toggleService}>
                                            <img src={'img/icons8-service-100.png'} alt="" width={30} />
                                            <span className="text-center"> Services </span>
                                        </div>
                                        <div className="col-6 border p-3 rounded-bottom-right d-flex flex-column align-items-center" onClick={this.toggleStat}>
                                            <img src={'img/icons8-statistic-96.png'} alt="" width={30} />
                                            <span className="text-center"> Ajouter etudiants </span>
                                        </div>
                                    </div>
                                    </div>
                                     
                                    {/*  */}

                                    <div className="mb-5">  <button className="btn btn-lg btn-white" onClick={ this.toggleBtn } > { this.state.btnValue ? 'Voir palette' : 'Voir contenu'  }  </button> </div>
                                
                                </div>
                            {/* <!--  --> */}
                                <div className="col-md-5 hide">
                                    <div className="d-flex justify-content-center m-up"> <img src={'img/Groupe.png'} alt="" className="img-fluid" width="320" />  </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
            
        </div>
        

           
        <Layout state={this.state.value} />   
       

    </div>

    <Footer />

</div>



        )
    }
}
