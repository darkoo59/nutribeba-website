import PublicLayout from '@/Layouts/PublicLayout';
import { Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <PublicLayout title="Početna">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:gap-12">
                        <div className="lg:w-1/2 mb-12 lg:mb-0">
                            <span className="inline-block py-1 px-3 rounded-full bg-pregnancy-pink text-pregnancy-rose text-sm font-semibold tracking-wide uppercase mb-4">
                                Trudnoća | Porođaj | Postpartum
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                                Nutri <span className="text-pregnancy-rose underline decoration-pregnancy-pink decoration-8 underline-offset-8">Beba</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                                Podrška kroz svaku fazu vašeg majčinstva. Personalizovani planovi ishrane i sveobuhvatna priprema za lakši i prirodan porođaj.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/usluge" className="bg-pregnancy-rose text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-pink-400 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    Pogledaj programe
                                </Link>
                                <Link href="/o-meni" className="bg-white text-gray-700 border-2 border-pregnancy-pink px-8 py-4 rounded-full text-lg font-medium hover:bg-pregnancy-pink/50 transition-all">
                                    O meni
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="https://nutribeba.com/wp-content/uploads/2024/12/pocetna.jpg"
                                    alt="Nutri Beba"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pregnancy-rose/20 rounded-full blur-2xl z-0"></div>
                            <div className="absolute -top-6 -right-6 w-48 h-48 bg-pregnancy-pink rounded-full blur-3xl z-0"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats/Features */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-pregnancy-rose mb-4 flex justify-center">
                                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Individualni pristup</h3>
                            <p className="text-gray-500">Svaka trudnica je drugačija, zato kreiramo planove prilagođene isključivo vama.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-pregnancy-rose mb-4 flex justify-center">
                                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Stručna podrška</h3>
                            <p className="text-gray-500">Nutricionista i biohemičar sa ličnim iskustvom prirodnog porođaja.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-pregnancy-rose mb-4 flex justify-center">
                                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Brzi rezultati</h3>
                            <p className="text-gray-500">Fokus na energiju, nivo gvožđa i lakši oporavak nakon porođaja.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Snippet */}
            <section className="py-20 bg-pregnancy-peach/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/3">
                            <img
                                src="https://nutribeba.com/wp-content/uploads/2024/11/logo.png"
                                alt="Zeljana Selakovic"
                                className="w-64 h-64 rounded-full object-cover border-8 border-white shadow-xl"
                            />
                        </div>
                        <div className="md:w-2/3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Željana Selaković</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Nutri Beba je žena koja je prošla kroz sve ono kroz šta možda baš sada prolaziš i ti.
                                Iako sam nutricionista i diplomirani biohemičar, saznanjem da sam trudna suočila sam se sa nesigurnošću, mučninama i izazovima trudnoće.
                                Zdrava ishrana i redovni treninzi nisu bili dovoljni – trudnoća je zaista drugo stanje.
                            </p>
                            <Link href="/o-meni" className="text-pregnancy-rose font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                Pročitaj više o mojoj priči
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Moje usluge</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Od personalizovanih jelovnika do sveobuhvatne pripreme za porođaj, tu sam da vam olakšam put do majčinstva.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Card 1 */}
                        <div className="bg-pregnancy-pink/20 p-8 rounded-3xl border border-pregnancy-pink/50 hover:shadow-lg transition-shadow">
                            <h3 className="text-2xl font-bold mb-4">Spremna za porođaj</h3>
                            <p className="text-gray-600 mb-6">Sveobuhvatna podrška kroz celokupnu pripremu za porođaj, postpartum period i dojenje.</p>
                            <Link href="/usluge" className="text-pregnancy-rose font-semibold hover:underline">Saznaj više →</Link>
                        </div>
                        {/* Service Card 2 */}
                        <div className="bg-pregnancy-peach/20 p-8 rounded-3xl border border-pregnancy-peach/50 hover:shadow-lg transition-shadow">
                            <h3 className="text-2xl font-bold mb-4">Individualni plan ishrane</h3>
                            <p className="text-gray-600 mb-6">Personalizovani jelovnik sa receptima za 30 dana, prilagođen potrebama mame i bebe.</p>
                            <Link href="/usluge" className="text-pregnancy-rose font-semibold hover:underline">Saznaj više →</Link>
                        </div>
                        {/* Service Card 3 */}
                        <div className="bg-pregnancy-pink/20 p-8 rounded-3xl border border-pregnancy-pink/50 hover:shadow-lg transition-shadow">
                            <h3 className="text-2xl font-bold mb-4">Zdrava mama - Zdrava beba</h3>
                            <p className="text-gray-600 mb-6">Kompletan plan ishrane i priručnik za trudnice i porodilje sa više od 90 obroka.</p>
                            <Link href="/usluge" className="text-pregnancy-rose font-semibold hover:underline">Saznaj više →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-16">Zadovoljni klijenti</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 italic relative">
                            <span className="text-6xl text-pregnancy-pink absolute -top-4 left-4 font-serif">"</span>
                            <p className="text-gray-600 mb-6 relative z-10">
                                Već nakon mesec dana osećala sam se lakše i energičnije, a uspela sam da skinem 5 kg bez narušavanja kvaliteta mleka.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-pregnancy-pink rounded-full"></div>
                                <div>
                                    <p className="font-bold text-gray-900">Jovana</p>
                                    <p className="text-sm text-gray-500">Mlada mama</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 italic relative">
                            <span className="text-6xl text-pregnancy-pink absolute -top-4 left-4 font-serif">"</span>
                            <p className="text-gray-600 mb-6 relative z-10">
                                Naučila sam tehnike disanja i položaje koji su mi pomogli da ostanem smirena. Porođaj je bio predivno iskustvo.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-pregnancy-peach rounded-full"></div>
                                <div>
                                    <p className="font-bold text-gray-900">Mara</p>
                                    <p className="text-sm text-gray-500">Mlada mama</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
