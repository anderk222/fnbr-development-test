package fnbr.fnbrform.dto;


public enum ResponseEnum {
    

        RESPONSE_OK("0001", "REALIZADO CON EXITO", "OK"),
        EMAIL_NOT_SEND("3001","ERROR AL ENVIAR EL CORREO ELECTRONICO", "OCURRIO UN ERROR AL ENVIAR EL CORREO ELECTRONICO"),
        BAD_REQUEST("3002","VALORES INGRESADOS ", "DATOS ENVIADOS NO CUMPLEN CON LAS ESPECIFICACIONES"),
        NOT_FOUND("4001", "NO ENCONTRADO", "EL RECURSO AL QUE DESEA ACCEDER NO EXIXTE"),
        INTERNAL_ERROR("8001", "ERROR", "OCURRIO UN ERROR INESPERADO");
    
        public String codRespuesta;
        public String msgUsuario;
        public String msgTecnico;
    
        ResponseEnum(String codRespuesta, String msgUsuario, String msgTecnico) {
            this.codRespuesta = codRespuesta;
            this.msgUsuario = msgUsuario;
            this.msgTecnico = msgTecnico;
        }
}