import React from 'react';

export function Header() {

    return ( 
                
<nav className="navbar navbar-expand-lg shadow">
    <div className="container-fluid px-4">
        
        <div className="navbar-brand me-4">
            <img src={'img/icons8-student-vue-50.png'} alt="" width="30" height="30" className="d-inline-block align-text-top" />
            <span className="bold clr-main" > WISDOM </span>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
            <div className="navbar-nav gap-2"> </div>
            <div className="navbar-nav gap-4">          
                <div> <a className="btn btn-sm btn-outline-primary" href=""> deconnexion </a> </div>
            </div>
        </div>

    </div>
</nav>

        
    )
}
