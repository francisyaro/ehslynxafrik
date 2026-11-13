import Link from "next/link";
export default function NotFound(){return <section className="notfound"><div className="container"><span className="eyebrow">ERREUR 404</span><h1>Cette page n'est pas disponible.</h1><p>Retrouvez nos services et équipements depuis la page d'accueil.</p><Link href="/" className="btn btn-lime">Retour à l'accueil ↗</Link></div></section>}
