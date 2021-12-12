package com.ifpr.api.financeiro;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;


/**
 * @author Ilson Junior
 * @since 12/08/2019
 */

@Service
public class FinanceiroService {

	private final FinanceiroRepository financeiroRepository;

	@Autowired
	public FinanceiroService(FinanceiroRepository financeiroRepository) {
		this.financeiroRepository = financeiroRepository;
	}

	public Long save(FinanceiroEntity financeiroEntity) {

		
		financeiroEntity = financeiroRepository.save(financeiroEntity);

		return financeiroEntity.getId();
	}

	public List<FinanceiroEntity> findAll(){
		return financeiroRepository.findAll();
	}


}
