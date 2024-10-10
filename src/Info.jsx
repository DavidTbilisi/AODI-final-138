
function Info({ icon = '', text = '', list_tilte='', list = [] }) {
    return (
        <div>
            {icon && <span class="material-symbols-outlined">{icon}</span>}
            {text && <span>{text}</span>}
            {list_tilte && <h3>{list_tilte}</h3>}
            {list.length > 0 && <ul>{list.map(item => <li>{item}</li>)}</ul>}
        </div>
    )
}

export default Info;