import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

const NAV_ITEMS = [
  { label: '여기적기', icon: '/icons/icon-nav-map.svg' },
  { label: '일기', icon: '/icons/icon-nav-book.svg' },
  { label: '캘린더', icon: '/icons/icon-nav-calendar.svg' },
  { label: '공유일기', icon: '/icons/icon-nav-people.svg' },
  { label: '프로필', icon: '/icons/icon-person.svg' },
];

const NavigationBar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <>
      {/* ✅ 모바일: 하단 고정 네비게이션 (간격 줄임) */}
      <nav className="fixed bottom-0 w-full h-[3.5rem] bg-white border-t border-black/20 flex justify-around items-center gap-[0rem] md:hidden">
        {NAV_ITEMS.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={item.label}
              className={`flex flex-col items-center font-paperlogy transition-all w-full text-center
                ${isActive ? 'text-[var(--logo-green)]' : 'text-[var(--dark-gray)]'}
                cursor-pointer hover:opacity-80`}
              onClick={() => {
                setActiveIndex(index);
                navigate('/not-found');
              }}
            >
              <span
                className={`w-[3rem] h-[1.5rem] mb-[0.25rem] mask-icon`}
                style={{
                  maskImage: `url(${item.icon})`,
                  WebkitMaskImage: `url(${item.icon})`,
                }}
              ></span>
              <span
                className={`text-[0.875rem] md:text-[0.75rem] lg:text-[0.6875rem] whitespace-nowrap`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* ✅ 데스크탑: 왼쪽 네비게이션 (간격 유지) */}
      <nav className="hidden md:flex flex-col items-center w-[3.5rem] h-[22.5rem] absolute left-[2.4375rem] top-[8.625rem] bg-white p-[1rem] shadow-lg rounded-xl gap-[1.5rem]">
        {NAV_ITEMS.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={item.label}
              className={`flex flex-col items-center font-paperlogy transition-all w-full text-center
                ${isActive ? 'text-[var(--logo-green)]' : 'text-[var(--dark-gray)]'}
                cursor-pointer hover:opacity-80`}
              onClick={() => {
                setActiveIndex(index);
                navigate('/not-found');
              }}
            >
              <span
                className={`w-[1.5rem] h-[1.5rem] mask-icon`}
                style={{
                  maskImage: `url(${item.icon})`,
                  WebkitMaskImage: `url(${item.icon})`,
                }}
              ></span>
              <span
                className={`text-[0.875rem] md:text-[0.75rem] lg:text-[0.6875rem] whitespace-nowrap`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
};

export default NavigationBar;
