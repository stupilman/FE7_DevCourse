export default function PublicImage() {
  return (
    <>
      <h1>App Component</h1>
      <img src="/images/light.jpg" alt="lightning" style={{ width: "100%" }} />
      <div className="bg"></div>
      <div
        style={{
          width: "100%",
          height: "300px",
          background: `url('/images/light.jpg') no-repeat center`,
        }}
      ></div>
    </>
  );
}
