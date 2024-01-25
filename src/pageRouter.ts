import { PageRouter , Page } from 'thorium-framework';

/** Le code crée un routeur de pages à l'aide de la fonction `PageRouter` de la bibliothèque
`thorium-framework`. La fonction `PageRouter` prend un objet comme argument avec une propriété
`pages`, qui est un tableau d'objets de page. Chaque objet page représente une page différente dans
l'application et possède une propriété `name`, qui sera la première partie du hachage. Lorsque le
hachage change, la page correspondante sera chargée. */
PageRouter({
  pages : [
    Page({ name : '' , childrens : [{localName : 'h1' , proto : { textContent : 'Home' }}] }),
    Page({ name : 'dashboard' , childrens : [{localName : 'h1' , proto : { textContent : 'Dashboard' }}] }),
    Page({ name : 'users' , childrens : [{localName : 'h1' , proto : { textContent : 'Users' }}] })
  ]
})