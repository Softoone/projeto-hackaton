package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="empresa")
public class Empresa extends Usuario {
	
	@Id
	@Column(name="cnpj_emp")
	private Integer cnpjEmp;
	
	@Column(name="razao_social_emp")
	private String razaoSocialEmp;
	
	Empresa empresa;
			
	
}
