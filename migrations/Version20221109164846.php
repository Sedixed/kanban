<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221109164846 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE `column` DROP FOREIGN KEY FK_7D53877E5C60F0F4');
        $this->addSql('ALTER TABLE `column` ADD CONSTRAINT FK_7D53877E5C60F0F4 FOREIGN KEY (kanban_id) REFERENCES kanban (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE `column` DROP FOREIGN KEY FK_7D53877E5C60F0F4');
        $this->addSql('ALTER TABLE `column` ADD CONSTRAINT FK_7D53877E5C60F0F4 FOREIGN KEY (kanban_id) REFERENCES kanban (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
    }
}
