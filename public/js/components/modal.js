class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        console.log(this.props)
        
        return createEl('div',{className: `modal-container ${this.props.className}`},
            createEl('div',{id: `${this.props.id}`, className: `modal`}, 
            createEl('button', {className: 'modal-close-btn btn btn-crysal-red', onClick: (e)=>{ this.props.closeModalHandler()}}, 'X'),
            createEl('div', {id: 'modal-body', className: 'modal-body'}, null)
        )
        );
        
    }

}