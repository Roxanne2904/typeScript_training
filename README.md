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

En TypeScript, les interface et les type sont tous deux utilisés pour définir des contrats de types, mais il y a des différences subtiles entre les deux.

> Interface :
>
> > Déclaration d'objets : Les interfaces sont principalement utilisées pour décrire la forme d'un objet. Elles peuvent >> déclarer la structure des objets, y compris les propriétés et les méthodes.

> > Extension : Vous pouvez étendre une interface en utilisant l'héritage, ce qui vous permet de créer des interfaces >> basées sur d'autres interfaces.

> > Déclaration fusionnée : Si vous déclarez deux interfaces avec le même nom, elles se fusionneront dans un seul type, >> permettant de diviser la définition de l'interface sur plusieurs fichiers.

> > Compatibilité étendue : Les interfaces peuvent être implémentées par des classes, et elles peuvent également être

> Type :
>
> > Unions, intersections, alias : Les types permettent de définir des unions, des intersections et des alias de types. Vous pouvez créer des types complexes en combinant différents types.

> > Capacité d'index : Les types peuvent être utilisés pour définir des index et des indexeurs.

> > Assignation de type : Les types peuvent être utilisés pour assigner un alias à un type primitif, ce qui facilite la réutilisation dans des endroits multiples.

> > Compatibilité contravariante : Les types sont souvent plus flexibles en termes de compatibilité contravariante, ce qui signifie qu'ils peuvent être plus permissifs lors de l'assignation de types de fonctions.

> Recommandations :
>
> > Choix personnel : Le choix entre interface et type dépend souvent des préférences personnelles et de la situation spécifique.

> > Cas d'utilisation : Si vous avez besoin d'une déclaration de forme d'objet ou d'une extension avec héritage, une interface peut être plus appropriée. Si vous avez besoin de créer des types plus complexes, des unions, des intersections ou des alias, vous pouvez opter pour un type.

> En résumé, bien que les interface et les type aient des fonctionnalités similaires, la distinction principale se trouve dans leurs capacités et dans les cas d'utilisation spécifiques où l'une ou l'autre pourrait être plus adaptée. Dans de nombreux cas, ils peuvent être utilisés de manière interchangeable, et le choix entre les deux dépend souvent des préférences de l'équipe de développement et des besoins spécifiques du projet.`

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
