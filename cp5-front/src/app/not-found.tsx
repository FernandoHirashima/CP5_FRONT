import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <Image 
        src="/error-illustration.png"
        alt="Página não encontrada"
        width={400}
        height={300}
      />
      <h1 className="text-4xl font-bold mt-4">Página não encontrada</h1>
      <p className="mt-4 text-lg">Desculpe, a página que você está procurando não existe.</p>
      <Link href="/">
        <a className="mt-6 text-blue-500">Voltar à página inicial</a>
      </Link>
    </div>
  );
};

export default NotFoundPage;
