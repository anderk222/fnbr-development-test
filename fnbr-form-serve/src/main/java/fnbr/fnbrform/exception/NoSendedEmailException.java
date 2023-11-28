package fnbr.fnbrform.exception;

public class NoSendedEmailException extends RuntimeException {
    
    public NoSendedEmailException(){

        super("Error al enivar el email");

    }

    public NoSendedEmailException(String message){

        super(message);

    }

}
