const cheatsheetContainer = document.getElementById('cheatsheet_list_container');

class CheatsheetView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modal:{
              info: "...",
              isOpen: false
            },
            error: null,
            isLoaded: false,
            items: []
          };

          this.openModal = this.openModal.bind(this);
          this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        fetch('/api/blog')
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

    getBlogsList(){
      const blogs = this.state.items;
      let cards = [];
        console.log('blogs: ', blogs);
        for(let x = 0; x < blogs.length; x++){
            cards.push(
                createEl(ClickableCard, {key: x, data: blogs[x], clickHandler: this.openModal})
            );
        }
        return cards;
    }

    openModal(){
      console.log('opening modal...');
      this.setState({modal: {isOpen: true}});
    }

    closeModal(){
      console.log('closing modal...');
      this.setState({modal: {isOpen: false}});
    }

    render(){

        const hasErrors = this.state.error;
        const isNotLoaded = !this.state.isLoaded;

        if(hasErrors){
            return createEl('div', {className: 'red-text'}, 'Sorry, something went worng');
        } else if(isNotLoaded){
            return createEl('div', {className: 'purple-text'}, 'Searching blogs...');
        }

        const modalIsOpen = this.state.modal.isOpen;

        return createEl('div', {id: 'cheatsheet-container'},
          this.getBlogsList(),
          createEl(Modal, {id:'cheatsheet-modal', className: `${modalIsOpen ? 'open':'hidden'}`,info: this.state.modal.info, closeModalHandler: this.closeModal})
        );

    }

}

let CheatsheetContainer =  new ReactDOM.render(createEl(CheatsheetView), cheatsheetContainer);