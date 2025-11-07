import {Metadata} from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'Home - Aula JS do zero',
  description: 'Aprendendo NextJS do zero!',
  openGraph: {
    title: 'Aprendendo Next pelo yputube',
    description: 'Next do zero',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }

}

export const revalidate = 60;

export default function Home() {

  const randomNumber = Math.random() * 10;

  return (
    <div>
      <h1>Pagina HOME</h1>
  
      <h2>Numero gerado: {randomNumber}</h2>
    </div>
  )
}