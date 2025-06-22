<?php

namespace App\Entity;

use App\Repository\ServiceRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ServiceRepository::class)]
class Service
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    #[Assert\NotBlank(message: "Nome é obrigatório.")]
    private ?string $nome = null;

    #[ORM\Column(length: 20)]
    #[Assert\NotBlank(message: "CPF ou CNPJ é obrigatório.")]
    #[Assert\Length(
        min: 11,
        max: 18,
        minMessage: "CPF/CNPJ inválido.",
        maxMessage: "CPF/CNPJ inválido."
    )]
    private ?string $cpfCnpj = null;

    #[ORM\Column(length: 2)]
    #[Assert\NotBlank(message: "Estado é obrigatório.")]
    private ?string $estado = null;

    #[ORM\Column(length: 100)]
    #[Assert\NotBlank(message: "Cidade é obrigatória.")]
    private ?string $cidade = null;

    #[ORM\Column(length: 100)]
    #[Assert\NotBlank(message: "E-mail é obrigatório.")]
    #[Assert\Email(message: "E-mail inválido.")]
    private ?string $email = null;

    #[ORM\Column(length: 20)]
    #[Assert\NotBlank(message: "Telefone é obrigatório.")]
    private ?string $telefone = null;

    #[ORM\Column(type: "text")]
    #[Assert\NotBlank(message: "O campo 'Sobre o projeto' é obrigatório.")]
    private ?string $sobre = null;

    #[ORM\Column(length: 100)]
    #[Assert\NotBlank(message: "Ramo de atividade é obrigatório.")]
    private ?string $ramoAtividade = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNome(): ?string
    {
        return $this->nome;
    }

    public function setNome(string $nome): static
    {
        $this->nome = $nome;
        return $this;
    }

    public function getCpfCnpj(): ?string
    {
        return $this->cpfCnpj;
    }

    public function setCpfCnpj(string $cpfCnpj): static
    {
        $this->cpfCnpj = $cpfCnpj;
        return $this;
    }

    public function getEstado(): ?string
    {
        return $this->estado;
    }

    public function setEstado(string $estado): static
    {
        $this->estado = $estado;
        return $this;
    }

    public function getCidade(): ?string
    {
        return $this->cidade;
    }

    public function setCidade(string $cidade): static
    {
        $this->cidade = $cidade;
        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;
        return $this;
    }

    public function getTelefone(): ?string
    {
        return $this->telefone;
    }

    public function setTelefone(string $telefone): static
    {
        $this->telefone = $telefone;
        return $this;
    }

    public function getSobre(): ?string
    {
        return $this->sobre;
    }

    public function setSobre(string $sobre): static
    {
        $this->sobre = $sobre;
        return $this;
    }

    public function getRamoAtividade(): ?string
    {
        return $this->ramoAtividade;
    }

    public function setRamoAtividade(string $ramoAtividade): static
    {
        $this->ramoAtividade = $ramoAtividade;
        return $this;
    }
}
