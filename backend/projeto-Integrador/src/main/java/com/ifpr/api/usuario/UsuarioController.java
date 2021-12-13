package com.ifpr.api.usuario;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @author Ilson Junior
 * @since 05/12/2021
 */

@RestController
@RequestMapping(value="/mestreBarbearia")
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;

	@PostMapping("/usuario")
    public ResponseEntity<Long> save(@RequestBody UsuarioEntity usuarioEntity) {
		return ResponseEntity.ok().body(usuarioService.save(usuarioEntity));

    }

	@PutMapping("/usuario")
    public ResponseEntity<Long> update(@RequestBody UsuarioEntity usuarioEntity) {
        return ResponseEntity.ok().body(usuarioService.save(usuarioEntity));
    }

	@GetMapping("/usuario")
    public ResponseEntity<List<UsuarioEntity>> findByParentId() {
        return ResponseEntity.ok().body(usuarioService.findAll());
    }

    @GetMapping("/usuarioES")
    public ResponseEntity<List<UsuarioEntity>> findByEmailAndSenha(@RequestParam("email") String email, @RequestParam("senha") String senha) {
        return ResponseEntity.ok().body(usuarioService.findByEmailAndSenha(email, senha));
    }

}