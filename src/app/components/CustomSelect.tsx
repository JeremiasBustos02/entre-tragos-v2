import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface CustomSelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: CustomSelectOption[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  name: string;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  label,
  name,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find((o) => o.value === value)?.label ?? '';

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  const selectOption = (optValue: string) => {
    onChange(optValue);
    close();
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close();
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        toggle();
        break;
      case 'Escape':
        e.preventDefault();
        close();
        break;
      case 'Tab':
        close();
        break;
    }
  };

  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
      {label}
      <div className="relative" ref={containerRef}>
        <div
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={`${name}-listbox`}
          tabIndex={0}
          onClick={toggle}
          onKeyDown={handleKeyDown}
          className="bg-white border border-neutral-200 rounded-xl px-4 py-3 w-full text-sm text-[#1A1A1A] flex items-center justify-between cursor-pointer focus:ring-2 focus:ring-[#2D5A27]/30 focus:border-[#2D5A27] focus:outline-none transition-all duration-200"
        >
          <span className={value ? '' : 'text-neutral-400'}>{selectedLabel || 'Seleccionar'}</span>
          <ChevronDown
             className={`w-4 h-4 text-neutral-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </div>

        {isOpen && (
          <ul
            id={`${name}-listbox`}
            role="listbox"
            className="absolute z-30 mt-2 w-full bg-white border border-neutral-100 rounded-2xl shadow-lg overflow-hidden"
          >
            {options.map((opt) => (
              <li
                key={opt.value}
                role="option"
                aria-selected={opt.value === value}
                onClick={() => selectOption(opt.value)}
                onKeyDown={() => {}}
                className={`px-4 py-3 text-sm cursor-pointer transition-colors ${
                  opt.value === value
                    ? 'text-[#2D5A27] font-semibold bg-[#2D5A27]/5'
                    : 'text-[#1A1A1A] hover:bg-neutral-50'
                }`}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </label>
  );
}
