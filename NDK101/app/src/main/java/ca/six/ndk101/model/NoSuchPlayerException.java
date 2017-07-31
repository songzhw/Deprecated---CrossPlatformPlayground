package ca.six.ndk101.model;

public class NoSuchPlayerException extends Exception {
    public NoSuchPlayerException(String message) {
        super(message);
    }
}