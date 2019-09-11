const cardImagePlaceHolder = `https://via.placeholder.com/80/2288ff/ffffff?text=place%20holder`

class InfoCards extends React.Component {

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
        fetch(this.props.spaceObjectsList)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
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

    createCards() {
        const self = this;
        const items = self.state.items;

        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            self.cards.push(
                createEl(`div`, { key: i, className: `card flex-box` }, [
                    createEl('img', { key: 0, className: `card-image`, src: cardImagePlaceHolder }),
                    createEl('div', { key: 1, className: `card-info flex-box flex-column` }, [
                        createEl('span', { key: 0, className: `card-title h6` }, `${item.name}`),
                        createEl('div', { key: 1, className: `card-summary flex-box flex-sapce-around` }, [
                            createEl(`span`, { key: 0, className: `card-data-block flex-box flex-center-v` }, `Type: ${item.type}`),
                            createEl(`span`, { key: 1, className: `card-data-block flex-box flex-center-v` }, `Diameter: ${item.diameter.base}`),
                            createEl(`span`, { key: 2, className: `card-data-block flex-box flex-center-v` }, `Mass: ${item.mass.base}`)
                        ]),
                    ]),
                ])
            );
        }
    }

    render() {
        console.log(this.state);
        const cardsCallFinished = this.state.isLoaded;
        const cardsListSize = this.state.items.length;
        const hasCardsToDisplay = cardsCallFinished && cardsListSize > 0;

        if(!cardsCallFinished){
            return createEl('p', { className: `h3` }, `Searching info...`);
        } else if (hasCardsToDisplay) {
            const self = this;
            self.createCards();
            return self.cards;
        }
        return createEl('p', { className: `h3` }, `Sorry! there are nothing to display :(`);
    }
}

const universeObjectsContainer = document.getElementById(`universe_objects_container`);

let planetsInstance = new ReactDOM.render(createEl(InfoCards, { spaceObjectsList: '/api/planets' }, null), universeObjectsContainer);
