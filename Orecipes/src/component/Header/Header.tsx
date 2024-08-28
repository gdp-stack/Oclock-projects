interface HeaderProps {
  isConnected: boolean;
  pseudo: string | null;
  error: string | null;
  logIn: (emailFromInput: string, passFromInput: string) => Promise<void>;
  logOut: () => void;
}

function Header({ isConnected, error, pseudo, logIn, logOut }: HeaderProps) {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <img src="./logo.png" alt="oRecipes logo" className="h-10" />

      {isConnected ? (
        <div>
          Bonjour {pseudo}
          <button
            type="button"
            className="bg-blue-700 hover:bg-blue-800 rounded p-2"
            onClick={() => {
              logOut();
            }}
          >
            Deconnexion
          </button>
        </div>
      ) : (
        <div className="flex space-x-2">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const emailFromInput = formData.get('email') as string;
              const passwordFromInput = formData.get('password') as string;
              logIn(emailFromInput, passwordFromInput);
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="Adresse Email"
              className="border rounded p-2"
            />
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              className="border rounded p-2"
            />
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 rounded p-2"
            >
              OK
            </button>
          </form>
          {error && <div className="error">{error}</div>}
        </div>
      )}
    </header>
  );
}

export default Header;
