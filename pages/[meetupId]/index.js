import MeetupDetail from '../../components/meetups/MeetupDetail';
import { DYMMY_MEETUPS } from '..';

const MeetupDetailPage = (meetupData) => {
  console.log(meetupData);
  return (
    <MeetupDetail
      imgUrl={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
};

export const getStaticPaths = async () => {
  const ways = DYMMY_MEETUPS.map((meet) => {
    return {
      params: {
        meetupId: meet.id,
      },
    };
  });

  return {
    paths: ways,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const meetupId = context.params.meetupId;
  const meetupData = DYMMY_MEETUPS.filter((meet) => meet.id === meetupId)[0];

  return {
    props: meetupData,
  };
};

export default MeetupDetailPage;
