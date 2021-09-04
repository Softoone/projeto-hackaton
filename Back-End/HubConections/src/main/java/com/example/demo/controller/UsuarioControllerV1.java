package com.example.demo.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Usuario;
import com.example.demo.service.UsuarioService;

@RestController
@RequestMapping("/v1/usuarios")
public class UsuarioControllerV1 {

	@Autowired
	UsuarioService usuarioService;
	
	@PostMapping("/adicionar")
	public void adicionar(@RequestBody Usuario usuario) {
		usuarioService.save(usuario);
	}
	
	@GetMapping("/buscar")
	public ArrayList<Usuario> findAllUsuarios(){
		return usuarioService.findAll();
	}
	
	@DeleteMapping("/{cpf}")
	public void deletar(@PathVariable Integer cpf) {
		usuarioService.delete(cpf);
	}
	@PutMapping("/editar")
	public ResponseEntity atualizar(@RequestBody Usuario usuario) {
			usuarioService.update(usuario);
			return ResponseEntity.ok().build();
	}
	
	
	
	
	
}
