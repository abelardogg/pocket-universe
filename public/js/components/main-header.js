'use strict'
const siteLogo = `https://via.placeholder.com/150x80/2288ff/ffffff?text=universe__App`
const createEl = React.createElement;

class MainHeader extends React.Component{
    render(){
        return createEl('div', {id: `main-header`, className: `main-header flex-box flex-row`}, [
            createEl(`div`, {key: 0, id: `logo-container`, className: `flex-box flex-centered`}, 
                createEl(`a`, {href: `/`, className: `navigation-redirect-home`}, 
                    createEl(`img`, {id: `main-logo`,className: `main-logo`, src: siteLogo}, null)
                )
            ),
            createEl(`div`, {key: 1, id: `site-main-navigation`, className: `flex-box flex-centered`}, [
                createEl(`a`, {key: 0, className: `navigation-button flex-box flex-centered`, href: `/about`}, `about`),
                createEl(`a`, {key: 1, className: `navigation-button flex-box flex-centered`, href: `/sources`}, `sources`)
            ])
        ]);
    }
}

const domContainer = document.getElementById(`main_header_container`);
ReactDOM.render(createEl(MainHeader, {type: `space`}, null), domContainer);