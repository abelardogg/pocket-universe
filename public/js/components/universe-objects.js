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

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }

      cards = [];

    componentDidMount() {
        fetch('/planets')
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.planets
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }


    createCards(){
        const self = this;
        const planets = self.state.items;
        for(let i = 0; i < planets.length; i++){
            let planet = planets[i];
            self.cards.push(
                createEl(`div`, {key: i, className: `card flex-box`}, [
                    createEl('img', {key: 0, className: `card-image`, src: cardImagePlaceHolder}),
                    createEl('div', {key: 1, className: `card-info flex-box flex-column`}, [
                        createEl('span', {key: 0, className: `card-title h6`}, `${planet.name}`),
                        createEl('div', {key: 1, className: `card-summary flex-box flex-sapce-around`},[
                            createEl(`span`, {key: 0, className: `card-data-block flex-box flex-center-v`}, `Type: ${planet.type}`),
                            createEl(`span`, {key: 1, className: `card-data-block flex-box flex-center-v`}, `Diameter: ${planet.diameter.base}`),
                            createEl(`span`, {key: 2, className: `card-data-block flex-box flex-center-v`}, `Mass: ${planet.mass.base}`)

                        ]),
                    ]),
                ])
            );
        }
    }


    render(){
        console.log(this.state);

        if(this.state.isLoaded){
            const self = this;
            self.createCards();
            return self.cards;
        }
        
        return 'Nothing loaded';

    }
}

const universeObjectsContainer = document.getElementById(`universe_objects_container`);

let planetsInstance = new ReactDOM.render(createEl(InfoCards, null, null), universeObjectsContainer);
