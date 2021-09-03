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
@Entity(name="freelance")
public class Freelance extends Usuario {
    @Id
    @Column(name="cpf_free")
	private Integer cpfFree;
	
    @Column(name="nome_free")
	private String nomeFree;
	
    @Column(name="sobrenome_free")
	private String sobrenomeFree;
	
    @Column(name="mei_free")
	private Integer meiFree;
}
