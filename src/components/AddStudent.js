import React, { Component } from 'react';

export class List extends Component {

    constructor( props ){
        super( props );
       
    }

    render(){

        return (
    
        <div class="container-fluid bg-light mb">
            <div class="row d-flex justify-content-center shadow-sml">
                <div class="col-9">
                    {/*  */}
                    <div class="bg-white shadow-sm p-5 mb-5 d-flex flex-column"> 

                        <div class="">  </div>    
               
                        <Table data={this.state.data} />        
               
                    </div>                  
  
                </div>
            </div>
        </div>
           
       

        )
    }
}
