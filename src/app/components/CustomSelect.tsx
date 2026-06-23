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

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: '13px',
    color: 'var(--color-text-secondary)',
  };

  const triggerStyle: React.CSSProperties = {
    fontFamily: 'var(--font-sans)',
    backgroundColor: 'var(--color-bg)',
    color: value ? 'var(--color-text)' : 'var(--color-text-secondary)',
    border: '1px solid var(--color-border)',
    borderRadius: '12px',
    padding: '12px 16px',
    width: '100%',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 200ms',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  return (
    <label className="flex flex-col gap-1.5">
      <span style={labelStyle}>{label}</span>
      <div className="relative" ref={containerRef} style={{ overflow: 'visible' }}>
        <div
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={`${name}-listbox`}
          tabIndex={0}
          onClick={toggle}
          onKeyDown={handleKeyDown}
          style={triggerStyle}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-accent)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-border)';
          }}
        >
          <span>{selectedLabel || 'Seleccionar'}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            style={{ color: 'var(--color-text-secondary)' }}
            aria-hidden="true"
          />
        </div>

        {isOpen && (
          <ul
            id={`${name}-listbox`}
            role="listbox"
            className="absolute z-[60] mt-2 w-full"
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              boxShadow: '0 8px 32px var(--color-black-40)',
            }}
          >
            {options.map((opt) => (
              <li
                key={opt.value}
                role="option"
                aria-selected={opt.value === value}
                onClick={() => selectOption(opt.value)}
                onKeyDown={() => {}}
                className="px-4 py-3 cursor-pointer transition-colors duration-150 first:rounded-t-[11px] last:rounded-b-[11px]"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  backgroundColor: opt.value === value ? 'var(--color-accent-10)' : 'transparent',
                  color: opt.value === value ? 'var(--color-accent)' : 'var(--color-text)',
                  fontWeight: opt.value === value ? 600 : 400,
                }}
                onMouseEnter={(e) => {
                  if (opt.value !== value) {
                    e.currentTarget.style.backgroundColor = 'var(--color-accent-5)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (opt.value !== value) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
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