import React from 'react';
import NavigationBar from '../../components/NavigationBar'; // 네비게이션 바 추가

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <NavigationBar /> {/* 네비게이션 바 추가 */}
      <p role="alert" className="text-2xl font-black mt-10">
        페이지가 존재하지 않습니다!
      </p>
    </div>
  );
}

export default NotFound;
