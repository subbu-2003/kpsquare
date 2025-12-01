import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

    return (
        <Link href="/">
           <Image
    src="/images/logo/kp.png"
    alt="logo"
    width={40}      // keep real dimensions
    height={50}
    quality={100}
    className="dark:hidden w-14 h-auto"   // 👈 reduce size here
/>

            <Image
                src="/images/logo/kp.png"
                alt="logo"
                width={40}      // keep real dimensions
                height={50}
                quality={100}
                className='dark:block hidden w-14 h-auto'
            />
        </Link>
    );
};

export default Logo;
