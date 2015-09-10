import React from 'react';
import { Button, Content, Icon } from '../../../../components/elements';
import { DocBlock } from '../../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSXExample = he.encode(`
<Button animated>
    <Content visible>Next</Content>
    <Content hidden>
        <Icon name="right arrow"/>
    </Content>
</Button>
<Button animated="vertical">
    <Content visible>Shop</Content>
    <Content hidden>
        <Icon name="shop"/>
    </Content>
</Button>
<Button animated="fade">
    <Content visible>Sign-up for a Pro account</Content>
    <Content hidden>
        $12.99 a month
    </Content>
</Button>
`);

export class AnimatedDoc extends React.Component {
    render() {
        return (
            <DocBlock componentID={this.props.id}
                      header={this.props.header}
                      subheader={this.props.subheader}
                      JSX={JSXExample}>
                <Button animated>
                    <Content visible>Next</Content>
                    <Content hidden>
                        <Icon name="right arrow"/>
                    </Content>
                </Button>
                <Button animated="vertical">
                    <Content visible>Shop</Content>
                    <Content hidden>
                        <Icon name="shop"/>
                    </Content>
                </Button>
                <Button animated="fade">
                    <Content visible>Sign-up for a Pro account</Content>
                    <Content hidden>
                        $12.99 a month
                    </Content>
                </Button>
            </DocBlock>
        );
    }
}