import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getArticles } from "@/app/lib/payloadClient";
import { mapArticles } from "@/app/lib/cmsMappers";

function extractText(node) {
  if (!node) return "";
  if (node.type === "text") return node.text || "";
  if (!node.children) return "";
  return node.children.map(extractText).join(" ").trim();
}

function lexicalToParagraphs(content) {
  const children = content?.root?.children || [];
  return children
    .map((node) => extractText(node))
    .map((text) => text.trim())
    .filter(Boolean);
}

export async function generateStaticParams() {
  const articles = mapArticles(await getArticles());
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const article = mapArticles([await getArticleBySlug(params.slug)])[0];
  if (!article) return {};
  return {
    title: `${article.title} | Conseils`,
    description: article.excerpt || "Article Bellarose",
  };
}

export default async function ArticlePage({ params }) {
  const articleDoc = await getArticleBySlug(params.slug);
  if (!articleDoc) notFound();

  const article = mapArticles([articleDoc])[0];
  const paragraphs = lexicalToParagraphs(article.content);

  return (
    <main className="bg-white pt-36 pb-20">
      <article className="container mx-auto max-w-4xl px-4 lg:px-8">
        <Link href="/conseils" className="text-primary hover:underline">
          ← Retour aux conseils
        </Link>

        <h1 className="mt-6 text-4xl font-semibold text-slate-900 lg:text-5xl">
          {article.title}
        </h1>
        <p className="mt-3 text-slate-500">
          {new Date(article.publishedAt).toLocaleDateString("fr-FR")}
        </p>

        <div className="relative mt-8 h-[360px] overflow-hidden rounded-lg bg-slate-100">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="prose prose-slate mt-10 max-w-none">
          {paragraphs.length > 0 ? (
            paragraphs.map((paragraph, index) => (
              <p key={`${article.id}-${index}`}>{paragraph}</p>
            ))
          ) : (
            <p>{article.excerpt || "Le contenu sera bientôt disponible."}</p>
          )}
        </div>
      </article>
    </main>
  );
}
