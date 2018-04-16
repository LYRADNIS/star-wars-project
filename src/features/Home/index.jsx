import React, { Component } from 'react';
import { connect } from 'react-redux';

/*
    Instructions:

    1. Using the provided axios http service, make an GET request to https://swapi.co/api/people/

    2. Select a random person and store their data into our redux stores

    4. Using the data from those results, make another GET request to obtain data about the homeworld

    5. Store that planet's data into our reducers as well

    6. Using the gathered data, (1) display personhood data in HOME and (2) planetary data in ABOUT.

*/
class Home extends Component {
    render() {
        return (
            <h1 style={{textAlign: 'center'}}>
                { this.props.exampleReducer.state1 } { this.props.exampleReducer.state2 }
            </h1>
        );
    }
}

const mapStateToProps = ({exampleReducer}) =>
    ({
        exampleReducer
    });

export default connect(mapStateToProps)(Home);