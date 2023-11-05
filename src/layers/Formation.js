import React, { Component } from 'react';
import AxiosClient from '../AxiosClient';

export class Formation extends Component {

    constructor( props ){
        super( props );

        this.state = {
            data: []
        }
       
    }
    componentDidMount() {
        AxiosClient.get("/formation")
        .then(res => {
            ( res.data.status === 200 ) ? this.setState({ state : true }) : this.setState({  data : res.data.data })
            
        } );
}

    render(){

        return (
    
<div>

<div className="container-fluid px-5 bg-light">
    <div className="container ">
    <div className="bg-white p-3 shadow mb-5" width="300"> <span> Formation </span> </div>
        <div className="row">
            {/* <!-- ITEM-1 --> */}
            <div className="col-lg-12">  
                <div className="row d-flex justify-content-between mb-5 mt-4">     
                    <div className="col-lg-5"> 
                        <div className="text-center"> <img src={'img/kisspng-pes-university-student-college-educational-consult-student-5abd0211434759.5720313915223362732756.png'} alt="" className="img" /> </div>
                    </div>
                    <div className="col-lg-6"> 
                        <div className="d-flex flex-column justify-content-center">
                            <span className="mb-2 fs-6"> Mot du recteur. </span>
                            <span className="display-6 mb-2 fw-bold "> Pr Consectetur adipisicing  </span>
                            <span className="mb-3 fs-4 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit </span>
                            <div className="px-3 mb-4 text-end"> <a href="#" className="btn btn-primary"> Voir plus </a> </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

 {/*  */}
       
 <div className="container-fluid bg-light py-4">

<div className="row d-flex justify-content-center">
    <div className="col-10">  
        {/* <!--  --> */}
        <div className="col-lg-12 mb-5 d-flex flex-column align-items-center">
            <span className="h1 g-d-clr mb-3"> La liste de nos formations </span>
            <span className="g-d-clr"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
        </div>
        <div className="row d-flex justify-content-around">
            {/*  */}
            {
                this.state.data.map(item=>(
                    <div className="col-md-5 mb-5">
                <div className="d-flex flex-column p-0 shadow">
                    <img src={'img/hercules-hall-entoure-verdure-sous-lumiere-du-soleil-pendant-journee-munich-allemagne.jpg'} className="box-img mb-3" alt="..." />
                    <h3 classNameName="px-3 mb-2">{item.nom}</h3>
                    <div className="px-3 mb-2"> <p className="">{item.description}</p> </div>
                    <div className="px-3 mb-3"> <a href="#" className="btn btn-sm btn-primary"> Voir plus </a> </div>
                </div>
            </div>
                ))
            }
            {/* <div className="col-md-5 mb-5">
                <div className="d-flex flex-column p-0 shadow">
                    <img src={'img/hercules-hall-entoure-verdure-sous-lumiere-du-soleil-pendant-journee-munich-allemagne.jpg'} className="box-img mb-3" alt="..." />
                    <div className="px-3 mb-2"> <p className="">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div>
                    <div className="px-3 mb-3"> <a href="#" className="btn btn-sm btn-primary"> Voir plus </a> </div>
                </div>
            </div> */}
            {/* */}
            {/* <div className="col-md-5 mb-5">
                <div className="d-flex flex-column p-0 shadow">
                    <img src={'img/hercules-hall-entoure-verdure-sous-lumiere-du-soleil-pendant-journee-munich-allemagne.jpg'} className="box-img mb-3" alt="..." />
                    <div className="px-3 mb-2"> <p className="">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div>
                    <div className="px-3 mb-3"> <a href="#" className="btn btn-sm btn-primary"> Voir plus </a> </div>
                </div>
            </div> */}
           {/*  */}
            {/* <div className="col-md-5 mb-5">
                <div className="d-flex flex-column p-0 shadow">
                    <img src={'img/hercules-hall-entoure-verdure-sous-lumiere-du-soleil-pendant-journee-munich-allemagne.jpg'} className="box-img mb-3" alt="..." />
                    <div className="px-3 mb-2"> <p className="">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div>
                    <div className="px-3 mb-3"> <a href="#" className="btn btn-sm btn-primary"> Voir plus </a> </div>
                </div>
            </div> */}
            {/*  */}
            {/* <div className="col-md-5 mb-5">
                <div className="d-flex flex-column p-0 shadow">
                    <img src={'img/hercules-hall-entoure-verdure-sous-lumiere-du-soleil-pendant-journee-munich-allemagne.jpg'} className="box-img mb-3" alt="..." />
                    <div className="px-3 mb-2"> <p className="">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div>
                    <div className="px-3 mb-3"> <a href="#" className="btn btn-sm btn-primary"> Voir plus </a> </div>
                </div>
            </div> */}
        </div>
    </div>
</div>
</div>

</div>

        )
    }
}
