import React, { PureComponent } from 'react'
import './Home.css';

const image = new URL("../../images/home_bg.jpg", import.meta.url)

export default class Home extends PureComponent {
    render() {
        return (
            <div>
                <h2>tete</h2>
                <img src={image}/>
            </div>

        )
    }
}
