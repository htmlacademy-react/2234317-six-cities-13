import Location from '../location/location';
import {Locations} from '../../../const';

function LocationList(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(Locations).map((location) => (
            <Location key={location} name={location} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default LocationList;
