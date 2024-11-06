import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    const FACT_LOGO_LENGTH = 60;
    const FACT_LOGO_SOURCE = "/fact-2024-logo.png";
    const PSA_LOGO_SOURCE = "/psa-logo.jpg";

    return (
        <footer className="pt-12 pb-6 px-4 w-full flex flex-col items-center">
            {/* Logos */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <span className="hidden sm:block flex-grow" />
                <Image
                    src={FACT_LOGO_SOURCE}
                    width={FACT_LOGO_LENGTH}
                    height={FACT_LOGO_LENGTH}
                    alt="FACT 2024 Logo"
                    className="object-contain rounded-lg"
                />
                <Image
                    src={PSA_LOGO_SOURCE}
                    width={FACT_LOGO_LENGTH}
                    height={FACT_LOGO_LENGTH}
                    alt="PSA Logo"
                    className="object-contain rounded-lg"
                />
            </div>

            {/* Links and copyright */}
            <p className="text-center mt-4">
                <Link
                    href="https://psauiuc.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    Brought to you by the Philippine Student Association UIUC.
                </Link>
            </p>
            <p className="text-center mt-2">Copyright © 2024 PSA UIUC</p>
        </footer>
    );
};

export default Footer;
