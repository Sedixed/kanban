<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221103172803 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user_kanban (user_id INT NOT NULL, kanban_id INT NOT NULL, INDEX IDX_54B7923DA76ED395 (user_id), INDEX IDX_54B7923D5C60F0F4 (kanban_id), PRIMARY KEY(user_id, kanban_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_kanban ADD CONSTRAINT FK_54B7923DA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_kanban ADD CONSTRAINT FK_54B7923D5C60F0F4 FOREIGN KEY (kanban_id) REFERENCES kanban (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user_kanban DROP FOREIGN KEY FK_54B7923DA76ED395');
        $this->addSql('ALTER TABLE user_kanban DROP FOREIGN KEY FK_54B7923D5C60F0F4');
        $this->addSql('DROP TABLE user_kanban');
    }
}
