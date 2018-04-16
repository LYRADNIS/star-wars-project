import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPerson } from './../../actions';

class Home extends Component {
    componentDidMount() {
        getPerson()
    }

    render() {
        return (
            <h1 style={{textAlign: 'center'}}>
                { this.props.person.name }
            </h1>
        );
    }
}

const mapStateToProps = ({person}) =>
    ({
        person
    });

export default connect(mapStateToProps)(Home);