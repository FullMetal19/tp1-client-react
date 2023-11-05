import React, { Component } from 'react';

export class SubSlide extends Component {

    constructor( props ){
        super( props );
    }

    render(){

        return (
            <div className="container-fluid bg-light">

            <div className="row d-flex justify-content-center ">
               <div className="col-10">  
                    <div className="bg-white p-3 shadow" width="300"> <span> Accueil </span> </div>
               <div className="row p-4 mt-5">
       
                   <div className="col-md-4 rounded-3 mb-5">
                       <div className="Card bg-white rounded-3 shadow-sm p-3">
                           <div className="p-3 mb-3 circle shadow bg-primary" width="50px" height="50px">
                               <img src="" alt="" srcset="" />
                           </div>
                           <div className="d-flex flex-column">
                               <span className="mb-2"> 8 Lorem, ipsum dolor. </span>
                               <span className=""> Lorem ipsum dolor sit amet consectetur.</span>
       
                           </div>
                       </div>
                   </div>
       
                   <div className="col-md-4 rounded-3 mb-5">
                       <div className="Card bg-white rounded-3 shadow-sm p-3">
                           <div className="p-3 mb-3 circle shadow bg-primary" width="50px" height="50px">
                               <img src="" alt="" srcset="" />
                           </div>
                           <div className="d-flex flex-column">
                               <span className="mb-2"> 8 Lorem, ipsum dolor. </span>
                               <span className=""> Lorem ipsum dolor sit amet consectetur.</span>
       
                           </div>
                       </div>
                   </div>
       
                   <div className="col-md-4 rounded-3">
                       <div className="Card bg-white rounded-3 shadow-sm p-3">
                           <div className="p-3 mb-3 circle shadow bg-primary" width="50px" height="50px" >
                               <img src="" alt="" srcset="" />
                           </div>
                           <div className="d-flex flex-column">
                               <span className="mb-2"> 8 Lorem, ipsum dolor. </span>
                               <span className=""> Lorem ipsum dolor sit amet consectetur.</span>
       
                           </div>
                       </div>
                   </div>
       
               </div>
       
       
           </div>
       </div> 
       
       
           </div>
        


        )
    }
}
