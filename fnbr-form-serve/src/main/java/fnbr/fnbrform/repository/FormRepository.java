package fnbr.fnbrform.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fnbr.fnbrform.domain.Form;

public interface FormRepository extends JpaRepository<Form, Long> { }