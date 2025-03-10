import { IMAGE_PATHS } from '@/constants/imagePaths';
import { tm } from '@/utils/tw-merge';
import Tag from '@/components/level-1/Tag';
import LikeToggle from '@/components/level-1/LikeToggle'; 

interface DiaryCardProps {
  imageUrl?: string;
  title: string;
  date: string;
  content: string;
  tags: string[];
  backgroundColor?: string;
}

const DiaryCard = ({
  imageUrl = IMAGE_PATHS.blueBottle,
  title,
  date,
  content,
  tags,
  backgroundColor = 'bg-white',
}: DiaryCardProps) => {
  return (
    <div className="w-[366px] h-[277px] bg-white rounded-2xl shadow-md overflow-hidden">
      <div
        className={tm('relative w-[366px] h-[157px] bg-cover bg-center rounded-t-2xl')}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute bottom-3 left-3">
          <LikeToggle />
        </div>
      </div>

      <div className={tm('w-[366px] h-[120px] p-3 overflow-hidden', backgroundColor)}>
        <div className="flex justify-between items-center w-full">
          <h2 className="font-[HSSanTokki] truncate max-w-[70%] text-sm">
            {title}
          </h2>
          <span className="whitespace-nowrap text-xs">{date}</span>
        </div>

        <p className="text-xs mt-2 text-gray-700 line-clamp-2">{content}</p>

        <div className="flex flex-wrap gap-2 mt-3 overflow-hidden font-[HSSanTokki]">
          {tags.map((tag, index) => (
            <Tag key={index} tagText={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiaryCard;
