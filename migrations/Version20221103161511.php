<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221103161511 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE `column` (id INT AUTO_INCREMENT NOT NULL, kanban_id INT NOT NULL, name VARCHAR(255) NOT NULL, INDEX IDX_7D53877E5C60F0F4 (kanban_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE kanban (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, privacy TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE task (id INT AUTO_INCREMENT NOT NULL, kanban_column_id INT NOT NULL, name VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, limit_date DATE DEFAULT NULL, INDEX IDX_527EDB25FCC01C3F (kanban_column_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE `column` ADD CONSTRAINT FK_7D53877E5C60F0F4 FOREIGN KEY (kanban_id) REFERENCES kanban (id)');
        $this->addSql('ALTER TABLE task ADD CONSTRAINT FK_527EDB25FCC01C3F FOREIGN KEY (kanban_column_id) REFERENCES `column` (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE `column` DROP FOREIGN KEY FK_7D53877E5C60F0F4');
        $this->addSql('ALTER TABLE task DROP FOREIGN KEY FK_527EDB25FCC01C3F');
        $this->addSql('DROP TABLE `column`');
        $this->addSql('DROP TABLE kanban');
        $this->addSql('DROP TABLE task');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
