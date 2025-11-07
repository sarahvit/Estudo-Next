'use client'

import { useEffect, useState } from "react";

export default function Pageteste() {

    const [posts, setPosts] = useState([]) //Cria uma variável de estado (posts) e uma função para atualizá-la (setPosts).

    useEffect(() => {
        fetch('https:///dummyjson.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data.posts))
    }, [])


    return (
        <div>
            <button onClick={() =>alert("TESTEEE")}>Teste</button>
            <h1 className="text-center font-bold mt-5 mb-2 text-3xl">
                Página client
            </h1>
            <div className="flex flex-col gap-4 mx-2 ">
                {posts.map((post: any) => (
                    <div key={post.id} className="bg-gray-200 p-4 rounded-md">
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}