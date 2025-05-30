import Link from 'next/link';
import Image from 'next/image';
import { useAccount } from '@/app/contexts/AccountContext';
import AccountNavMobile from './AccountNavMobile';
import { AnimatePresence } from 'framer-motion';
import { link } from 'fs';
import { usePathname } from 'next/navigation';

interface Link {
  href: string;
  icon: ({ className }: { className: string }) => JSX.Element;
  name: string;
}

const links: Link[] = [
  {
    href: '/account',
    icon: ({ className }) => (
      <svg
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={`fill-brand-blue-1 group-hover:fill-brand-red-1 transition-all duration-200 ${className}`}
      >
        <path d="M15.375 5C16.7011 5 17.9729 5.52678 18.9105 6.46447C19.8482 7.40215 20.375 8.67392 20.375 10C20.375 11.3261 19.8482 12.5979 18.9105 13.5355C17.9729 14.4732 16.7011 15 15.375 15C14.0489 15 12.7771 14.4732 11.8395 13.5355C10.9018 12.5979 10.375 11.3261 10.375 10C10.375 8.67392 10.9018 7.40215 11.8395 6.46447C12.7771 5.52678 14.0489 5 15.375 5ZM15.375 17.5C20.9 17.5 25.375 19.7375 25.375 22.5V25H5.375V22.5C5.375 19.7375 9.85 17.5 15.375 17.5Z" />
      </svg>
    ),
    name: 'Account',
  },
  {
    href: '/account/orders/all',
    icon: ({ className }) => (
      <svg
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={`fill-brand-blue-1 stroke-brand-blue-1 group-hover:stroke-brand-red-1 group-hover:fill-brand-red-1 transition-all duration-200 ${className}`}
      >
        <path
          d="M20.375 7H10.375C9.27043 7 8.375 7.89543 8.375 9V22C8.375 23.1046 9.27043 24 10.375 24H20.375C21.4796 24 22.375 23.1046 22.375 22V9C22.375 7.89543 21.4796 7 20.375 7Z"
          strokeWidth="2"
        />
        <path
          d="M12.375 12H18.375M12.375 16H18.375M12.375 20H16.375"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    name: 'Orders',
  },
  {
    href: '/account/appointments/zoom-call',
    icon: ({ className }) => (
      <svg
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={`fill-brand-blue-1 stroke-brand-blue-1 group-hover:stroke-brand-red-1 group-hover:fill-brand-red-1 transition-all duration-200 ${className}`}
      >
        <path
          d="M20.375 7H10.375C9.27043 7 8.375 7.89543 8.375 9V22C8.375 23.1046 9.27043 24 10.375 24H20.375C21.4796 24 22.375 23.1046 22.375 22V9C22.375 7.89543 21.4796 7 20.375 7Z"
          strokeWidth="2"
        />
        <path
          d="M12.375 12H18.375M12.375 16H18.375M12.375 20H16.375"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    name: 'Appointments',
  },
  {
    href: '/account/favorites',
    icon: ({ className }) => (
      <svg
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={`fill-brand-blue-1 group-hover:fill-brand-red-1 ${className}`}
      >
        <path d="M8.375 22.7804V6C8.375 5.44772 8.82272 5 9.375 5H22.375C22.9273 5 23.375 5.44772 23.375 6V22.8057C23.375 23.6633 22.3662 24.1231 21.7189 23.5604L16.4716 18.999C16.0929 18.6698 15.5288 18.6722 15.153 19.0047L10.0375 23.5294C9.3921 24.1003 8.375 23.6421 8.375 22.7804Z" />
      </svg>
    ),
    name: 'Favorites',
  },
  {
    href: '/account/addresses',
    icon: ({ className }) => (
      <svg
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={`fill-brand-blue-1 group-hover:fill-brand-red-1 ${className}`}
      >
        <path d="M25.1644 14.3837L15.983 5.20895C15.9169 5.14272 15.8384 5.09017 15.7519 5.05431C15.6655 5.01846 15.5728 5 15.4792 5C15.3857 5 15.293 5.01846 15.2065 5.05431C15.1201 5.09017 15.0416 5.14272 14.9755 5.20895L5.79406 14.3837C5.52657 14.6512 5.375 15.0145 5.375 15.3934C5.375 16.1803 6.01473 16.82 6.80158 16.82H7.76899V23.3667C7.76899 23.7612 8.08774 24.08 8.48228 24.08H14.0526V19.087H16.5492V24.08H22.4762C22.8707 24.08 23.1895 23.7612 23.1895 23.3667V16.82H24.1569C24.5358 16.82 24.8992 16.6707 25.1666 16.401C25.7217 15.8437 25.7217 14.9409 25.1644 14.3837Z" />
      </svg>
    ),
    name: 'Addresses',
  },
  {
    href: '/account/policy/shipping-info',
    icon: ({ className }) => (
      <svg
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={`fill-brand-blue-1 group-hover:fill-brand-red-1 ${className}`}
      >
        <path d="M23.4982 9.86347C23.4982 9.11195 23.0511 8.42702 22.3662 8.12261L15.7071 5.1641C15.2125 4.9453 14.6512 4.9453 14.1661 5.1641L7.50703 8.12261C6.82211 8.42702 6.375 9.11195 6.375 9.86347V14.3345C6.375 19.6142 10.028 24.5514 14.9366 25.75C17.1246 25.2173 19.0557 23.9426 20.5302 22.2207L17.5622 19.2527C16.6477 19.8571 15.5523 20.1267 14.4617 20.0157C13.3712 19.9048 12.3526 19.4201 11.5786 18.6439C10.6876 17.7515 10.1871 16.5421 10.1871 15.2811C10.1871 14.0201 10.6876 12.8106 11.5786 11.9183C12.4709 11.0273 13.6804 10.5268 14.9414 10.5268C16.2024 10.5268 17.4118 11.0273 18.3042 11.9183C19.0785 12.6934 19.5618 13.7118 19.6727 14.8018C19.7836 15.8918 19.5153 16.9867 18.913 17.9019L21.6717 20.6606C22.8228 18.7961 23.4982 16.5986 23.4982 14.3345V9.86347Z" />
        <path d="M14.9366 18.1399C16.5128 18.1399 17.7905 16.8621 17.7905 15.286C17.7905 13.7098 16.5128 12.4321 14.9366 12.4321C13.3605 12.4321 12.0828 13.7098 12.0828 15.286C12.0828 16.8621 13.3605 18.1399 14.9366 18.1399Z" />
      </svg>
    ),
    name: 'Policy',
  },
];

const AccountNav = () => {
  const {
    handleUploadImageClick,
    image,
    handleUploadImage,
    inputRef,
    isNavMobileOpen,
  } = useAccount();

  const pathname = usePathname();

  return (
    <>
      <AnimatePresence>
        {isNavMobileOpen && <AccountNavMobile />}
      </AnimatePresence>
      <div className="w-72 h-fit hidden lg:block relative bg-white rounded-20 shadow-privacy pt-20 px-9 pb-9">
        <button
          onClick={handleUploadImageClick}
          className="w-[7.375rem] h-[7.375rem] shrink-0 absolute -top-14 left-1/2 -translate-x-1/2 bg-brand-gray-100 border-[0.1875rem] border-brand-blue-1 rounded-full"
        >
          <div className="w-full h-full relative grid place-content-center rounded-full">
            {image ? (
              <Image
                src={image}
                alt="User Image"
                width={300}
                height={200}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <svg
                width="73"
                height="73"
                viewBox="0 0 73 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1666 54.7502C12.1666 51.5234 13.4485 48.4287 15.7302 46.147C18.0119 43.8653 21.1065 42.5835 24.3333 42.5835H48.6666C51.8934 42.5835 54.9881 43.8653 57.2698 46.147C59.5514 48.4287 60.8333 51.5234 60.8333 54.7502C60.8333 56.3636 60.1924 57.9109 59.0515 59.0517C57.9107 60.1926 56.3634 60.8335 54.75 60.8335H18.25C16.6366 60.8335 15.0892 60.1926 13.9484 59.0517C12.8075 57.9109 12.1666 56.3636 12.1666 54.7502Z"
                  stroke="#033E6A"
                  strokeWidth="3"
                  stroke-linejoin="round"
                />
                <path
                  d="M36.5 30.4165C41.5396 30.4165 45.625 26.3311 45.625 21.2915C45.625 16.2519 41.5396 12.1665 36.5 12.1665C31.4604 12.1665 27.375 16.2519 27.375 21.2915C27.375 26.3311 31.4604 30.4165 36.5 30.4165Z"
                  stroke="#033E6A"
                  strokeWidth="3"
                />
              </svg>
            )}
            <input
              type="file"
              ref={inputRef}
              onChange={handleUploadImage}
              className="hidden"
            />
            <div className="w-8 h-8 shrink-0 absolute bottom-1 right-0 grid place-content-center bg-brand-blue-1 rounded-full">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 15.75C1.8375 15.75 1.4845 15.6033 1.191 15.3097C0.8975 15.0162 0.7505 14.663 0.75 14.25V5.25C0.75 4.8375 0.897 4.4845 1.191 4.191C1.485 3.8975 1.838 3.7505 2.25 3.75H4.6125L6 2.25H10.5V3.75H6.65625L5.2875 5.25H2.25V14.25H14.25V7.5H15.75V14.25C15.75 14.6625 15.6033 15.0157 15.3097 15.3097C15.0162 15.6038 14.663 15.7505 14.25 15.75H2.25ZM14.25 5.25V3.75H12.75V2.25H14.25V0.75H15.75V2.25H17.25V3.75H15.75V5.25H14.25ZM8.25 13.125C9.1875 13.125 9.9845 12.797 10.641 12.141C11.2975 11.485 11.6255 10.688 11.625 9.75C11.625 8.8125 11.297 8.01575 10.641 7.35975C9.985 6.70375 9.188 6.3755 8.25 6.375C7.3125 6.375 6.51575 6.70325 5.85975 7.35975C5.20375 8.01625 4.8755 8.813 4.875 9.75C4.875 10.6875 5.20325 11.4845 5.85975 12.141C6.51625 12.7975 7.313 13.1255 8.25 13.125ZM8.25 11.625C7.725 11.625 7.28125 11.4437 6.91875 11.0812C6.55625 10.7188 6.375 10.275 6.375 9.75C6.375 9.225 6.55625 8.78125 6.91875 8.41875C7.28125 8.05625 7.725 7.875 8.25 7.875C8.775 7.875 9.21875 8.05625 9.58125 8.41875C9.94375 8.78125 10.125 9.225 10.125 9.75C10.125 10.275 9.94375 10.7188 9.58125 11.0812C9.21875 11.4437 8.775 11.625 8.25 11.625Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </button>
        <ul className="space-y-4">
          {links.map((link, idx) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-center gap-5 text-17 group hover:text-brand-red-1 transition-all duration-200"
              >
                <link.icon
                  className={
                    pathname === link.href
                      ? idx === 1 || idx === 2
                        ? 'fill-brand-red-1 stroke-brand-red-1'
                        : 'fill-brand-red-1'
                      : ''
                  }
                />
                {link.name}
              </Link>
            </li>
          ))}
          <Link
            href="/"
            className="group flex items-center gap-5 border-t border-brand-gray/50 pt-5"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-brand-blue-1 group-hover:fill-brand-red-1 transition-all duration-200"
            >
              <g clipPath="url(#clip0_739_27783)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.5 2.5C21.4946 2.5 22.4484 2.89509 23.1517 3.59835C23.8549 4.30161 24.25 5.25544 24.25 6.25V23.75C24.25 24.7446 23.8549 25.6984 23.1517 26.4017C22.4484 27.1049 21.4946 27.5 20.5 27.5H13C12.0054 27.5 11.0516 27.1049 10.3483 26.4017C9.64509 25.6984 9.25 24.7446 9.25 23.75V6.25C9.25 5.25544 9.64509 4.30161 10.3483 3.59835C11.0516 2.89509 12.0054 2.5 13 2.5H20.5ZM7.63375 9.11625C7.39934 8.88191 7.08146 8.75027 6.75 8.75027C6.41854 8.75027 6.10066 8.88191 5.86625 9.11625L0.866249 14.1163C0.63191 14.3507 0.500267 14.6685 0.500267 15C0.500267 15.3315 0.63191 15.6493 0.866249 15.8837L5.86625 20.8838C6.102 21.1114 6.41776 21.2374 6.7455 21.2346C7.07325 21.2317 7.38676 21.1003 7.61852 20.8685C7.85028 20.6368 7.98174 20.3232 7.98459 19.9955C7.98744 19.6678 7.86145 19.352 7.63375 19.1163L4.7675 16.25H15.5C15.8315 16.25 16.1495 16.1183 16.3839 15.8839C16.6183 15.6495 16.75 15.3315 16.75 15C16.75 14.6685 16.6183 14.3505 16.3839 14.1161C16.1495 13.8817 15.8315 13.75 15.5 13.75H4.7675L7.63375 10.8837C7.86809 10.6493 7.99973 10.3315 7.99973 10C7.99973 9.66854 7.86809 9.35066 7.63375 9.11625Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_739_27783">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Log out
          </Link>
        </ul>
      </div>
    </>
  );
};

export default AccountNav;
