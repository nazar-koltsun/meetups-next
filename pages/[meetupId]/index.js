import MeetupDetail from '../../components/meetups/MeetupDetail';
import { getAllMeetups, getMeetupById } from '../../helpers/api';

const MeetupDetailPage = (meetupData) => {
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
  const meetups = await getAllMeetups();

  const ways = meetups.map((meet) => {
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

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  const meetupData = await getMeetupById(meetupId);
  
  return {
    props: meetupData,
  };
};

export default MeetupDetailPage;
