package fnbr.fnbrform.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import fnbr.fnbrform.domain.Program;

public interface ProgramRepository extends JpaRepository<Program, Long> {

    List<Program> findByAreaId(long areaId);
    
}
