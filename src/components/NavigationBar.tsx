import '../styles/global.css';

function SubmitButton({ disable = true }) {
  return (
    <button
      type="submit"
      className={`  
        w-full 
        h-9 
        text-white 
        font-[HSSanTokki] 
        rounded-md 
        ${!disable ? 'bg-[var(--logo-green)]' : 'bg-[var(--light-gray)]'} 
        ${!disable ? 'cursor-pointer' : 'cursor-not-allowed'}
        ${!disable ? 'hover:opacity-80' : ''}
        text-base md:text-lg lg:text-[1.5rem]  
      `}
      disabled={disable}
    >
      로그인
    </button>
  );
}

export default SubmitButton;
