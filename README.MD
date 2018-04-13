Programme: Création d'une toDO- liste en Redux

Explications: le contexte du "this" envoyé pour l'appel du render lors du dispatch de l'action handlePress est le contexte du store dans la librairie Redux: ce this n'a alors pas le state et provoque ainsi l'erreur "undefined" 

L'erreur se trouve dans le Main sur le subscribe du render (ligne 86):
this.render      se tranforme en () => this.render()
