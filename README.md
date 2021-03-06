# ExoCraft
Editeur de site web avec gestion de contenu.

# Introduction

ExoCraft est un éditeur orienté cloud qui se base sur TerraformUI et Redux. Les utilisateurs auront accès à des templates régulier ou premium de la doc TerraUI ou bien partir sur des customisations.

# Fonctionnalités

- Projets prêts-à-l'emploi : Première utilisation officielle de Terra-API. ExoCraft rajoute d'autres couches : dashboard admin pour la gestion de contenu
  - projets : on pourra créer des projets grâce à l'éditeur. Il produira des composants TerraUI pour la version Alpha (donc pas de release avant la v1.0.0 de TerraformUI). Il y aura plusieurs genre de sites web : port-folio, e-commerce, blog, etc. Les composants d'ExoCraft couvriront le plus de cas utilisateurs possibles.
  - terra-blocs : bibliothèque terraUI de composants, possibilité d'enregistrer ses propres dérivés et design maison. ExoCraft rajoutera la couche de gestion d'état grâce à son extension (les blocs de TerraUI doivent permettre une gestion facile de l'état de ses composants. L'utilisateur pourra aussi bien customiser l'apparence que le comportement)
  - thèmes : puissante gestion des couleurs, propositions UI/UX automatiques pour certaines réglages dans les composants (Plugin inclus dans TerraAPI)
  - port-folio : 
  - articles : gestion de blog facile avec des articles modifiés par la mise en page du reporter.
  - produits : Gestion de ses produits, achats, services après vente, contact, etc
  - sections : panels, layout, flex, (faire recherche sur les différentes manières d'afficher du texte)
  - utilisateurs : gestion des abonnés
  - forums/chats : gestion de conversations instantanées, publiques ou privées, canal de discussion par thème (autodidacte, lecteur abonné, open forum TerraUI
  - formulaire : inscriptions, newsletters, abonnements, sondages, etc
- Animations : certains effets sont activés par défaut mais on doit pouvoir facilement les overrider.
- gestion dynamique, temps réel (chats, notifications, jeux, etc)
- Blog design avec tutoriels pour tous les niveaux : guide d'utilisateur, conseils en design et UI, conseils en UX, marketing web, tutoriels html/css
- Possibilité de customiser les composants avec du css et du dessin vectoriel : tout est converti en css dans la phrase de génération.

# Développement / Todos
- Réfléchir à une manière simple d'utiliser l'API pour concevoir des usines de blocs : comment uniformiser les données de l'API pour être compatible avec n'importe quel code javascript natif (quels sont les prérequis minimum pour utiliser ExoCraft ?)
- Recherches sur la gestion d'état : quelles sont les alternatives de Redux ? A quel point une approche maison serait plus "ExoSoft Friendly" ?
- Proposer les guides de design et les chartes graphiques de TerraForm. Les utilisateurs pourront être conseillés tout en ayant une totale liberté de création.
- Penser maintenabilité et évolutivité : ExoCraft doit évoluer main dans la main avec TerraForm. Trouver le moyen de facilement effectuer des mises à jour dans l'appli et les projets des utilisateurs (les composants doivent pouvoir se mettre à jour depuis l'API tout en gardant les paramètres des utilisateurs)
- Faire de profondes recherches sur les events listeners (pour remplacer le onclick d'un button par exemple : https://stackoverflow.com/questions/9643311/pass-string-parameter-in-an-onclick-function)

# Links 
- css grid tips : https://www.youtube.com/watch?v=7kVeCqQCxlk&t=1452s
- web components : https://blog.ionicframework.com/build-your-next-design-system-with-web-components/amp/?__twitter_impression=true
- css layout : http://book.mixu.net/css/5-tricks.html
- https://www.smashingmagazine.com/2018/04/best-practices-grid-layout/
https://pixabay.com/images/search/galaxy/
- https://www.blogduwebdesign.com/
- https://tympanus.net/codrops/
# Community Version

Version gratuite qui permet de concevoir son site en un éclair (tutorial inclus). Les utilisateurs pourront publier leurs créations sur les serveurs internes de ExoCraft (et ExoSoft) mais devoir s'abonner pour une mise en ligne plus élaborée. La version Community offre un large champ d'accès pour les habitués du WYSIWYG (What You See Is What You Get). La version Alpha contiendra 1 template de test.

Version v.0.0.1 à venir.
