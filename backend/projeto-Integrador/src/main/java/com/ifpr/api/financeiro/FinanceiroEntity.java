package com.ifpr.api.financeiro;

import java.io.Serializable;
import java.util.Date;
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
 * @since 05/12/2021
 */

@Entity
@Table(name = "financeiro")
public class FinanceiroEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", nullable = false, unique = true)
	@JsonProperty("id")
	private Long	id;

    @Column(name = "despesa")
	@JsonProperty("despesa")
	private Double despesa;

    @Column(name = "valor_bruto")
	@JsonProperty("valorBruto")
	private Double valorBruto;
	
    @Column(name = "valor_liquido")
	@JsonProperty("valorLiquido")
	private Double valorLiquido;
	
	@Column(name = "dt")
	@JsonProperty("dt")
	private Date dt;


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public Double getDespesa() {
		return despesa;
	}

	public void setDespesa(Double despesa) {
		this.despesa = despesa;
	}

    public Double getValorBruto() {
		return valorBruto;
	}

	public void setValorBruto(Double valorBruto) {
		this.valorBruto = valorBruto;
	}

    public Double getValorLiquido() {
		return valorLiquido;
	}

	public void setValorLiquido(Double valorLiquido) {
		this.valorLiquido = valorLiquido;
	}


	public Date getDt() {
		return dt;
	}

	public void setDt(Date dt) {
		this.dt = dt;
	}

}