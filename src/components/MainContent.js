import React, { Component } from 'react';
import Icon from 'material-ui/Icon';

import IframeComponent from './IframeComponent';

function InvalidURL() {
    console.log("Invalid URL")
    return (
        <div className="error-widget">
             <Icon color="error" style={{ fontSize: 85,textAlign:'center',marginLeft:50,marginRight:50}}>error_outline</Icon>
            <div>
            404. That’s an error.</div>
        </div>
    );
}
class MainContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articleurl: ""
        }
    }


    getLocationUrl(name) {
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
        var results = regex.exec(window.location.href);
        if (results !== undefined) {
            if (!results) return '';
            if (!results[2]) return '';
            return results[2].replace(/\+/g, " ");
        } else {
            console.log("Error");

            <InvalidURL />
        }

    }

    componentWillMount() {
        this.setState({
            articleurl: this.getLocationUrl("articleurl")
        })

        console.log('First componentWillMount', this.getLocationUrl("articleurl"));
    }


    render() {
        return (
            <div>
                {
                    this.state.articleurl === undefined ? 
                    <InvalidURL/> :
                    <IframeComponent
                        url={this.state.articleurl}
                        position="absolute"
                        width="100%"
                        height="100%"
                    />
                }
            </div>);
    }
}



export default MainContent;
