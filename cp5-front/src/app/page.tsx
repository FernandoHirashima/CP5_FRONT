import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Worlds in Collision - Immanuel Velikovsky</h1>
      <p className="text-lg mb-6">Explorando as principais ideias do autor e cálculos ilustrados.</p>
      
      <Link href="/ideas/idea1">
        <a className="text-blue-500 text-xl">Ver Ideia 1 de Velikovsky</a>
      </Link>
      <br />
      <Link href="/ideas/idea2">
        <a className="text-blue-500 text-xl mt-4">Ver Ideia 2 de Velikovsky</a>
      </Link>
      <br />
      <Link href="/ideas/calculation">
        <a className="text-blue-500 text-xl mt-4">Ver Cálculo Proposto por Velikovsky</a>
      </Link>
    </div>
  );
}
