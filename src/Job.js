const Job = (props) => {
  return (
    <div className="job">
      <div className={props.className}>
        <p>{props.title}</p>
        <p>
          {props.contractType} - {props.country} - {props.city}
        </p>
      </div>
    </div>
  );
};
export default Job;
