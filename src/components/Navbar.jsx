export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6">

      <h1 className="text-2xl font-bold">
        Loutron
      </h1>

      <ul className="flex gap-8">

        <li>About</li>

        <li>Projects</li>

        <li>Contact</li>

      </ul>

    </nav>
  );
}