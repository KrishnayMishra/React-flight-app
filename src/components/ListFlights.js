import {Component} from "react";
import FlightService from "../services/FlightService";
import AddFlight from "./AddFlight";
import FlightDetails from "./FlightDetails";

export default class ListFlights extends Component{
    constructor(props){
        super(props);
        this.service=new FlightService();
        this.state={
            flights:[],
            selectedFlight:'',
            showDetails:false,
            newFlight:false
        }
    }

    componentDidMount(){
        this.getFlights();
    }

    

    getFlights(){
        this.setState({flights:this.service.listFlights()});
        console.log(this.state.flights);
    }

    clearState(){
        this.setState({
            showDetails:false,
            newFlight:false,
            selectedFlight:''
        });
    }
    render(){
        if(!this.state.flights)
         return null;
        const list=this.state.flights.map((f)=> (
           <li key={f.code} onClick={()=> this.onSelection(f.code)} class="list-group=item">{f.code}</li>

        ));

        return(
            <div>
                <h1>List of Flights</h1>
                <ul class="list-group">
                    {list}
                </ul>
                <br/>
                <button class="btn btn-info" onClick={()=> this.onNewFlight()}>Add New Flight</button>
                <hr/>
                {
                    this.state.showDetails && this.state.selectedFlight && 
                    <FlightDetails flight={this.state.selectedFlight} onDelete={this.onDeleteFlight} />
                }
                {
                    this.state.newFlight &&
                    <AddFlight onSubmit={this.onSaveFlight} />
                    
                }
            </div>
        );
    }

    onSelection=(code)=>{
        const f=this.service.flightByCode(code);
        this.setState({
            showDetails:true,
            selectedFlight:f,
            newFlight: false
        });
    }

    onNewFlight(){
        this.clearState();
        this.setState({newFlight:true});
    }

    onSaveFlight=(flight)=>{
        this.service.addFlight(flight);
        this.clearState();
        this.getFlights();
    }

    onDeleteFlight =(code)=>{
        this.service.deleteFlight(code);
        this.getFlights();
    }
}