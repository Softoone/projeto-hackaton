package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="usuario")
public class Usuario {
	
	@Column(name="email_usu")
	private String emailUsu;
	
	@Column(name="senha_usu")
	private String senhaUsu;
	
	@Column(name="descricao_usu")
	private String descricaoUsu;
	
	@Column(name ="telefone_usu")
	private Integer telefoneUsu;
	
	@Column(name="nome_usu")
	private String nomeUsu;
}
