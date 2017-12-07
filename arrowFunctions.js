<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Arrow Functions</title>
  </head>
  <body>
    <script>
      function calculateBill(total, tax, tip) {
        return total + (total * tax) + (total + tip);
      }

      const totalBill = calculateBill(100, 0.13, 0.15);
      console.log(totalBill);
    </script>
  </body>
</html>
