import React, { Component } from 'react';

export class SubSlide extends Component {

    constructor( props ){
        super( props );
    }

    render(){

        return (
            <div class="container-fluid bg-light">

            <div class="row d-flex justify-content-center ">
               <div class="col-10">  
                    <div class="bg-white p-3 shadow" width="300"> <span> Accueil </span> </div>
               <div class="row p-4 mt-5">
       
                   <div class="col-md-4 rounded-3 mb-5">
                       <div class="Card bg-white rounded-3 shadow-sm p-3">
                           <div class="p-3 mb-3 circle shadow bg-primary" width="50px" height="50px">
                               <img src="" alt="" srcset="" />
                           </div>
                           <div class="d-flex flex-column">
                               <span class="mb-2"> 8 Lorem, ipsum dolor. </span>
                               <span class=""> Lorem ipsum dolor sit amet consectetur.</span>
       
                           </div>
                       </div>
                   </div>
       
                   <div class="col-md-4 rounded-3 mb-5">
                       <div class="Card bg-white rounded-3 shadow-sm p-3">
                           <div class="p-3 mb-3 circle shadow bg-primary" width="50px" height="50px">
                               <img src="" alt="" srcset="" />
                           </div>
                           <div class="d-flex flex-column">
                               <span class="mb-2"> 8 Lorem, ipsum dolor. </span>
                               <span class=""> Lorem ipsum dolor sit amet consectetur.</span>
       
                           </div>
                       </div>
                   </div>
       
                   <div class="col-md-4 rounded-3">
                       <div class="Card bg-white rounded-3 shadow-sm p-3">
                           <div class="p-3 mb-3 circle shadow bg-primary" width="50px" height="50px" >
                               <img src="" alt="" srcset="" />
                           </div>
                           <div class="d-flex flex-column">
                               <span class="mb-2"> 8 Lorem, ipsum dolor. </span>
                               <span class=""> Lorem ipsum dolor sit amet consectetur.</span>
       
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
