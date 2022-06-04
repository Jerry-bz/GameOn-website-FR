# Créez une landing page avec Javascript
Contexte: Terminer le projet de Jason, il faut ajouter du code havascirpt pour que le formulaire soit fonctionnel.

## Projet GameOn
1. Forkez ce repo ;
2. Il est conseillé d'utiliser VisualStudio Code et vous pouvez utiliser Docker, mais ce n'est pas obligatoire ;
3. Il n'y a aucune dépendance ;
4. Vous ne devez utiliser que du CSS personnalisé et du JavaScript pur, sans jQuery, Bootstrap ou autre librairie.

### Spécifications techniques :
1. Fermer la modale au click du bouton (X);

2. Le formulaire doit être valide quand l'utilisateur clique sur "Submit" :
    (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
    (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
    (3) L'adresse électronique est valide.
    (4) Pour le nombre de concours, une valeur numérique est saisie.
    (5) Un bouton radio est sélectionné.
    (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
    Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

3. Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. Les messages d'erreur doivent s'afficher sous le champ de saisie associé. 
   * Exemples :
    "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    "Vous devez choisir une option."
    "Vous devez vérifier que vous acceptez les termes et conditions."
    "Vous devez entrer votre date de naissance."

4. Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur (ex. "Merci ! Votre réservation a été reçue.")

5. Visualiser et tester l'interface utilisateur dans les dernières versions de Chrome et de Firefox, ainsi que dans les versions mobile et desktop. Corriger les erreurs d'affichage existantes.
   Tester toutes les fonctionnalités des boutons et des entrées de formulaire (tester les valeurs correctes et incorrectes)