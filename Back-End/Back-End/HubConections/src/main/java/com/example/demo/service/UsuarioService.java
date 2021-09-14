package com.example.demo.service;

import java.io.IOException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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
	
	public Usuario buscarUsuarioId(Integer idUsuario) {
		return usuarioRepository.findById(idUsuario).get();
	}
	
	public void salvarUsuario(MultipartFile file) {

		Usuario usuario = new Usuario();
		
		Byte[] byteObjects;
		try {
			byteObjects = new Byte[file.getBytes().length];
			int i = 0;

			for (byte b : file.getBytes()){
				byteObjects[i++] = b;
			}
			
			usuario.setFoto(byteObjects);
		
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		usuarioRepository.save(usuario);
	}
}
