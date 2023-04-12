import React from 'react';

import { connect } from 'react-redux';
import { getQoutes } from '../actions/getQoute';
class Qoutes extends React.Component {
    constructor(props) {
        super(props);
        this.props.getQoutes();
        this.state = {

        }
    }




    render() {
        return (

            <div>
                <div> {this.props.Qu?.text}   </div>

                {this.props.Qu?.author}
            </div>

        )

    }

}


const mapStateToProps = state => {
    return {
        Qu: state.Qu
    }
}


const mapDispatchToProps = disaptch => {
    return {
        getQoutes: () => {
            disaptch(getQoutes())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Qoutes);