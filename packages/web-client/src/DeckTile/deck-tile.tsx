import React, { FunctionComponent } from 'react';
export interface DeckTileProps {
	data: DeckTileDataModel;
}

export interface DeckTileDataModel {
	id: string;
	name: string;
	description: string;
}

export const DeckTile: FunctionComponent<DeckTileProps> = ({
	data: { id, name, description },
}) => {
	return (
		<pre className="deck-tile" key={id}>
			{name}
			{description}
		</pre>
	);
};
