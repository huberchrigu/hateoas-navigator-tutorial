package com.example.hateoas.hateoastutorial;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Person {
  @Id
  @GeneratedValue
  private Long id;

  @JsonProperty(required = true)
  @NotNull
  private String firstName;

  @JsonProperty(required = true)
  @NotNull
  private String lastName;

  private Gender gender;

  private Integer age;

  @ManyToMany
  private Set<Person> knows;
}

enum Gender {MALE, FEMALE}
