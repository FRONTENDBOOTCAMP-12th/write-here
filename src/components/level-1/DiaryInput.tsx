import { tm } from '@/utils/tw-merge';
import { useId } from 'react';

interface DiaryInpuProps {
  text: string;
  label: string;
  type: 'input' | 'textarea';
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

function DiaryInput({ text, label, type, onChange }: DiaryInpuProps) {
  const fieldId = useId();
  const hideLabel = text.length > 0;

  return (
    <li className="list-none w-full p-2">
      <label
        htmlFor={fieldId}
        className={tm(
          'text-[var(--light-gray)] transition-opacity duration-100 absolute w-full min-h-52',
          hideLabel ? 'opacity-0' : 'opacity-100'
        )}
      >
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={fieldId}
          className="bg-transparent border rounded-sm border-solid border-[var(--logo-green)] resize-none"
          value={text}
          onChange={onChange}
        />
      ) : (
        <input
          id={fieldId}
          className="bg-transparent w-full border-b border-solid border-[var(--logo-green)] "
          value={text}
          onChange={onChange}
        />
      )}
    </li>
  );
}

export default DiaryInput;
