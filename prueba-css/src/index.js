var arrayTest = [1, 2, 3, 3, 2, 1, 4];

document.getElementById("app").innerHTML = `
   <header>
    <h1>Unique Element Challenge</h1>
    <img src="src/assets/logo.svg" />
  </header>

  <main class="main-container">
    <section>
      <h2>Target</h2>
      <p>Find the unique value in the array that is not duplicated. Use the <b>dubbed</b> function to return the unique element.</p>
      <h2>Considerations</h2>
      <ul>
        <li>Values are duplicated only twice.</li>
        <li>There is only one non-duplicate value.</li>
        <li>The non-duplicate value can be placed anywhere in the array.</li>
        <li>The result must be an integer.</li>
      </ul>
    </section>
    
    <aside>
    <div class="test-data"> 
      <h2>Test Data</h2>
        <div>[1, 2, 3, 3, 2, 1, 4]</div>
    </div>
    
    <div class="container-results">
    <div class="expected-result">
      <h2>Expected Result</h2>
      <div>4</div>
    </div>
    <div class="your-result">	
      <h2>Your Result</h2>
      <div>4</div>
    </div>
    </div>
    </aside>
  </main>
`;
