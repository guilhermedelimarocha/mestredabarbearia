import React from 'react';
// import ReactDOM from 'react-dom';

class Card extends React.Component {
    render() {
        return(
            <div class="container">
                <div className="row">
                    <div className="col s6">
                        {this.props.title}
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                    {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;