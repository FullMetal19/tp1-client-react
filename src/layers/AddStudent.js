import React, { Component } from 'react';
import axios from 'axios';
import { WarningBox } from '../components/WarningBox';

export class AddStudent extends Component {

    constructor( props ){
        super( props );
        this.state = {

            email : '', 
            prenom : '',
            nom : '',
            sexe: '',
            image: '',
            
            ine: '',
            codeEtudiant : '',
            formation : '',
            dateNaiss : '',
            lieuNaiss : '',

            state : false
            
        }
      
    }

   
    getEmail = (e)=>{ this.setState( { email : e.target.value } ) }
    getPrenom = (e)=>{ this.setState( { prenom : e.target.value } ) }
    getNom = (e)=>{ this.setState( { nom : e.target.value } ) }
    getSexe = (e)=>{ this.setState( { sexe : e.target.value } ) }
    getImage = (e)=>{ this.setState( { image : e.target.value } ) }

    getIne = (e)=>{ this.setState( { ine : e.target.value } ) }
    getCodeTudiant = (e)=>{ this.setState( { codeTudiant : e.target.value } ) }
    getFormation = (e)=>{ this.setState( { formation : e.target.value } ) }
    getDateNaiss = (e)=>{ this.setState( { dateNaiss : e.target.value } ) }
    getLieuNaiss = (e)=>{ this.setState( { lieuNaiss : e.target.value } ) }

    sendForm = (e)=>{

        e.preventDefault();
        
        const credentials = {

            email : this.state.email,
            prenom : this.state.prenom ,
            nom : this.state.nom,
            sexe : this.state.sexe,

            ine: this.state.ine,
            codeEtudiant : this.state.codeEtudiant,
            formation : this.state.formation,
            dateNaiss : this.state.dateNaiss,
            lieuNaiss : this.state.lieuNaiss
            
        };
        
        axios({
            method : "POST",
            url : "http://127.0.0.1:8000/api/project/add/"+sessionStorage.getItem('userid'),
            data : credentials 
        })
        .then(res => {

            if( res.data.state ) {

                this.setState({ state : true })
            }
            else{

                 console.log( "ERROR" );
            }
          
        })
        .catch( err => console.log(err))        
    }

    render(){

        return (
           
    <div class="container-fluid bg-light py-5">

        <form onSubmit={this.sendForm} className="form mb-4" action="" method="post">

            <div class="row d-flex justify-content-center mt-5">
                <div class="col-lg-8">

                    <WarningBox state={ this.state.state } msg={ 'There is no project related to your account yet' } />      

                    <div class="row px-4">
                        {/* <!--  --> */}
                        <div class="col-lg-12 mb-5 d-flex flex-column align-items-center">
                            <span class="h1 g-d-clr mb-3"> Inscrire un nouveau etudiant </span>
                            <span class="g-d-clr"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
                        </div>
      
                        {/* <!--  BOX-3 --> */}
                        <div class="col-lg-12 border p-5 rounded-2 mb-5">
                            {/* <!-- ITEM --> */}
                            <div class="row mb-3 d-flex justify-content-between">
                                <div class="col-md-5">
                                    <div class="d-flex flex-column align-items-center">
                                        <div class="d-flex flex-column align-items-center justify-content-center gap-2">
                                            <img src="../../assets/img/icons8-student-64.png" alt=""class="rounded-circle shadow" height="160" width="160" />   
                                        </div>    
                                        <label class="link " for="ppAdmin">
                                            <div class="mb-3 circle-img shadow bg-primary" width="30px" height="30px">
                                                <img src={'img/icons8-photo-30.png'} alt="" srcset="" />
                                            </div>
                                        </label>
                                        <input type="file" name="image" class="hide-item" id="ppAdmin" required onChange={ this.getImage }/>
                                        <button class="btn btn-outline-main mt-2" type="submit"> Sauvegarder </button>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="mb-2">
                                        <label for="exampleFormControlInput2" class="font-sml" > Prenom </label>
                                        <input type="mail" class="form-control" placeholder="example@mail.com" id="exampleFormControlInput2" required onChange={ this.getPrenom }/>
                                    </div>
                                    <div class="mb-2">
                                        <label for="exampleFormControlInput2" class="font-sml" > Nom </label>
                                        <input type="mail" class="form-control" placeholder="example@mail.com" id="exampleFormControlInput2" required onChange={ this.getNom }/>
                                    </div>
                                    <div class="">
                                        <label for="exampleFormControlInput11" class="font-sml"> Sexe </label>
                                        <select name="" id="exampleFormControlInput11" class="form-control"  onChange={ this.getSexe }>
                                            <option value="masculin"> Masculin </option>
                                            <option value="feminin"> Feminin </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
        
                        </div>
                    
        
                        {/* <!-- SECOND BOX FOR CREATIMG NEW ACCOUNT --> */}
        
                        <div class="col-lg-12 border p-5 rounded-2">
                            {/* <!-- ITEM --> */}
                            <div class="row mb-3">
                                <div class="col-md-6 mb-3">
                                    <div class="">
                                        <label for="exampleFormControlInput7" class="font-sml"> Ine </label>
                                        <input type="text" class="form-control" placeholder="Prenom" id="exampleFormControlInput7" required onChange={ this.getIne } />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="">
                                        <label for="exampleFormControlInput8" class="font-sml" > Code etudiant </label>
                                        <input type="text" class="form-control" placeholder="Nom" id="exampleFormControlInput8" required onChange={ this.getCodeTudiant } />
                                    </div>
                                </div>
                            </div>

                            {/* <!-- ITEM --> */}
                            <div class="row mb-3">
                                <div class="col-md-6 mb-3">
                                    <div class="">
                                        <label for="exampleFormControlInput9" class="font-sml"> Date de naissance ( <span class="r-clr"> optionnelle </span> ) </label>
                                        <input type="date" class="form-control" placeholder="" id="exampleFormControlInput9" required onChange={ this.getDateNaiss } />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="">
                                        <label for="exampleFormControlInput10" class="font-sml" > Lieu de naissance ( <span class="r-clr"> optionnelle </span> ) </label>
                                        <input type="text" class="form-control" placeholder="" id="exampleFormControlInput10" required onChange={ this.getLieuNaiss } />
                                    </div>
                                </div>
                            </div>

                            {/* <!-- ITEM --> */}
                            <div class="row mb-3">
                                <div class="col-md-6 mb-3">
                                    <div class="">
                                        <label for="exampleFormControlInput7" class="font-sml"> Formation  </label>
                                        <input type="text" class="form-control" placeholder="Prenom" id="exampleFormControlInput7" required onChange={ this.getFormation } />
                                    </div>
                                </div>
                            </div>
                        
        
                            <div class="text-end">
                                <div class=""> <button class="btn btn-primary"> Enregistrer </button> </div>
                            </div>

                        </div>
        
        
        
                    </div>
                </div>
            </div>
        </form>
    </div>
            


        )
    }
}
