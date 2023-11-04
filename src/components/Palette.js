import React, { Component } from 'react';
import { Home } from '../views/Home';

export class Palette extends Component {

    constructor( props ){
        super( props );
        this.state = {
           value : 0
        }
    }

    homeToggle = ()=> {  }

    render(){

        return (
           
            <div class="row shadow round bg-white mb-4"> 

                <div class="col-6 border p-3 rounded-top-left d-flex flex-column align-items-center cursor">
                    <img src={'img/icons8-page-d’accueil-96.png'} alt="" width={30} />
                    <span class="text-center"> Accueil </span>
                </div>
                <div class="col-6 border p-3 rounded-top-right d-flex flex-column align-items-center cursor">
                    <img src={'img/icons8-modifier-lutilisateur-homme-100.png'} alt="" width={30} />
                    <span class="text-center"> Incription </span>
                </div>

                <div class="col-6 border p-3 d-flex flex-column align-items-center cursor">
                    <img src={'img/icons8-formalités-administratives-64.png'} alt="" width={30} />
                    <span class="text-center"> List etudiants </span>
                </div>
                <div class="col-6 border p-3 d-flex flex-column align-items-center cursor">
                    <img src={'img/icons8-tableau-noir-96.png'} alt="" width={30} />
                    <span class="text-center"> Formations </span>
                </div>

                <div class="col-6 border p-3 rounded-bottom-left d-flex flex-column align-items-center cursor">
                    <img src={'img/icons8-service-100.png'} alt="" width={30} />
                    <span class="text-center"> Services </span>
                </div>
                <div class="col-6 border p-3 rounded-bottom-right d-flex flex-column align-items-center">
                    <img src={'img/icons8-statistic-96.png'} alt="" width={30} />
                    <span class="text-center"> Statisque </span>
                </div>

            </div>


        )
    }
}
