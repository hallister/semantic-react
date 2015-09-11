import React from 'react';
import { Icon, Button } from '../../elements';

exports.SocialButton = (props) => {
	let { name, ...other} = props;
	return (
		<Button {...other} social={props.name} icon={React.Children.count(props.children) === 0 ? true : false}>
			<Icon name={props.name} />
			{props.children}
		</Button>
	);
};