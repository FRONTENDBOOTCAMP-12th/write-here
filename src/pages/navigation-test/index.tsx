import React, { useState } from 'react';
import NavigationBar from '@/components/NavigationBar';
import Toggle from '@/components/Toggle';

const NavigationTest: React.FC = () => {
  const [toggleState, setToggleState] = useState(false); // 토글 상태 관리

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-3xl font-bold">Test</h1>

      {/* 네비게이션 바 추가 */}
      <NavigationBar />

      {/* 토글 버튼 추가 */}
      <Toggle isOn={toggleState} handleToggle={setToggleState} />

      {/* 토글 상태 표시 */}
      <p className="text-lg">{toggleState ? '토글 ON' : '토글 OFF'}</p>
    </div>
  );
};

export default NavigationTest;
