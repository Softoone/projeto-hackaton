package com.example.demo.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Usuario;
import com.example.demo.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	UsuarioRepository usuarioRepository;
	
	public ArrayList<Usuario> findAll(){
		ArrayList<Usuario> listaRetorno = new ArrayList<Usuario>();
			
		listaRetorno = (ArrayList<Usuario>) usuarioRepository.findAll();

		return listaRetorno;
	}
	
	public void delete(Integer cnpj) {
		usuarioRepository.deleteById(cnpj);
	}
	
	public void save(Usuario usuario) {
		usuarioRepository.save(usuario);
	}
	
	public void update(Usuario usuario) {
		Usuario usuarioBanco = usuarioRepository.findById(usuario.getId());
		if(usuarioBanco != null){
			usuarioRepository.save(usuario);
		}
	}
}
