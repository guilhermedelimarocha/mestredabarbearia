package com.ifpr.api.agenda;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import javassist.NotFoundException;


/**
 * @author Ilson Junior
 * @since 05/12/2021
 */

@Service
public class AgendaService {

	@Autowired
	private AgendaRepository agendaRepository;

	public Long save(AgendaEntity agendaEntity) {

		agendaEntity = agendaRepository.save(agendaEntity);
		return agendaEntity.getId();

	}

	public List<AgendaEntity> findAll(){
		return agendaRepository.findAll();
	}

	public void delete(Long id) throws NotFoundException {
		agendaRepository.findById(id).orElseThrow(() -> new NotFoundException(id + " nao encontrado"));
		agendaRepository.deleteById(id);
	}

}