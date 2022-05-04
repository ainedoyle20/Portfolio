import Link from "next/link"
import { useRouter } from "next/router";

function MainHeader() {
    const router = useRouter();

    if (router.route === '/projects/[slug]') {
        return null;
    }

    return (
        <header className="bg-[#87848B] w-full flex justify-between p-3">
            <div className="text-md text-white">
                <Link href="/">
                    Home
                </Link>
            </div>

            <div className="text-md text-white">
                <Link href="/skills">
                    <a className="mr-3">
                        Skills
                    </a>
                </Link>

                <Link href="/contact">
                    Contact
                </Link>
            </div>
        </header>
    );
}

export default MainHeader;


//bg-[#343036]