import DiaryCard from './../../components/level-2/DiaryCard';
import { IMAGE_PATHS } from '@/constants/imagePaths';


function Landing() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">여기 저기~</h1>
      <DiaryCard
        imageUrl={IMAGE_PATHS.blueBottle}
        title="유저설정 제목"
        date="2025. 02. 21"
        content="오늘은 친구와 함께 성수동 카페거리를 방문했다. 카페 거리 중 블루보틀로 들어갔는데 블루보틀의 커피는 언제나 맛있고 분위기도 좋아서 자주 찾게 된다."
        tags={['카페', '성수', '커피', '데이트']}
        backgroundColor="bg-[var(--card-brown)]"
      />
    </div>
  );
}

export default Landing;
