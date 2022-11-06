Opérations à effectuer quand tu vas pull :

- Creation de la base de données (**Une fois**)
```
php bin/console d:d:c
```

- Installation de nouvelles dépendances
```
composer update
```

- Chargement des migrations en BDD
```
php bin/console d:m:m
```

- Exécution des fixtures
```
php bin/console d:f:l
```