'use client';

import { useState } from 'react';

type TextExpanderProps = {
  children: string | null;
};

export default function TextExpander({ children }: TextExpanderProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const displayText: string | null = isExpanded
    ? children
    : children?.split(' ').slice(0, 40).join(' ') + '...';

  return (
    <span>
      {displayText}{' '}
      <button
        className='text-primary-700 border-b border-primary-700 leading-3 pb-1'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </span>
  );
}
