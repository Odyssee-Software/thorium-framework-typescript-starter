# Starter TypeScript pour Thorium Framework

Ce starter TypeScript vous permet de débuter rapidement avec Thorium Framework, un framework front-end basé sur les Web Components. Utilisez ce starter si vous préférez travailler avec TypeScript pour votre projet.

## **Configuration**

### **Installation des dépendances**

Assurez-vous d'avoir Node.js installé sur votre machine, puis exécutez la commande suivante pour installer les dépendances du projet :

```bash
npm install
```

### **Scripts disponibles**

### Build du projet

```bash
npm run build
```

Cette commande utilise **`thorium-cli`** pour transpiler le code source TypeScript situé dans le dossier **`src`** et le placer dans le répertoire de sortie **`public/dist`**.

### **Structure du projet**

- **index.ts :**
    - Point d'entrée de votre application. Il importe le fichier **`pageRouter.ts`**.
- **pageRouter.tsx :**
    - Ce fichier crée un routeur de pages à l'aide de la fonction **`PageRouter`** de Thorium Framework. Il définit différentes pages avec leurs noms associés et leurs contenus.

### **Utilisation**

1. **Définir vos pages :**
    - Modifiez le fichier **`pageRouter.tsx`** pour définir les différentes pages de votre application. Chaque page est un objet avec un nom et un contenu.
2. **Lancer le build :**
    - Exécutez **`npm run build`** pour transpiler votre code source et générer les fichiers dans le répertoire **`public/dist`**.
3. **Intégrer dans votre application :**
    - Intégrez les fichiers transpilés dans votre application, prêts à être déployés.