import { useState } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

const NewMeetupPage = () => {
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isMeetupAdded, setIsMeetupAdded] = useState(false);

  const router = useRouter();

  const onAddMeetupHandler = async (meetData) => {
    try {
      setIsFetching(true);
      setIsMeetupAdded(false);
      setError(null);

      const resp = await fetch('/api/new-meetup', {
        method: 'POST',
        body: JSON.stringify(meetData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setIsFetching(false);

      if (!resp.ok) {
        throw new Error('Something went wrong');
      }
      setIsMeetupAdded(true);
      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (err) {
      setError(err.message);
    }
  };

  if (isMeetupAdded) {
    return <p>Meetup added successfully</p>;
  }

  return (
    <NewMeetupForm
      isFetching={isFetching}
      onAddMeetup={onAddMeetupHandler}
      error={error}
    />
  );
};

export default NewMeetupPage;
