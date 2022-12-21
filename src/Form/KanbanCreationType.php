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
                    'minlength' => 3,
                    'maxlength' => 255,
                    'placeholder' => ''
                ],
                'label' => 'Nom du Kanban',
                'constraints' => [
                    new Assert\NotBlank(),
                    new Assert\Length(['min' => 3, 'max' => 255])
                ]
            ])
            ->add('privacy', CheckboxType::class, [
                'label' => 'Kanban public',
                'required' => false,
                'attr' => [
                    'class' => 'js-privacy-checkbox'
                ],
                'constraints' => [
                    new Assert\NotBlank()
                ]
            ])
            ->add('columns', CollectionType::class, [
                'entry_type' => TextType::class,
                'entry_options' => [
                    'constraints' => [
                        new Assert\NotBlank(),
                        new Assert\Length(min: 3, max: 255)
                    ]
                ],
                'label' => false,
                'allow_add' => true,
                'allow_delete' => true,
                'prototype' => true
            ])
            ->add('submit', SubmitType::class, [
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
