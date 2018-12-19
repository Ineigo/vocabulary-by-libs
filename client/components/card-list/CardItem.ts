import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('CardItem')
export default class CardItem {
    @JsonProperty('name', String)
    public name: string = '';
    @JsonProperty('help', String)
    public help: string = '';
    @JsonProperty('link', String)
    public link: string = '';
    
    constructor(name: string, help: string, link: string) {
        this.help = help;
        this.link = link;
        this.name = name;
    }
}
