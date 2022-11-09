<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221109165529 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE invitation DROP FOREIGN KEY FK_F11D61A25C60F0F4');
        $this->addSql('ALTER TABLE invitation ADD CONSTRAINT FK_F11D61A25C60F0F4 FOREIGN KEY (kanban_id) REFERENCES kanban (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE kanban ADD owner_id INT NOT NULL');
        $this->addSql('ALTER TABLE kanban ADD CONSTRAINT FK_31E589007E3C61F9 FOREIGN KEY (owner_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('CREATE INDEX IDX_31E589007E3C61F9 ON kanban (owner_id)');
        $this->addSql('ALTER TABLE task DROP FOREIGN KEY FK_527EDB25FCC01C3F');
        $this->addSql('ALTER TABLE task ADD CONSTRAINT FK_527EDB25FCC01C3F FOREIGN KEY (kanban_column_id) REFERENCES `column` (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE invitation DROP FOREIGN KEY FK_F11D61A25C60F0F4');
        $this->addSql('ALTER TABLE invitation ADD CONSTRAINT FK_F11D61A25C60F0F4 FOREIGN KEY (kanban_id) REFERENCES kanban (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE task DROP FOREIGN KEY FK_527EDB25FCC01C3F');
        $this->addSql('ALTER TABLE task ADD CONSTRAINT FK_527EDB25FCC01C3F FOREIGN KEY (kanban_column_id) REFERENCES `column` (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE kanban DROP FOREIGN KEY FK_31E589007E3C61F9');
        $this->addSql('DROP INDEX IDX_31E589007E3C61F9 ON kanban');
        $this->addSql('ALTER TABLE kanban DROP owner_id');
    }
}
