import React from "react";
import CardList from "../components/CardList";
import Search from "../components/Search";
import Scroll from '../components/Scroll';
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            image: [],
            searchfield : ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        })
        .then(user => {
            this.setState({image: user}); 
        }) 
    }
    onSearch = (event) => {
        this.setState({searchfield: event.target.value})
        
    }
    render(){
        const filtered = this.state.image.filter(image =>{
            return image.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.image.length===0){
            return <h1 className='f1'>Loading</h1>
        } else{
            return(
                <div className='tc'>
                    <h1 className='f1'>Test</h1>
                    <Search searchChange={this.onSearch}/>
                    <Scroll>
                        <CardList image = {filtered}/>
                    </Scroll>
                </div>
                
            );
        }
        
    }
}
export default App;