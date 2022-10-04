export default function Child(params) {
  return (
    <div>
      <h1>Child</h1>
      <button onClick={() => params.setValue("Updated from child!")}>
        Update parent value
      </button>
    </div>
  );
}
