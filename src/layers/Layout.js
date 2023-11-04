import React , { Component } from 'react';
import { List } from '../layers/List';
import { Registration } from '../layers/Registration';
import { Homes } from '../layers/Homes';
import { Formation } from '../layers/Formation';
import { Services } from '../layers/Services';
import { AddStudent } from './AddStudent';


export class Layout extends Component {

    constructor( props ){
        super( props );
    }

    render(){
         
        switch ( this.props.state) {
            
            case 0 : return <Homes />;
            case 1 : return <Registration />;
            case 2 : return <List /> ;
            case 3 : return <Formation />;    
            case 4 : return <Services />;
            case 5 : return <AddStudent />;
            
            default:
              return <Homes />;
          }
        
    }
}
