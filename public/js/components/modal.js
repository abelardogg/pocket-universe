
class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        console.log(this.props)
        
        return createEl('div',{id: `${this.props.id}`, className: `modal ${this.props.className}`}, 
            createEl('button', {className: 'modal-close-btn btn btn-crysal-red', onClick: (e)=>{ this.props.closeModalHandler()}}, 'close'),
            createEl('div', {id: 'modal-body', className: 'modal-body'}, null)
        );
        
    }

}