export function Footer() {
  return (
    <div className="flex h-16 w-full items-center justify-center p-4 space-x-4 bg-black shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)]">
      <span className="flex text-zinc-100 text-sm">
        Cristian Prieto 2022, Spain.
      </span>
      <a
        href="https://github.com/Cristian-Prieto"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/images/github.png" alt="github logo" className="w-6" />
      </a>
    </div>
  );
}
