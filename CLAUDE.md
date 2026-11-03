# Workout Split: rules for working on this app

Workout Split is an offline PWA (plain HTML/CSS/JS, no build step, no backend, no accounts) hosted on GitHub Pages from `main`. All user data lives only on each user's device. It must work on both iPhone (Safari and home-screen app) and Android (Chrome).

## Data safety rule (permanent, applies to all work)

1. **Never delete, overwrite, or corrupt existing user data on any device.** This covers workouts, saved workouts, favorites, history, sets, reps, and weights.
2. **Every update must read data created by every previous version of the app.** Old formats are never dropped.
3. **Stored data carries a data version number.** When the structure changes, write a migration that upgrades old data without losing anything, and test it against old-format data before shipping. Migrations must be additive and safe to run more than once, and must not destroy the original data until the upgraded copy has been written successfully.
4. **Before any change that touches storage, explain the impact on existing user data and wait for the owner's approval.**

## Owner-approved exception: ad hoc drafts expire

An in-progress ad hoc workout from an earlier day is discarded when the app starts, to avoid stale drafts. This is intentional, not a bug. The only exceptions are drafts the user marked **Keep active**, which stay until the user finishes or deletes them. Completed exercises are already in History and are never affected. Do not change this expiry without the owner's approval.

## Practical checklist for any storage change

- List every localStorage key read or written, and what happens to data already on phones.
- Keep old keys readable. Imports and restores must accept backups from every older version, routed through the same migrations.
- Never partially overwrite data: validate and build the new state fully, then write it.
- Test with real old-format data (the owner's starter backup lives outside the repo at `../workout-split-starter-backup.txt`) and with a fresh, empty install.
- Bump `CACHE` in `sw.js` whenever app files change, so phones pick up the update.
- Never commit personal workout data to this public repo.
