import React, {Component} from 'react';

class PhotoCount extends Component {
    constructor(props){
        super(props);

        this.decrCount = this.decrCount.bind(this);
        this.incrCount = this.incrCount.bind(this);
    }

    render() {
        var btnDecrClass = "";
        var btnIncrClass = "";

        if (this.props.count === 0) {
            btnDecrClass = "photo-count__btn photo-count__btn_disable";
            btnIncrClass = "photo-count__btn";
        } else if (this.props.count === 3) {
            btnIncrClass = "photo-count__btn photo-count__btn_disable";
            btnDecrClass = "photo-count__btn";
        } else {
            btnDecrClass = "photo-count__btn";
            btnIncrClass = "photo-count__btn";
        }

        return (
            <div className="photo-count">
                <div className="photo-count__decr">
                    <button className={btnDecrClass} onClick={this.decrCount}>-</button>
                </div>
                <div className="photo-count__count">{this.props.count}
                </div>
                <div className="photo-count__incr">
                    <button className={btnIncrClass} onClick={this.incrCount}>+</button>
                </div>
            </div>
        )
    }

    incrCount() {
        if (this.props.count < 3) {
            this.props.addImage();
        }
    };

    decrCount() {
        if (this.props.count > 0) {
            this.props.delImage();
        }
    };


}

export default PhotoCount