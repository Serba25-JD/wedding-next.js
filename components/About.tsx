export default function About() {
    return (
        <section className="p-5 text-justify">
            <article>
                <h2 className="font-heading text-lg font-bold"> Keunggulan Menggunakan Produk Kami: </h2>
                <ul className="list-decimal pl-4 mt-2 mb-5 leading-8 font-semibold text-base">
                    <li> Dikembangkan langsung oleh pengembang web berpengalaman untuk menjamin kualitas standar industri. </li>
                    <li> Arsitektur kode yang efisien memastikan kecepatan akses yang responsif di berbagai peramban. </li>
                    <li> Desain yang mengusung konsep kesederhanaan modern, memberikan tampilan visual yang elegan dan berkelas. </li>
                    <li> Dirancang secara adaptif untuk memberikan pengalaman pengguna yang sempurna, baik pada desktop, laptop, maupun perangkat seluler (Android & iOS). </li>
                    <li> Dibangun dengan <span className="text-blue-500 font-heading italic"> tech stack </span> terkini menggunakan <span className="font-bold text-sky-500">Next.js</span> dan <span className="font-bold text-sky-500"> Tailwind CSS </span> untuk fleksibilitas serta performa tingkat tinggi. </li>
                </ul>
                <h3 className="font-heading text-2xl font-bold uppercase text-accent p-2 bg-foreground text-center rounded-2xl shadow"> Dijamin 100% Anti Lemot </h3>
            </article>
        </section>
    )
}