package com.example.demo.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Publicacao;
import com.example.demo.repository.PublicacaoRepository;

@Service
public class PublicacaoService {

	@Autowired
	PublicacaoRepository publiRepository;
	
	public ArrayList<Publicacao> findAll(){
		ArrayList<Publicacao> listaRetorno = new ArrayList<Publicacao>();
			
		listaRetorno = (ArrayList<Publicacao>) publiRepository.findAll();

		return listaRetorno;
	}
	
	public void delete(Integer idPublicacao) {
		publiRepository.deleteById(idPublicacao);
	}
	
	public void save(Publicacao publicacao) {
		publiRepository.save(publicacao);
	}
	
	public void update(Publicacao publicacao) {
		publiRepository.save(publicacao);
	}
}
