package com.system;

public class Calculator {
    public int tong(int a, int b) {
        return a + b;
    }

    public int tru(int a, int b) {
        return a - b;
    }

    public int tich(int a, int b) {
        return a * b;
    }

    public int thuong(int a, int b) {
        if (b != 0)
            return a / b;
        else
            return b;

    }
}
