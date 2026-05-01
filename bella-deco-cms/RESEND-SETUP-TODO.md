# TODO - Finaliser le reset mot de passe (Resend)

Ce fichier liste ce qu'il reste a faire pour que le bouton **Mot de passe oublie ?** envoie bien un email.

## Ce qui est deja fait

- `RESEND_API_KEY` a ete creee.
- Le code CMS est deja configure pour utiliser Resend si les variables existent.

## Ce qu'il reste a faire (quand tu seras pret)

1. **Activer un expéditeur valide dans Resend**
   - Option A (recommandee): verifier ton domaine (ex: `bellarose.com`).
   - Option B: utiliser un sender deja autorise par ton plan.
   - Tant que `FROM` n'est pas valide, l'email de reset ne partira pas.

2. **Renseigner les variables dans `bella-deco-cms/.env` (local)**
   - Ajouter ces lignes:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
RESEND_FROM_ADDRESS=no-reply@ton-domaine.com
RESEND_FROM_NAME=Bellarose Admin
```

3. **Renseigner les memes variables sur Railway (service CMS)**
   - Ouvrir Railway -> projet -> service `bella-deco-cms` -> `Variables`.
   - Ajouter:
     - `RESEND_API_KEY`
     - `RESEND_FROM_ADDRESS`
     - `RESEND_FROM_NAME`
   - Sauvegarder et laisser Railway redeployer.

4. **Tester le flux**
   - Aller sur `/admin/login`.
   - Cliquer **Mot de passe oublie ?**
   - Entrer l'email admin.
   - Verifier la reception du mail.
   - Ouvrir le lien recu et definir un nouveau mot de passe.

## Verification rapide en cas d'erreur

- Si aucun mail n'arrive:
  - verifier que `RESEND_FROM_ADDRESS` est bien valide dans Resend;
  - verifier que les variables Railway sont dans le bon service (CMS, pas website);
  - verifier les logs Railway du CMS apres tentative.

## Note importante

- Tu peux laisser le projet comme ca pour l'instant.
- Quand ton domaine/sender Resend est pret, on reprend simplement a l'etape 2.
