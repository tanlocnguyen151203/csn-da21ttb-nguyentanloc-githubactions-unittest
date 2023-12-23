import org.junit.Assert;
import org.junit.Test;

import com.system.Calculator;

public class TestCalculator {

    @Test
    public void testTongThanhCong() {
        Calculator c = new Calculator();
        Assert.assertEquals(300, c.tong(100, 200));
    }

    @Test
    public void testTongThatBai() {
        Calculator c = new Calculator();
        Assert.assertThrows(AssertionError.class,
                () -> {
                    Assert.assertEquals(400, c.tong(100, 200));
                });
        // Assert.assertEquals(400, c.tong(100, 200));
    }

    @Test
    public void testTruThanhCong() {
        Calculator c = new Calculator();
        Assert.assertEquals(100, c.tru(200, 100));
    }

    @Test
    public void testTruThatBai() {
        Calculator c = new Calculator();
        Assert.assertThrows(AssertionError.class,
                () -> {
                    Assert.assertEquals(400, c.tru(200, 100));
                });
    }

    @Test
    public void testTichThanhCong() {
        Calculator c = new Calculator();
        Assert.assertEquals(8, c.tich(2, 4));
    }

    @Test
    public void testTichThatBai() {
        Calculator c = new Calculator();
        Assert.assertThrows(AssertionError.class,
                () -> {
                    Assert.assertEquals(6, c.tich(2, 4));
                });
    }

    @Test
    public void testThuongThanhCong() {
        Calculator c = new Calculator();
        Assert.assertEquals(3, c.thuong(6, 2));
    }

    @Test
    public void testThuongThatBai() {
        int a = 4;
        int b = 0;
        Calculator c = new Calculator();
        Assert.assertThrows(IllegalArgumentException.class,
                () -> {
                    c.thuong(a, b);
                });
        // Assert.assertEquals(4, c.thuong(3, 0));
    }

    @Test
    public void testThuongThatBai2() {
        int a = 4;
        int b = 4;

        Calculator c = new Calculator();
        Assert.assertThrows(AssertionError.class,
                () -> {
                    Assert.assertEquals(5, c.thuong(a, b));
                });
        // Assert.assertEquals(4, c.thuong(3, 0));
    }

    @Ignore
    @Test
    public void testThuongThatBai3() {
        int a = 4;
        int b = 4;
        Calculator c = new Calculator();
        Assert.assertThrows(AssertionError.class,
                () -> {
                    Assert.assertEquals(5, c.thuong(a, b));
                });
        // Assert.assertEquals(4, c.thuong(3, 0));
    }
}
