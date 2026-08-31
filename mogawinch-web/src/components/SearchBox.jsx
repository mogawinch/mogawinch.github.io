import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function SearchBox({ basePath, initialValue = '', placeholder = 'Search...' }) {
  const [value, setValue] = useState(initialValue);
  const navigate = useNavigate();

  const handleKeyUp = (e) => {
    if (e.key !== 'Enter') return;
    const trimmed = value.trim();
    navigate(trimmed ? `${basePath}?search=${encodeURIComponent(trimmed)}` : basePath);
  };

  return (
    <div className="relative mb-8">
      <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={handleKeyUp}
        placeholder={placeholder}
        className="w-full max-w-sm rounded-md border border-border bg-background py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
