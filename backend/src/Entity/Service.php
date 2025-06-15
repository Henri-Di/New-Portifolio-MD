<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class Service
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type:"integer")]
    private ?int $id = null;

    #[ORM\Column(type:"string", length:255)]
    private ?string $nome = null;

    #[ORM\Column(type:"string", length:20)]
    private ?string $cpfCnpj = null;

    #[ORM\Column(type:"string", length:2)]
    private ?string $estado = null;

    #[ORM\Column(type:"string", length:100)]
    private ?string $cidade = null;

    #[ORM\Column(type:"string", length:255)]
    private ?string $email = null;

    #[ORM\Column(type:"string", length:20)]
    private ?string $telefone = null;

    #[ORM\Column(type:"string", length:100)]
    private ?string $ramoAtividade = null;

    #[ORM\Column(type:"text")]
    private ?string $sobre = null;

    #[ORM\Column(type:"datetime")]
    private \DateTimeInterface $createdAt;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    // Getters e Setters abaixo...

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNome(): ?string
    {
        return $this->nome;
    }

    public function setNome(string $nome): self
    {
        $this->nome = $nome;
        return $this;
    }

    public function getCpfCnpj(): ?string
    {
        return $this->cpfCnpj;
    }

    public function setCpfCnpj(string $cpfCnpj): self
    {
        $this->cpfCnpj = $cpfCnpj;
        return $this;
    }

    public function getEstado(): ?string
    {
        return $this->estado;
    }

    public function setEstado(string $estado): self
    {
        $this->estado = $estado;
        return $this;
    }

    public function getCidade(): ?string
    {
        return $this->cidade;
    }

    public function setCidade(string $cidade): self
    {
        $this->cidade = $cidade;
        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;
        return $this;
    }

    public function getTelefone(): ?string
    {
        return $this->telefone;
    }

    public function setTelefone(string $telefone): self
    {
        $this->telefone = $telefone;
        return $this;
    }

    public function getRamoAtividade(): ?string
    {
        return $this->ramoAtividade;
    }

    public function setRamoAtividade(string $ramoAtividade): self
    {
        $this->ramoAtividade = $ramoAtividade;
        return $this;
    }

    public function getSobre(): ?string
    {
        return $this->sobre;
    }

    public function setSobre(string $sobre): self
    {
        $this->sobre = $sobre;
        return $this;
    }

    public function getCreatedAt(): \DateTimeInterface
    {
        return $this->createdAt;
    }
}
