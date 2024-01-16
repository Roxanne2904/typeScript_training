# Notes

## Installer typeScript

`pnpm add typescript -D`

> Pour staller typeScript sous pnpm.

# Quelques commandes pour commencer

`npx tsc app.ts`

> Pour compiler la version TS de notre fichier .ts en .js, ici c'est: `app.ts`
> Pour avoir la doc des commandes `tsc` aller voir la doc/ tsc CLI Options

## Mettre en place un fichier tsconfig.json

### compilerOptions

`"compilerOptions": {"outDir": "dist"}`

> Pour indiquer le dossier de destination pour la compilation en js.

### files

`"files": ["src/app.ts"]`

> Pour indiquer les fichiers à compiler

### Commandes

> `npx tsc --watch` compilera dès qu'il détectera un changement
> `npx tsc` compilera tous les fichiers grâce à tscconfig.
