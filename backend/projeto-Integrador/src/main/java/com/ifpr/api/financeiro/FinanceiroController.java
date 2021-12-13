package com.ifpr.api.financeiro;

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

/**
 * @author Ilson Junior
 * @since 05/12/2021
 */

@RestController
@RequestMapping(value="/mestreBarbearia")
public class FinanceiroController {

	@Autowired
	private FinanceiroService financeiroService;

	@PostMapping("/financeiro")
    public ResponseEntity<Long> save(@RequestBody FinanceiroEntity financeiroEntity) {
		return ResponseEntity.ok().body(financeiroService.save(financeiroEntity));

    }

	@PutMapping("/financeiro")
    public ResponseEntity<Long> update(@RequestBody FinanceiroEntity financeiroEntity) {
        return ResponseEntity.ok().body(financeiroService.save(financeiroEntity));
    }

	@GetMapping("/financeiro")
    public ResponseEntity<List<FinanceiroEntity>> findByParentId() {
        return ResponseEntity.ok().body(financeiroService.findAll());
    }

}