import React, { Component } from 'react';
import { WarningBox } from '../components/WarningBox';
import axios from 'axios';

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
    
    sendForm = (e)=>{

        e.preventDefault();
        
        const credentials = {
            email : this.state.email,
            password : this.state.password
        };
        
        axios({
            method : "POST",
            url : "http://127.0.0.1:8001/api/auth/login",
            data : credentials 
        })
        .then(res => {

            console.log(res)
            
            if(res.status === 200 ) {
                  sessionStorage.setItem("token", res.data.token);
                  sessionStorage.setItem("name", res.data.user.name);
                  sessionStorage.setItem("email", res.data.user.email);

                  window.location.replace('http://localhost:3000/wisdom');
                  console.log()
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
         

    <div class="container-fluid">
    <div class="row px-4 pt-4 d-flex justify-content-center cover-b bg-light pb-5">
        <div class="col-lg-6 col-md-8 bg-white shadow my-5 rounded-3">

            <div class="row">
                <div class="col-md-8  p-4">

                   <div class="text-center mb-5">
                       <span class="text-shadow display-5 bold clr-white"> Connexion </span>
                   </div>

                   <WarningBox state={ this.state.state } msg={ 'Erreur! veillez verifier vos informations et reessayer'} />

                <form onSubmit={this.sendForm} className="" action="" method="post">

                    <div class="form-outline mb-3">
                        <input type="email" name="email" class="form-control" placeholder="email" required onChange={ this.getMail }  />
                    </div>
    
                    <div class="form-outline mb-3">
                        <input type="password" name="password" class="form-control" placeholder="password" required onChange={ this.getPassword } />
                    </div>

                    <div class="mb-4 text-start">
                        <span class="font-sml"> Mot de passe oublier ? </span>
                        <a href="" class="link clr-main link-sml"> changer maintenant </a>
                    </div>
    
                    <div class="mb-5"> <button type="submit" class="btn btn-primary mb-6">  se-connecter </button> </div>
                        
                   </form>

                   <div class="mb-2 text-end">               
                        <a href="" class="link clr-main link-sml"> se connecter avec google  </a>
                   </div>

                </div>
                <div class="col-md-4 bg-primary d-flex flex-column justify-content-center"> 
                    <div class=""> <img src={'img/Groupe.png'} alt="" class="img-fluid" />  </div>            
                </div>
            </div>

        </div>
    </div>
    
</div>
       

        )
    }
}
