import React from 'react';
import tm from '../../utils/tw-merge';

interface ToggleProps {
  isOn: boolean; // 부모 컴포넌트에서 상태를 관리 변수
  handleToggle: (value: boolean) => void; // 상태 변경을 처리
}

const Toggle: React.FC<ToggleProps> = ({ isOn, handleToggle }) => {
  return (
    <div className="flex justify-center items-center w-full py-4">
      <button
        className={tm(
          'relative flex items-center transition-all rounded-full border-2 justify-start overflow-hidden',
          'w-[2.0625rem] h-[1.125rem] md:w-[2.75rem] md:h-[1.5rem]', // 모바일: 33x18 → 2.0625rem x 1.125rem / md(768px) 기준 데스크탑: 44x24 → 2.75rem x 1.5rem
          'pl-0', // 왼쪽 패딩 제거
          isOn
            ? 'bg-[var(--logo-green)] border-[var(--logo-green)]'
            : 'bg-[#A0A5B1] border-[#A0A5B1]'
        )}
        onClick={() => handleToggle(!isOn)} // 부모 컴포넌트에서 상태 변경
      >
        <span
          className={tm(
            'bg-white rounded-full shadow-md transition-all',
            isOn
              ? 'w-[1rem] h-[1rem] md:w-[1.375rem] md:h-[1.375rem] translate-x-[0.9375rem] md:translate-x-[1.25rem]' // ON 상태
              : 'w-[1rem] h-[1rem] md:w-[1.375rem] md:h-[1.375rem] -translate-x-[0.125rem]' // OFF 상태
          )}
        ></span>
      </button>
    </div>
  );
};

export default Toggle;
