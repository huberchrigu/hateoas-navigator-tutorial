package com.example.hateoas.hateoastutorial;

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
  @NotNull
  private String firstName;
  @NotNull
  private String lastName;
  private Gender gender;

  @ManyToMany
  private Set<Person> knows;
}

enum Gender {MALE, FEMALE}
