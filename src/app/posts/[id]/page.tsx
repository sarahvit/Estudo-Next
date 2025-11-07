import { Suspense } from "react";
import { PostProps } from "../page";
import { PostInfo } from "./_components/post";

export default async function DetailPost({ params, }: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params;


    return (
        <div>
            <h1 className="flex flex-center justify-center text-2xl my-5 font-bold">Detalhes do post: {id}</h1>
            <Suspense fallback={<h1>Carregando...</h1>}>
                <PostInfo id={id}/>
            </Suspense>
        </div >
    )
}