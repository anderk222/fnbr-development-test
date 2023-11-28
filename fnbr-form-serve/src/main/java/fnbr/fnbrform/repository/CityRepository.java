package fnbr.fnbrform.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import fnbr.fnbrform.domain.City;

public interface CityRepository extends JpaRepository<City, Long> {

    List<City> findByStateId(Long stateId);

}
