import React, { Component } from 'react';
import { WarningBox } from '../components/WarningBox';
import axios from 'axios';
import AxiosClient from '../AxiosClient';

export class Login extends Component {

   
    constructor( props ){
        super( props );
        this.state = {
            email : '',
            password : '',
            state : false 
        }
      
    }

    getMail = (e)=>{ this.setState( { email : e.target.value } ) }

    getPassword = (e)=>{ this.setState( { password : e.target.value } ) }
    
    sendForm = async (e)=>{

        e.preventDefault();
        
        const credentials = {
            email : this.state.email,
            password : this.state.password
        };
        
        AxiosClient.post('/auth/login',credentials)
        .then(res => {
            console.log(res)
            if(res.status === 200 ) {
                  sessionStorage.setItem("token", res.data.token);
                  sessionStorage.setItem("name", res.data.user.name);
                  sessionStorage.setItem("email", res.data.user.email);

                  window.location.replace('http://localhost:3000/wisdom');
            }
            else{
                this.setState( { 

                    state : true 
                 } )
            }
          
        })
        .catch( err => console.log(err))
        
    }


    render(){

        return (
         

    <div className="container-fluid">
    <div className="row px-4 pt-4 d-flex justify-content-center cover-b bg-light pb-5">
        <div className="col-lg-6 col-md-8 bg-white shadow my-5 rounded-3">

            <div className="row">
                <div className="col-md-8  p-4">

                   <div className="text-center mb-5">
                       <span className="text-shadow display-5 bold clr-white"> Connexion </span>
                   </div>

                   <WarningBox state={ this.state.state } msg={ 'Erreur! veillez verifier vos informations et reessayer'} />

                <form onSubmit={this.sendForm} className="" action="" method="post">

                    <div className="form-outline mb-3">
                        <input type="email" name="email" className="form-control" placeholder="email" required onChange={ this.getMail }  />
                    </div>
    
                    <div className="form-outline mb-3">
                        <input type="password" name="password" className="form-control" placeholder="password" required onChange={ this.getPassword } />
                    </div>

                    <div className="mb-4 text-start">
                        <span className="font-sml"> Mot de passe oublier ? </span>
                        <a href="" className="link clr-main link-sml"> changer maintenant </a>
                    </div>
    
                    <div className="mb-5"> <button type="submit" className="btn btn-primary mb-6">  se-connecter </button> </div>
                        
                   </form>

                   <div className="mb-2 text-end">               
                        <a href="" className="link clr-main link-sml"> se connecter avec google  </a>
                   </div>

                </div>
                <div className="col-md-4 bg-primary d-flex flex-column justify-content-center"> 
                    <div className=""> <img src={'img/Groupe.png'} alt="" className="img-fluid" />  </div>            
                </div>
            </div>

        </div>
    </div>
    
</div>
       

        )
    }
}
