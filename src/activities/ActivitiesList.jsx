import Activity from "./Activities";

export default function ActivitiesList({activities}){
    return(
        <ul className="actitiviesList">
            {activities.map((activity) => (
                <Activity key={activity.id} activity={activity} />
            ))}
        </ul>
    )
}