export interface Form {
    name:     string;
    lastname: string;
    email:    string;
    phone:    string;
    comments: string;
    address:  Address;
    program:  Program;
    terms:    boolean;
}

interface Address {
    country: string;
    state:   string;
    city:    string;
}

interface Program {
    id:   number;
    name: string;
}

export interface FormSave{
    name:     string;
    lastname: string;
    email:    string;
    phone:    string;
    comments: string;
    address:  Partial<Address>;
    program:  Partial<Program>;
    terms:    boolean;
}