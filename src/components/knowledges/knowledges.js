import React, {useState} from "react";

export const Knowledges = () => {
    const [knowledges] = useState([
        {title: "Marketing"},
        {title: "Print"},
        {title: "Digital Design"},
        {title: "Social Media"},
        {title: "Time Management"},
        {title: "Communication"},
        {title: "Problem-Solving"},
        {title: "Social Networking"},
        {title: "Flexibility"},
    ])

    return <ul className="knowledges">
        {knowledges.map(k => {
            return <li>{k.title}</li>
        })}
    </ul>
}