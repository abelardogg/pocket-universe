function Card(props){
    //props = testData;
    return createEl('div', {className: `card flex-box` },
        createEl(CardImage, {imgSrc: cardImagePlaceHolder}),
        createEl(CardInfoColumn, {cardData: props.data})
    );
}

function CardImage(props){
    return createEl('img', {className: `card-image`, src: props.imgSrc }, null);
}

function CardInfoColumn(props){

    let cardInfo = JSON.parse(JSON.stringify(props.cardData));
    delete cardInfo.key;
    delete cardInfo.name;

    return createEl('div', {className: `card-info flex-box flex-column` },
        createEl(CardTitle, {name: props.cardData.name}),
        createEl(CardDataContainer, {cardInfo: cardInfo})
    );
}

function CardTitle(props){
    return createEl('span', {className: `card-title h6` }, props.name);
}

function CardDataContainer(props){
    return createEl('div', {className: `card-summary flex-box flex-sapce-around`},
        createEl(CardDataField, {cardInfo: props.cardInfo})
    );
}

function CardDataField(props){
    const cardInfoArr = props.cardInfo;
    let elementsArr = []
    let i = 0;
    for(let [key, value] of Object.entries(props.cardInfo)){
        console.log(key + value);
        elementsArr.push(
            createEl(`span`, {key: i, className: `card-data-block flex-box flex-center-v` }, `${key}: ${value}`)
        );
        i++;
    }

    

    return elementsArr;
}
