import { tm } from '@/utils/tw-merge';

interface Tag {
  tagText: string;
}

function Tag({tagText}:Tag) {
  
  return(
    <span className={tm(
      'bg-white px-2 py-1 rounded-3xl text-xs lg:text-base',
    )}>
      # {tagText}
    </span>
  )

}

export default Tag;