import React from 'react';
import ReactDOM from 'react-dom';
import { domIsDescendant } from '../../utilities';


/**
 * Render child elements to separate <div> tag append to body
 * Inspired by: https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx
 * And: https://github.com/callemall/material-ui/blob/master/src/render-to-layer.jsx
 * Pretty much copying everything from second link
 */
export class RenderToLayer extends React.Component {

    static propTypes = {
        /**
         * Callback function when clicked outside of rendered component.
         */
        componentClickAway: React.PropTypes.func,
        /**
         * Controls the visibility of layer
         */
        open: React.PropTypes.bool.isRequired,
        /**
         * Render function for component
         */
        render: React.PropTypes.func.isRequired,
        /**
         * If true it will prevents clicking of under-layered components
         */
        useLayerForClickAway: React.PropTypes.bool,
        /**
         * Layer zIndex
         */
        zIndex: React.PropTypes.number
    };

    static defaultProps = {
        useLayerForClickAway: true,
        zIndex: 2000
    };

    constructor(props) {
        super(props);
        /**
         * Layer element instance
         */
        this.layer = null;
    }

    componentDidMount() {
        this.renderLayer();
    }

    componentDidUpdate() {
        this.renderLayer();
    }

    componentWillUnmount() {
        this.unrenderLayer();
    }

    /**
     * Click away event
     * @param event {MouseEvent}
     */
    onClickAway(event) {
        if (event.defaultPrevented) {
            return;
        }

        if (!this.props.componentClickAway) {
            return;
        }

        if (!this.props.open) {
            return;
        }

        const el = this.layer;
        if (event.target !== el && (event.target === window) ||
            (document.documentElement.contains(event.target) && !domIsDescendant(el, event.target))) {
            this.props.componentClickAway(event);
        }
    }
    /**
     * Render layer
     */
    renderLayer() {
        /* eslint-disable no-use-before-define */
        const { open, render } = this.props;
        /* eslint-enable no-use-before-define */
        if (open) {
            // Layer should be rendered
            // Create layer div first
            this.layer = document.createElement('div');
            document.body.appendChild(this.layer);

            // make an invisible layer on top of the page if useLayerForClickAway was set
            if (this.props.useLayerForClickAway) {
                this.layer.addEventListener('touchstart', this.onClickAway.bind(this));
                this.layer.addEventListener('click', this.onClickAway.bind(this));
                this.layer.style.position = 'fixed';
                this.layer.style.top = 0;
                this.layer.style.bottom = 0;
                this.layer.style.left = 0;
                this.layer.style.right = 0;
                this.layer.style.zIndex = this.props.zIndex;
            } else {
                setTimeout(() => {
                    window.addEventListener('touchstart', this.onClickAway.bind(this));
                    window.addEventListener('click', this.onClickAway.bind(this));
                }, 0);
            }

            // Render layer content into layer element
            const layerContent = render();
            if (layerContent) {
                ReactDOM.unstable_renderSubtreeIntoContainer(this, layerContent, this.layer);
            }

        } else {
            // Layer should be closed
            this.unrenderLayer();
        }
    }

    /**
     * Render. Returning null here since it's being rendered in renderLayer()
     */
    render() {
        return null;
    }

    /**
     * Returns layer DOM element
     */
    getLayer() {
        return this.layer;
    }

    /**
     * Unrender layer
     */
    unrenderLayer() {
        if (!this.layer) {
            return;
        }

        if (this.props.useLayerForClickAway) {
            this.layer.style.position = 'relative';
            this.layer.removeEventListener('touchstart', this.onClickAway.bind(this));
            this.layer.removeEventListener('click', this.onClickAway.bind(this));
        } else {
            window.removeEventListener('touchstart', this.onClickAway.bind(this));
            window.removeEventListener('click', this.onClickAway.bind(this));
        }

        ReactDOM.unmountComponentAtNode(this.layer);
        document.body.removeChild(this.layer);
        this.layer = null;
    }
}