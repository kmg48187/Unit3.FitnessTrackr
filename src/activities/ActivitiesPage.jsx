import ActivitiesList from "./ActivitiesList";
import useQuery from "../api/useQuery"


export default function ActivitiesPage() {
  const{ data: activities, loading, error} = useQuery("/activities");

  if (loading) return <p>Loading...</p>
  if (error || !activities) return <p>{error}</p>




  return (
    <>
      <h1>Activities</h1>
      <form className="newActivity">

      </form>
      <p>Imagine all the activities!</p>
      <ActivitiesList activities={activities} />
    </>
  );
}
