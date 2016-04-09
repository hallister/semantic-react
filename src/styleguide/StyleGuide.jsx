import React from 'react';
import StyleGuide from 'react-styleguidist/src/rsg-components/StyleGuide/StyleGuide';
import * as elements from '../../src/components/elements';
import * as collections from '../../src/components/collections';
import * as views from '../../src/components/views';
import * as modules from '../../src/components/modules';

/**
 * Hack to avoid requiring semantic stuff in examples
 */
export default class SemanticStyleGuide extends StyleGuide {
    globalizeElements(collection) {
        Object.keys(collection).forEach(function(name) {
            if (typeof collection[name] === 'function') {
                // window[] = collection[name];
                if (collection[name].name !== 'Date') {

                    window[collection[name].name] = collection[name];
                }
            } 
        });
    }
    
    globalizeSemantic() {
        this.globalizeElements(elements);
        this.globalizeElements(collections);
        this.globalizeElements(views);
        this.globalizeElements(modules);
    }
    
    render() {
        this.globalizeSemantic();
        return super.render();
    }
}
