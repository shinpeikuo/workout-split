# Workout Split

A personal workout tracker that installs on your phone like an app. It's plain HTML, CSS and JavaScript, with no frameworks and no build step. It works offline, and your data stays on your phone. There's no login and no server.

## Files

| File | What it does |
|---|---|
| `index.html` | The whole app: layout, styles and code. |
| `manifest.json` | Tells Android the app's name, colors and icon, so Chrome offers **Install app**. |
| `sw.js` | The service worker. It saves the app's files on the phone so the app opens with no internet. |
| `icons/` | Home-screen icons. |
| `fonts/` | The Poppins font, stored here so it works offline. |

## Hosting (GitHub Pages)

The site is served by GitHub Pages from the `main` branch, root folder: **Settings → Pages → Deploy from a branch → main / (root)**.

The address is `https://shinpeikuo.github.io/workout-split/`.

## Install on Android

1. Open the address above in **Chrome** on your phone.
2. Tap the **⋮** menu, then **Install app** (or **Add to Home screen**).
3. Open it from your home screen. After the first load it works with no internet.

## Updating the app

1. Edit `index.html` and push to `main`. Pages republishes in about a minute.
2. In `sw.js`, change `CACHE` to a new name (for example `workout-split-v2`). This makes phones that already have the app fetch the new files.
3. Close and reopen the app on your phone, maybe twice, to get the new version.

## Keeping your data safe

Your workouts are saved in the browser's local storage on the phone. Uninstalling the app or clearing Chrome's site data erases them. Every so often, go to the Home screen and tap **Back up or restore data**, then **Copy backup**, and paste the text somewhere safe. To move to a new phone, install the app there and use **Restore from pasted backup**.
