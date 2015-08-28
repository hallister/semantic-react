import React, { Component } from 'react';
import { Segments } from '../segment/segments';
import { Segment } from '../segment/segment';
import { Input } from '../input/input';
import { Icon } from '../icon/icon';
import { Image } from '../image/image';
import { Label } from '../label/label';
import { Labels } from '../label/labels';
import { Detail } from '../label/detail';
import { Content } from '../header/content';
import { Loader } from './loader';

// Todo: Can't do much without a dimmer

export class LoaderDoc extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>
                <Segment inverted>
                    <div className="ui active dimmer">
                    <Loader />
                    </div>
                </Segment>
            </div>
        );
    }
}