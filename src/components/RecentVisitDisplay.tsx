interface RecentVisitDisplayProps {
  name: string;
  location: string;
  date: Date; // Date 객체로 날짜 받아오기
}

const RecentVisitDisplay = ({
  name = '이름 없음',
  location = '위치 정보 없음',
  date,
}: RecentVisitDisplayProps) => {
  const formattedDate = date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <div
      className="
        flex
        flex-col
        w-[9.0625rem]
        h-[3.75rem]  
        lg:h-[4.1875rem]  
        px-[0.5rem]
        py-[0.25rem]
        text-xs
        lg:text-[0.875rem]  
        bg-white
        rounded-xl
        gap-[0.1875rem]
        font-[Paperlogy]
        shadow-[1px_1px_4px_0px_rgba(0,_0,_0,_0.25)]
      "
    >
      <p
        className="
          overflow-hidden
          text-ellipsis
          whitespace-nowrap
          font-bold
        "
      >
        {name}
      </p>
      <p
        className="
          overflow-hidden
          text-ellipsis
          whitespace-nowrap
          text-[var(--dark-gray)]
        "
      >
        {location}
      </p>
      <div>{formattedDate}</div>
    </div>
  );
};

export default RecentVisitDisplay;

