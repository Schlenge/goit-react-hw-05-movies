import Styled from '../components/App.module.css';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <h1>React HM-5 Movies</h1>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/trending">Trending</StyledLink>
        <StyledLink to="/search">Search</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Trending />} />
        <Route path="/products" element={<Search />} />
        <Route path="/products" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
