import classes from './MeetupDetail.module.css';

const MeetupDetail = ({imgUrl, title, address, description}) => {
  return (
    <section className={classes.detail}>
      <img src={imgUrl} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  )
}

export default MeetupDetail;