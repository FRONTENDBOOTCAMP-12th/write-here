import React, { useState } from 'react';
import tm from '../utils/tw-merge'; //  Tailwind Merge 유틸 불러오기

const Toggle: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex justify-center items-center w-full py-4">
      <button
        className={tm(
          'relative flex items-center transition-all rounded-full border-2 justify-start overflow-hidden', //왼쪽 배경까지 완전히 밀착
          'w-[2.0625rem] h-[1.125rem] lg:w-[2.75rem] lg:h-[1.5rem]', //모바일: 33x18 → 2.0625rem x 1.125rem / 데스크탑: 44x24 → 2.75rem x 1.5rem
          'pl-0', //왼쪽 패딩 완전히 제거
          isOn
            ? 'bg-[var(--logo-green)] border-[var(--logo-green)]'
            : 'bg-[#A0A5B1] border-[#A0A5B1]'
        )}
        onClick={() => setIsOn(!isOn)}
      >
        <span
          className={tm(
            'bg-white rounded-full shadow-md transition-all',
            isOn
              ? 'w-[1rem] h-[1rem] lg:w-[1.375rem] lg:h-[1.375rem] translate-x-[0.9375rem] lg:translate-x-[1.25rem]' // ON 상태
              : 'w-[1rem] h-[1rem] lg:w-[1.375rem] lg:h-[1.375rem] -translate-x-[0.125rem]'
          )}
        ></span>
      </button>
    </div>
  );
};

export default Toggle;
