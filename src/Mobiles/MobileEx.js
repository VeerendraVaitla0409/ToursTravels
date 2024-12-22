import React, { Component } from 'react'

export default class MobileEx extends Component {
    render() {
        return (
            <div className='mobile'>
                <a href={this.props.link} target='_blank' rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <figure>
                        <img src={this.props.path} alt={this.props.model} />
                        <figcaption>
                            <h5>{this.props.model}</h5>
                            <b>{this.props.price}</b>
                            <p>{this.props.store}</p>
                            <p>Free delivery</p>
                        </figcaption>
                    </figure>
                </a>
            </div>
        )
    }
}
