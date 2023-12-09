const PhepToan = {
    tong: function(a, b) {
        a = parseFloat(a);
        b = parseFloat(b);
        let c = a + b;
        if (isNaN(c)) {
            console.log("Số nhập vào không phải là số");
        }
        return c;
    },
    hieu: function(a, b) {
        let c = a - b;
        return c;
    },
    tich: function(a, b) {
        let c = a * b;
        return c;
    },
    thuong: function(a, b) {
        if (b === 0) {
            return "Không thể chia cho 0";
        } else {
            let c = a / b;
            return c;
        }
    }
};