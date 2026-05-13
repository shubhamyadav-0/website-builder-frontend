type NavbarProps = {
  companyName: string;
  setCompanyName: (value: string) => void;
};

export default function Navbar({
  companyName,
  setCompanyName,
}: NavbarProps) {
  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white rounded-lg">

      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        className="bg-transparent outline-none text-2xl font-bold"
      />

      <div className="flex items-center gap-6">
        <span>Home</span>
        <span>About</span>
        <span>Services</span>

        <button className="bg-white text-black px-3 py-1 rounded">
          Profile
        </button>
      </div>
    </nav>
  );
}