import { useSelector, useDispatch } from "react-redux";
import { getEducation } from "../cvReducer";
import { useEffect } from "react";

function ExpEdu() {
    const data = useSelector((state) => state.cv.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEducation());
    }, [dispatch]);


    if (!data) {
        return null;
    }
    return (    
        <div className="Education">
            <h2 className="edu-title">EDUCATION</h2>
            <div>
                {data && data.map((edu) => (
                    <div key={edu.id}>
                        <h3 className="degree">{edu.degree}</h3>
                        <div className="uni">{edu.university}</div>
                        <div className="dates">
                            {edu.start_date}-{edu.end_date}, 
                            <span>{edu.location}</span>
                        </div>
                    </div>
                ))}

            
            </div>
        </div>
    );
}


export default ExpEdu;
