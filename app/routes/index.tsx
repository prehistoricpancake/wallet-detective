export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Test</h1>
      <form method="get" action="/search">
  <label>Search <input name="term" type="text" /></label>
  <button type="submit">Search</button>
</form>
      
    </div>
  );
}
