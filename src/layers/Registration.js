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
            adresse:'',

            state : false,

            allFormation : [],
            allNiveau : [],
            allAnneeAcademique : [],
            
        }
      
    }

   
    getEmail = (e)=>{ this.setState( { email : e.target.value } ) }
    getPrenom = (e)=>{ this.setState( { prenom : e.target.value } ) }
    getAdresse = (e)=>{ this.setState( { adresse : e.target.value } ) }
    getNom = (e)=>{ this.setState( { nom : e.target.value } ) }
    getSexe = (e)=>{ this.setState( { sexe : e.target.value } ) }
    getImage = (e)=>{ this.setState( { image : e.target.value } ) }
    getIne = (e)=>{ this.setState( { ine : e.target.value } ) }
    getPromotion = (e)=>{ this.setState( { promotion : e.target.value } ) }
    getDateNaiss = (e)=>{ this.setState( { dateNaiss : e.target.value } ) }
    getLieuNaiss = (e)=>{ this.setState( { lieuNaiss : e.target.value } ) }

    getFormation = (e)=>{ this.setState( { formation : e.target.value } ) }
    getNiveau = (e)=>{ this.setState( { niveau : e.target.value } )}
    getAnneeAcademique = (e)=>{ this.setState( { anneeAcademique : e.target.value } ) }

    getAllFormation = async ()=>{

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

    getAllNiveau = async ()=>{

        AxiosClient.get("/niveau")
        .then(res => { 

            if(res.status === 200 ) {
                this.setState( { 

                    allNiveau : res.data.data
                 } )
          }
          else{
              this.setState( { 

                   allNiveau : []
               } )
          }

         } );
    }
    getAllAnneeAcademique = async ()=>{

        AxiosClient.get("/annee-academique")
        .then(res => { 

            if(res.status === 200 ) {
                this.setState( { 

                    allAnneeAcademique : res.data.data
                 } )
          }
          else{
              this.setState( { 

                   allAnneeAcademique : []
               } )
          }

         } );
    }

    componentDidMount() {
        
        this.getAllFormation() ;
        this.getAllNiveau() ;
        this.getAllAnneeAcademique() ;
}

    sendForm = (e)=>{

        e.preventDefault();
        
        const credentials = {

            // email : this.state.email,
            prenom : this.state.prenom ,
            nom : this.state.nom,
            adresse : this.state.adresse,
            sexe : this.state.sexe,
            ine: this.state.ine,
            promo : this.state.promotion,
            date_de_naissance : this.state.dateNaiss,
            lieu_de_naissance  : this.state.lieuNaiss,

            formation_id : this.state.formation,
            niveau_id : this.state.niveau,
            annee_academique_id : this.state.anneeAcademique,
            
        };
        console.log(credentials)
        
        AxiosClient.post('etudiant', credentials)
        .then(res => {

            if( res.data.status === 200 ) {

                this.setState({ state : true })
                console.log(res.data)
            }
            else{

                 console.log( "ERROR" );
            }
          
        })
        .catch( err => console.log(err))        
    }

    render(){

        return (
           
    <div className="container-fluid bg-light py-5">

        <form onSubmit={this.sendForm} className="form mb-4" action="" method="post">

            <div className="row d-flex justify-content-center mt-5">
                <div className="col-lg-8">

                    <WarningBox state={ this.state.state } msg={ 'There is no project related to your account yet' } />      

                    <div className="row px-4">
                        {/* <!--  --> */}
                        <div className="col-lg-12 mb-5 d-flex flex-column align-items-center">
                            <span className="h1 g-d-clr mb-3"> Inscrire un nouveau etudiant </span>
                            <span className="g-d-clr"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
                        </div>
      
                        {/* <!--  BOX-3 --> */}
                        <div className="col-lg-12 border p-5 rounded-2 mb-5">
                            {/* <!-- ITEM --> */}
                            <div className="row mb-3 d-flex justify-content-between">
                                <div className="col-md-5">
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                                            <img src="../../assets/img/icons8-student-64.png" alt=""className="rounded-circle shadow" height="160" width="160" />   
                                        </div>    
                                        <label className="link " for="ppAdmin">
                                            <div className="mb-3 circle-img shadow bg-primary" width="30px" height="30px">
                                                <img src={'img/icons8-photo-30.png'} alt="" srcset="" />
                                            </div>
                                        </label>
                                        <input type="file" name="image" className="hide-item" id="ppAdmin" required onChange={ this.getImage }/>
                                        <button className="btn btn-outline-main mt-2" type="submit"> Sauvegarder </button>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="mb-2">
                                        <label for="exampleFormControlInput2" className="font-sml" > Prénom </label>
                                        <input type="mail" className="form-control" placeholder="Prénom" id="exampleFormControlInput2" required onChange={ this.getPrenom }/>
                                    </div>
                                    <div className="mb-2">
                                        <label for="exampleFormControlInput2" className="font-sml" > Nom </label>
                                        <input type="mail" className="form-control" placeholder="Nom" id="exampleFormControlInput2" required onChange={ this.getNom }/>
                                    </div>
                                    <div className="mb-2">
                                        <label for="exampleFormControlInput2" className="font-sml" > Adresse </label>
                                        <input type="mail" className="form-control" placeholder="Adresse" id="exampleFormControlInput2" required onChange={ this.getAdresse }/>
                                    </div>
                                    <div className="">
                                        <label for="exampleFormControlInput11" className="font-sml"> Sexe </label>
                                        <select name="" id="exampleFormControlInput11" className="form-control"  onChange={ this.getSexe }>
                                            <option value="">Sélectionner le sexe</option>
                                            <option value="masculin"> Masculin </option>
                                            <option value="feminin"> Feminin </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
        
                        </div>
                    
        
                        {/* <!-- SECOND BOX FOR CREATIMG NEW ACCOUNT --> */}
        
                        <div className="col-lg-12 border p-5 rounded-2">
                            {/* <!-- ITEM --> */}
                            <div className="row mb-3">
                                <div className="col-md-6 mb-3">
                                    <div className="">
                                        <label for="exampleFormControlInput7" className="font-sml"> Ine </label>
                                        <input type="text" className="form-control" placeholder="Ine" id="exampleFormControlInput7" required onChange={ this.getIne } />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="">
                                        <label for="exampleFormControlInput8" className="font-sml" > Promotion </label>
                                        <input type="text" className="form-control" placeholder="Promotion" id="exampleFormControlInput8" required onChange={ this.getPromotion } />
                                    </div>
                                </div>
                            </div>

                            {/* <!-- ITEM --> */}
                            <div className="row mb-3">
                                <div className="col-md-6 mb-3">
                                    <div className="">
                                        <label for="exampleFormControlInput9" className="font-sml"> Date de naissance ( <span className="r-clr"> optionnelle </span> ) </label>
                                        <input type="date" className="form-control" placeholder="" id="exampleFormControlInput9" required onChange={ this.getDateNaiss } />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="">
                                        <label for="exampleFormControlInput10" className="font-sml" > Lieu de naissance ( <span className="r-clr"> optionnelle </span> ) </label>
                                        <input type="text" className="form-control" placeholder="Lieu de Naissance" id="exampleFormControlInput10" required onChange={ this.getLieuNaiss } />
                                    </div>
                                </div>
                            </div>

                            {/* <!-- ITEM --> */}
                            <div className="mb-3">
                                <label for="exampleFormControlInput11" className="font-sml"> Formation </label>
                                <select name="" id="exampleFormControlInput11" className="form-control"  onChange={ this.getFormation }>
                                    <option value="">Sélectionner la formation</option>
                                    {

                                        this.state.allFormation.map( item => (
                                            <option value={ item.id }> { item.nom } </option>
                                            ))
                                    }
                                    
                                </select>
                            </div>
                            {/* <!-- ITEM --> */}
                            <div className="row mb-3">
                                <div className="col-md-6 mb-3">
                                    <label for="exampleFormControlInput11" className="font-sml"> niveau </label>
                                    <select name="" id="exampleFormControlInput11" className="form-control"  onChange={ this.getNiveau }>
                                    <option value="">Sélectionner le niveau</option>

                                    {
                                        this.state.allNiveau.map( item => (
                                            <option value={ item.id }> { item.nom }</option>
                                            ))
                                    }
                                        
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="exampleFormControlInput11" className="font-sml"> Annee academique </label>
                                    <select name="" id="exampleFormControlInput11" className="form-control"  onChange={ this.getAnneeAcademique }>
                                    <option value="">Sélectionner l'année académique</option>

                                    {
                                        this.state.allAnneeAcademique.map( item => (
                                            <option value={ item.id }> { item.anneeAcademique } </option>
                                            ))
                                    }
                                       
                                    </select>
                                </div>
                            </div>
        
                            <div className="text-end">
                                <div className=""> <button className="btn btn-primary"> Enregistrer </button> </div>
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
