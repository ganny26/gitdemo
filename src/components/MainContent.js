import React, { Component } from 'react';
import Icon from 'material-ui/Icon';

import IframeComponent from './IframeComponent';
import Helper from '../utils/helper';
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
        console.log("COmponent will mount 1 ");
        this.setState({
            articleurl: this.getLocationUrl("articleurl")
        })
      
        console.log('First componentWillMount', this.getLocationUrl("articleurl"));
      
    }

    componentDidMount(){
        let fetchurl= this.state.articleurl;
        console.log("COmponent did mount 2 ",this.state.articleurl);
        console.log("fetch url",fetchurl);
        Helper.scrapHTML(fetchurl,function(d){
            var ingred = d.replace(/\s/g, '');
            //window.alert(d.replace(/\s/g, ''));
            localStorage.setItem("ingredients",ingred)
        });
        
    }


    render() {
        return (
            <div>
                {
                    this.state.articleurl === '' || this.state.articleurl === undefined ? 
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
