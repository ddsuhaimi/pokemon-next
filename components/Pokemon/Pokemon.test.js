import { render } from "../../tests/utils";
import PokemonCard from "./PokemonCard";

test("render pokemon card correctly correctly", () => {
  const pokemon = {
    id: 1,
    name: "ilvysaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  };
  const { getByText } = render(<PokemonCard pokemon={pokemon} isOnMyPokemonPage={false} />);

  const displayedImage = document.querySelector("img");
  expect(getByText("Ilvysaur")).toBeInTheDocument();
  expect(displayedImage.src).toContain(pokemon.image);
});

test("render pokemon card correctly correctly on is my pokemon page", () => {
  const pokemon = {
    id: 1,
    name: "ilvysaur",
    nickname: "abc",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  };
  const { getByText } = render(<PokemonCard pokemon={pokemon} isOnMyPokemonPage={true} />);

  const displayedImage = document.querySelector("img");
  expect(getByText("Ilvysaur")).toBeInTheDocument();
  expect(getByText("a.k.a abc")).toBeInTheDocument();
  expect(displayedImage.src).toContain(pokemon.image);
});
