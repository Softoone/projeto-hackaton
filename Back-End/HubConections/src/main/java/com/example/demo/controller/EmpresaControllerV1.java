package com.example.demo.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Empresa;
import com.example.demo.service.EmpresaService;

@RestController
@RequestMapping("/v1/empresas")
public class EmpresaControllerV1 {

	@Autowired
	EmpresaService empresaService;
	
	@PostMapping
	public void adicionar(@RequestBody Empresa empresa) {
		empresaService.save(empresa);
	}
	
	@GetMapping
	public ArrayList<Empresa> findAllEnterprise(){
		return empresaService.findAll();
	}
	
	@DeleteMapping("/{Cnpj}")
	public void deletar(@PathVariable Integer Cnpj) {
		empresaService.delete(Cnpj);
	}
	
}
