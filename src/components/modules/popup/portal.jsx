import React from 'react';
import ReactDOM from 'react-dom';

export class Portal extends React.Component {
    static propTypes = {
        children: React.PropTypes.node
    };

    componentDidMount() {
        this.bodyChild = document.createElement('div');
        document.body.appendChild(this.bodyChild);
        this.mounted = false;
        this.renderBody();
    }

    componentDidUpdate() {
        this.renderBody();
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.bodyChild);
        document.body.removeChild(this.bodyChild);
    }

    renderBody() {
        ReactDOM.render(this.props.children, this.bodyChild);
    }

    render() {
        return <div/>;
    }

    getRootNode() {

    }
}
