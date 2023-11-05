import React, { Component } from 'react';
import { WarningBox } from '../components/WarningBox';
import axios from 'axios';
import { Table } from '../components/Table';
import AxiosClient from '../AxiosClient';

export class List extends Component {

    constructor( props ){
        super( props );
        this.state = {
            data : [],
            state : false
        }

    }

    componentDidMount() {
        AxiosClient.get("/inscription")
        .then(res => {
            ( res.data.status === 200 ) ? this.setState({ state : true }) : this.setState({  data : res.data.data })
            
        } );
}

    render(){

        return (
    
        <div className="container-fluid bg-light mb">
            <div className="row d-flex justify-content-center shadow-sml">
                <div className="col-9">
                                          {/* <!--  --> */}
                    <div className="col-lg-12 my-5 d-flex flex-column align-items-center bg-white shadow-sm  p-4">
                        <span className="h1 g-d-clr mb-3"> List des etudiants </span>
                        <span className="g-d-clr"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
                    </div>
                    {/*  */}
                    <div className="bg-white shadow-sm p-5 mb-5 d-flex flex-column">   
               
                        <Table data={this.state.data} />  

                        <WarningBox state={ this.state.state } msg={ 'There is no project related to your account yet' } />      
               
                    </div>                  
  
                </div>
            </div>
        </div>
           
       

        )
    }
}
