package com.devsuperior.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="tb_score")
public class Score {

	@EmbeddedId
	public ScorePK id = new ScorePK();
	
	
	private Double value;
	
	public Score(){
	}
	
	
	
	//Set da Chave estrangeira
	
	//Setar o movie da ScorePK
	public void setMovie(Movie movie) {
		id.setMovie(movie);
	}
	
	//Setar o user da ScorePK
	public void setUser(User user) {
		id.setUser(user);
	}
	

	//Getters and Setters
	public ScorePK getId() {
		return id;
	}

	public void setId(ScorePK id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

	
	
}
