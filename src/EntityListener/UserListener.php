<?php

namespace App\EntityListener;

use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserListener {

    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher) {
        $this->hasher = $hasher;
    }

    public function prePersist(User $user) {
        $user->addRole("ROLE_USER");
        $this->encodePassword($user);
    }

    public function preUpdate(User $user) {
        $user->addRole("ROLE_USER");
        $this->encodePassword($user);
    }

    /**
     * Encodes password based on user's plain password.
     */
    private function encodePassword(User $user) {
        if ($user->getPlainPassword() == null) {
            return;
        }

        $user->setPassword($this->hasher->hashPassword($user, $user->getPlainPassword()));
        $user->setPlainPassword(null);
    }

}