'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const BOTTOM_NAV = [
  {
    key: 'diary',
    value: '일지',
    img: {
      active: '/images/icons/bottom-diary-active.svg',
      default: '/images/icons/bottom-diary-default.svg'
    }
  },
  {
    key: 'zip',
    value: '모음집',
    img: {
      active: '/images/icons/bottom-zip-active.svg',
      default: '/images/icons/bottom-zip-default.svg'
    }
  },
  {
    key: 'community',
    value: '커뮤니티',
    img: {
      active: '/images/icons/bottom-community-active.svg',
      default: '/images/icons/bottom-community-default.svg'
    }
  },
  {
    key: 'profile',
    value: '프로필',
    img: {
      active: 'https://github.com/shadcn.png',
      default: 'https://github.com/shadcn.png'
    }
  }
];
const BottomNavBar = () => {
  const [activeNav, setActiveNav] = useState('diary');

  const pathName = usePathname();

  useEffect(() => {
    const path = pathName.split('/')[1];
    setActiveNav(path);
  }, [pathName]);

  return (
    <div className="flex w-screen justify-center rounded-t-[20px] bg-gr-white px-2 pb-[34px] pt-2 shadow-bottomNav">
      {BOTTOM_NAV.map(nav => (
        <Link key={nav.key} href={nav.key} className="px-4">
          <Image
            src={nav.key === activeNav ? nav.img.active : nav.img.default}
            alt={nav.key}
            width={40}
            height={40}
            className="h-auto w-auto rounded-full"
          />
          <h5 className="text-center text-[10px] font-normal text-gr-800">
            {nav.value}
          </h5>
        </Link>
      ))}
    </div>
  );
};

export default BottomNavBar;
