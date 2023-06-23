export default class FlightService{
    constructor(){
        this.flights=[
            {code:432, carrier:'Vistara', source:'Kochi', destination:'Chennai'},
            {code:512, carrier:'Indigo', source:'Kolkata', destination:'Hyderabad'}
        ];

    }
    addFlight(flight){
        console.log(flight);
        this.flights.push(flight);
    }

    listFlights(){
        
        return this.flights;
    }

    flightByCode(code){
        console.log(code);
        return this.flights.find(f=> f.code===code);
    }

    deleteFlight(code){
        var idx=this.flights.indexOf(this.flightByCode(code));
        this.flights.splice(idx,1);
    }
}