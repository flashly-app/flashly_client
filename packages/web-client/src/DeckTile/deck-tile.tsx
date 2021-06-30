import React, { FunctionComponent } from 'react';
import styles from './deck-tile.module.css';
export interface DeckTileProps {
	data: DeckTileDataModel;
}

export interface DeckTileDataModel {
	id: string;
	name: string;
	description: string;
}

const handleChangeRoute = (id: string) => {
	let newRoute = `/decks/${id}`;
	console.log(newRoute);
};

export const DeckTile: FunctionComponent<DeckTileProps> = ({
	data: { id, name, description },
}) => {
	return (
		<pre
			className={styles['deck-tile']}
			onClick={() => {
				handleChangeRoute(id);
			}}>
			<p className={styles['deck-tile-title']}>{name}</p>
			<p className={styles['deck-tile-description']}>{description}</p>
		</pre>
	);
};
