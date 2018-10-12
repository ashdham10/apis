import React from 'react';
import Cards from './Cards';
import Logo from './Logo';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
            filmsLoaded: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            filmsLoaded: true,
        })
    }
    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then((res) => res.json())
            .then((films) => {
                this.setState({
                    films,
                })
            })
    }
    render() {
        if(this.state.filmsLoaded){
        return <React.Fragment>
            <div className="text-center mt-5">
                <Logo />
            </div>
            <div>
                <Cards films={this.state.films} />
            </div>
        </React.Fragment>
    } else {
        return <React.Fragment>
            <div className="text-center mt-5">
                <Logo />
            </div>
            <div>
                <button onClick={this.handleClick} style={{margin:'10px'}}>Get Films</button>
            </div>
            </React.Fragment>
    }
}
}

export default App;