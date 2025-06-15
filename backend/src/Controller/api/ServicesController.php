<?php

namespace App\Controller;

use App\Entity\Service;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ServiceController extends AbstractController
{
    #[Route('/api/services', name: 'api_services_create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $requiredFields = ['nome', 'cpfCnpj', 'estado', 'cidade', 'email', 'telefone', 'ramoAtividade', 'sobre'];
        foreach ($requiredFields as $field) {
            if (empty($data[$field])) {
                return $this->json(['error' => "Campo $field é obrigatório"], 400);
            }
        }

        $service = new Service();
        $service->setNome($data['nome']);
        $service->setCpfCnpj($data['cpfCnpj']);
        $service->setEstado($data['estado']);
        $service->setCidade($data['cidade']);
        $service->setEmail($data['email']);
        $service->setTelefone($data['telefone']);
        $service->setRamoAtividade($data['ramoAtividade']);
        $service->setSobre($data['sobre']);

        $em->persist($service);
        $em->flush();

        return $this->json(['message' => 'Service criado com sucesso']);
    }
}
