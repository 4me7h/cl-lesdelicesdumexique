const ItemMenu = ({title, subtitle, text, imagemenu}) => {
    return(
    <div className="item-menu">
        <div className="item-menu__container">
            <div className="item-menu__content">
                <div className="item-menu__content__column">
                    <div className="item-menu__content__imagecontainer">
                        <img className="item-menu__content__image" src={imagemenu} alt={title} />
                    </div>
                </div>
                <div className="item-menu__content__column">
                    <span className="item-menu__title">
                        {title}
                    </span>
                    <span className="item-menu__subtitle">
                        {subtitle}
                    </span>
                    <span className="item-menu__text">
                        {text}
                    </span>
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default ItemMenu;