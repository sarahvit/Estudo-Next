import Link from "next/link";

export default function NotFound(){
    return(
      <div className="flex flex-col items-center justify-center mt-9">
        <h1 className="text-center font-bold text-6xl">Pagina 404 não encontrada</h1>
        <p>Essa página que tentou acessar não existe!</p>
        <Link href='/' className="text-purple-700">
        Voltar para home.
        </Link>
      </div>  
    )
}