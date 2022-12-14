<?php

namespace App\Form;

use App\Entity\Task;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TaskCreationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'attr' => [
                    'minlength' => 3,
                    'maxlength' => 255,
                    'placeholder' => ''
                ],
                'label' => 'Titre de la tâche',
                'constraints' => [
                    new Assert\NotBlank(),
                    new Assert\Length(['min' => 3, 'max' => 255])
                ]
            ])
            ->add('description', TextType::class, [
                'attr' => [
                    'minlength' => 0,
                    'maxlength' => 255,
                    'placeholder' => ''
                ],
                'label' => 'Description',
                'constraints' => [
                    new Assert\NotBlank(),
                    new Assert\Length(['min' => 3, 'max' => 255])
                ]
            ])
            ->add('limit_date', DateType::class, [
                'widget' => 'single_text',
                'label' => 'Date limite (optionnelle)'
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Ajouter une tâche'
            ]);
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Task::class,
        ]);
    }
}
