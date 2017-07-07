package ca.six.ndk101.model;

public class Player {
    public int number;
    public String name;

    public Player(int number, String name) {
        this.number = number;
        this.name = name;
    }

    public void changeNumber(int newNumber){
        this.number = newNumber;
    }

    @Override
    public String toString() {
        return "Player{" +
                "number=" + number +
                ", name='" + name + '\'' +
                '}';
    }
}
