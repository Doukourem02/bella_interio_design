import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/app/lib/payloadClient";
import { mapArticles } from "@/app/lib/cmsMappers";
import ArticlePriceLine from "./ArticlePriceLine";

export const metadata = {
  title: "Conseils | Bellarose",
  description: "Articles et conseils décoration publiés depuis le CMS.",
};

export default async function ConseilsPage() {
  const articles = mapArticles(await getArticles());

  return (
    <main className="bg-slate-50 pt-36 pb-20">
      <section className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Blog
          </span>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 lg:text-6xl">
            Conseils déco
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Retrouvez les derniers articles publiés depuis l&apos;admin Payload.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="mx-auto mt-14 max-w-2xl rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-600">
            Aucun article publié pour le moment.
          </div>
        ) : (
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.id}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative h-52 bg-slate-100">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-slate-500">
                    {new Date(article.publishedAt).toLocaleDateString("fr-FR")}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                    {article.title}
                  </h2>
                  <ArticlePriceLine
                    className="mt-2 text-sm text-slate-600"
                    priceLabel={article.priceLabel}
                    promotionalPriceLabel={article.promotionalPriceLabel}
                  />
                  <p className="mt-3 text-slate-600">
                    {article.excerpt || "Lire cet article pour en savoir plus."}
                  </p>
                  <Link
                    href={`/conseils/${article.slug}`}
                    className="mt-5 inline-block font-semibold text-primary hover:underline"
                  >
                    Lire l&apos;article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
