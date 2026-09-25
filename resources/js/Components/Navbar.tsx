import { Link } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';

export default function Navbar() {
    return (
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-pregnancy-pink">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                            <ApplicationLogo className="h-10 w-auto text-pregnancy-rose" />
                            <span className="text-2xl font-bold text-gray-800 tracking-tight">Nutri <span className="text-pregnancy-rose">Beba</span></span>
                        </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-pregnancy-rose px-3 py-2 text-sm font-medium transition-colors">Početna</Link>
                        <Link href="/o-meni" className="text-gray-600 hover:text-pregnancy-rose px-3 py-2 text-sm font-medium transition-colors">O meni</Link>
                        <Link href="/usluge" className="text-gray-600 hover:text-pregnancy-rose px-3 py-2 text-sm font-medium transition-colors">Usluge</Link>
                        <Link href="/kontakt" className="bg-pregnancy-rose text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-pink-400 transition-colors shadow-sm">Kontakt</Link>
                    </div>
                    <div className="flex items-center sm:hidden">
                        {/* Mobile menu button could go here */}
                        <button className="text-gray-600 p-2">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
