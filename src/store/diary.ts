import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

interface DiaryEntry {
  title: string;
  place: string;
  place_type: string[];
  content: string;
  post_date: Date;
  tag: string[];
  img: File[];
  like_count: number;
}

interface DiaryState {
  diaries: DiaryEntry[];
  addDiary: (newDiary: DiaryEntry) => void;
  removeDiary: (title: string) => void;
  likeDiary: (title: string) => void;
}

const useDiaryStore = create<DiaryState>()(
  persist(
    (set) => ({
      diaries: [],

      addDiary: (newDiary) =>
        set((state) => ({
          diaries: [...state.diaries, newDiary],
        })),

      removeDiary: (title) =>
        set((state) => ({
          diaries: state.diaries.filter((diary) => diary.title !== title),
        })),

      likeDiary: (title) =>
        set((state) => ({
          diaries: state.diaries.map((diary) =>
            diary.title === title
              ? { ...diary, like_count: diary.like_count + 1 }
              : diary
          ),
        })),
    }),
    {
      name: 'diary-storage',
      getStorage: () => localStorage,

      serialize: (state: DiaryState) => JSON.stringify(state),

      deserialize: (str: string): DiaryState => {
        const parsedState = JSON.parse(str) as DiaryState;

        return {
          ...parsedState,
          diaries: parsedState.diaries.map((diary) => ({
            ...diary,
            post_date: new Date(diary.post_date), // ✅ 문자열을 Date 객체로 변환
          })),
        };
      },
    } as PersistOptions<DiaryState>
  )
);

export default useDiaryStore;
