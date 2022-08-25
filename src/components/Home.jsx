export function Home() {
  return (
    <div className="h-[calc(100vh-9rem)] w-screen relative overflow-hidden bg-green-500">
      <div className="absolute inset-0 ">
        <img
          src="/images/background.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
