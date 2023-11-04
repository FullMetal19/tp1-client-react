import React from 'react';

export function Header() {

    return ( 
                
<nav class="navbar navbar-expand-lg shadow">
    <div class="container-fluid px-4">
        
        <div class="navbar-brand me-4">
            <img src={'img/icons8-student-vue-50.png'} alt="" width="30" height="30" class="d-inline-block align-text-top" />
            <span class="bold clr-main" > WISDOM </span>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
            <div class="navbar-nav gap-2"> </div>
            <div class="navbar-nav gap-4">          
                <div> <a class="btn btn-sm btn-outline-primary" href=""> deconnexion </a> </div>
            </div>
        </div>

    </div>
</nav>

        
    )
}
