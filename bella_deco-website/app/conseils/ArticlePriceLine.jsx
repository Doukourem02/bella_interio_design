/**
 * Affiche prix / mention : si un prix promotionnel est renseigné, le prix d’origine est barré.
 */
export default function ArticlePriceLine({ priceLabel, promotionalPriceLabel, className }) {
  const price = (priceLabel || "").trim();
  const promo = (promotionalPriceLabel || "").trim();

  if (!price && !promo) return null;

  const base = (className && className.trim()) || "text-sm text-slate-600";

  if (promo && price) {
    return (
      <p className={base}>
        <span className="text-slate-500 line-through decoration-slate-400">{price}</span>
        <span className="mx-2 text-slate-400" aria-hidden="true">
          ·
        </span>
        <span className="font-semibold text-primary">{promo}</span>
      </p>
    );
  }

  if (promo) {
    return (
      <p className={base}>
        <span className="font-semibold text-primary">{promo}</span>
      </p>
    );
  }

  return <p className={base}>{price}</p>;
}
