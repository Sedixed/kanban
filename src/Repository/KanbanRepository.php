<?php

namespace App\Repository;

use App\Entity\Kanban;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

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
}
