package fnbr.fnbrform.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import fnbr.fnbrform.domain.Country;

public interface CountryRepository extends JpaRepository<Country, Long> {

    List<Country> findByNameContainingIgnoreCase(String countryName);

}