import React, { Component } from 'react';
import { WarningBox } from '../components/WarningBox';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import AxiosClient from '../AxiosClient';

export class ModifStudent extends Component {

    constructor( props ){
        super( props );
        this.state = {
            prenom : '',
            nom : '',
            sexe: '',
            image: '',
            
            ine: '',
            adresse: '',
            formation : '',
            niveau : '',
            anneeAcademique : '',
            dateNaiss : '',
            lieuNaiss : '',

            data:[],
            allFormation:[],
            allNiveau:[],
            allAnneeAcademique:[],

            state : false,
            loader:false
            
        }
      
    }
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
    getInfoInscription = async ()=>{

        AxiosClient.get("/inscription/"+window.location.pathname.split('/')[2]).
        then(res => {

            if( res.status === 200 || res.status === 201 ) {

                this.setState({ 
                    data : res.data.data, loader:true,
                    prenom:res.data.data.etudiant.prenom,
                    nom:res.data.data.etudiant.nom,
                    sexe:res.data.data.etudiant.sexe,
                    ine:res.data.data.etudiant.ine,
                    image:res.data.data.etudiant.image,
                    adresse:res.data.data.etudiant.adresse,
                    formation:res.data.data.formation.id,
                    niveau:res.data.data.niveau.id,
                    anneeAcademique:res.data.data.annee_academique.id,
                    dateNaiss:res.data.data.etudiant.dateDeNaissance,
                    lieuNaiss:res.data.data.etudiant.lieuDeNaissance,
                  })
            }
            else{

                 console.log( "ERROR" );
            }
          
        })
        .catch( err => console.log(err))  
    }

    componentDidMount() {
        
        this.getAllFormation() ;
        this.getAllNiveau() ;
        this.getAllAnneeAcademique() ;
        this.getInfoInscription();

}

   
    getPrenom = (e)=>{ this.setState( { prenom : e.target.value } ) }
    getNom = (e)=>{ this.setState( { nom : e.target.value } ) }
    getSexe = (e)=>{ this.setState( { sexe : e.target.value } ) }
    getImage = (e)=>{ this.setState( { image : e.target.files[0]} ) }
 
    getIne = (e)=>{ this.setState( { ine : e.target.value } ) }
    getAdresse = (e)=>{ this.setState( { adresse : e.target.value } ) }
    getFormation = (e)=>{ this.setState( { formation : e.target.value } ) }
    getDateNaiss = (e)=>{ this.setState( { dateNaiss : e.target.value } ) }
    getLieuNaiss = (e)=>{ this.setState( { lieuNaiss : e.target.value } ) }
    getNiveau = (e)=>{ this.setState( { niveau : e.target.value } )}
    getAnneeAcademique = (e)=>{ this.setState( { anneeAcademique : e.target.value } ) }

    sendForm = (e)=>{

        e.preventDefault();
        
        const credentials = {
            prenom : this.state.prenom ,
            nom : this.state.nom,
            sexe : this.state.sexe,
            ine: this.state.ine,
            adresse: this.state.adresse,
            date_de_naissance : this.state.dateNaiss,
            lieu_de_naissance : this.state.lieuNaiss,
            formation_id : this.state.formation,
            niveau_id : this.state.niveau,
            annee_academique_id : this.state.anneeAcademique,
            inscription_id:window.location.pathname.split('/')[2]
            
        };
        AxiosClient.put("/inscription/"+window.location.pathname.split('/')[2],credentials).
        then(res => {

            if( res.status === 200 || res.status === 201 ) {

                this.setState({ data : res.data.data })
            }
            else{

                 console.log( "ERROR" );
            }
          
        })
        .catch( err => console.log(err))        
    }

