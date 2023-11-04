import React, { Component } from 'react';
import axios from 'axios';
import { WarningBox } from '../components/WarningBox';
import AxiosClient from '../AxiosClient';

export class Registration extends Component {

    constructor( props ){
        super( props );
        this.state = {

            email : '', 
            prenom : '',
            nom : '',
            sexe: '',
            image: '',       
            ine: '',
            promotion : '',
            dateNaiss : '',
            lieuNaiss : '',

            formation : '',
            niveau : '',
            anneeAcademique : '',

            state : false,

            allFormation : [],
            allAnneeAcademique : [],
            
        }
      
    }

   
    getEmail = (e)=>{ this.setState( { email : e.target.value } ) }
    getPrenom = (e)=>{ this.setState( { prenom : e.target.value } ) }
    getNom = (e)=>{ this.setState( { nom : e.target.value } ) }
    getSexe = (e)=>{ this.setState( { sexe : e.target.value } ) }
    getImage = (e)=>{ this.setState( { image : e.target.value } ) }
    getIne = (e)=>{ this.setState( { ine : e.target.value } ) }
    getPromotion = (e)=>{ this.setState( { promotion : e.target.value } ) }
    getDateNaiss = (e)=>{ this.setState( { dateNaiss : e.target.value } ) }
    getLieuNaiss = (e)=>{ this.setState( { lieuNaiss : e.target.value } ) }

    getFormation = (e)=>{ this.setState( { formation : e.target.value } ) }
    getNiveau = (e)=>{ this.setState( { niveau : e.target.value } ) }
    getAnneeAcademique = (e)=>{ this.setState( { anneeAcademique : e.target.value } ) }

    getAllFormation = ()=>{

        AxiosClient.get("/formation")
        .then(res => { 

            if(res.status === 200 ) {
                this.setState( { 

                    allFormation : res.data.data
                 } )
          }
          else{
              this.setState( { 

                   allFormation : []
               } )
          }

         } );
    }

    componentDidMount() {
        
        this.getAllFormation() ;
}

    sendForm = (e)=>{

        e.preventDefault();
        
        const credentials = {

            email : this.state.email,
            prenom : this.state.prenom ,
            nom : this.state.nom,
            sexe : this.state.sexe,
            ine: this.state.ine,
            promo : this.state.promotion,
            date_de_naissance : this.state.dateNaiss,
            lieu_de_naissance  : this.state.lieuNaiss,

            formation : this.state.formation,
            niveau : this.state.niveau,
            annee_academique : this.state.annee_academique,
            
        };
        
        AxiosClient.post('etudiant', {data : credentials })
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
                                        <label for="exampleFormControlInput8" class="font-sml" > Promotion </label>
                                        <input type="text" class="form-control" placeholder="Nom" id="exampleFormControlInput8" required onChange={ this.getPro } />
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
                            <div class="mb-3">
                                <label for="exampleFormControlInput11" class="font-sml"> Formation </label>
                                <select name="" id="exampleFormControlInput11" class="form-control"  onChange={ this.getFormation }>
                                    {
                                        this.state.allFormation.map( item => (
                                            <option value={ item.id }> { item.nom } </option>
                                            ))
                                    }
                                    
                                </select>
                            </div>
                            {/* <!-- ITEM --> */}
                            <div class="row mb-3">
                                <div class="col-md-6 mb-3">
                                    <label for="exampleFormControlInput11" class="font-sml"> niveau </label>
                                    <select name="" id="exampleFormControlInput11" class="form-control"  onChange={ this.getNiveau }>
                                        <option value="masculin"> Licence 1 </option>
                                        
                                    </select>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="exampleFormControlInput11" class="font-sml"> Annee academique </label>
                                    <select name="" id="exampleFormControlInput11" class="form-control"  onChange={ this.getAnneeAcademique }>
                                        <option value="masculin"> 2022-2023 </option>
                                       
                                    </select>
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
