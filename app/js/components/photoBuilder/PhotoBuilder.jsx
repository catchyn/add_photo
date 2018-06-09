import React, {Component} from 'react'
import PhotoCount from './PhotoCount.jsx'
import PhotoImage from "./PhotoImage.jsx";

class Reference extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.items = [];

        this.getData = async () => {
            let url = "http://localhost:3000/img";
            let path = "/" + (this.state.count % 3 + 1);
            try {
                let response = await fetch(url + path, {method: "GET"});
                return response.json();
            } catch(err) {
                console.log(`Ошибка загрузки изображения: ${err}`);
            }
        };

        this.addImage = () => {
            (async () => {
                let base64obj = await this.getData();
                this.items.push(base64obj["base64"]);
                this.setState((prevState, props) => ({count: ++prevState.count}));
            })();
        };

        this.delImage = () => {
            if (this.items.length > 0) {
                this.items.pop();
                this.setState((prevState, props) => ({count: --prevState.count}));
            }
        }
    }

    render() {
        let imageList = this.items.map((item, i) => {
            return (
                <PhotoImage img={item}/>
            )
        });

        if (this.items.length === 0) {
            imageList = <div className="photo-view_no-elem"></div>;
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="photo-builder">
                            <h2>Добавить/Убрать фото</h2>
                            <div className="photo-view">
                                {imageList}
                            </div>
                            <PhotoCount count={this.state.count} addImage={this.addImage} delImage={this.delImage}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reference

