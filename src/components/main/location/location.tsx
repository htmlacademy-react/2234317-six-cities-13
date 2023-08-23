import {Link} from 'react-router-dom';

type LocationProps = {
  name: string;
}

function Location({name}: LocationProps): JSX.Element {
  return (
    <li className="locations__item">
      <Link to="#" className="locations__item-link tabs__item">
        <span>{name}</span>
      </Link>
    </li>
  );
}

export default Location;
