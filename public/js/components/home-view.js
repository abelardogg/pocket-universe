
class HomeView extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            activeSectionId: 100,
            activeSectionName: 'no section',
            universeObjectsList: []
        };

        this.sectionChange = this.sectionChange.bind(this);
    }
    
    sections = [{
        id: 0,
        name: 'planets',
        description: 'Explore planets.'
    }];

    testData = [
        {
            title: 'Mercury',
            info: [{
                field: 'type',
                value: 'Rocky'
            },
            {
                field: 'Diameter',
                value: '4879'
            }]
        },
        {
            title: 'Venus',
            info: [{
                field: 'type',
                value: 'Rocky'
            },
            {
                field: 'Diameter',
                value: '4879'
            }]
        }
    ];
    

    sectionChange(e){
        const sectionTabs = document.getElementsByClassName('setcionTab');
        const selectedSectionId = Number(e.target.dataset.section);
        let sectionName;
        //console.log(this);
        for(let i = 0; i < this.sections.length; i++){
            const section = this.sections[i];
            if(section.id === selectedSectionId){
                sectionName = section.name;
                this.getRequestedList();
                break;
            }
        }
        if(!sectionName){
            return;
        }

        this.setState({activeSection: selectedSectionId, activeSectionName: sectionName});
        //console.log(this);
    }

    getRequestedList(){
        fetch('/api/planetsShort')
            .then(res => res.json())
            .then(
                (result) => {
                   // console.log(result);
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
            return createEl('p', { className: `h3` }, `Sorry! there are nothing to display :(`);
        }
    }

    render(){
        
        return createEl("div", null,
            createEl(NavigatorButton, { selectedSection: 0, onClickFunction: this.sectionChange }),
            createEl(SectionTitle, { sectionTitleName: this.state.activeSectionName }),
            this.getCardsList()
            //createEl(Card, { spaceObjectsList: '/api/planetsShort' })
        );
    }
}

function NavigatorButton(props) {
    return createEl('button', {['data-section']: props.selectedSection, className: 'setcionTab', onClick: (e) => { props.onClickFunction(e) } }, 'planets');
}

function SectionTitle(props) {
    return createEl('p', null, props.sectionTitleName);
}



let Navigator = new ReactDOM.render(createEl(HomeView), document.getElementById(`universe_objects_container_t`));
