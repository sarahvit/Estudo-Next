import { PostProps } from "../../page";

export async function PostInfo({id}: {id:string}) {

    await new Promise(resolve => setTimeout(resolve, 4000))

    const response = await fetch(`https://dummyjson.com/posts/${id}`,{
        cache: 'force-cache',
        next: {
            revalidate:60 //60 segundos de revalidação de dados
        } //por padrao ele usa o no-cache, ou seja toda vez que vc entra no site ele busca os dados da API
    }) //mas isso pode nao ser necessario para dados que nao mudam, por isso os dados sao guardados em cache e a cada tempo colocado no revalidate, os dados sao atualizados.
    const data: PostProps = await response.json()

    return (
        <div>
            <div className="bg-gray-200 p-4 rounded-md mx-4">
                <h2 className="text-1xl font-bold my-5">{data.title}</h2>
                <p>{data.body}</p>
            </div>
        </div >
    )
}