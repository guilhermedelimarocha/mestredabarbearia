package com.ifpr.api.usuario;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;


/**
 * @author Ilson Junior
 * @since 05/12/2021
 */

@Service
public class UsuarioService {

	private final UsuarioRepository usuarioRepository;

	@Autowired
	public UsuarioService(UsuarioRepository usuarioRepository) {
		this.usuarioRepository = usuarioRepository;
	}

	public Long save(UsuarioEntity usuarioEntity) {

		
		usuarioEntity = usuarioRepository.save(usuarioEntity);

		return usuarioEntity.getId();
	}

	public List<UsuarioEntity> findAll(){
		return usuarioRepository.findAll();
	}

	public List<UsuarioEntity> findByEmailAndSenha(String email, String senha) {
		return usuarioRepository.findByEmailAndSenha(email, senha);
	}

}