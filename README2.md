# INSTALLATION ET CONFIGURATION DU SERVEUR  SAMBA

## INSTALLATION :

 NB: Avant toute chose s'assurer que les paquetages nécessaires sont installer sinon les installer en tapant mcc (Centre de Contrôle Mandrake) en ligne de commande dans le terminal en se loggant en tant que root (taper su puis le mot de passe du root), aller dans Gestionnaire de Logiciels puis dans Installer, sélectionner les trois paquetages suivants (dans tous les paquetages, classement alphabétiques) :

 * samba-client-3.0.2a-3mdk
 * samba-common-3.0.2a-3mdk
 * samba-server-3.0.2a-3mdk  
   #### Puis cliquer sur installer

  ##### Premier démarrage de Samba
Après installation, le serveur de Samba devrait normalement être apte à démarrer (sans aucun partage de fichiers ou d'imprimante) en lançant la commande suivante:
 '/etc/rc.d/init.d/smb' start
    Starting SMB services: [OK]
    Starting NMB services: [OK]  

* La commande suivante permet de contrôler que les deux démons sont correctement lancés
 '/etc/rc.d/init.d/smb status' (ou service smb status)

  smbd (pid 1054) is running...
  nmbd (pid 1056) is running...  

* Les commandes utiles
(à partir du terminal en root)

 * testparm /etc/samba/smb.conf
    -->Test de syntaxe d'écriture du fichier smb.conf
 * /etc/rc.d/init.d/smb stop
    -->Stop les services Samba
 * /etc/rc.d/init.d/smb start
    -->Démarre le serveur Samba
 * /etc/rc.d/init.d/smb restart
    -->Redémarrage de Samba
 * /smbstatus
    -->Affiche les connexions actives via Samba 

#### Configuration du fichier smb.conf 
 
 Il existe 3 sections principales :

La section [global]
 -->définit des paramètre généraux sur le serveur
La section [homes]
 -->définit le partage d'un répertoire personnel
La section [printers]
 -->définit les imprimantes partagées par le serveur
Section "global"
 -->Voici un exemple (l'exemple est celui du réseau R2D4) de section [global] :
[global]

* même nom de groupe que celui sous Windows (Voisinage réseau)
workgroup = MSHOME

* nom sous lequel apparaîtra le serveur dans le voisinage réseau
netbios = samba server

* ce qui apparaîtra dans la rubrique détail du voisinage réseau, %v fait
* apparaître le n° de version de samba
server string = Samba Server %v

* les mots de passe transitent cryptés
encrypt passwords = Yes
smb passwd file = /etc/samba/smbpasswd

* lieux de stockage du journal des événements
log file = /var/log/samba/log.%m

* taille maximum du journal
max log size = 50

* aucun compte invité (facultatif)
guest account = nobody

* accès multi-utilisateur (facultatif)
Share modes = yes

* emplacement du fichier printcap (imprimantes sur le serveur Linux)
printcap = /etc/printcap

* partage de toutes les imprimantes définies dans printcap
printcap name = cups
load printers = yes
printing = cups
printer adm = @ adm

* fichier journal de Samba
log level = 1
log file = /var/log/samba/log.%m

* mode de sécurité : (user / share / server)
security = user

* Autoriser l'accès a certains réseaux (le point final est important)
hosts allow = 192.168.1.

* Vous pouvez autoriser toutes les machines de ce réseau sauf 192.168.1.10
hosts allow = 192.168.1. EXCEPT 192.168.1.10

* Mettre les adresses IP des machines auxquelles vous souhaitez interdire l'accès
* au serveur samba par exemple : ALL, pour interdire tout le monde sauf les
* machines autorisées par <hosts allow>.
Hosts deny = ALL

* pas de proxy dns
dns proxy = No

* Laisser ce champs par défaut
socket options = TCP_NODELAY SO_RCVBUF=8192 SO_SNDBUF=8192

* active le fonction de serveur de temps
time server = yes

* le script de connexion porte le nom du groupe, %g est la variable samba pour le
* groupe primaire
logon script = %g.bat

* autorise la connexion des utilisateurs sur le domaine
domain logons = yes

* Si on veut que le serveur soit le maître du domaine
domain master = yes

* dans le cas de la présence de plusieurs contrôleurs de domaine, c'est le
* serveur qui est le favori
preferred master = yes

* En cas de serveur maître permet de gagner l'élection contre les autres machines
* windows
os level = 255
* on donne l'accès au répertoire netlogon qui contient les scripts de démarrage
[netlogon]

*chemin d'accès du répertoire
path = /home/netlogon

* seuls les utilisateurs spécifiés peuvent utiliser ce répertoire
public = no

* on ne peut pas écrire dans ce répertoire
writable = no

* le répertoire n'apparaît pas dans l'arborescence
browseable = no

* liste des utilisateurs ayant les droits root sur ce répertoire, ici le formateur
admin users = guillaume

Section "homes"
Partage du répertoire personnel
La section [homes] permet de définir l'accès au répertoire personnel de chaque utilisateur. Voici un exemple de section:

[HOMES]
* commentaire visible depuis le voisinage reseau
comment = Home Directories

* affichage de la ressource pour tous
browseable = no

* possibilité d'écrire sur la ressource
writable = yes


#### Section "documents"  

Voici un exemple de section personnalisée:

[DOCUMENTS]
* commentaire visible depuis le voisinage réseau
comment = /home/Répertoire_quelconque

* chemin d'accès a la ressource
* Attention à la casse !!
path = /home/Répertoire_quelconque

* affichage de la ressource pour tous
browseable = no
guest ok = yes

* mettre les noms d'utilisateurs qui seront validés, la procédure pour les
* insérer sera expliquée ultérieurement
valid users = noms_utilisateurs

* chemin d'acces a la ressource
*etant donné que des utilisateurs insérés pourront y accéder il faut mettre no
public = no

* utilisateurs ayant les droits root sur ce répertoire
admin users = noms_utilisateurs

* possibilité d'écrire sur la ressource
writable = yes

Section "cdrom"
Partage d'un lecteur de CD-ROM
Il est ainsi possible de partager un lecteur de CD-ROM (celui-ci devant être préalablement monté) , en créant par exemple une section [cd-rom] comme suit:

[CD-ROM]
* commentaire visible depuis le voisinage reseau
comment = lecteur de CD-ROM

* chemin d'accès au lecteur
path = /mnt/cdrom

* accessible à tous
public = yes

* impossibilité d'écrire sur la ressource
writable = no

create mask = 0750
