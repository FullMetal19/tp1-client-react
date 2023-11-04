import React from 'react';

export function Footer() {

    return ( 
                

<div class="container-fluid bg-dark pt-5">
    <div class="container">
        <div class="row d-flex justify-content-between py-4">

            <div class="col-lg-6 mb-2">
                <div class="row ">
                    <div class="col-12 mb-2"> 
                        <div class="mb-3"> <span class="py-2 px-4 border border-primary rounded-4 clr-main"> Universites du Senegal </span> </div>
                    </div>
                    <div class="col-12 mb-2">
                        <div class="row ">
                            <div class="col-md-6 mb-2 border p-3"> 
                                <div> <a href="" class=" link-outline "> Universite de Dakar </a> </div>
                                <div> <a href="" class=" link-outline "> Universite de Saint louis </a> </div>
                                <div> <a href="" class=" link-outline "> Universite Sine Saloum </a> </div>
                                <div> <a href="" class=" link-outline "> Universite de Thies </a> </div>
                            </div>
                            <div class="col-md-6 mb-2 border p-3"> 
                                <div> <a href="" class=" link-outline "> Universite de Ziguinchor </a> </div>
                                <div> <a href="" class=" link-outline "> Universite de Bambey </a> </div>
                                <div> <a href="" class=" link-outline "> Universite de Diameniadio </a> </div>
                                <div> <a href="" class=" link-outline "> Universite virtuelle </a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="">
                    <div class="mb-4 p-3 bg-primary rounded-4">
                        <span class="fs-4 clr-white" > Comment ça marche </span>
                    </div>
                    <span class="fs-6 g-clr">  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam expedita culpa eligendi architecto et eum dignissimos, sequi enim consequatur eos placeat repellat minima officiis unde quaerat delectus praesentium veritatis fugit. </span>
                </div>
            </div>

        </div>
    </div>   

    <hr class="border" />
    
    <div class="row d-flex justify-content-between p-4 gap-2"> 
        <div class="col-lg-5 col-md-5 d-flex gap-3">
            <span class="g-clr fs-md"> Build by UGB-Team </span>
            <span class="bold g-clr"> | </span>
            <a routerLink="/condition-utilisation" class="link-outline"> condition d'utilistaion </a>    
        </div>
        <div class="col-lg-4 col-md-4 d-flex justify-content-end">
            <span class="g-clr fs-md"> Copyright © 2023  </span>    
        </div>
    </div>  
</div>


        
    )
}
