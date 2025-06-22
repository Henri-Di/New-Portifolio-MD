<?php

namespace App\Repository;

use App\Entity\Service;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Service>
 *
 * @method Service|null find($id, $lockMode = null, $lockVersion = null)
 * @method Service|null findOneBy(array $criteria, array $orderBy = null)
 * @method Service[]    findAll()
 * @method Service[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ServiceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Service::class);
    }

    /**
     * Retorna todos os serviços ordenados pela data de criação (desc).
     */
    public function findAllOrderedByDate(): array
    {
        return $this->createQueryBuilder('s')
            ->orderBy('s.createdAt', 'DESC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Busca por nome com LIKE (case-insensitive).
     */
    public function findByNome(string $nome): array
    {
        return $this->createQueryBuilder('s')
            ->where('LOWER(s.nome) LIKE :nome')
            ->setParameter('nome', '%' . strtolower($nome) . '%')
            ->orderBy('s.createdAt', 'DESC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Busca por CPF ou CNPJ (valor exato).
     */
    public function findByCpfCnpj(string $cpfCnpj): array
    {
        return $this->createQueryBuilder('s')
            ->where('s.cpfCnpj = :cpfCnpj')
            ->setParameter('cpfCnpj', $cpfCnpj)
            ->getQuery()
            ->getResult();
    }

    /**
     * Busca por estado.
     */
    public function findByEstado(string $estado): array
    {
        return $this->createQueryBuilder('s')
            ->where('s.estado = :estado')
            ->setParameter('estado', strtoupper($estado))
            ->orderBy('s.createdAt', 'DESC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Busca por cidade.
     */
    public function findByCidade(string $cidade): array
    {
        return $this->createQueryBuilder('s')
            ->where('LOWER(s.cidade) LIKE :cidade')
            ->setParameter('cidade', '%' . strtolower($cidade) . '%')
            ->orderBy('s.createdAt', 'DESC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Busca dinâmica por múltiplos filtros opcionais.
     * Exemplo de uso: nome, estado e cidade ao mesmo tempo.
     */
    public function search(?string $nome = null, ?string $estado = null, ?string $cidade = null): array
    {
        $qb = $this->createQueryBuilder('s');

        if ($nome) {
            $qb->andWhere('LOWER(s.nome) LIKE :nome')
                ->setParameter('nome', '%' . strtolower($nome) . '%');
        }

        if ($estado) {
            $qb->andWhere('s.estado = :estado')
                ->setParameter('estado', strtoupper($estado));
        }

        if ($cidade) {
            $qb->andWhere('LOWER(s.cidade) LIKE :cidade')
                ->setParameter('cidade', '%' . strtolower($cidade) . '%');
        }

        return $qb->orderBy('s.createdAt', 'DESC')
            ->getQuery()
            ->getResult();
    }
}
