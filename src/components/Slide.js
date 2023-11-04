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

            <div class="container-fluid p-0 m-0"> 
            <div class="slide">
                <div class="over py-5 px-2">
                    <div class="row d-flex justify-content-center">
                        <div class="col-10">
    
                            <div class="row d-flex justify-content-between mt-4">
                            {/* <!--  --> */}
                                <div class="col-md-5 d-flex flex-column">

                                    {  this.state.value ? ( < TextSlide /> ) : ( < Palette /> )  }

                                    <div class="mb-5">  <button class="btn btn-lg btn-white" onClick={ this.toggle } > { this.state.value ? 'Voir palette' : 'Voir contenu'  }  </button> </div>
                                
                                </div>
                            {/* <!--  --> */}
                                <div class="col-md-5 hide text-end">
                                    <img src={'img/Groupe 4.png'} alt="" class="img-fluid" width="300" />
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
