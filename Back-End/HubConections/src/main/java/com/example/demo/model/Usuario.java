package com.example.demo.model;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="usuario")
public class Usuario implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -8340809905202168623L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_usuario")
	private Integer idUsuario;
	
	@Column(name="nome")
	private String nomeUsuario;
	
	@Column(name="idade")
	Date datNasc = new Date();

	@Column(name="email")
	private String emailUsuario;
	
	@Column(name="senha")
	private String senhaUsuario;
	
	@Column(name="tel")
	private BigInteger telefoneUsuario;
	
	@Column(name="cep")
	private Integer cepUsuario;
			
}