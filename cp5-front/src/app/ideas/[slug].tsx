import { useRouter } from 'next/router';

const IdeaPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Aqui você pode ter conteúdo diferente baseado no slug.
  const ideaContent = {
    idea1: "Primeira ideia principal de Velikovsky...",
    idea2: "Segunda ideia principal de Velikovsky...",
    idea3: "Terceira ideia principal de Velikovsky..."
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Ideia: {slug}</h1>
      <p className="mt-4">{ideaContent[slug as string] || "Conteúdo não encontrado."}</p>
    </div>
  );
};

export default IdeaPage;
