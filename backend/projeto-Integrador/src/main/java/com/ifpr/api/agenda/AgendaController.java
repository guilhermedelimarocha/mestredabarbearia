package com.ifpr.api.agenda;

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

import javassist.NotFoundException;

/**
 * @author Ilson Junior
 * @since 12/08/2019
 */

@RestController
@RequestMapping(value="/mestreBarbearia")
public class AgendaController {

	@Autowired
	private AgendaService agendaService;

	@PostMapping("/agenda")
    public ResponseEntity<Long> save(@RequestBody AgendaEntity agendaEntity) {
		return ResponseEntity.ok().body(agendaService.save(agendaEntity));
    }

	@PutMapping("/agenda")
    public ResponseEntity<Long> update(@RequestBody AgendaEntity agendaEntity) {
        return ResponseEntity.ok().body(agendaService.save(agendaEntity));
    }

	@GetMapping("/agenda")
    public ResponseEntity<List<AgendaEntity>> findByParentId() {
        return ResponseEntity.ok().body(agendaService.findAll());
    }

	
	@DeleteMapping("/agenda/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") Long id) throws NotFoundException {
		agendaService.delete(id);
        return ResponseEntity.ok("Deleted");
    }

}