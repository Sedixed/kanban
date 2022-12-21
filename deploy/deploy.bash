#!/bin/bash

# Mise à jour de PHP 7 vers PHP 8

apt-get purge php7.* # Répondre oui puis non
apt-get autoclean
apt-get autoremove
wget -qO - https://packages.sury.org/php/apt.gpg | apt-key add -
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/sury-php.list
apt update
apt install php8.1 -y
apt install php8.1-common php8.1-mysql php8.1-xml php8.1-xmlrpc php8.1-curl php8.1-gd php8.1-imagick php8.1-cli php8.1-dev php8.1-imap php8.1-mbstring php8.1-opcache php8.1-soap php8.1-zip php8.1-intl -y
systemctl restart apache2

# Installation de composer

apt install curl
curl -sS https://getcomposer.org/installer -o composer-setup.php
HASH=`curl -sS https://composer.github.io/installer.sig`
php -r "if (hash_file('SHA384', 'composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php --install-dir=/usr/bin --filename=composer

# Configuration du projet

cd /var/www/html

# TODO : Changer la variable APP_ENV en : prod

composer install --no-dev --optimize-autoloader
composer update
php bin/console cache:clear
php bin/console d:m:m

# Configuration de Apache

cp /var/www/html/deploy/000-default.conf /etc/apache2/sites-available/
systemctl restart apache2