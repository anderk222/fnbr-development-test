package fnbr.fnbrform.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import fnbr.fnbrform.domain.State;

public interface StateRepository extends JpaRepository<State, Long> {

    List<State> findByCountryId(Long countryId);

}