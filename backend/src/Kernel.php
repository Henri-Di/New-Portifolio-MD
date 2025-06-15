<?php

namespace App;

use Symfony\Bundle\FrameworkBundle\Kernel\MicroKernelTrait;
use Symfony\Component\HttpKernel\Kernel as BaseKernel;

class Kernel extends BaseKernel
{
    use MicroKernelTrait;

    /**
     * Registra os bundles conforme o ambiente.
     *
     * @return iterable<\Symfony\Component\HttpKernel\Bundle\BundleInterface>
     */
    public function registerBundles(): iterable
    {
        $contents = require $this->getProjectDir() . '/config/bundles.php';
        foreach ($contents as $class => $envs) {
            // Carrega o bundle se estiver ativado para 'all' ou para o ambiente atual
            if (($envs['all'] ?? false) || ($envs[$this->environment] ?? false)) {
                yield new $class();
            }
        }
    }
}
