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

        <div className="container-fluid bg-light py-4">

        <div className="row d-flex justify-content-center mt-5">
            <div className="col-10">  
                <div className="row d-flex justify-content-around">
                    {/*  */}
                    <div className="col-md-5 mb-5">
                        <div className="d-flex flex-column p-0 shadow">
                            <img src={'img/hercules-hall-entoure-verdure-sous-lumiere-du-soleil-pendant-journee-munich-allemagne.jpg'} className="box-img mb-3" alt="..." />
                            <div className="px-3 mb-2"> <p className="">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div>
                        </div>
                    </div>
                    {/* */}
                    <div className="col-md-5 mb-5">
                        <div className="d-flex flex-column p-0 shadow">
                            <img src={'img/hercules-hall-entoure-verdure-sous-lumiere-du-soleil-pendant-journee-munich-allemagne.jpg'} className="box-img mb-3" alt="..." />
                            <div className="px-3 mb-2">
                              <p className="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                   {/*  */}
                    <div className="col-md-5 mb-5">
                        <div className="d-flex flex-column p-0 shadow">
                            <img src={'img/hercules-hall-entoure-verdure-sous-lumiere-du-soleil-pendant-journee-munich-allemagne.jpg'} className="box-img mb-3" alt="..." />
                            <div className="px-3 mb-2">
                              <p className="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-md-5 mb-5">
                        <div className="d-flex flex-column p-0 shadow">
                            <img src={'img/hercules-hall-entoure-verdure-sous-lumiere-du-soleil-pendant-journee-munich-allemagne.jpg'} className="box-img mb-3" alt="..." />
                            <div className="px-3 mb-2">
                              <p className="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
