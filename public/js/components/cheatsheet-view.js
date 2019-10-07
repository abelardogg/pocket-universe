const cheatsheetContainer = document.getElementById('cheatsheet_list_container');

class CheatsheetView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modal:{
              info: "...",
              isOpen: false,
              error: null
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
          );
      }


    openModal(e){
      e.currentTarget;
      console.log('opening modal...');
      let id = e.target.dataset.blog; 
      let modal = {...this.state.modal};
      modal.isOpen = true;
      this.setModalInfo(id);
      this.setState({modal});
    }

    closeModal(){
      console.log('closing modal...');
      let modal = {...this.state.modal};
      modal.isOpen = false;
      this.setState({modal});
    }

    setModalInfo(id){
      fetch(`/api/blogContent/${id}`)
      .then(res => res.text())
      .then(
        (data) => {
        let modal = {...this.state.modal};
        modal.info = data;
        this.setState({modal});
        document.getElementById('modal-body').innerHTML = this.state.modal.info;
      },
      (error) =>{
        let modal = {...this.state.modal};
        modal.error = error;
        this.setState(modal);
      }
      );
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

    render(){

        const hasErrors = this.state.error;
        const isNotLoaded = !this.state.isLoaded;

        if(hasErrors){
            return createEl('div', {className: 'red-text'}, 'Sorry, something went wrong');
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