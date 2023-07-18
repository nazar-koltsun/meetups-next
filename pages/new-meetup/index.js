import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const onAddMeetupHandler = (meetData) => console.log(meetData);
  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
}

export default NewMeetupPage;