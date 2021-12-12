package com.ifpr.api.agenda;

import org.springframework.format.annotation.DateTimeFormat;
import java.io.Serializable;
import java.security.Timestamp;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ifpr.api.usuario.UsuarioEntity;

/**
 * @author Ilson Junior
 * @since 12/08/2019
 */

@Entity
@Table(name = "agenda")
public class AgendaEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", nullable = false, unique = true)
	@JsonProperty("id")
	private Long	id;
	
    @Column(name = "hora_inicial")
	@JsonProperty("horaInicial")
	@DateTimeFormat(pattern = "dd/MM/yyyy HH:mm")
	private Date horaInicial;

    @Column(name = "hora_final")
	@JsonProperty("horaFinal")
	@DateTimeFormat(pattern = "dd/MM/yyyy HH:mm")
	private Date horaFinal;

    @Column(name = "cor")
	@JsonProperty("cor")
	private String cor;

    @Column(name = "servico")
	@JsonProperty("servico")
	private String servico;

    @JoinColumns({@JoinColumn(name = "id_usuario", referencedColumnName = "id")})
    @JsonProperty("idUsuario")
    @OneToOne()
    private UsuarioEntity usuarioEntity;


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public Date getHoraInicial() {
		return horaInicial;
	}

	public void setHoraInicial(Date horaInicial) {
		this.horaInicial = horaInicial;
	}

    public Date getHoraFinal() {
		return horaFinal;
	}

	public void setHoraFinal(Date horaFinal) {
		this.horaFinal = horaFinal;
	}

    public String getCor() {
		return cor;
	}

	public void setCor(String cor) {
		this.cor = cor;
	}

    public String getServico() {
		return servico;
	}

	public void setservico(String servico) {
		this.servico = servico;
	}

    public UsuarioEntity getUsuarioEntity() {
		return usuarioEntity;
	}

	public void setUsuarioEntity(UsuarioEntity usuarioEntity) {
		this.usuarioEntity = usuarioEntity;
	}

}
