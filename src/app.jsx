import React, { Component } from 'react';

import * as ElementDocs from './docs/elements';
import * as ViewDocs from './docs/views';
import * as ModuleDocs from './docs/modules';
import { Header, Image, Images, Date, Summary } from '../src/components/elements';
import { Feed, Event  } from '../src/components/views';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Feed>
                <Event>
                    <Image src="http://orig12.deviantart.net/250e/f/2012/327/5/4/5405ca7130582d6cbda8cbe0bb0fc9a8-d5lwex1.gif" />

                    <Summary>
                        <a>Juan Valdez</a> added <a>2 new photos of you</a>
                        <Date>1 hour ago</Date>
                    </Summary>
                    <Images>
                        <Image defaultClasses={false}
                            src="http://semantic-ui.com/images/wireframe/image.png"
                        />
                        <Image defaultClasses={false}
                            src="http://semantic-ui.com/images/wireframe/image.png"
                        />
                    </Images>
                </Event>
            </Feed>
        );
    }
}
