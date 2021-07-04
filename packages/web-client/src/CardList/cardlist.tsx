import React from 'react';
import { CardListModel } from '../DeckShowPage/deck-show-page';
import { Card } from '../Card/card';

export interface CardListProps {
    data: CardListModel[]; //data is props, look at cardlistmodel's keys
}

export const CardList: React.FC<CardListProps> = ({
    data
}) => {
    return(
        <div>
            {data.map((item)=> (
                <Card data={item} key={item.id}/>
            ))}
        </div>
    )
}