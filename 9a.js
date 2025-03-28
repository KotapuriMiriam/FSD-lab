<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Functions</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 20px;
        }
        #output {
            margin-top: 20px;
            padding: 10px;
            border: 2px solid #007BFF;
            background-color: #f0f8ff;
            font-size: 18px;
            font-weight: bold;
            display: inline-block;
            color: #007BFF;
            text-align: left;
            padding: 15px;
        }
        button {
            padding: 10px 15px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            background-color: #007BFF;
            color: white;
            border-radius: 5px;
            margin: 5px;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

    <h1>JavaScript Functions</h1>

    <button onclick="findFactorial()">Find Factorial</button>
    <button onclick="generateFibonacci()">Fibonacci Series</button>
    <button onclick="findPrimeNumbers()">Prime Numbers</button>
    <button onclick="checkPalindrome()">Check Palindrome</button>

    <div id="output">Click a button to see the result.</div>

    <script>
        function findFactorial() {
            let num = parseInt(prompt("Enter a number:"));
            let fact = 1;
            for (let i = 1; i <= num; i++) {
                fact *= i;
            }
            document.getElementById("output").innerHTML = `Factorial of ${num} is ${fact}`;
        }

        function generateFibonacci() {
            let num = parseInt(prompt("Enter a number:"));
            let fib = [0, 1];
            for (let i = 2; fib[i - 1] + fib[i - 2] <= num; i++) {
                fib.push(fib[i - 1] + fib[i - 2]);
            }
            document.getElementById("output").innerHTML = `Fibonacci series up to ${num}: ${fib.join(", ")}`;
        }

        function findPrimeNumbers() {
            let num = parseInt(prompt("Enter a number:"));
            let primes = [];
            for (let i = 2; i <= num; i++) {
                let isPrime = true;
                for (let j = 2; j * j <= i; j++) {
                    if (i % j === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) {
                    primes.push(i);
                }
            }
            document.getElementById("output").innerHTML = `Prime numbers up to ${num}: ${primes.join(", ")}`;
        }

        function checkPalindrome() {
            let num = prompt("Enter a number:");
            let reversed = num.split("").reverse().join("");
            let result = (num === reversed) ? `${num} is a Palindrome` : `${num} is NOT a Palindrome`;
            document.getElementById("output").innerHTML = result;
        }
    </script>

</body>
</html>
