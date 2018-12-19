import CardItem from '../components/card-list/CardItem';

export default interface ICard {
    title: string;
    items: Array<ICard|CardItem>
}
