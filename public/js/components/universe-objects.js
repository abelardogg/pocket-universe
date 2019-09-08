/*
Superscript
⁰
¹
²
³
⁴
⁵
⁶
⁷
⁸
⁹
*/ 
const planets = [
    {key: 0, name: `Mercury`, type: `Rocky planet`, volume: `6,083×10¹⁰km³`, mass: `3,302×10²³ kg`},
    {key: 1, name: `Venus`, type: `Rocky planet`, volume: `9.2843×10¹¹ km³`, mass: `4,869×10²⁴ kg`},
    {key: 2, name: `Earth`, type: `Rocky planet`, volume: `1.08321×10¹² km³`, mass: `	5.97237×10²⁴ kg`},
    {key: 3, name: `Mars`, type: `Rocky planet`, volume: `1.6318×10¹¹ km³`, mass: `6.4171×10²³ kg`},
    {key: 4, name: `Jupiter`, type: `Gas giant planet`, volume: `1.4313×10¹⁵ km³`, mass: `1.8982×10²⁷ kg`},
    {key: 5, name: `Saturn`, type: `Gas giant planet`, volume: `8.2713×10¹⁴ km³`, mass: `5.6834×10²⁶ kg`},
    {key: 6, name: `Uranus`, type: `Ice giant planet`, volume: `6.833×10¹³ km³`, mass: `(8.6810±0.0013)×10²⁵ kg`},
    {key: 7, name: `Neptune`, type: `Ice giant planet`, volume: `6.254×10¹³ km³`, mass: `1.02413×10²⁶ kg`},
    {key: 8, name: `Pluto`, type: `Dwarf rocky ice planet`, volume: `(7.057±0.004)×10⁹ km³`, mass: `(1.303±0.003)×10²² kg`}
];

const cardImagePlaceHolder = `https://via.placeholder.com/80/2288ff/ffffff?text=place%20holder`


class InfoCards extends React.Component{

    cards = [];

    createCards(){
        const self = this;
        const cardsDataList = self.props.cardsData;
        console.log(`planets list: `, cardsDataList);
        for(let i = 0; i < cardsDataList.length; i++){
            let cardData = cardsDataList[i];
            self.cards.push(
                createEl(`div`, {key: i, className: `card flex-box`}, [
                    createEl('img', {key: 0, className: `card-image`, src: cardImagePlaceHolder}),
                    createEl('div', {key: 1, className: `card-info flex-box flex-column`}, [
                        createEl('span', {key: 0, className: `card-title h6`}, `${cardData.name}`),
                        createEl('div', {key: 1, className: `card-summary flex-box flex-sapce-around`},[
                            createEl(`span`, {key: 0, className: `card-data-block flex-box flex-center-v`}, `Type: ${cardData.type}`),
                            createEl(`span`, {key: 1, className: `card-data-block flex-box flex-center-v`}, `Volume: ${cardData.volume}`),
                            createEl(`span`, {key: 2, className: `card-data-block flex-box flex-center-v`}, `Mass: ${cardData.mass}`)

                        ]),
                    ]),
                ])
            );
        }
    }


    render(){
        const self = this;
        console.log(self.cards);
        self.createCards();
        console.log(self.cards);

        return self.cards;

    }
}

const universeObjectsContainer = document.getElementById(`universe_objects_container`);

let planetsInstance = new ReactDOM.render(createEl(InfoCards, {cardsData: planets}, null), universeObjectsContainer);