    render(){
        return (
         
<div>

<Header />

    <div class="container-fluid bg-light py-5">

        <form onSubmit={this.sendForm} className="form mb-4" >

            <div class="row d-flex justify-content-center mt-5">
                <div class="col-lg-8">

                    <WarningBox state={ this.state.state } msg={ 'There is no project related to your account yet' } />      

                    <div class="row px-4">
                        {/* <!--  --> */}
                        <div class="col-lg-12 mb-5 d-flex flex-column align-items-center">
                            <span class="h1 g-d-clr mb-3"> Modifier un enregistrement </span>
                            <span class="g-d-clr"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
                        </div>
      
                        {/* <!--  BOX-3 --> */}
                        <div class="col-lg-12 border p-5 rounded-2 mb-5">
                            {/* <!-- ITEM --> */}
                            <div class="row mb-3 d-flex justify-content-between">
                                <div class="col-md-5">
                                    <div class="d-flex flex-column align-items-center">
                                        <div class="d-flex flex-column align-items-center justify-content-center gap-2">
                                            <img src={this.state.loader ? "http://localhost:8000/api/"+this.state.image: ""} alt=""class="rounded-circle shadow" height="160" width="160" />   
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
                                        <input type="mail" class="form-control" placeholder="Prénom" value={this.state.loader ? this.state.prenom: ""} id="exampleFormControlInput2" required onChange={ this.getPrenom }/>
                                    </div>
                                    <div class="mb-2">
                                        <label for="exampleFormControlInput2" class="font-sml" > Nom </label>
                                        <input type="mail" class="form-control" placeholder="Nom" value={this.state.loader ? this.state.nom : ""} id="exampleFormControlInput2" required onChange={ this.getNom }/>
                                    </div>
                                    <div class="">
                                        <label for="exampleFormControlInput11" class="font-sml"> Sexe </label>
                                        <select name="" id="exampleFormControlInput11" class="form-control" value={this.state.loader ? this.state.sexe : ""}  onChange={ this.getSexe }>
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
                                        <input type="text" class="form-control" placeholder="Ine" value={this.state.loader ? this.state.ine : ""} id="exampleFormControlInput7" required onChange={ this.getIne } />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="">
                                        <label for="exampleFormControlInput8" class="font-sml" > Adresse </label>
                                        <input type="text" class="form-control" placeholder="Adresse"  id="exampleFormControlInput8" value={this.state.loader ? this.state.adresse : ""} required onChange={ this.getAdresse } />
                                    </div>
                                </div>
                            </div>

                            {/* <!-- ITEM --> */}
                            <div class="row mb-3">
                                <div class="col-md-6 mb-3">
                                    <div class="">
                                        <label for="exampleFormControlInput9" class="font-sml"> Date de naissance ( <span class="r-clr"> optionnelle </span> ) </label>
                                        <input type="date" class="form-control" placeholder=""  id="exampleFormControlInput9" value={this.state.loader ? this.state.dateNaiss : ""} required onChange={ this.getDateNaiss } />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="">
                                        <label for="exampleFormControlInput10" class="font-sml" > Lieu de naissance ( <span class="r-clr"> optionnelle </span> ) </label>
                                        <input type="text" class="form-control" placeholder=""  id="exampleFormControlInput10" value={this.state.loader ? this.state.lieuNaiss : ""} required onChange={ this.getLieuNaiss } />
                                    </div>
                                </div>
                            </div>

                            {/* <!-- ITEM --> */}
                            <div className="mb-3">
                                <label for="exampleFormControlInput11" className="font-sml"> Formation </label>
                                <select name="" id="exampleFormControlInput11" className="form-control" value={this.state.loader ? this.state.formation : ""} onChange={ this.getFormation }>
                                    <option value="">Sélectionner la formation</option>
                                    {

                                        this.state.allFormation.map( item => (
                                            <option value={ item.id }> { item.nom } </option>
                                            ))
                                    }
                                    
                                </select>
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlInput11" className="font-sml"> Niveau </label>
                                <select name="" id="exampleFormControlInput11" className="form-control" value={this.state.loader ? this.state.niveau : ""} onChange={ this.getNiveau }>
                                    <option value="">Sélectionner le niveau</option>
                                    {

                                        this.state.allNiveau.map( item => (
                                            <option value={ item.id }> { item.nom } </option>
                                            ))
                                    }
                                    
                                </select>
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlInput11" className="font-sml"> Année Académique </label>
                                <select name="" id="exampleFormControlInput11" className="form-control" value={this.state.loader ? this.state.anneeAcademique : ""}  onChange={ this.getAnneeAcademique }>
                                    <option value="">Sélectionner l'année académique</option>
                                    {

                                        this.state.allAnneeAcademique.map( item => (
                                            <option value={ item.id }> { item.anneeAcademique } </option>
                                            ))
                                    }
                                    
                                </select>
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
            
    <Footer />

</div>

        )
    }
}
