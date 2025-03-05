import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Landing from './pages/landing';
import NotFound from './pages/not-found';
import NavigationTest from './pages/navigation-test';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/navigation-test" element={<NavigationTest />} />{' '}
        {/*네비게이션 테스트 페이지 추가 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
