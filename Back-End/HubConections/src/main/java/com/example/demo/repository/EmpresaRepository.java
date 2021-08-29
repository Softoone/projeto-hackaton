package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Empresa;

public interface EmpresaRepository extends JpaRepository<Empresa, Integer> {

}
