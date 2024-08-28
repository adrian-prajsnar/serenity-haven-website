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
    <div className='border border-primary-800 flex'>
      <FilterButton
        filter='all'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </FilterButton>

      <FilterButton
        filter='small'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        up to 3 guests
      </FilterButton>

      <FilterButton
        filter='medium'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4 &ndash; 7 guests
      </FilterButton>

      <FilterButton
        filter='large'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
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
  children: string;
};

function FilterButton({
  filter,
  handleFilter,
  activeFilter,
  children,
}: FilterButtonProps) {
  return (
    <button
      className={`${
        filter === activeFilter ? 'bg-primary-700 text-primary-50' : ''
      } px-5 py-2 hover:bg-primary-700`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}
