# Anchor — Pack de déploiement

App de récupération de crise de panique. Fichier unique, offline, bilingue FR/EN, PWA installable.

## Contenu du pack

| Fichier | Rôle |
|---|---|
| `index.html` | L'app entière (HTML + CSS + JS, aucune dépendance build) |
| `manifest.webmanifest` | Métadonnées PWA (installation écran d'accueil) |
| `sw.js` | Service worker : lancement offline + cache des polices |
| `icon-192.png` / `icon-512.png` / `icon-maskable-512.png` / `apple-touch-icon.png` | Icônes |
| `vercel.json` | Config (cache du SW, type MIME du manifest) |
| `.gitignore` | Exclusions Git |

Pas de build. Pas de `npm install`. Site statique pur.

## Déploiement GitHub + Vercel

### 1. Pousser sur GitHub

Depuis le dossier `anchor-deploy` :

```bash
git init
git add .
git commit -m "Anchor v1"
git branch -M main
git remote add origin https://github.com/TON_USER/anchor.git
git push -u origin main
```

Crée d'abord le repo vide `anchor` sur github.com (sans README, sinon conflit au push).

### 2. Brancher Vercel

1. Va sur vercel.com → **Add New… → Project**.
2. **Import** ton repo `anchor`.
3. Réglages :
   - Framework Preset : **Other**
   - Build Command : **vide**
   - Output Directory : **vide** (racine)
4. **Deploy**.

Vercel sert `index.html` à la racine. URL en ligne en ~20 secondes.

### 3. Mises à jour

Chaque `git push` sur `main` redéploie automatiquement.

Quand tu modifies l'app, incrémente `VERSION` dans `sw.js` (ex : `anchor-v2`). Sinon le service worker sert l'ancienne version en cache.

## Offline : ce qui marche, ce qui ne marche pas

- **Marche** : après la 1re visite en ligne, l'app se relance hors-ligne. Le SW met en cache l'app + les polices Google.
- **Limite** : à la toute 1re ouverture sans réseau (jamais visitée avant), les polices Fraunces / Hanken Grotesk tombent sur la police système. L'app reste fonctionnelle.
- **Pour un offline 100% dès la 1re ouverture** : self-host les polices (télécharge les `.woff2`, ajoute un `@font-face` local dans `index.html`, retire le `<link>` Google Fonts). Optionnel.

## Données

Tout est stocké en local (`localStorage`) sur l'appareil. Rien n'est envoyé. Aucun compte, aucun backend, aucune pub.

## Installer sur mobile

- **iOS Safari** : Partager → Sur l'écran d'accueil.
- **Android Chrome** : menu → Installer l'application / Ajouter à l'écran d'accueil.

## Rappel

Anchor n'est pas un dispositif médical ni un service d'urgence. En cas de danger immédiat : 112 (UE), 15 (FR), 911 (US).
