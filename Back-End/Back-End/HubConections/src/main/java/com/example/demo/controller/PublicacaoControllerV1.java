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

import com.example.demo.model.Publicacao;
import com.example.demo.service.PublicacaoService;

@RestController
@RequestMapping("/v1/publicacao")
public class PublicacaoControllerV1 {
	
	@Autowired
	PublicacaoService publiService;
	
	@PostMapping
	public void adicionar(@RequestBody Publicacao publicacao) {
		publiService.save(publicacao);
	}
	
	@GetMapping
	public ArrayList<Publicacao> findAll(){
		return publiService.findAll();
	}
	
	@DeleteMapping("/{idPublicacao}")
	public void deletar(@PathVariable Integer idPublicacao) {
		publiService.delete(idPublicacao);
	}
	
	@PutMapping
	public ResponseEntity atualizar(@RequestBody Publicacao publicacao) {
		publiService.update(publicacao);
		return ResponseEntity.ok().build();
	}
}
