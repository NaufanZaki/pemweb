        const angka1Input = document.getElementById("angka1");
        const angka2Input = document.getElementById("angka2");
        const tambahButton = document.getElementById("tambah");
        const kurangButton = document.getElementById("kurang");
        const kaliButton = document.getElementById("kali");
        const bagiButton = document.getElementById("bagi");

        tambahButton.addEventListener("click", function () {
            ngitung("tambah");
        });

        kurangButton.addEventListener("click", function () {
            ngitung("kurang");
        });

        kaliButton.addEventListener("click", function () {
            ngitung("kali");
        });

        bagiButton.addEventListener("click", function () {
            ngitung("bagi");
        });

        function ngitung(operator) {
            const num1 = parseFloat(angka1Input.value);
            const num2 = parseFloat(angka2Input.value);

            if (isNaN(num1) || isNaN(num2)) {
                alert("Please enter two valid numbers.");
                return;
            }

            let result;
            switch (operator) {
                case "tambah":
                    result = num1 + num2;
                    break;
                case "kurang":
                    result = num1 - num2;
                    break;
                case "kali":
                    result = num1 * num2;
                    break;
                case "bagi":
                    if (num2 === 0) {
                        alert("Cannot divide by zero.");
                        return;
                    }
                    result = num1 / num2;
                    break;
            }
            alert(`Result: ${result}`);
        }
