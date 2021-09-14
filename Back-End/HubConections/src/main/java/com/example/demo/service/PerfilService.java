package com.example.demo.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Perfil;
import com.example.demo.model.Usuario;
import com.example.demo.repository.PerfilRepository;
import com.example.demo.repository.UsuarioRepository;

@Service
public class PerfilService {

	@Autowired
	PerfilRepository perfRepository;
	
	public ArrayList<Perfil> findAll(){
		ArrayList<Perfil> listaRetorno = new ArrayList<Perfil>();
			
		listaRetorno = (ArrayList<Perfil>) perfRepository.findAll();

		return listaRetorno;
	}
	
	public void delete(Integer idPerfil) {
		perfRepository.deleteById(idPerfil);
	}
	
	public void save(Perfil perfil) {
		perfRepository.save(perfil);
	}
	
	public void update(Perfil perfil) {
		Perfil perfilBanco = perfilRepository.findById(perfil.getId());
		if(perfilBanco != null){
			perfilRepository.save(perfil);
		}
	}
}
