package com.ifpr.api.usuario;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author Ilson Junior
 * @since 12/08/2019
 */

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioEntity, Long>{
	
    @Transactional(readOnly=true)
	List<UsuarioEntity> findByEmailAndSenha(String email, String senha);

}
