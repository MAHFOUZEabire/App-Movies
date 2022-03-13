const SearchBar = () => (
    <form className="d-flex">
      <input
        type="text"
        className="mx-1"
        placeholder="Rechercher..." />
      <select>
        <option value="fr-FR">Français</option>
        <option value="en-US">Anglais</option>
        <option value="de-DE">Allemand</option>
      </select>
      <button
        className="btn btn-small btn-success mx-1"
        type="submit">Go !</button>
    </form>
  );
  
  export default SearchBar;
  