import React from 'react';
import { getimg } from '../actions/getImg';
import { connect } from 'react-redux';

class RandomImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='background-div'>
                <img className="background-image" src={this.props.background}></img>

            </div>
        )
    }
}

export default RandomImage;
