

function FullCalculator(a, b, c){
if (a == 1){
    Add(b, c);
}

return (
    <div>
      <h2>Простий калькулятор</h2>
      <input
        type="number"
        placeholder="Введіть перше число"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Введіть друге число"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={handleCalculate}>Обчислити</button>
      <p>Результат: {result}</p>
    </div>
  );
}