package fnbr.fnbrform.service;

import java.util.List;

import org.springframework.stereotype.Service;

import fnbr.fnbrform.domain.Program;
import fnbr.fnbrform.repository.ProgramRepository;

@Service
public class ProgramService {
    
    ProgramRepository repository;

    public ProgramService(ProgramRepository repository){

        this.repository=repository;

    }

    public List<Program> findAll(){

        return repository.findAll();

    }

    public List<Program> findByArea(long areaId){

        return repository.findByAreaId(areaId);

    }

}
