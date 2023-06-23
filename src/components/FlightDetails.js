import {Component} from "react";

export default class FlightDetails extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <table class="table table-bordered">
                <tr><td>Code: </td><td>{this.props.flight.code}</td></tr>
                <tr><td>Carrier: </td><td>{this.props.flight.carrier}</td></tr>
                <tr><td>Source: </td><td>{this.props.flight.source}</td></tr>
                <tr><td>Destination: </td><td>{this.props.flight.destination}</td></tr>
                <tr><th colspan="2"><button onClick={()=> this.onDelete()}>Delete</button></th></tr>
            </table>
            
        );
    }

    onDelete(){
        const f=this.props.flight;
        var ans=window.confirm("Are you sure to delete?");
        if(ans)
         this.props.onDelete(f.code);
    }
}