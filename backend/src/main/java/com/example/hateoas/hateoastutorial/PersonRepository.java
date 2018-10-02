package com.example.hateoas.hateoastutorial;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = PersonExcerpt.class)
public interface PersonRepository extends JpaRepository<Person, Long> {
}
