import cn from 'classnames';
import { Person } from '../types';

interface Props {
  person: Person | string | null;
}

export const PersonLink: React.FC<Props> = ({ person }) => {
  if (!person) {
    return <>-</>;
  }

  if (typeof person === 'string') {
    return <>{person}</>;
  }

  return (
    <a
      href={`#/people/${person.slug}`}
      className={cn({ 'has-text-danger': person.sex === 'f' })}
    >
      {person.name}
    </a>
  );
};
