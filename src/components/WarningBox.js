import React , { Component} from "react";

export class WarningBox extends Component {

    render(){

        return (

            this.props.state ? (

                <div className="alert alert-danger my-3">
                   <span className=""> { this.props.msg } </span>
                </div>
            ) : null
              
        )
    }


}