   function calculateDiscount() {
            const bill = document.getElementById("1").value;
            const discount = document.getElementById("2").value;

            if (isNaN(bill) || isNaN(discount)) {
                document.getElementById("result").innerText = "Please enter valid numbers.";
                return;
            }

            const discountAmount = (bill * discount) / 100;
            const finalAmount = bill - discountAmount;

            document.getElementById("result").innerText = 
                `Discount: ₹${discountAmount.toFixed(2)} | Final Amount: ₹${finalAmount.toFixed(2)}`;
        }