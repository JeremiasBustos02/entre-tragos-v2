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
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selectedLabel = options.find((o) => o.value === value)?.label ?? '';

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => {
    setIsOpen(false);
    setFocusedIndex(-1);
  };

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

  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && listRef.current) {
      const items = listRef.current.querySelectorAll('[role="option"]');
      items[focusedIndex]?.scrollIntoView({ block: 'nearest' });
    }
  }, [isOpen, focusedIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (isOpen && focusedIndex >= 0) {
          selectOption(options[focusedIndex].value);
        } else {
          toggle();
        }
        break;
      case 'Escape':
        e.preventDefault();
        close();
        break;
      case 'Tab':
        close();
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else {
          setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen) {
          setFocusedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
        }
        break;
    }
  };

  const handleOptionKeyDown = (e: React.KeyboardEvent, optValue: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      selectOption(optValue);
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
          aria-activedescendant={isOpen && focusedIndex >= 0 ? `${name}-option-${focusedIndex}` : undefined}
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
            ref={listRef}
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
            {options.map((opt, index) => (
              <li
                key={opt.value}
                id={`${name}-option-${index}`}
                role="option"
                aria-selected={opt.value === value}
                onClick={() => selectOption(opt.value)}
                onKeyDown={(e) => handleOptionKeyDown(e, opt.value)}
                className={`px-4 py-3 cursor-pointer transition-colors duration-150 first:rounded-t-[11px] last:rounded-b-[11px] ${
                  opt.value === value
                    ? 'bg-[var(--color-accent-10)] text-[var(--color-accent)] font-semibold'
                    : 'bg-transparent text-[var(--color-text)] font-normal hover:bg-[var(--color-accent-5)]'
                }`}
                style={{ fontFamily: 'var(--font-sans)', fontSize: '14px' }}
                onMouseEnter={() => setFocusedIndex(index)}
                onMouseLeave={() => setFocusedIndex(-1)}
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