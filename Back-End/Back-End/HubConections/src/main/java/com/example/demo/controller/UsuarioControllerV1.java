package com.example.demo.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.Usuario;
import com.example.demo.service.UsuarioService;

@RestController
@RequestMapping("/v1/usuario")
public class UsuarioControllerV1 {
	@Autowired
	UsuarioService usuarioService;
	
	@PostMapping
	public void adicionar(@RequestBody Usuario usuario) {
		usuarioService.save(usuario);
	}
	
	@GetMapping
	public ArrayList<Usuario> findAll(){
		return usuarioService.findAll();
	}
	
//	@GetMapping("/{idUsuario}")
//	public void buscarUsuarioId(@PathVariable Integer idUsuario) {
//		usuarioService.buscarUsuarioId(idUsuario);
//	}
	
	@GetMapping("/{idUsuario}")
	public ResponseEntity<Usuario> buscarPorId(@PathVariable Integer idUsuario) {
		
		Usuario usuarioRetorno = usuarioService.buscarUsuarioId(idUsuario);
		
		return new ResponseEntity(usuarioRetorno,HttpStatus.OK);
	}
	
	@DeleteMapping("/{idUsuario}")
	public void deletar(@PathVariable Integer idUsuario) {
		usuarioService.delete(idUsuario);
	}
	
	@PutMapping
	public ResponseEntity atualizar(@RequestBody Usuario usuario) {
		usuarioService.update(usuario);
		return ResponseEntity.ok().build();
	}
	
	@PostMapping("/save")
	public void saveUsuario(
			@RequestParam("foto") MultipartFile foto) {
		
		usuarioService.salvarUsuario(foto);
	}
	
}
