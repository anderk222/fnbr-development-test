package fnbr.fnbrform.service;

import java.util.List;

import org.springframework.stereotype.Service;

import fnbr.fnbrform.domain.State;
import fnbr.fnbrform.repository.StateRepository;

@Service
public class StateService {

    StateRepository repository;

    public StateService(StateRepository repository){
        this.repository=repository;
    }

    public List<State> findByCountry(long countryId){

        return  repository.findByCountryId(countryId);

    }

}