import PublicLayout from '@/Layouts/PublicLayout';
import { Link } from '@inertiajs/react';

export default function Services() {
    const services = [
        {
            title: "Spremna za porođaj",
            description: "Pridružite se mom programu Spremna za porođaj i dobijte sveobuhvatnu podršku kroz celokupnu pripremu za porođaj, postpartum period i dojenje.",
            details: "Kroz ovaj program, obezbediću vam baš sve potrebne informacije, veštine i emocionalnu podršku kako biste se osećali sigurno, osnaženo i spremno za najlepše iskustvo u životu – dolazak vašeg deteta.",
            color: "bg-pregnancy-pink/20",
            borderColor: "border-pregnancy-pink"
        },
        {
            title: "Individualni plan ishrane",
            description: "Ovaj plan ishrane nudi personalizovani jelovnik sa receptima za 30 dana, prilagođen potrebama mame i bebe.",
            details: "Plan ishrane prilagođavam i dojiljama kako bih podržala i stimulisala proces laktacije. Takođe, kreiram programe za žene koje žele da skinu višak kilograma nakon porođaja na zdrav i održiv način.",
            color: "bg-pregnancy-peach/20",
            borderColor: "border-pregnancy-peach"
        },
        {
            title: "Zdrava mama - Zdrava beba",
            description: "Program pruža kompletan plan ishrane i priručnik za trudnice i porodilje.",
            details: "Plan ishrane obuhvata 30 dana sa više od 90 nutritivno bogatih obroka, prilagođenih različitim kalorijskim potrebama (1900–2500 kcal). Priručnik pokriva ključne teme, uključujući preporučene nutrijente za svako tromesečje.",
            color: "bg-pregnancy-pink/20",
            borderColor: "border-pregnancy-pink"
        },
        {
            title: "Individualne pripreme i konsultacije",
            description: "Personalizovana 1 na 1 podrška kroz celokupnu pripremu za porođaj i postpartum period.",
            details: "Kroz online sesije u trajanju od 90 minuta, detaljno ćemo obraditi sve aspekte koji su vam potrebni. Konsultacije su prilagođene vašim specifičnim potrebama vezanim za ishranu i porođaj.",
            color: "bg-pregnancy-peach/20",
            borderColor: "border-pregnancy-peach"
        }
    ];

    return (
        <PublicLayout title="Usluge">
            <section className="py-20 bg-pregnancy-pink/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Moje Usluge</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Dobrodošli na mesto gde briga o vašem zdravlju i zdravlju vaše bebe dolazi na prvo mesto.
                        Kao nutricionista specijalizovan za trudnice, pružam planove prilagođene vašim potrebama.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-stretch rounded-[3rem] overflow-hidden border-2 ${service.borderColor} shadow-sm hover:shadow-md transition-shadow`}
                            >
                                <div className={`md:w-1/3 ${service.color} p-12 flex items-center justify-center`}>
                                    <h2 className="text-3xl font-bold text-gray-900 text-center">{service.title}</h2>
                                </div>
                                <div className="md:w-2/3 p-12 bg-white">
                                    <p className="text-xl font-semibold text-gray-800 mb-4">{service.description}</p>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.details}</p>
                                    <Link
                                        href="/kontakt"
                                        className="inline-block bg-pregnancy-rose text-white px-8 py-3 rounded-full font-medium hover:bg-pink-400 transition-colors"
                                    >
                                        Prijavi se za program
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-pregnancy-peach/20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-8 italic text-gray-800">"Porođajni trougao kaže da je za lep porođaj pripremi potrebno pristupiti sa tri ugla: kroz pripremu tela, edukaciju i rad na sigurnosti."</h2>
                    <p className="text-gray-600">Upravo to je ono što gradimo kroz sve naše programe.</p>
                </div>
            </section>
        </PublicLayout>
    );
}
