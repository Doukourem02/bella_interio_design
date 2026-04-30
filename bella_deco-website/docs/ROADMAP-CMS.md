# Roadmap CMS - Autonomie cliente

## Objectif

Le site est actuellement une vitrine Next.js avec du contenu codé dans les composants. C'est bien pour démarrer vite, mais la cliente devra bientôt pouvoir gérer elle-même :

- les prestations de décoration ;
- les ateliers et activités d'apprentissage ;
- les cahiers d'activités ;
- les images et visuels ;
- les textes de présentation ;
- les témoignages ;
- éventuellement des produits ou ressources à vendre plus tard.

L'objectif est donc de faire évoluer le site vers une architecture où la cliente peut publier, modifier et archiver du contenu depuis une interface d'administration, sans passer par le développeur pour chaque changement.

## Conclusion rapide

Un fichier Markdown peut dépanner au début, mais ce n'est pas la bonne solution finale si la cliente doit gérer le site elle-même.

La recommandation est d'ajouter un CMS headless, connecté au site Next.js.

Stack recommandée :

- Frontend : Next.js, déjà en place.
- CMS : Payload CMS ou Sanity.
- Base de données : PostgreSQL si Payload, Content Lake si Sanity.
- Images : stockage CMS ou stockage objet type S3, Cloudflare R2 ou Supabase Storage.
- Hébergement : Vercel pour le frontend ; selon le CMS, Vercel, Railway, Render, Supabase ou l'hébergement managé du CMS.

## Les options possibles

### Option 1 - Continuer avec du contenu codé

Le contenu reste dans les fichiers React :

- `app/Components/Collection.jsx`
- `app/Components/Growth.jsx`
- `app/Components/Banner.jsx`

Avantages :

- rapide ;
- pas de backend ;
- pas de coût CMS.

Limites :

- la cliente ne peut rien modifier seule ;
- chaque changement demande une intervention développeur ;
- le site devient difficile à maintenir si les ateliers, produits et images augmentent.

Verdict : acceptable uniquement pour la première version.

### Option 2 - Fichiers Markdown ou JSON

On crée par exemple :

- `content/ateliers/*.md`
- `content/produits/*.md`
- `content/prestations.json`

Avantages :

- simple techniquement ;
- versionné dans Git ;
- pas de base de données.

Limites :

- la cliente doit comprendre Git, Markdown ou passer par une interface comme Decap CMS ;
- la gestion des images reste moins confortable ;
- les droits utilisateurs, brouillons, publications et médias deviennent vite pénibles.

Verdict : possible pour un blog très simple, mais pas idéal pour une cliente qui veut vraiment la main sur son site.

### Option 3 - CMS headless

Un CMS headless fournit une interface d'administration. Le site récupère ensuite les contenus via API ou SDK.

Exemples :

- Payload CMS ;
- Sanity ;
- Strapi ;
- Directus.

Avantages :

- interface d'administration claire ;
- gestion des images ;
- brouillons et publications ;
- champs structurés ;
- évolution plus propre ;
- la cliente peut modifier son contenu sans toucher au code.

Limites :

- demande une intégration initiale ;
- peut ajouter un coût d'hébergement ou de service ;
- il faut définir proprement les modèles de contenu.

Verdict : meilleure option pour ce projet.

## Recommandation pour Bella création imagination

Je recommande de partir sur un CMS headless plutôt qu'un backend custom complet.

Le backend custom ne devient pertinent que si la cliente veut plus tard :

- paiement en ligne ;
- réservation d'ateliers avec calendrier ;
- comptes clients ;
- espace membre ;
- gestion complexe de commandes ;
- factures ;
- notifications avancées.

Pour l'instant, le besoin principal est éditorial : publier des images, textes, ateliers et ressources. Un CMS est donc plus adapté.

## Choix technique conseillé

### Choix A - Payload CMS

Payload est une bonne option si on veut garder beaucoup de contrôle technique.

Pourquoi c'est intéressant :

- interface admin incluse ;
- modèles de contenu très personnalisables ;
- bonne intégration avec Next.js ;
- base PostgreSQL possible ;
- adapté si on veut à terme ajouter des produits, ateliers, réservations ou espace admin plus poussé.

Stack possible :

- Next.js ;
- Payload CMS ;
- PostgreSQL ;
- Cloudflare R2 ou Supabase Storage pour les médias ;
- Vercel ou Railway selon le mode de déploiement.

Je choisirais Payload si le projet doit devenir une vraie plateforme évolutive.

### Choix B - Sanity

Sanity est une bonne option si on veut avancer vite avec un CMS managé.

