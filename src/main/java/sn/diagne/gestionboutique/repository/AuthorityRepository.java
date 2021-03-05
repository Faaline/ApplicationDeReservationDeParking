package sn.diagne.gestionboutique.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sn.diagne.gestionboutique.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
