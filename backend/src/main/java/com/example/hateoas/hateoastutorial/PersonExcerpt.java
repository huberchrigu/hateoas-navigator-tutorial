package com.example.hateoas.hateoastutorial;

import org.springframework.data.rest.core.config.Projection;

@Projection(types = Person.class)
public interface PersonExcerpt {
  String getFirstName();

  String getLastName();
}
