package com.example.demo.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Freelance;
import com.example.demo.repository.FreelanceRepository;

@Service
public class FreelanceService {
	
	@Autowired
	FreelanceRepository freeRepository;
	
	public ArrayList<Freelance> findAll(){
		ArrayList<Freelance> listaRetorno = new ArrayList<Freelance>();
			
		listaRetorno = (ArrayList<Freelance>) freeRepository.findAll();

		return listaRetorno;
	}
	
	public void delete(Integer cpf) {
		freeRepository.deleteById(cpf);
	}
	
	public void save(Freelance free) {
		freeRepository.save(free);
	}
	
	public void update(Freelance free) {
		freeRepository.save(free);
	}
}
