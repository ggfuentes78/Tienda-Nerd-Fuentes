import React from 'react';
import { Message } from 'semantic-ui-react';

const MessageSuccess = ({ msg }) => (
	<Message
		success
		header='Gracias por la Compra! Tu nro de Orden es:'
		content={msg.id}
		style={{ textAlign: 'center' }}
	/>
);

export default MessageSuccess;
