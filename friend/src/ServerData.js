import React from 'react';

class ServerData extends React.Component{

    constructor(){
        super();
        this.state = {
            friends: []
        };
    }
    componentDidMount(){
            axios
            .get('http://localhost:5000/friends')
            .then(res => this.setState({friends: res.server}))
            .catch(error => console.log(error, "Can't get list of friends!"))
    };

    render(){
        return(
            <div className = 'App'>
            
            </div>

        )
    }

   

    }



export default ServerData;
