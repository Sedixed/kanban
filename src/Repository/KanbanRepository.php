<?php

namespace App\Repository;

use App\Entity\User;
use App\Entity\Kanban;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Kanban>
 *
 * @method Kanban|null find($id, $lockMode = null, $lockVersion = null)
 * @method Kanban|null findOneBy(array $criteria, array $orderBy = null)
 * @method Kanban[]    findAll()
 * @method Kanban[]    findBy(array $criteria, array $orderBy = null, 
 *                            $limit = null, $offset = null)
 */
class KanbanRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Kanban::class);
    }

    public function save(Kanban $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Kanban $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function getInvitedKanbans(User $user, string $sort = null): array
    {
        $entityManager = $this->getEntityManager();

        if ($sort == "alpha") {
            $query = $entityManager->createQuery(
                'SELECT k
                FROM App\Entity\Kanban k JOIN k.users us WHERE :user IN (us) AND :user <> k.owner ORDER BY k.name'
            )->setParameter('user', $user);
        } else if ($sort == "alpha-dec") {
            $query = $entityManager->createQuery(
                'SELECT k
                FROM App\Entity\Kanban k JOIN k.users us WHERE :user IN (us) AND :user <> k.owner ORDER BY k.name DESC'
            )->setParameter('user', $user);
        } else {
            $query = $entityManager->createQuery(
                'SELECT k
                FROM App\Entity\Kanban k JOIN k.users us WHERE :user IN (us) AND :user <> k.owner'
            )->setParameter('user', $user);
        }

        return $query->getResult();
    }
}
