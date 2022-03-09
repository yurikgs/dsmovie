package com.devsuperior.dsmovie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.service.MovieService;

@RestController
@RequestMapping(value = "/movies")
public class MovieController {
	
	@Autowired
	private MovieService movieService;
	
	@GetMapping
	public Page<MovieDTO> getAll(Pageable pageable) {

		return this.movieService.findAll(pageable);
	}
	
	@GetMapping(value = "/{id}")
	public MovieDTO getById(@PathVariable Long id) {
	//O melhor aqui seria usar uma response Entity, mas como esse é um projeto de prática simples estou deixando como um MovieDTO	
		return this.movieService.findById(id);
	}
}
