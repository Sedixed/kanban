<?php

namespace App\Entity;

use App\Repository\ColumnRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ColumnRepository::class)]
#[ORM\Table(name: '`column`')]
class Column
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank()]
    #[Assert\Length(min: 3, max: 255)]
    private ?string $name = null;

    #[ORM\ManyToOne(inversedBy: 'columns')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?Kanban $kanban = null;

    #[ORM\OneToMany(mappedBy: 'kanban_column', targetEntity: Task::class)]
    private Collection $tasks;

    /**
     * Index of the column (0 -> left).
     *
     * @var integer|null
     */
    #[ORM\Column]
    private ?int $offset = null;

    public function __construct($name = null, $offset = null)
    {   
        $this->tasks = new ArrayCollection();
        $this->name = $name;
        $this->offset = $offset;
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

    public function getKanban(): ?Kanban
    {
        return $this->kanban;
    }

    public function setKanban(?Kanban $kanban): self
    {
        $this->kanban = $kanban;

        return $this;
    }

    /**
     * @return Collection<int, Task>
     */
    public function getTasks(): Collection
    {
        return $this->tasks;
    }

    public function addTask(Task $task): self
    {
        if (!$this->tasks->contains($task)) {
            $this->tasks->add($task);
            $task->setKanbanColumn($this);
        }

        return $this;
    }

    public function removeTask(Task $task): self
    {
        if ($this->tasks->removeElement($task)) {
            // set the owning side to null (unless already changed)
            if ($task->getKanbanColumn() === $this) {
                $task->setKanbanColumn(null);
            }
        }

        return $this;
    }

    public function getOffset(): ?int
    {
        return $this->offset;
    }

    public function setOffset(int $offset): self
    {
        $this->offset = $offset;

        return $this;
    }
}
