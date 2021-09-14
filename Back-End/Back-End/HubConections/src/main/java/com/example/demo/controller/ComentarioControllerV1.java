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

import com.example.demo.model.Comentario;
import com.example.demo.service.ComentarioService;

@RestController
@RequestMapping("/v1/comentario")
public class ComentarioControllerV1 {
	
	@Autowired
	ComentarioService comentarioService;
	
	@PostMapping
	public void adicionar(@RequestBody Comentario comentario) {
		comentarioService.save(comentario);
	}
	
	@GetMapping
	public ArrayList<Comentario> findAll(){
		return comentarioService.findAll();
	}
	
	@DeleteMapping("/{idComentario}")
	public void deletar(@PathVariable Integer idComentario) {
		comentarioService.delete(idComentario);
	}
	
	@PutMapping
	public ResponseEntity atualizar(@RequestBody Comentario comentario) {
		comentarioService.update(comentario);
		return ResponseEntity.ok().build();
	}
}
