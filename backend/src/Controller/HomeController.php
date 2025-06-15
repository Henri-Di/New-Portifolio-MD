<?php
// src/Controller/HomeController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/api/home', name: 'api_home', methods: ['GET'])]
    public function home(): JsonResponse
    {
        return $this->json([
            'message' => 'Bem-vindo à API do portfólio',
            'status' => 'sucesso'
        ]);
    }
}
