import Profile from '@/components/ui/Profile';
import Badge from '@/components/ui/Badge';

interface FilterProps {
  id: number;
  imageUrl: string;
  onClick?: () => void;
  name?: string;
  type?: 'cat';
  isSelected?: boolean;
  coParentedCount?: number;
}

const Filter = ({
  id,
  imageUrl,
  name,
  type,
  onClick,
  isSelected,
  coParentedCount
}: FilterProps) => {
  return (
    <section
      className={`flex flex-col items-center justify-center bg-gr-white ${type === 'cat' ? 'px-0 py-0' : 'gap-2 px-2 py-3'} w-fit`}
    >
      <button
        className={`relative flex h-16 w-16 items-center justify-center rounded-3xl border-2 border-gr-100 bg-gr-white active:border-pr-500 ${
          isSelected ? 'border-pr-500' : ''
        }`}
        onClick={onClick}
      >
        <Profile
          items={[
            {
              id: id,
              imageUrl: imageUrl,
              style: 'w-14 h-14 rounded-[20px] border border-gr-50'
            }
          ]}
        />
        {coParentedCount !== 0 && (
          <div className="absolute bottom-0 right-0 rounded-full border-15 border-gr-white">
            <Badge
              type="icon"
              icon="/images/icons/share.svg"
              bgColor="bg-gradient-01"
            />
          </div>
        )}
      </button>
      <div className="text-body-4">{name}</div>
    </section>
  );
};

export default Filter;
