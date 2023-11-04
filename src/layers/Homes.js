import React, { Component } from 'react';
import { SubSlide } from '../components/SubSlide';

export class Homes extends Component {

    constructor( props ){
        super( props );
    }

    render(){

        return (

<div >       

        
        
        <SubSlide /> 

        <div class="container-fluid bg-light py-4">

        <div class="row d-flex justify-content-center mt-5">
            <div class="col-10">  
                <div class="row d-flex justify-content-around">
                    {/*  */}
                    <div class="col-md-5 mb-5">
                        <div class="d-flex flex-column p-0 shadow">
                            <img src={'img/hercules-hall-entoure-verdure-sous-lumiere-du-soleil-pendant-journee-munich-allemagne.jpg'} class="box-img mb-3" alt="..." />
                            <div class="px-3 mb-2"> <p class="">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div>
                        </div>
                    </div>
                    {/* */}
                    <div class="col-md-5 mb-5">
                        <div class="d-flex flex-column p-0 shadow">
                            <img src={'img/hercules-hall-entoure-verdure-sous-lumiere-du-soleil-pendant-journee-munich-allemagne.jpg'} class="box-img mb-3" alt="..." />
                            <div class="px-3 mb-2">
                              <p class="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                   {/*  */}
                    <div class="col-md-5 mb-5">
                        <div class="d-flex flex-column p-0 shadow">
                            <img src={'img/hercules-hall-entoure-verdure-sous-lumiere-du-soleil-pendant-journee-munich-allemagne.jpg'} class="box-img mb-3" alt="..." />
                            <div class="px-3 mb-2">
                              <p class="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div class="col-md-5 mb-5">
                        <div class="d-flex flex-column p-0 shadow">
                            <img src={'img/hercules-hall-entoure-verdure-sous-lumiere-du-soleil-pendant-journee-munich-allemagne.jpg'} class="box-img mb-3" alt="..." />
                            <div class="px-3 mb-2">
                              <p class="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div> 
            
            


        )
    }
}
