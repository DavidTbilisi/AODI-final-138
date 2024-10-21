import { useEffect } from "react";
import Info from "./Info";
import { getIndustry } from "../cvReducer";
import { useSelector, useDispatch } from "react-redux";

function Information(info) {
    const list_title = 'Industry Knowledge';
    const data = useSelector((state) => state.cv.data.industry);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIndustry());
    }, [dispatch]);
    const {phone, email, address} = info;
    
    if (!phone && !email && !address) {
        return null;
    }

    return (
        <>
            <Info text={phone} />
            <Info text={email} />
            <Info text={address} />
            <Info list_tilte={list_title} list={data} />
        </>
    )
}

export default Information;