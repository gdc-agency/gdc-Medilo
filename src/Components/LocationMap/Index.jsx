
const LocationMap = ({ mapSrc }) => {
  return (
    <div className="cs_location_map">
      <iframe src={mapSrc} title="Google Map Location" />
    </div>
  );
};

export default LocationMap;
