interface SpringProps {
  width: number;
}

function Spring({ width }: SpringProps) {
  return (
    <img
      src="/icons/spring.svg"
      alt=""
      aria-hidden="true"
      width={width}
      height={40}
    />
  );
}

export default Spring;
