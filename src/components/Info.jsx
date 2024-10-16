
function Info({ icon = '', text = '', list_tilte = '', list = [] }) {
    return (
        <div>
            {icon && <span className="material-symbols-outlined">{icon}</span>}
            {text && <span>{text}</span>}
            {list_tilte && <h3>{list_tilte}</h3>}
            {Object.keys(list).length > 0 &&
                <ul>
                    {Object.values(list).map(info => <li key={info.id}>{info.industry_name}</li>)}
                </ul>}

        </div>
    )
}

export default Info;