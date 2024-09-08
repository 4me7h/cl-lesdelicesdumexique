const ItemMenu = ({title, subtitle, text}) => {
    return(
    <div className="item-menu">
        <div className="item-menu__container">
            <div className="item-menu__content">
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
    )
}

export default ItemMenu;