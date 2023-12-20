import org.junit.*;

public class TestCalculator {
    @Test
    public void test() {
        Calculator c = new Calculator();
        Assert.assertEquals("Hello", c.says());
    }

    @Test
    public void testTongThanhCong() {
        Calculator c = new Calculator();
        Assert.assertEquals(300, c.tong(100, 200));
    }

    @Test
    public void testTongThatBai() {
        Calculator c = new Calculator();
        Assert.assertEquals(400, c.tong(100, 200));
    }
}
