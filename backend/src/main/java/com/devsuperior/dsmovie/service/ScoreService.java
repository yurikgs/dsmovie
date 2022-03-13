package com.devsuperior.dsmovie.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.User;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import com.devsuperior.dsmovie.repositories.ScoreRepository;
import com.devsuperior.dsmovie.repositories.UserRepository;

@Service
public class ScoreService {
	
	@Autowired
	private ScoreRepository dbScore;
	@Autowired
	private MovieRepository dbMovie;
	@Autowired
	private UserRepository dbUser;
	
	@Transactional
	public MovieDTO setScore(ScoreDTO dto) {
		
		
		// busca de usuário e filme correspondetes ao score
		
		User user = dbUser.findByEmail(dto.getEmail());
		if(user==null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = dbUser.saveAndFlush(user); //Flush: Garante que o objeto será atualizado ainda nesta linha do código
		}
		

		Movie movie = dbMovie.getById(dto.getMovieId());
		
		//Configuração do novo objeto score
		
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		//persistencia de score
		
		dbScore.saveAndFlush(score);
		
		// configuração da nova média do filme
		
		double soma = 0.0;
		for(Score s : movie.getScores()) {
			soma += s.getValue();
		}
		
		double media = soma/(movie.getScores()
.size());
		
		// salvando nova media e count do filme
		
		movie.setScore(media);
		movie.setCount(movie.getScores().size());
		movie = dbMovie.save(movie);
		
		MovieDTO movieDTO = new MovieDTO(movie);
		
		return movieDTO;
	}

}
