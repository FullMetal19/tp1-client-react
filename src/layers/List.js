import React, { Component } from 'react';
import { WarningBox } from '../components/WarningBox';
import axios from 'axios';
import { Table } from '../components/Table';

export class List extends Component {

    constructor( props ){
        super( props );
        this.state = {
            data : [],
            state : false
        }

    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8001/api/etudiant")
        .then(res => {

            ( res.data.length === 0 ) ? this.setState({ state : true }) : this.setState({  data : res.data })
            
        } );
}

    render(){

        return (
    
        <div class="container-fluid bg-light mb">
            <div class="row d-flex justify-content-center shadow-sml">
                <div class="col-9">
                                          {/* <!--  --> */}
                    <div class="col-lg-12 my-5 d-flex flex-column align-items-center bg-white shadow-sm  p-4">
                        <span class="h1 g-d-clr mb-3"> List des etudiants </span>
                        <span class="g-d-clr"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
                    </div>
                    {/*  */}
                    <div class="bg-white shadow-sm p-5 mb-5 d-flex flex-column">   
               
                        <Table data={this.state.data} />  

                        <WarningBox state={ this.state.state } msg={ 'There is no project related to your account yet' } />      
               
                    </div>                  
  
                </div>
            </div>
        </div>
           
       

        )
    }
}
