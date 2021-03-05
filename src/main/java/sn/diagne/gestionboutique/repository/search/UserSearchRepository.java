package sn.diagne.gestionboutique.repository.search;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import sn.diagne.gestionboutique.domain.User;

/**
 * Spring Data Elasticsearch repository for the User entity.
 */
public interface UserSearchRepository extends ElasticsearchRepository<User, Long> {}
