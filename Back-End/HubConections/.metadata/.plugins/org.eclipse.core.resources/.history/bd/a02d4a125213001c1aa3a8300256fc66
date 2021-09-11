package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name="perfil")
public class Perfil implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 7261039175618827952L;

	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_perfil")
	private Integer idPerfil;
	
	@Column(name="apelido")
	private String apelidoPerfil;
	
	@OneToOne
	@JoinColumn(name = "id_usuario")
	private Integer idUsuarioPerfil;
}
