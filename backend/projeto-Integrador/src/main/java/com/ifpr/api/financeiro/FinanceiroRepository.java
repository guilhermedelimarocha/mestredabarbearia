package com.ifpr.api.financeiro;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author Ilson Junior
 * @since 05/12/2021
 */

@Repository
public interface FinanceiroRepository extends JpaRepository<FinanceiroEntity, Long>{
	
}