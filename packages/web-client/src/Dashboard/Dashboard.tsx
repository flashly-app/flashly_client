import React from 'react';
import { DeckTileGrid, DeckTileGridProps } from '../DeckTileGrid/deck-tile-grid';

export interface DashboardProps extends DeckTileGridProps {

}

export const Dashboard: React.FC<DashboardProps> = ({
    data, setDeck, setOpenDeck
}) => {
        return (
            <div>
                <DeckTileGrid data={data} setDeck={setDeck} setOpenDeck={setOpenDeck}/>
            </div>
        )
}

