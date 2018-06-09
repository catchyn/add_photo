import React, {Component} from 'react';

class PhotoImage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="photo-view__photo-image animated bounceInRight">
                <img alt="alt" src={this.props.img} />
            </div>
        )
    }
}

export default PhotoImage