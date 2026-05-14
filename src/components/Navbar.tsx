type NavbarProps = {
  companyName: string;
  setCompanyName: (value: string) => void;
};

export default function Navbar({
  companyName,
  setCompanyName,
}: NavbarProps) {
 return (
  <nav className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-b bg-white">

    <input
      type="text"
      value={companyName}
      onChange={(e) => setCompanyName(e.target.value)}
      className="bg-transparent outline-none text-2xl font-bold text-gray-800 text-center sm:text-left"
    />

    <div className="flex flex-wrap items-center justify-center gap-4 text-gray-700 font-medium">
      <span className="cursor-pointer hover:text-black">Home</span>
      <span className="cursor-pointer hover:text-black">About</span>
      <span className="cursor-pointer hover:text-black">Services</span>

      <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
        Profile
      </button>
    </div>
  </nav>
);
}