Pourquoi c'est intéressant :

- interface Studio agréable ;
- très bon pour gérer des contenus éditoriaux ;
- gestion des images intégrée ;
- pas besoin de maintenir soi-même une base de données classique ;
- facile à connecter à Next.js.

Je choisirais Sanity si l'objectif est d'avoir vite une interface simple pour la cliente, avec moins de maintenance serveur.

### Choix C - Strapi

Strapi est aussi une option connue, mais il faut gérer davantage l'hébergement et la maintenance du backend.

Je le choisirais si on veut un CMS Node.js séparé du frontend, avec une API REST ou GraphQL classique.

## Recommandation finale

Pour ce projet, je recommande :

1. Sanity si la priorité est la rapidité, la simplicité pour la cliente et peu de maintenance.
2. Payload CMS si la priorité est la maîtrise totale, une logique plus plateforme, et des évolutions métiers plus ambitieuses.

Mon choix par défaut serait Sanity pour une première version autonome, puis Payload seulement si le projet devient plus complexe.

## Modèles de contenu à prévoir

### Site settings

Informations globales :

- nom du site ;
- logo ;
- numéro France ;
- numéro Canada ;
- emails ;
- réseaux sociaux ;
- texte SEO global ;
- image principale du hero.

### Prestations

Pour la section `Prestations` :

- titre ;
- label ;
- description courte ;
- description longue ;
- icône ;
- image ;
- ordre d'affichage ;
- actif ou masqué.

Exemples :

- Décoration d'intérieur ;
- Choix des couleurs ;
- Agencement ;
- Accessoires et lumières ;
- Relooking déco ;
- Cahiers d'activités & apprentissage.

### Ateliers

Pour les activités proposées :

- titre ;
- slug ;
- type : lettres, peinture, motricité, cahier d'activités, autre ;
- âge conseillé ;
- durée ;
- description ;
- objectifs pédagogiques ;
- matériel nécessaire ;
- galerie d'images ;
- prix ou indication sur demande ;
- disponible en présentiel ou à distance ;
- statut : brouillon, publié, archivé.

### Ressources ou produits

Si la cliente veut poster des cahiers, supports ou produits :

- titre ;
- type : cahier, kit, fichier PDF, activité imprimable, produit physique ;
- image principale ;
- galerie ;
- description ;
- prix ;
- fichier téléchargeable si numérique ;
- stock si produit physique ;
- statut.

### Galerie apprentissage

Pour remplacer les images codées actuellement :

- titre ;
- image ;
- catégorie ;
- texte court ;
- ordre ;
- mise en avant.

### Témoignages

- nom affiché ;
- contexte ;
- note ;
- texte ;
- photo optionnelle ;
- ordre ;
- actif ou masqué.

### Pages éditoriales

Pour permettre à la cliente de modifier certains textes :

- Accueil ;
- À propos ;
- Approche ;
- Contact ;
- Mentions légales.

## Roadmap proposée

### Phase 1 - Stabiliser la vitrine actuelle

Objectif : finir le site statique proprement avant d'ajouter un CMS.

Actions :

- valider le design desktop et mobile ;
- corriger les textes ;
- optimiser les images ;
- renommer le dossier `public/assets/apprentissage ` en `public/assets/apprentissage` pour retirer l'espace final ;
- vérifier les performances ;
- préparer les composants pour recevoir des données dynamiques.

Livrable : site vitrine propre, responsive et présentable.

### Phase 2 - Préparer les composants dynamiques

Objectif : séparer les données de l'affichage.

Actions :

- déplacer les tableaux codés dans des fichiers de données temporaires ;
- créer des types de données clairs ;
- faire en sorte que les composants reçoivent des props ;
- préparer les champs nécessaires pour le futur CMS.

Exemple :

```js
const services = [
  {
    title: "Cahiers d'activités & apprentissage",
    label: "Parent-enfant",
    image: "/assets/apprentissage/img3.png",
    description: "Activités éducatives guidées...",
  },
];
```

Livrable : le site reste statique, mais il est prêt pour un branchement CMS.

### Phase 3 - Choisir et installer le CMS

Objectif : mettre en place l'administration.

Actions si Sanity :

- créer un projet Sanity ;
- créer le Studio ;
- définir les schemas ;
- connecter Next.js au client Sanity ;
- migrer les contenus actuels.

Actions si Payload :

- installer Payload ;
- configurer PostgreSQL ;
- créer les collections ;
- configurer l'admin ;
- configurer le stockage des médias ;
- connecter les pages Next.js.

