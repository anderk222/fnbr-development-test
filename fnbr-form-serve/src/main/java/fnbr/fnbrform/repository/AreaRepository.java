package fnbr.fnbrform.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import fnbr.fnbrform.domain.Area;

public interface AreaRepository extends JpaRepository<Area, Long> {

    List<Area> findByNameContainingIgnoreCase(String name);
}