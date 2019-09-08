
class Footer extends React.Component{
    render(){
        return createEl(`div`, {className: `footer flex-box`}, `Pocket Universe v0.0`);
    }
}

const mainFooterContainer = document.getElementById(`main_footer_container`);
const footer = ReactDOM.render(createEl(Footer, null, null), mainFooterContainer);