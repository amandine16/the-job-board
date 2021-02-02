const Job = ({ title, contractType, country, city, className }) => {
  return (
    <div className={`job ${className}`}>
      <p>{title}</p>
      <p>
        {contractType} - {country} - {city}
      </p>
    </div>
  );
};
export default Job;
