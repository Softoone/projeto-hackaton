package com.example.demo.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name="publicacao")
public class Publicacao {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_publicacao")
	private Integer idPublicacao;
	
	@Column(name="data_")
	Date data = new Date();
	
	@Column(name="texto")
	private String texto;
	
	@Column(name="qtd_like")
	private Integer qtdLike;
	
	@Column(name="qtd_comentario")
	private Integer qtdComentario;
	
	@Column(name="img")
	@Lob
	private Byte[] foto;
	
	@OneToMany(mappedBy ="publi")
	private List<Comentario> comentarios = new ArrayList<>();
	
}
