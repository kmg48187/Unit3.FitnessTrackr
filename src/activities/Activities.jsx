export default function Activity({activity}){
    return (
        <article className="activity">
            <li>
                {activity.name}<br></br>
                <button className="deleteButton">Delete</button>
            </li>
        </article>
    );
}