import React, { useState } from 'react';

const NAV_ITEMS = ['여기 적기', '일기', '캘린더', '공유 일기, 프로필'];

// NavItem 컴포넌트
const NavItem: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`flex items-center justify-center px-4 py-2 text-sm font-semibold cursor-pointer transition-colors w-full
        ${
          isActive
            ? 'text-white bg-primary relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-tertiary after:mb-[-4px]'
            : 'text-gray-400'
        }
        focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary rounded-sm`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

// NavigationBar 컴포넌트
const NavigationBar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="bg-primary sticky top-0 z-10">
      {/* 모바일: 가로 네비게이션 */}
      <div className="flex md:hidden items-center justify-between w-full h-12">
        {NAV_ITEMS.map((item, index) => (
          <NavItem
            key={item}
            label={item}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* 데스크톱: 왼쪽 고정형 세로 네비게이션 */}
      <div className="hidden md:flex flex-col items-start w-48 h-screen fixed left-0 top-0 bg-primary p-4">
        {NAV_ITEMS.map((item, index) => (
          <NavItem
            key={item}
            label={item}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;
