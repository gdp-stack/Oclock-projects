function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <img src="./logo.png" alt="oRecipes logo" className="h-10" />
      <div className="flex space-x-2">
        <input
          type="email"
          placeholder="Adresse Email"
          className="border rounded p-2"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="border rounded p-2"
        />
        <button className="bg-blue-700 hover:bg-blue-800 rounded p-2">
          OK
        </button>
      </div>
    </header>
  );
}

export default Header;
