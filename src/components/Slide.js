import React, { Component } from 'react';
import { TextSlide } from './TextSlide';
import { Palette } from './Palette';

export class Slide extends Component {

    constructor(  props  ){
        
        super( props );
        this.state = {
            value : true
         }
    }

    toggle = ()=> this.state.value ? this.setState({ value : false }) :this.setState({ value : true }) 

    render(){

        return (

            <div className="container-fluid p-0 m-0"> 
            <div className="slide">
                <div className="over py-5 px-2">
                    <div className="row d-flex justify-content-center">
                        <div className="col-10">
    
                            <div className="row d-flex justify-content-between mt-4">
                            {/* <!--  --> */}
                                <div className="col-md-5 d-flex flex-column">

                                    {  this.state.value ? ( < TextSlide /> ) : ( < Palette /> )  }

                                    <div className="mb-5">  <button className="btn btn-lg btn-white" onClick={ this.toggle } > { this.state.value ? 'Voir palette' : 'Voir contenu'  }  </button> </div>
                                
                                </div>
                            {/* <!--  --> */}
                                <div className="col-md-5 hide text-end">
                                    <img src={'img/Groupe 4.png'} alt="" className="img-fluid" width="300" />
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
