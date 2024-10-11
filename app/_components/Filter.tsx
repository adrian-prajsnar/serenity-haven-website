'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter: string = searchParams.get('capacity') ?? 'all';

  const handleFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('capacity', filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className='w-full sm:w-auto border border-primary-400 sm:flex grid grid-cols-2 text-xs sm:text-sm font-medium rounded-lg'>
      <FilterButton
        filter='all'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
        index={1}
      >
        All cabins
      </FilterButton>

      <FilterButton
        filter='small'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
        index={2}
      >
        up to 3 guests
      </FilterButton>

      <FilterButton
        filter='medium'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
        index={3}
      >
        4 &ndash; 7 guests
      </FilterButton>

      <FilterButton
        filter='large'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
        index={4}
      >
        8 &#43; guests
      </FilterButton>
    </div>
  );
}

type FilterButtonProps = {
  filter: string;
  handleFilter: (filter: string) => void;
  activeFilter: string;
  index?: number;
  children: string;
};

function FilterButton({
  filter,
  handleFilter,
  activeFilter,
  index,
  children,
}: FilterButtonProps) {
  return (
    <button
      className={`${
        filter === activeFilter
          ? 'hover:bg-accent-700 bg-accent-700 text-primary-50'
          : 'hover:bg-primary-200'
      } px-5 py-2 ${index === 1 && 'rounded-tl-lg sm:rounded-l-lg'} ${
        index === 2 && 'rounded-tr-lg sm:rounded-none'
      } ${index === 3 && 'rounded-bl-lg sm:rounded-none'} ${
        index === 4 && 'rounded-br-lg sm:rounded-r-lg'
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}
