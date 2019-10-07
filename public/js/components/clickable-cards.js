function ClickableCard(props){
    const title = props.data.title;
    const tldr = props.data.tldr;
    const blogId = props.data.id;

    return createEl('button', {className: `card flex-box flex-sapce-between card-info clickable-card clickableCard`, "data-blog":`${blogId}`, onClick: (e) => { props.clickHandler(e) } }, 
        createEl('span', null, `${title}`),
        createEl('span', null, `${tldr}`)
    );
}