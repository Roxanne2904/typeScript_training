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

### Notes

#### Expliquez la différence entre 'interface' et 'type' en TypeScript.

##### Différence entre `interface` et `type` en TypeScript

Les mots-clés `interface` et `type` sont utilisés pour définir des structures de données en TypeScript, mais ils ont des différences subtiles.

###### Interface

- Utilisée principalement pour définir des contrats ou des formes de données.
- Peut être étendue ou implémentée, permettant d'ajouter des membres à une interface existante.
- Peut être utilisée dans des déclarations de fusion pour étendre une interface existante avec de nouvelles propriétés.
- Sert souvent à déclarer des contrats pour des objets ou des classes.

**Exemple d'interface :**

```typescript
interface Person {
	name: string;
	age: number;
}

interface Employee extends Person {
	jobTitle: string;
}
```

###### Type

- Utilisé pour créer des alias de types, permettant de définir des types complexes ou réutilisables.
- Peut être générique, acceptant des paramètres de type.
- Prend en charge l'union, l'intersection et d'autres opérations de manipulation de types.
- Préféré pour définir des types plus complexes et des unions.

**Exemple de type :**

```typescript
type Person = {
	name: string;
	age: number;
};

type Employee = Person & {
	jobTitle: string;
};
```

#### Qu'est-ce que le "duck typing" en TypeScript ?

> Imaginez que vous ayez une fonction qui doit travailler avec des canards. Plutôt que de demander des canards spécifiques, elle demande simplement des objets qui savent "quacker" (faire le bruit d'un canard).

```

// Déclaration d'un canard
const realDuck = {
quack: () => console.log("Quack, quack!")
};

// Fonction qui travaille avec des "quackers"
function performQuackAction(duck) {
duck.quack();
}

// Utilisation de la fonction avec un vrai canard
performQuackAction(realDuck); // Fonctionne avec un véritable canard

// Utilisation de la fonction avec un objet qui "quack" comme un canard
const duckLikeObject = {
quack: () => console.log("Quack, quack!")
};
performQuackAction(duckLikeObject); // Fonctionne avec un objet qui ressemble à un canard

```

> Dans cet exemple, la fonction performQuackAction ne demande pas spécifiquement des canards, elle demande juste des objets qui ont une méthode quack. Peu importe comment cet objet est défini, tant qu'il a une méthode quack, la fonction est contente.

> C'est un peu comme si vous disiez : "Donne-moi quelque chose qui fait 'quack'", et peu importe si c'est un vrai canard ou un objet qui fait 'quack' comme un canard, cela fonctionnera. C'est ce que l'on appelle le "duck typing" : on se préoccupe du comportement plutôt que du type précis.

```

```
