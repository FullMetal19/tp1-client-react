import React, { Component } from 'react';

export class List extends Component {

    constructor( props ){
        super( props );
       
    }

    render(){

        return (
    
        <div className="container-fluid bg-light mb">
            <div className="row d-flex justify-content-center shadow-sml">
                <div className="col-9">
                    {/*  */}
                    <div className="bg-white shadow-sm p-5 mb-5 d-flex flex-column"> 

                        <div className="">  </div>    
               
                        <Table data={this.state.data} />        
               
                    </div>                  
  
                </div>
            </div>
        </div>
           
       

        )
    }
}
