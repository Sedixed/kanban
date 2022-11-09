<?php

namespace App\Form;

use App\Constants\KanbanPrivacy;
use App\Entity\Kanban;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;



class KanbanCreationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'attr' => [
                    'class' => 'form-control mb-4',
                    'minlength' => 3,
                    'maxlength' => 255
                ],
                'label' => 'Nom du Kanban',
                'label_attr' => [
                    'class' => 'form-label mt-4'
                ],
                'constraints' => [
                    new Assert\NotBlank(),
                    new Assert\Length(['min' => 3, 'max' => 255])
                ]
            ])
            ->add('privacy', CheckboxType::class, [
                'attr' => [
                    'class' => 'form-check-input'
                ],
                'label' => 'Kanban public',
                'label_attr' => [
                    'class' => 'form-check-label me-2'
                ],
                'required' => false,
                'constraints' => [
                    new Assert\NotBlank()
                ]
            ])
            ->add('columns', CollectionType::class, [
                'entry_type' => TextType::class,
                'entry_options' => [
                    'attr' => ['class' => 'form-control mt-4'],
                    'constraints' => [
                        new Assert\NotBlank()
                    ]
                ],
                'label' => false,
                'allow_add' => true,
                'allow_delete' => true,
                'prototype' => true
            ])
            ->add('submit', SubmitType::class, [
                'attr' => [
                    'class' => 'btn btn-primary mt-4',
                ],
                'label' => 'Créer un Kanban'
            ]);
        
        $builder->get('privacy')
            ->addModelTransformer(new CallbackTransformer(
                function ($kanbanPrivacyAsInt) {
                    return $kanbanPrivacyAsInt == KanbanPrivacy::Public ? true : false;
                },

                function ($kanbanPrivacyAsBool) {
                    return $kanbanPrivacyAsBool == true ? KanbanPrivacy::Public : KanbanPrivacy::Private;
                }
            ));

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Kanban::class,
        ]);
    }
}
