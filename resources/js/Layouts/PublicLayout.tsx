import { PropsWithChildren } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function PublicLayout({ children, title }: PropsWithChildren<{ title?: string }>) {
    return (
        <div className="min-h-screen bg-pregnancy-pink/30 selection:bg-pregnancy-rose selection:text-white">
            <Head title={title} />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
