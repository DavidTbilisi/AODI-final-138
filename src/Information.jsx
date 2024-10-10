import Info from "./Info";

function Information() {
    const list_title = 'Industry Knowledge';
    const list = [
        'UI/UX Design',
        'Web Design',
        'Mobile Design',
        'Graphic Design',
        'Branding',
    ]

    const info = {
        phone: '+995 55 55 55',
        email: 'davidchincharashvili@gmail.com',
        pin_drop: 'Tbilisi',
    }


    return (
        <>
            {Object.keys(info).map(key => <Info icon={key} text={info[key]} />)}
            <Info list_tilte={list_title} list={list}/>
        </>
    )
}

export default Information;