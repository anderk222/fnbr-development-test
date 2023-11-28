package fnbr.fnbrform.service;

import java.util.List;

import org.springframework.stereotype.Service;

import fnbr.fnbrform.domain.Area;
import fnbr.fnbrform.repository.AreaRepository;

@Service
public class AreaService {

    AreaRepository repository;

    public AreaService(AreaRepository repository) {

        this.repository = repository;

    }

    public List<Area> findAll() {

        return repository.findAll();
    }

    public List<Area> search(String name){

        return repository.findByNameContainingIgnoreCase(name);

    }

}