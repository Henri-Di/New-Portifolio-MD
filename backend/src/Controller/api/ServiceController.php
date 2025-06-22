<?php

namespace App\Controller\api;

use App\Entity\Service;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api/services', name: 'api_services_')]
class ServiceController extends AbstractController
{
    #[Route('', name: 'create', methods: ['POST'])]
    public function create(
        Request $request,
        SerializerInterface $serializer,
        ValidatorInterface $validator,
        EntityManagerInterface $em
    ): JsonResponse {
        // Converte JSON para entidade Service
        $service = $serializer->deserialize($request->getContent(), Service::class, 'json');

        // Validação dos dados
        $errors = $validator->validate($service);
        if (count($errors) > 0) {
            $violations = [];
            foreach ($errors as $error) {
                $violations[] = [
                    'propertyPath' => $error->getPropertyPath(),
                    'message' => $error->getMessage(),
                ];
            }

            return $this->json(['violations' => $violations], Response::HTTP_BAD_REQUEST);
        }

        // Persiste no banco
        $em->persist($service);
        $em->flush();

        return $this->json([
            'message' => 'Solicitação enviada com sucesso!',
            'data' => [
                'id' => $service->getId(),
            ]
        ], Response::HTTP_CREATED);
    }
}
