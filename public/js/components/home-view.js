const sections = [{
    id: 0,
    name: 'planets',
    description: 'Explore planets.'
},
{
    id: 1,
    name: 'stars',
    description: 'Explore stars.'
}];

class HomeView extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            activeSectionId: 100,
            activeSectionName: '',
            universeObjectsList: [],
            homeSections: sections
        };

        this.sectionChange = this.sectionChange.bind(this);
    }
    
    

    sectionChange(e){
        const el = e.target;
        const sectionTabs = document.getElementsByClassName('setcionTab');
        const selectedSectionId = Number(el.dataset.section);
        const requestedList = el.dataset.list;
        let sectionName;

        

        for(let i = 0; i < this.state.homeSections.length; i++){
            const section = this.state.homeSections[i];
            if(section.id === selectedSectionId){
                sectionName = section.name;
                this.getRequestedList(requestedList);
                break;
            }
        }
        if(!sectionName){
            return;
        }

        this.setState({activeSection: selectedSectionId, activeSectionName: sectionName});

    }

    getRequestedList(req){
        fetch(req)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        universeObjectsList: result
                    });
                    // this.setState({
                    //     isLoaded: true,
                    //     items: result
                    // });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    // this.setState({
                    //     isLoaded: true,
                    //     error
                    // });
                }
            )
    }

    getCardsList(){
        const data = this.state.universeObjectsList;
        if (!!data.length) {
            let elements = [];
            for (var i = 0; i < data.length; i++) {
                elements.push(
                    createEl(Card, { key: i, data: data[i] })
                );
            }
            return elements;
        } else {
            return createEl('p', { className: `h3` }, `Select the section you want to explore :)`);
        }
    }

    render(){
        return createEl("div", null,
            createEl(CardsNavigator, {onClickFunction: this.sectionChange }),
            createEl(SectionTitle, { sectionTitleName: this.state.activeSectionName }),
            this.getCardsList()
        );
    }
}

function CardsNavigator(props){
    return createEl('div', {className: 'cards-navigator flex-box flex-center-v'},
        createEl(NavigatorButton, {selectedSection: 0, clickHandler: props.onClickFunction, sectionName: 'planets', requestedList: '/api/planetsShort'}),
        createEl(NavigatorButton, {selectedSection: 1, clickHandler: props.onClickFunction, sectionName: 'Stars', requestedList: '/api/starsShort'})
    );
}

function NavigatorButton(props) {
    return createEl('button', {['data-section']: props.selectedSection, ['data-list']: props.requestedList, className: 'setcionTab section-tab btn btn-crysal', onClick: (e) => { props.clickHandler(e) } }, `${props.sectionName}`);
}

function SectionTitle(props) {
    return createEl('p', {className: 'h5 section-title orange-text'}, props.sectionTitleName);
}



let Navigator = new ReactDOM.render(createEl(HomeView), document.getElementById(`universe_objects_container_t`));
