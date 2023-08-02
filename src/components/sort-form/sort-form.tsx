import cn from 'classnames';
import { useState } from 'react';
import './sort-form.css';
import { SORT_LIST, SortKindType } from '../../constants/sort-constants';

type SortFormProps = {
  currentSort: SortKindType;
  onSortItemClick: (type: string) => void;
}

export default function SortForm({currentSort, onSortItemClick}: SortFormProps) {

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get" onClick={()=> setMenuOpen(!isMenuOpen)}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {SORT_LIST[currentSort]}
        <svg className={cn(
          'places__sorting-arrow',
          { 'places__sorting-arrow-close': !isMenuOpen }
        )}
        width="7" height="4"
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn(
        'places__options',
        'places__options--custom',
        { 'places__options--opened': isMenuOpen })}
      >

        {Object.entries(SORT_LIST).map(([sortType, sortDescription]) => (
          <li onClick={() => onSortItemClick(sortType)}
            key={sortType}
            className={cn('places__option',
              { 'places__option--active': currentSort === sortType})}
            tabIndex={0}
          >
            {sortDescription}
          </li>
        ))}

      </ul>
    </form>
  );
}
