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
public class Empresa {
	
	@Id
	@Column(name="cnpj")
	private Integer Cnpj;
	
	@Column(name="nome_empresa")
	private String nomeEmpresa;
	
}
