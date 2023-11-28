package fnbr.fnbrform.service;

import java.util.List;

import org.springframework.stereotype.Service;

import fnbr.fnbrform.domain.City;
import fnbr.fnbrform.repository.CityRepository;

@Service
public class CityService {

    CityRepository repository;

    public CityService(CityRepository repository){

        this.repository=repository;

    }

    public List<City> findByState(long stateId){

        return repository.findByStateId(stateId);

    }

}