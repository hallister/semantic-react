import React, { Component } from 'react';
import { Image, Images, Segment, Segments } from '../../components/elements';

// can't get import working?
var classNames = require('classnames');

export class ImageDoc extends Component {
	constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div>
        		<Segment>
            		<Image size="small" src="http://semantic-ui.com/images/wireframe/image.png"/>
            	</Segment>
        		<Segment>
            		<Image size="small" src="http://semantic-ui.com/images/wireframe/image.png"/>
            	</Segment>
        		<Segment>
            		<Image hidden size="small" src="http://semantic-ui.com/images/wireframe/image.png"/>
            	</Segment>
        		<Segment>
            		<Image disabled size="small" src="http://semantic-ui.com/images/wireframe/image.png"/>
            	</Segment>
        		<Segment>
            		<Image avatar src="http://semantic-ui.com/images/wireframe/square-image.png"/>
            		Username
            	</Segment>
        		<Segment>
            		<Image bordered size="medium" src="http://semantic-ui.com/images/wireframe/white-image.png"/>
            	</Segment>
        		<Segment>
            		<Image fluid src="http://semantic-ui.com/images/wireframe/image.png"/>
            	</Segment>
        		<Segment>
            		<Image rounded size="medium" src="http://semantic-ui.com/images/wireframe/image.png"/>
            	</Segment>
        		<Segment>
            		<Image circular size="medium" src="http://semantic-ui.com/images/wireframe/square-image.png"/>
            	</Segment>
            	<Segments>
            		<Segment>
            			<Image size="tiny" aligned="top" src="http://semantic-ui.com/images/wireframe/square-image.png"/>
            			Top Aligned
            		</Segment>
            		<Segment>
            			<Image size="tiny" aligned="middle" src="http://semantic-ui.com/images/wireframe/square-image.png"/>
            			Middle Aligned
            		</Segment>
            		<Segment>
            			<Image size="tiny" aligned="bottom" src="http://semantic-ui.com/images/wireframe/square-image.png"/>
            			Bottom Aligned
            		</Segment>
            	</Segments>
            	<Segment>
            		<Image centered size="medium" src="http://semantic-ui.com/images/wireframe/image.png"/>
            	</Segment>
            	<Segment>
            		Te eum doming eirmod, nominati pertinacia 
            		<Image spaced size="mini" src="http://semantic-ui.com/images/wireframe/image.png"/>
            		argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. 
            		Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque 
            		electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum 
            		rebum iisque.
            	</Segment>
            	<Segment>
					<p>
					<Image spaced="right" size="mini" src="http://semantic-ui.com/images/wireframe/image.png"/>
					Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi 
					nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix 
					fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
					<p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores 
					adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete
					utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi 
					convenire mnesarchum eu per, quas minimum postulant per id.
					<Image spaced="left" size="mini" src="http://semantic-ui.com/images/wireframe/image.png"/>
					</p>
            	</Segment>
            	<Segment>
            		<Image floated="left" size="small" src="http://semantic-ui.com/images/wireframe/text-image.png"/>
            		
            		<p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete 
            		scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei 
            		appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. 
            		Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>

            		<Image floated="right" size="small" src="http://semantic-ui.com/images/wireframe/text-image.png"/>

  					<p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot 
  					wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. 
  					Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>

   					<p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores 
   					adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete 
   					utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi 
   					convenire mnesarchum eu per, quas minimum postulant per id.</p>
            	</Segment>
            	<Segment>
            		<Images size="tiny" aligned="top">
            			<Image src="http://semantic-ui.com/images/wireframe/white-image.png"/> test
            			<Image src="http://semantic-ui.com/images/wireframe/image.png"/> test
            			<Image src="http://semantic-ui.com/images/wireframe/image.png"/>
            			<Image src="http://semantic-ui.com/images/wireframe/image.png"/>
            		</Images>
            	</Segment>
            </div>
        )
    }

}