import Image from 'next/image';
import BackIcon from '../../../public/images/icons/back.svg';
import { Input } from '@/components/ui/Input';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { HTMLAttributes } from 'react';

const Home = () => {
  return (
    <h1 className="flex h-12 items-center bg-gr-white px-4 text-heading-3 text-gr-900">
      일지
    </h1>
  );
};

const Title = ({ title }: HTMLAttributes<HTMLDivElement>) => {
  return <p className="text-heading-3 text-gr-900">{title}</p>;
};

const Calendar = ({ onClick }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="px-[10px] py-1">
      <Image
        src="/images/icons/calendar.svg"
        alt="calendar"
        width={24}
        height={24}
        className="h-6 w-6 cursor-pointer"
        onClick={onClick}
      />
    </div>
  );
};

const Alarm = () => {
  return (
    <div className="flex">
      <div className="px-[10px] py-1">
        <Image
          src="/images/icons/alert.svg"
          alt="alert"
          width={24}
          height={24}
          className="h-6 w-6"
        />
      </div>
      <div className="px-[10px] py-1">
        <Image
          src="/images/icons/setting.svg"
          alt="setting"
          width={24}
          height={24}
          className="h-6 w-6"
        />
      </div>
    </div>
  );
};

const Back = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex px-[10px] py-1">
      <BackIcon
        width={24}
        height={24}
        stroke="var(--gr-black)"
        className="cursor-pointer"
        onClick={onClick}
      />
    </div>
  );
};

const More = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="px-[10px] py-1">
      <Image
        src="/images/icons/menu.svg"
        alt="calendar"
        width={24}
        height={24}
        className="h-6 w-6"
        onClick={onClick}
      />
    </div>
  );
};

const SearchInput = ({
  onChange
}: {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Input variant="search" placeholder="고양이 검색..." onChange={onChange} />
  );
};

const Next = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button onClick={onClick} className="px-[10px] py-1">
      <Button.Text text="다음" className="text-btn-1 text-gr-white" />
    </Button>
  );
};

const Complete = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button onClick={onClick} className="px-[10px] py-1">
      <Button.Text text="완료" className="text-btn-2 text-pr-500" />
    </Button>
  );
};

const Today = ({
  onLeftClick,
  onClick,
  onRightClick
}: {
  onLeftClick: () => void;
  onClick: () => void;
  onRightClick: () => void;
}) => {
  return (
    <div className="flex">
      <Image
        src="/images/icons/arrow-left.svg"
        alt="calendar"
        width={24}
        height={24}
        className="h-6 w-6"
        onClick={onLeftClick}
      />
      <div onClick={onClick}>오늘</div>
      <Image
        src="/images/icons/arrow-right.svg"
        alt="calendar"
        width={24}
        height={24}
        className="h-6 w-6"
        onClick={onRightClick}
      />
    </div>
  );
};

const DatePicker = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  return <>{children}</>;
};

const Empty = () => {
  return <div className="h-6 w-11" />;
};

const TopbarTypeVariants = {
  one: 'flex justify-center items-center',
  two: 'flex justify-between items-center',
  three: 'flex justify-between items-center',
  search: 'flex justify-between items-center border-b border-gr-100'
};

const Topbar = ({
  children,
  type,
  className
}: {
  children: React.ReactNode;
  type: 'one' | 'two' | 'three' | 'search';
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'fixed z-50 h-12 w-full bg-gr-white px-[6px]',
        TopbarTypeVariants[type],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Object.assign(Topbar, {
  Home,
  Title,
  Calendar,
  Alarm,
  Back,
  More,
  SearchInput,
  Next,
  Complete,
  Today,
  DatePicker,
  Empty
});