Livrable : interface admin fonctionnelle avec connexion sécurisée.

### Phase 4 - Brancher les vraies données

Objectif : remplacer les données codées par les contenus du CMS.

Actions :

- remplacer les prestations codées par une requête CMS ;
- remplacer la galerie d'apprentissage par une collection CMS ;
- remplacer les témoignages codés ;
- rendre les textes principaux éditables ;
- gérer les états de chargement et les contenus absents.

Livrable : la cliente modifie le contenu dans le CMS, le site se met à jour.

### Phase 5 - Gestion des ateliers et produits

Objectif : donner une vraie autonomie commerciale ou éditoriale.

Actions :

- créer une page liste des ateliers ;
- créer une page détail atelier ;
- créer une page ressources ou produits ;
- ajouter les filtres par type d'activité ;
- ajouter un bouton de contact ou réservation ;
- plus tard, ajouter paiement ou réservation si nécessaire.

Livrable : la cliente peut publier de nouveaux ateliers ou produits.

### Phase 6 - Formation cliente

Objectif : éviter que la cliente soit bloquée.

Actions :

- créer un guide d'utilisation simple ;
- enregistrer une courte vidéo de démonstration ;
- expliquer comment ajouter une image ;
- expliquer comment publier ou dépublier ;
- expliquer les bonnes dimensions d'images ;
- expliquer comment écrire les titres et descriptions.

Livrable : la cliente peut gérer le site seule pour les opérations courantes.

## Architecture cible

```txt
Cliente
  |
  | utilise une interface admin
  v
CMS headless
  |
  | fournit les contenus via API
  v
Site Next.js
  |
  | affiche les pages publiques
  v
Visiteurs
```

## Pages à prévoir plus tard

### Page Ateliers

URL possible :

```txt
/ateliers
/ateliers/lettres-a-replacer
/ateliers/peinture-enfant-parent
```

Contenu :

- liste des ateliers ;
- filtres ;
- image ;
- âge conseillé ;
- durée ;
- description ;
- bouton contact.

### Page Ressources

URL possible :

```txt
/ressources
/ressources/cahier-activites-manon
```

Contenu :

- cahiers d'activités ;
- fiches imprimables ;
- kits pédagogiques ;
- produits physiques ou numériques.

### Page Blog ou Conseils

URL possible :

```txt
/conseils
/conseils/comment-choisir-les-couleurs-dune-chambre
```

Intérêt :

- améliorer le SEO ;
- publier des conseils ;
- montrer l'expertise de Bella ;
- créer du contenu autour de la décoration et de l'apprentissage.

## Sécurité et accès

À prévoir :

- un compte administrateur développeur ;
- un compte cliente ;
- éventuellement un rôle éditeur ;
- protection de l'interface admin ;
- sauvegarde des contenus ;
- validation des images ;
- limitation des formats uploadés.

## SEO

Le CMS doit permettre de modifier :

- title SEO ;
- meta description ;
- image Open Graph ;
- slug ;
- texte alternatif des images.

C'est important si la cliente publie des ateliers, produits ou ressources.

## Images et médias

Règles recommandées :

- utiliser des images compressées ;
- éviter les noms avec espaces ou accents ;
- privilégier des noms comme `atelier-lettres-parent-enfant.jpg` ;
- remplir les textes alternatifs ;
- limiter les images trop lourdes.

Le dossier actuel `public/assets/apprentissage ` contient un espace final. Il faudra le renommer avant de stabiliser le projet :

```txt
public/assets/apprentissage
```

Puis mettre à jour les chemins dans le code.

## Priorité de développement

Ordre conseillé :

1. Finir le design vitrine.
2. Nettoyer les assets et les textes.
3. Créer les modèles de contenu.
4. Installer le CMS choisi.
5. Migrer prestations, apprentissage, témoignages.
6. Ajouter ateliers et ressources.
7. Former la cliente.
8. Ajouter réservation ou paiement seulement si le besoin est confirmé.

## Ce qu'il ne faut pas faire trop tôt

Éviter au début :

- créer un backend custom complet ;
- créer une marketplace ;
- ajouter paiement en ligne avant validation du besoin ;
- ajouter comptes clients trop tôt ;
- complexifier la base de données avant de connaître les vrais usages.

La bonne approche est progressive : CMS d'abord, fonctionnalités métier ensuite.

## Références officielles utiles

- Next.js : https://nextjs.org/docs
- Sanity : https://www.sanity.io/docs
- Payload CMS : https://payloadcms.com/docs
- Strapi : https://docs.strapi.io
- Supabase : https://supabase.com/docs

