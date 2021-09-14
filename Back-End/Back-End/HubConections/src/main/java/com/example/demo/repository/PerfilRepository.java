package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Perfil;

public interface PerfilRepository extends JpaRepository<Perfil, Integer>{
	@Query("SELECT per FROM perfil per WHERE per.apelidoPerfil = ?1")
	public List<Perfil> buscarPorNome(String apelidoPerfil);
}
