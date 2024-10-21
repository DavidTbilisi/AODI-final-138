import Info from "./Info";
import useAPI from "../hooks/useAPI";

function Information({phone, email, address}) {
    const list_title = 'Industry Knowledge';

    const { data } = useAPI("industry");
    
    const info = {phone, email, address};
    
    if (!phone && !email && !address) {
        return null;
    }

    return (
        <>
            {/* {Object.keys(info).map(key => <Info key={key} text={info[key]} />)}
            <Info list_tilte={list_title} list={data} /> */}
        </>
    )
}

export default Information;