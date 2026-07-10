import PublicLayout from '@/Layouts/PublicLayout';

export default function Contact() {
    return (
        <PublicLayout title="Kontakt">
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/2">
                            <span className="text-pregnancy-rose font-semibold uppercase tracking-widest text-sm mb-4 block">Kontaktirajte me</span>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Tu sam za sva vaša pitanja</h1>
                            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                                Bilo da imate pitanja o planovima ishrane ili želite da se prijavite za pripremu za porođaj, slobodno mi pišite.
                                Radujem se što ćemo zajedno graditi vaš zdrav i srećan početak.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="bg-pregnancy-pink p-4 rounded-2xl text-pregnancy-rose">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                                        <a href="mailto:nutribeba@gmail.com" className="text-gray-600 hover:text-pregnancy-rose transition-colors text-lg">nutribeba@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="bg-pregnancy-peach p-4 rounded-2xl text-orange-400">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Instagram</h3>
                                        <a href="https://instagram.com/nutrii_beba" target="_blank" className="text-gray-600 hover:text-pregnancy-rose transition-colors text-lg">@nutrii_beba</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-pregnancy-pink">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Ime</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-pregnancy-rose focus:ring-pregnancy-rose transition-all outline-none" placeholder="Vaše ime" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                            <input type="email" className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-pregnancy-rose focus:ring-pregnancy-rose transition-all outline-none" placeholder="Vaša email adresa" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Poruka</label>
                                        <textarea rows={4} className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-pregnancy-rose focus:ring-pregnancy-rose transition-all outline-none" placeholder="Kako vam mogu pomoći?"></textarea>
                                    </div>
                                    <button type="button" className="w-full bg-pregnancy-rose text-white py-4 rounded-2xl text-lg font-bold hover:bg-pink-400 transition-all shadow-lg">
                                        Pošalji poruku
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
