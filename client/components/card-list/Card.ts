import ICard from "../../types/ICard";
import CardItem from "./CardItem";
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject('Card')
export default class Card implements ICard {

    @JsonProperty('title', String)
    public title: string = '';
    @JsonProperty('items', [CardItem])
    public items: CardItem[] = [];

    constructor(title: string, items: CardItem[]) {
        this.title = title;
        this.items = items;
    }
}