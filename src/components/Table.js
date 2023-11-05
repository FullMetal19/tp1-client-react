import React, { Component } from 'react';
import AxiosClient from '../AxiosClient';


export class Table extends Component {

    constructor( props ){
        super( props );
        this.state = {
            id :''
        }
    }

    

    render(){
        return (

        <div>
            <table className="table">
                {/*  */}
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Code Etudiant</th>
                        <th scope="col">Formation</th>
                        <th scope="col">Niveau</th>
                        <th scope="col">Année Académique</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                {/*  */}
                <tbody>
                    { this.props.data.map( item =>( 
                    <tr key={item.id}>
                        <th scope="row"> {item.id} </th>
                        <td> {item.etudiant.prenom} </td>
                        <td> {item.etudiant.nom} </td>
                        <td> {item.etudiant.email} </td>
                        <td> {item.etudiant.codeEtudiant} </td>
                        <td> {item.formation.nom} </td>
                        <td> {item.niveau.nom} </td>
                        <td> {item.annee_academique.anneeAcademique} </td>
                        <td> 
                            <a className="btn btn-sm bg-primary me-2" href={'/wisdom/'+item.id}> <img src={'img/icons8-tag-utilisateur-48.png'} width="16" height="16" alt="" srcSet="" /> </a> 
                            <button className="btn btn-sm bg-danger" onClick={() =>this.props.supression(item.id)}> <img src={'img/icons8-poubelle-48.png'} width="16" height="16" alt="" srcSet="" /> </button> 
                        </td>
                    </tr>
                    ))}
                </tbody>

            </table>
            
        
            <div className="modal-sn">  
                <div className="container mt-4 p-4">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8 border p-4 card d-flex flex-column">
                           
                            <div className="border rounded-4 p-4">
                                 <video src="" className="w-100"></video>
                            </div>
                            {/*  */}
                            <div className="d-flex justify-content-end mt-4">
                                <button className="btn btn-success btn-hide-modal"> Annuler </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        )
    }
}
