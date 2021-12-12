package com.ifpr.api.usuario;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * @author Ilson Junior
 * @since 12/08/2019
 */

@Entity
@Table(name = "usuario")
public class UsuarioEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", nullable = false, unique = true)
	@JsonProperty("id")
	private Long	id;

    @Column(name = "nivel")
	@JsonProperty("nivel")
	private Long nivel;

    @Column(name = "cpf")
	@JsonProperty("cpf")
	private Long cpf;
	
	@Column(name = "nome")
	@JsonProperty("nome")
	private String nome;
	
	@Column(name = "telefone")
	@JsonProperty("telefone")
	private Long telefone;
	
	@Column(name = "endereco")
	@JsonProperty("endereco")
	private String endereco;
	
	@Column(name = "email")
	@JsonProperty("email")
	private String email;

    @Column(name = "senha")
	@JsonProperty("senha")
	private String senha;


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public Long getNivel() {
		return nivel;
	}

	public void setNivel(Long nivel) {
		this.nivel = nivel;
	}

    public Long getCpf() {
		return cpf;
	}

	public void setCpf(Long cpf) {
		this.cpf = cpf;
	}


	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

    public Long getTelefone() {
		return telefone;
	}

	public void setTelefone(Long telefone) {
		this.telefone = telefone;
	}

    public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

    public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

    public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

}