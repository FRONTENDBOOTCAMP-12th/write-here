import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import '../styles/global.css';

const NAV_ITEMS = [
  {
    label: '여기적기',
    icon: '/icons/icon-nav-map.svg',
    path: '/navigation-test',
  },
  { label: '일기', icon: '/icons/icon-nav-book.svg', path: '/diary' },
  { label: '캘린더', icon: '/icons/icon-nav-calendar.svg', path: '/calendar' },
  { label: '공유일기', icon: '/icons/icon-nav-people.svg', path: '/shared' },
  { label: '프로필', icon: '/icons/icon-person.svg', path: '/profile' },
];

const NavigationBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav
      className={twMerge(
        'fixed bg-white border-black/20 flex items-center justify-around',
        'bottom-0 w-full h-[3.5rem] min-w-0', // 모바일: 너비 제한 해제
        'md:top-[8.625rem] md:left-[2.4375rem] md:w-[3.5rem] md:h-[22.5rem] md:flex-col md:shadow-lg md:rounded-xl md:gap-y-6' // 데스크탑: 기존 스타일 유지
      )}
    >
      {NAV_ITEMS.map((item) => {
        const isActive =
          currentPath === item.path ||
          (item.path === '/navigation-test' &&
            currentPath === '/navigation-test');

        return (
          <button
            key={item.label}
            className={twMerge(
              'flex flex-col items-center text-center font-paperlogy transition-all cursor-pointer hover:opacity-80',
              'w-auto min-w-[50px] max-w-[65px] px-0 shrink-0', // 버튼 크기 조정 및 최소 너비 설정
              isActive ? 'text-[var(--logo-green)]' : 'text-[var(--dark-gray)]'
            )}
            onClick={() => navigate(item.path)}
          >
            <span
              className={twMerge(
                'w-[1.5rem] h-[1.5rem] mask-icon', // 아이콘 크기 축소
                isActive ? 'bg-[var(--logo-green)]' : 'bg-[var(--dark-gray)]'
              )}
              style={{
                maskImage: `url(${item.icon})`,
                WebkitMaskImage: `url(${item.icon})`,
              }}
            ></span>
            <span className="text-[0.75rem] whitespace-nowrap">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default NavigationBar;
