<?php

namespace App\Entity;

use App\Constants\KanbanPrivacy;
use App\Repository\KanbanRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: KanbanRepository::class)]
class Kanban
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column]
    private ?KanbanPrivacy $privacy = null;

    #[ORM\OneToMany(
        mappedBy: 'kanban', 
        targetEntity: Column::class, 
        orphanRemoval: true
    )]
    private Collection $columns;

    #[ORM\ManyToMany(targetEntity: User::class, mappedBy: 'kanban')]
    private Collection $users;

    #[ORM\OneToMany(mappedBy: 'kanban', targetEntity: Invitation::class, orphanRemoval: true)]
    private Collection $invitations;

    public function __construct()
    {
        $this->columns = new ArrayCollection();
        $this->users = new ArrayCollection();
        $this->invitations = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPrivacy(): ?KanbanPrivacy
    {
        return $this->privacy;
    }

    public function setPrivacy(KanbanPrivacy $privacy): self
    {
        $this->privacy = $privacy;

        return $this;
    }

    /**
     * @return Collection<int, Column>
     */
    public function getColumns(): Collection
    {
        return $this->columns;
    }

    public function addColumn(Column $column): self
    {
        if (!$this->columns->contains($column)) {
            $this->columns->add($column);
            $column->setKanban($this);
        }

        return $this;
    }

    public function removeColumn(Column $column): self
    {
        if ($this->columns->removeElement($column)) {
            // set the owning side to null (unless already changed)
            if ($column->getKanban() === $this) {
                $column->setKanban(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users->add($user);
            $user->addKanban($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->removeElement($user)) {
            $user->removeKanban($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Invitation>
     */
    public function getInvitations(): Collection
    {
        return $this->invitations;
    }

    public function addInvitation(Invitation $invitation): self
    {
        if (!$this->invitations->contains($invitation)) {
            $this->invitations->add($invitation);
            $invitation->setKanban($this);
        }

        return $this;
    }

    public function removeInvitation(Invitation $invitation): self
    {
        if ($this->invitations->removeElement($invitation)) {
            // set the owning side to null (unless already changed)
            if ($invitation->getKanban() === $this) {
                $invitation->setKanban(null);
            }
        }

        return $this;
    }
}
