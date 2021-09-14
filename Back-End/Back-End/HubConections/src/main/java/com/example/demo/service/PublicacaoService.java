package com.example.demo.service;

import java.io.IOException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.Publicacao;
import com.example.demo.model.Usuario;
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
		Publicacao publicacaoBanco = publiRepository.findById(publicacao.getId());
		if(publicacaoBanco != null){
			publiRepository.save(publicacao);
		}
	}
	
	public void salvarPublicacao(MultipartFile file) {

		Publicacao publicacao = new Publicacao();
		
		Byte[] byteObjects;
		try {
			byteObjects = new Byte[file.getBytes().length];
			int i = 0;

			for (byte b : file.getBytes()){
				byteObjects[i++] = b;
			}
			
			publicacao.setFoto(byteObjects);
		
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		publiRepository.save(publicacao);
	}
}
