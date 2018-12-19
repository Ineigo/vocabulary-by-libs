import { JsonObject, JsonProperty } from 'json2typescript';
import ICard from '../../types/ICard';
import Card from './Card';

@JsonObject('CardGroup')
export default class CardGroup implements ICard {

    @JsonProperty('title', String)
    public title: string = '';
    @JsonProperty('items', [Card])
    public items: ICard[] = [];
    
    constructor(title: string, items: ICard[]) {
        this.title = title;
        this.items = items;
    }
}
