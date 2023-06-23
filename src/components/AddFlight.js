import {Component} from "react";

export default class AddFlight extends Component{
    constructor(props){
        super(props);
        this.state={
            code:0,
            carrier:'',
            source:'',
            destination:''
        }
    }
    handleInput = (e)=>{
        this.setState({
            [e.target.name]: e.target.value 
         });
    }

    onSave(){
        this.props.onSubmit(this.state);

    }

    render(){
        return (
            <form>
                <label>Code</label>
                <input name="code"  onChange={this.handleInput}/><br/>
                <label>Carrier</label>
                <input name="carrier" onChange={this.handleInput}/><br/>
                <label>Source</label>
                <input name="source" onChange={this.handleInput}/><br/>
                <label>Destination</label>
                <input name="destination"onChange={this.handleInput}/> <br/>
                <button onClick={()=> this.onSave()}>Save</button>
            </form>

        );
    }

}