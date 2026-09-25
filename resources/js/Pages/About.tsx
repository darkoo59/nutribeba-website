import PublicLayout from '@/Layouts/PublicLayout';

export default function About() {
    return (
        <PublicLayout title="O meni">
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="md:w-2/5 sticky top-32">
                            <div className="relative">
                                <img
                                    src="https://nutribeba.com/wp-content/uploads/2024/12/pocetna.jpg"
                                    alt="Zeljana Selakovic"
                                    className="w-full h-auto rounded-3xl shadow-2xl border-b-8 border-r-8 border-pregnancy-rose"
                                />
                                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-lg hidden lg:block">
                                    <p className="text-pregnancy-rose font-bold text-xl">Željana Selaković</p>
                                    <p className="text-gray-500 text-sm">Nutricionista & Biohemičar</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-3/5">
                            <span className="text-pregnancy-rose font-semibold uppercase tracking-widest text-sm mb-4 block">Moja Priča</span>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                Žena koja je prošla kroz sve ono kroz šta možda baš sada prolaziš i ti.
                            </h1>

                            <div className="prose prose-lg prose-pink text-gray-700 space-y-6">
                                <p className="text-xl font-medium text-gray-800">
                                    Iako sam nutricionista i diplomirani biohemičar, saznanjem da sam trudna suočila sam se sa nesigurnošću, mučninama i izazovima trudnoće.
                                </p>
                                <p>
                                    Zdrava ishrana i redovni treninzi nisu bili dovoljni – trudnoća je zaista drugo stanje. Učila sam kako da hranom podržim svoje telo i bebu, održim nivo gvožđa, proteina i energije, a sve bez lekova i suplemenata.
                                </p>
                                <p>
                                    Pripremajući se za porođaj, otkrila sam kako ishrana i vežbe mogu učiniti čuda – lakši porođaj, manje bolne kontrakcije, i neverovatna energija.
                                    <span className="block mt-4 p-4 bg-pregnancy-pink/30 border-l-4 border-pregnancy-rose rounded-r-lg font-semibold italic text-gray-900">
                                        Rezultat? Prirodni porođaj od samo 20 minuta!
                                    </span>
                                </p>
                                <p>
                                    Ovo iskustvo me inspiriše da pomažem ženama da trudnoću i porođaj dožive kao najlepše životno putovanje – uz pravu ishranu, podršku i znanje.
                                    Tu sam da zajedno prođemo kroz svaki korak ka zdravom i srećnom početku.
                                </p>
                            </div>

                            <div className="mt-12 grid grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-pregnancy-pink">
                                    <p className="text-3xl font-bold text-pregnancy-rose mb-1">Stručnost</p>
                                    <p className="text-gray-500">Biohemičar i nutricionista sa godinama iskustva.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-pregnancy-pink">
                                    <p className="text-3xl font-bold text-pregnancy-rose mb-1">Empatija</p>
                                    <p className="text-gray-500">Razumevanje kroz lično iskustvo majčinstva.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
