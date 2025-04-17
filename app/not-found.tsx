import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="py-10 text-center">
      <h1 className="font-display text-4xl font-bold text-gray-700">
        Nada encontrado aqui...
      </h1>
      <img
        className="mx-auto mt-10 w-lg"
        src="/static/images/astronaut.png"
        alt="Imagem de um barco afundando"
      />
      <p className="text-3xl font-light text-gray-500">
        Não foi possivel encontrar a página solicitada.
      </p>
      <a
        href="/"
        className={cn(
          buttonVariants({ variant: "default" }),
          "mt-12 px-6 py-8 text-lg",
        )}
      >
        Voltar à home
      </a>
    </div>
  );
}
