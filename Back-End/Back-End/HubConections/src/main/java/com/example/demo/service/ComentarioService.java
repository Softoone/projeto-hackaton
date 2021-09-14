package com.example.demo.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Comentario;
import com.example.demo.repository.ComentarioRepository;

@Service
public class ComentarioService {
	
	@Autowired
	ComentarioRepository comentarioRepository;
	
	public ArrayList<Comentario> findAll(){
		ArrayList<Comentario> listaRetorno = new ArrayList<Comentario>();
			
		listaRetorno = (ArrayList<Comentario>) comentarioRepository.findAll();

		return listaRetorno;
	}
	
	public void delete(Integer idComentario) {
		comentarioRepository.deleteById(idComentario);
	}
	
	public void save(Comentario comentario) {
		comentarioRepository.save(comentario);
	}
	
	public void update(Comentario comentario) {
		Comentario comentarioBanco = comentarioRepository.findById(comentario.getId());
		if(comentarioBanco != null){
			comentarioRepository.save(comentario);
		}
	}
	
}
