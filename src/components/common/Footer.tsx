export function Footer() {
    return (
        <footer className="w-full border-t border-black py-6 bg-transparent mt-auto">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-10 md:flex-row">
                <p className="text-center text-sm leading-loose text-black md:text-left">
                    Built by{" "}
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        CA Monk
                    </a>
                    . The source code is available on GitHub.
                </p>
                <div className="flex gap-4 text-sm font-medium text-black">
                    <a href="#" className="hover:underline">Terms</a>
                    <a href="#" className="hover:underline">Privacy</a>
                    <a href="#" className="hover:underline">Contact</a>
                </div>
            </div>
        </footer>
    );
}