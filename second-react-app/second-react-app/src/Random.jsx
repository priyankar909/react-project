function Random() {
  let random = Math.random() * 10;
  return (
    <h1 style={{ backgroundColor: "blue" }}>
      Random number is :{Math.round(random)}
    </h1>
  );
}
export default Random;
