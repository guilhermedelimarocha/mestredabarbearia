package com.ifpr.api.usuario;

import java.util.List;

import org.springframework.beans.factory.anusuariotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import javassist.UsuariotFoundException;

/**
 * @author Ilson Junior
 * @since 12/08/2019
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

	// public UsuarioEntity findTree() {
	// 	return usuarioRepository.findByParentIdIsNull();
	// }

	// public List<UsuarioDTO> findByParentId(Long parentId) {
	// 	return usuarioRepository.findByParentId(parentId);
	// }

	// public void delete(Long id) throws UsuariotFoundException {
	// 	usuarioRepository.findById(id).orElseThrow(() -> new UsuariotFoundException(id + " nao encontrado"));
	// 	usuarioRepository.deleteById(id);
	// }
}
