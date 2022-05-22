# INSTALLATION ET CONFIGURATION DU SERVEUR APACHE 2
  NB: ON UTILISE LINUX DEBIAN 
## INSTALLATIION:
  ### Install apache2 
   sudo apt install apache2

  ### Install apache2 sans confirmation
   sudo apt install apache2 -y

Comment vous pouvez le voir, l’installation n’est pas compliqué.

Quelques informations pratiques avant de continuer :

* Par défaut apache2 créer un vhost qui écoute sur toutes les ip du serveur sur le port 80.
* Le dossier du site par défaut est /var/www/html. 
 
# Premier teste u serveur Apache 2
  Il faut dejà savoir l' adresse IP de notre serveur et après  
* commande : ifconfig    
  aller à l’adresse suivante : 'http://ip_du_serveur' depuis notre navigateur  
  Il y a une page qui s'ouvre depuis le navigateur (page de l'index.html du serveur) 
* aller voir cette page sur notre serveur Web.  
Depuis le terminal, aller dans le dossier :'/var/www/html' et lister le contenu.
  * commande :cd /var/www/html  
  * trouver le contenu : commande --> ll  
     Dans le dossier on retrouve notre page index.html qui s’est affichée.
     ![apache2 Sarobidy-nantenaina](https://academy.rdr-it.io/wp-content/uploads/2021/03/apache2-folder-var-www-html.png)  

* je vais créer maintenant mon première page internet sur le serveur apache,   
  un peu sous la forme d’un  TP.

Dans le dossier /var/www/html je vais créer une page web teste.html avec le code ci-dessous dedans :  
'<!DOCTYPE html>
    <head>
        <title>Ma première page sur mon serveur Apache2</title>
    </head>
    <body>
        <h1>Apache 2 : ma première page</h1>
        <p>Hello World !</p>
        <p>Ceci est ma première page perso sur mon serveur Web Apache2 que j'ai installé </a>.</p>
    </body>
</html>'  

##  Pour gérer le serveur Apache2
  * Voici la liste des commandes à utiliser pour gérer le service Apache2 sur le serveur
    * Verifier le statut du service:
       sudo systemctl status apache2.service
    * Démarrer le service
       sudo systemctl start apache2.service

   * Arrete le service
       sudo systemctl stop apache2.service

   * Redémarrer le service
       sudo systemctl restart apache2.service

   * Recharger
       sudo systemctl reload apache2.service 


---------------------------------------------------------------------------------------------

 ## CONFIGURATION DU SERVEUR APACHE2 :

* On trouvere la configuration d’Apache2 dans le dossier '/etc' et ensuite il y a un dossier Apache2, qui va contenir les différents fichiers d configuration.  
![config Sarobidy-nantenaina](https://academy.rdr-it.io/wp-content/uploads/2021/03/apache2-config-01.png)  
* Dans le dossier /etc/apache2, on va retrouver plusieurs fichiers et dossiers qui vont nous permettre d’agir la configuration du service web.
![config Sarobidy-nn=antenaina](https://academy.rdr-it.io/wp-content/uploads/2021/03/apache2-config-02-800x283.png.webp)
 
* Maintenant qu'on sais où se trouve la configuration d’Apache2, je vais vous expliquer à quoi servent les fichiers et dossiers.

* apache2.conf : contient la configuration du service web, certains paramètres du fichier peuvent être surchargé par des directives dans la configuration des vhosts
* envvars : contient la définition de variable d’environnement du service Apache2, qui peuvent ensuite être utilisé dans les différents fichiers de configuration.
* magic : contient les directives pour terminer le MIME type des fichiers
* ports.conf : contient les ports par défaut utilisés par le service web, le port peut être modifié dans la configuration du vhost d’un site.
* conf-available/ : contient différents fichiers de configuration qui peuvent être chargés par le service Apache2.
* conf-enabled/ : contient des liens symboliques vers les fichiers de configuration activés, généralement dans le dossier conf-available.
* mod-available/ : contient les différents modules disponibles sur apaches comme SSL, Rewrite …
* mod-enabled/ : contient les liens symboliques des mods actif
* sites-available/ : contient la configuration des différents virtuals hosts
* sites-enabled/ : contient les liens symboliques des différents virtuals hosts actifs

  




