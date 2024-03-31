'use client'

import { Button, Image } from '@nextui-org/react'

import Link from 'next/link'

export default function Projets() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:py-24 lg:max-w-7xl lg:px-8 space-y-6  text-gray-600 dark:text-gray-200">
      <div className="mx-auto pb-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-5">
          Portefeuille de Projets : Succès avec le Starter Pack
        </h2>
        <span className="text-xl font-medium">
          Chaque site web que je crée est un récit de passion et
          d&apos;innovation. Explorez ici une sélection de mes sites les plus
          emblématiques, chacun reflétant une approche personnalisée et une
          réponse créative aux besoins uniques de mes partenaires.
        </span>
      </div>

      <section className="hidden:flex lg:flex justify-center w-full p-6">
        <picture className="flex w-full justify-center lg:w-1/3">
          <Image alt="Screenshot Club 306" src="/images/Club306.jpg" />
        </picture>
        <div className="w-full lg:w-2/3 p-4 space-y-8">
          <Link
            href="https://www.club306.fr/"
            target="_blank"
            className="hover:underline  hover:text-blue-600 dark:hover:text-orange-600"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Club 306
            </h3>
          </Link>
          <p className="text-md text-gray-700 dark:text-gray-300">
            Site communautaire moderne conçu pour les passionnés de Peugeot 306.
            Intègre PayPal pour adhésions faciles, atteint rapidement plus de
            100 membres, grâce à des fonctionnalités interactives, une gestion
            efficace des membres, et une stratégie de croissance réussie.
          </p>
        </div>
      </section>

      <section className="hidden:flex lg:flex justify-center w-full p-6">
        <picture className="flex w-full justify-center lg:w-1/3">
          <Image
            alt="Screenshot Bonheur Sur Seine"
            src="/images/BonheurSurSeine.jpg"
          />
        </picture>
        <div className="w-full lg:w-2/3 p-4 space-y-8">
          <Link
            href="https://www.bonheursurseine.com/"
            target="_blank"
            className="hover:underline  hover:text-blue-600 dark:hover:text-orange-600"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Bonheur Sur Seine
            </h3>
          </Link>
          <p className="text-md text-gray-700 dark:text-gray-300">
            Découvrez le projet Bonheur Sur Seine, une plateforme avant-gardiste
            conçue pour les passionnés de gyroroue et créée pour un Youtuber et
            wheeler de renom. Ce projet se distingue par son utilisation
            stratégique de technologies de pointe telles que Next.js et
            TypeScript, combinées à l&apos;agilité de Tailwind CSS pour une
            interface utilisateur esthétique et réactive. Grâce à
            l&apos;intégration de Prismic, un système de gestion de contenu
            révolutionnaire, le site offre une expérience utilisateur fluide et
            une maintenance simplifiée, permettant des mises à jour de contenu
            en temps réel sans compromettre la performance
          </p>
        </div>
      </section>

      <div className="text-center">
        <Link href="/contact">
          <Button color="primary" variant="shadow">
            Commençons notre Collaboration
          </Button>
        </Link>
      </div>
    </section>
  )
}
