# Workout Split

A personal workout tracker that installs on your phone like an app. It's plain HTML, CSS and JavaScript, with no frameworks and no build step. It works offline, and your data stays on your phone. There's no login and no server.

## Files

| File | What it does |
|---|---|
| `index.html` | The whole app: layout, styles and code. |
| `manifest.json` | Tells Android the app's name, colors and icon, so Chrome offers **Install app**. |
| `sw.js` | The service worker. It saves the app's files on the phone so the app opens with no internet. |
| `icons/` | Home-screen icons, plus `og-image.png`, the preview card shown when a shared link is pasted in a message. |
| `CLAUDE.md` | Rules for changing the app, including the permanent data-safety rule. Read it before touching storage. |
| `fonts/` | The Poppins font, stored here so it works offline. |

## Hosting (GitHub Pages)

The site is served by GitHub Pages from the `main` branch, root folder: **Settings → Pages → Deploy from a branch → main / (root)**.

The address is `https://shinpeikuo.github.io/workout-split/`.

## Install

**Android:** open the address above in **Chrome**, tap **⋮**, then **Install app** (or **Add to Home screen**).

**iPhone:** open the address in **Safari**, tap **Share**, then **Add to Home Screen**. Data in the Safari tab and in the Home Screen app are kept separately on iPhone, so pick one (the Home Screen app is safer) and use Settings → Export / Import to move data between them.

After the first load the app works with no internet.

## Updating the app

1. Follow `CLAUDE.md`. Any change to stored data needs a data-version bump and a tested migration.
2. Edit `index.html` and push to `main`. Pages republishes in about a minute.
3. In `sw.js`, change `CACHE` to a new name (for example `workout-split-v5`). This makes phones that already have the app fetch the new files.
4. Phones show an **Update now** banner when the new version is ready. Settings → **Check for updates** checks right away.

## Keeping your data safe

Your workouts are saved in the browser's local storage on the phone, and every change is saved immediately. Uninstalling the app or clearing site data erases them.

Every so often, open **Settings → Export my data** and save the backup file to Files, iCloud, Google Drive or email. To move to a new phone, install the app there and use **Settings → Import backup**. Import accepts backups from every version of the app (including old pasted-text backups), and asks whether to merge or replace.
